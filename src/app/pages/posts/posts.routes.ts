import { Routes } from '@angular/router';

export const postsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: 'top',
    loadComponent: () =>
      import('./list-posts/list-posts.component').then(
        (mod) => mod.ListPostsComponent
      ),
    title: 'Top posts',
    data: {
      postsPageType: 'top-posts',
    },
  },
  {
    path: 'saved',
    loadComponent: () =>
      import('./list-posts/list-posts.component').then(
        (mod) => mod.ListPostsComponent
      ),
    title: 'Saved posts',
    data: {
      postsPageType: 'saved-posts',
    },
  },
  {
    path: ':postId',
    loadComponent: () =>
      import('./view-post/view-post.component').then(
        (mod) => mod.ViewPostComponent
      ),
    title: 'Post details',
  },
];
