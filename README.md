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
- `src/components`: reusable UI, project artwork, avatar, and reveal components
- `src/hooks`: media queries, motion preference, and section navigation
- `src/context`: shared motion controls
- `src/data/portfolio.js`: profile, projects, capabilities, experience, and education
- `src/index.css`: theme, layout, responsive styles, and motion
- `src/assets/avatar.png`: professional cartoon avatar

Animation uses native CSS and browser observers. The Motion control persists for the browser session. System reduced-motion preferences take priority. Project card artwork is illustrative and links to the actual repositories.
