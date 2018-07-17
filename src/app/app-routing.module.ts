import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UsersMapComponent } from './users-map/users-map.component';
import { HomeComponent } from './home/home.component';

// posts /posts
// details /details/:id

// class Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const products: Product = [
//   {
//     id: 0,
//     name: 'iphone',
//     price: 12.99
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'map',
    component: UsersMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
