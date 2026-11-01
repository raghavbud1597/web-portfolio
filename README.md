# Raghav Budhiraja — Portfolio

A responsive React portfolio with an animated professional avatar, selected projects, experience, and accessible motion controls.

## Development

Use Node.js 20.19+ or 22.13+.

```sh
npm install
npm run dev
```

## Verification

```sh
npm run lint
npm run build
npm run preview
```

The Vite base is `/web-portfolio/` for GitHub Pages. `npm run deploy` builds and publishes the `dist` directory with gh-pages.

## Structure

- `src/sections`: page sections
- `src/components`: reusable UI, project cards, avatar, and reveal components
- `src/hooks`: media queries, motion preference, and section navigation
- `src/context`: shared motion controls
- `src/data/portfolio.js`: profile, projects, capabilities, experience, and education
- `src/index.css`: theme, layout, responsive styles, and motion
- `src/assets/avatar.png`: professional cartoon avatar
- `src/assets/projects`: local screenshots of the pinned GitHub projects

Animation uses native CSS and browser observers. The Motion control persists for the browser session. System reduced-motion preferences take priority.

Project cards reflect the six pinned repositories on [raghavbud1597’s GitHub profile](https://github.com/raghavbud1597), checked November 1, 2026. Images and titles open the live site when `liveUrl` is present, otherwise the GitHub repository. Every card includes a GitHub link; deployed projects also include a separate Live site link. To update a deployment, edit `liveUrl` in `src/data/portfolio.js`.

Neumorphism Generator and YouTube Clone screenshots come from their repositories’ `docs/screenshots` directories. HooBank, Wordle, and Tic Tac Toe screenshots were captured from their live deployments; the portfolio screenshot was captured from the local site. Images are stored locally so cards do not depend on GitHub image URLs. YouTube Clone currently has no published deployment listed, so its card opens GitHub.
