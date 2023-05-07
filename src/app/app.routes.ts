import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stories',
    pathMatch: 'full',
  },
  {
    path: 'stories',
    loadChildren: () =>
      import('./pages/stories/stories.routes').then((mod) => mod.storyRoutes),
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
