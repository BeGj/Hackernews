import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stories/top',
    pathMatch: 'full',
  },
  {
    path: 'stories',
    redirectTo: 'stories/top',
    pathMatch: 'full',
  },
  {
    path: 'stories/top',
    loadComponent: () =>
      import('./pages/top-stories/top-stories.component').then(
        (mod) => mod.TopStoriesComponent
      ),
    title: 'Top stories',
    data: {
      storiesPageType: 'top-stories',
    },
  },
  {
    path: 'stories/saved',
    loadComponent: () =>
      import('./pages/top-stories/top-stories.component').then(
        (mod) => mod.TopStoriesComponent
      ),
    title: 'Saved stories',
    data: {
      storiesPageType: 'saved-stories',
    },
  },
  {
    path: 'stories/:storyId',
    loadComponent: () =>
      import('./pages/story-view/story-view.component').then(
        (mod) => mod.StoryViewComponent
      ),
    title: 'Story details',
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
