# Changelog

## 6 June 23

### Features

- Subcomments now visible :D
- Hide/Show comments and subcomments (Toggle by clicking on left colored bar)
- Save stories. (Persisted in localstorage)
- App header now contains relevant links
  - saved stories
  - top stories
  - github repo link

### Bug fixes

- Removed mobile menu. Might need to add it back tho.

### Developer enhancements

- Reduces deployment complexity
  - `ng deploy` to deploy to github pages
  - Enabled by adding github pages configuration in angular.json
  - `npm run deploy` to deploy AND open page in chrome (tested on wsl ubuntu)
- Open github repo in ur browser by using `npm run open-repo`

### Known caveats

- Saved stories is not transfered between different browsers and devices.
- When expanding previous closed comments, the comments are fetched from api again.
- App header is not suitable for mobile devices. But it is "suitable"
- Comments with deep subcomment hierarchy will break the screen width css.
- Not yet implemented the listing of a users submitted stories on their user page.
