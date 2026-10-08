# Srikant Kharat — Portfolio

Personal portfolio site. Automotive Software Engineer working on ECU diagnostics,
reprogramming and diagnostic tool development.

**Live:** https://srikant117.github.io

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies —
open `index.html` in a browser and it runs.

```
index.html    markup + inline SVG icon sprite
style.css     light and dark themes, both driven by CSS custom properties
script.js     theme toggle, scroll-spy nav, scroll reveal, counter
assets/       hero artwork, résumé, certificates, screenshots
```

## Features

- Light / dark themes with a toggle; follows the OS setting on first visit and
  remembers the choice afterwards
- Years of experience and the copyright year are calculated at runtime, so they
  never go stale
- Scroll-triggered reveals and a count-up, all disabled under
  `prefers-reduced-motion`
- Missing images degrade to a placeholder instead of a broken-image icon
- Icons are inlined from [Lucide](https://lucide.dev) (MIT); brand marks follow
  [Simple Icons](https://simpleicons.org) (CC0)

## Running locally

Double-click `index.html`, or serve it:

```bash
python -m http.server 8765
```

## Deploying

Pushing to `main` publishes automatically via GitHub Pages.
