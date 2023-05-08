# Hackernews with Angular 16

## What

- A single page application for reading hackernews stories, asks and comments.
- Using the open [hacker news api](https://github.com/HackerNews/API)

## Why

- To try the new version 16 of Angular
- To try implementing it in a reactive and declarative patterns using rxjs.
- Since v16 was just released, try to develop it in the best manner without relying on rc versions of ngrx and so on.
- To pratice rxjs more.
- To practice on standalone application (and components)

## "Sale pitch"

- Reactive patterns with RxJs
- Tailwindcss styling, no ux libraries
- Using firebase js sdk for syncing data from the apis.(websockets underlaying)

Demo: <https://begj.github.io/Hackernews/>

## Local development

To install dependencies

- `npm i -g pnpm`
- `pnpm i`

To run the project

- `pnpm run ng serve` (or `ng serve` if you have latest `@angular/cli` globally installed with npm)

To test it with lighthouse or just in a docker use

- `docker build .` or `docker compose up --build`

To deploy it to github pages use

- `ng deploy` or `pnpm run deploy`

### Roadmap - draft

- [x] Save posts in your local browser/device
- [ ] Make it usable on mobiles
- [ ] Dark/light mode
- [ ] Improve comment visualization
- [ ] Improve roadmap :p

### Changelog

[changelog.md](./changelog.md)
