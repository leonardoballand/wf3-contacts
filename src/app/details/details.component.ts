import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { User } from '../User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.user = params.id);
  }

  ngOnInit() {
    this.data.getUserById(this.user).subscribe((data: User) => this.user = data);
  }

}
