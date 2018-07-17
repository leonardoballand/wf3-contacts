import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

/** Interface de l'objet user */
class User {
  id: number;
  name: string;
  email: string;
  website: string;
  phone: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)', }),
            stagger(
              '50ms',
              animate(
                '450ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)', })
              ),
            ),
          ],
          { optional: true, },
        ),
        query(
          ':leave',
          animate(
            '50ms',
            style({ opacity: 0, }),
          ),
          { optional: true, },
        )
      ])
    ])
  ],
})
export class UsersComponent implements OnInit {
  users: User;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe((data: User) => this.users = data);

    // version ES5
    // this.data.getUsers().subscribe(function(data: User) {
    //   this.users = data;
    // });
  }

}
