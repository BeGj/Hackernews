import { Routes } from '@angular/router';

export const storyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: 'top',
    loadComponent: () =>
      import('./list-stories/list-stories.component').then(
        (mod) => mod.ListStoriesComponent
      ),
    title: 'Top stories',
    data: {
      storiesPageType: 'top-stories',
    },
  },
  {
    path: 'saved',
    loadComponent: () =>
      import('./list-stories/list-stories.component').then(
        (mod) => mod.ListStoriesComponent
      ),
    title: 'Saved stories',
    data: {
      storiesPageType: 'saved-stories',
    },
  },
  {
    path: ':storyId',
    loadComponent: () =>
      import('./view-story/view-story.component').then(
        (mod) => mod.ViewStoryComponent
      ),
    title: 'Story details',
  },
];
