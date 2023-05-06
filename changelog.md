# Changelog

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