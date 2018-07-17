import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => this.posts = data);
  }

  // Dans data.service.ts
  // Rajouter une méthode dans le service pour récupérer la liste des articles
  // (remplacer dans l'url "users" par "posts") X

  // Dans ce fichier 'posts.component.ts'
  // Il faut importer le service X
  // Créer une variable posts qui contiendra par la suite le tableau des articles X
  // Ajouter le paramètre data dans constructor() comme dans users X
  // dans le ngOnInit() récupérer "data" qui est le tableau d'articles en appelant X
  // votre fonction getPosts() du service X
  // et affecter à votre variable "posts" le tableau récupéré X

  // Dans posts.component.html
  // Utiliser le template de "users.component.ts" et le modifier pour afficher
  // le titre "title" et le contenu "body"
  // URL API POSTS ====> https://jsonplaceholder.typicode.com/posts
}
