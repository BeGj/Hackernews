# Changelog

## 8. June 23

### Enhancements

- Post story view page is now fetched via firebase, and is also updated in "realtime" with websockets/firebase js sdk.

## 7. June 23

### Bugfixes

- When 0 posts, will show 0 instead of hiding component
  - Fixed by using ngrxPush pipe instead of async pipe.
- When 0 posts, will show empty instead of loading

### Contributions

- Contributed to Angular router documentation
  - How to apply preloading strategies to standalone applications
  - <https://github.com/angular/angular/pull/50193>

### DevOps

- Created docker configurations (not used for github pages deployment, only local dev at the moment)

### Enhancements

- Optimized application through use of Chromes Lighthouse
- Added PreloadAll strategy, preloads all standalone components in background before visiting them.
- Put logo in assets instead of loading from the original website

### Features

- Scroll to bottom to find a button to load more posts.. :)
- When posts are updated in any way (title, score, new/deleted comments) the stories list will automatically get the updated via websockets to firebase.
  - When posts change position in the list, they will automatically be updated through websockets (firebase)

### Developer

- Renamed `top-stories` to `list-stories`, and moved all story components into `pages/stories`
- Routes for story components refactored into `pages/stories/stories.routes.ts`

- Renamed ui and component mentions of stories to posts, since it is not only stories, but also "asks"
  - HnStory or HnAsk = HnPost

## 6 June 23

### Features

- Sub comments now visible :D
- Hide/Show comments and sub comments (Toggle by clicking on left colored bar)
- Save stories. (Persisted in localstorage)
- App header now contains relevant links
  - saved stories
  - top stories
  - github repo link
- Index next to stories on the stories page.
- Visited links will now be grayed out.
  - Making it easier to see new content

### Bug fixes

- Removed mobile menu. Might need to add it back tho.

### Developer enhancements

- Reduces deployment complexity
  - `ng deploy` to deploy to github pages
  - Enabled by adding github pages configuration in angular.json
  - `npm run deploy` to deploy AND open page in chrome (tested on wsl ubuntu)
- Open github repo in ur browser by using `npm run open-repo`

### Known caveats

- Saved stories is not transferred between different browsers and devices.
- When expanding previous closed comments, the comments are fetched from api again.
- App header is not suitable for mobile devices. But it is "suitable"
- Comments with deep sub comment hierarchy will break the screen width css.
- Not yet implemented the listing of a users submitted stories on their user page.
- BUG: Saved stories stops when trying to remove last saved story, or when opening the pages with 0 stories saved.
