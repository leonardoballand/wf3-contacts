import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

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
  styleUrls: ['./users.component.scss']
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
