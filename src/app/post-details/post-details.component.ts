import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

class Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.post = params.id);
  }

  ngOnInit() {
    this.data
      .getPostById(this.post)
      .subscribe((post: Post) => {
        // ***** data (id, userId, title, body) ***** //
        // on utilise le userId pour faire une deuxième requête
        // pour récupérer les informations de l'utilisateur
        this.data
          .getUserById(post.userId)
          .subscribe(user => {
            // ES5 this.post = Object.assign({}, post, user);

            this.post = {
              ...post,
              user: user,
            };

            console.log('article avec utilisateur', this.post);

          });
      });
  }

}
