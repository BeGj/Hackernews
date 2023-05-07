import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.routes').then((mod) => mod.postsRoutes),
  },
  {
    path: 'user/:userId',
    loadComponent: () =>
      import('./pages/user-view/user-view.component').then(
        (mod) => mod.UserViewComponent
      ),
    title: 'User details',
  },
];
