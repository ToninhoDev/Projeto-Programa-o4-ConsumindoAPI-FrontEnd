import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];
