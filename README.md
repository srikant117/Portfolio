<h1 align="center">Srikant Kharat — Portfolio</h1>

<p align="center">
  Automotive Software Engineer · ECU diagnostics, reprogramming and diagnostic tool development
  <br>
  <a href="https://srikant117.github.io/Portfolio/"><strong>View the live site →</strong></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/srikant-kharat">LinkedIn</a> ·
  <a href="https://github.com/srikant117">GitHub</a> ·
  <a href="mailto:kharatsrikant@gmail.com">kharatsrikant@gmail.com</a>
</p>

---

## About

A single-page portfolio covering my work at Tata Consultancy Services on
after-sales vehicle diagnostics and multi-vehicle ECU reprogramming, built
around CAN, UDS and DoIP.

Built with plain HTML, CSS and JavaScript — **no framework, no build step, no
dependencies**. Clone it and open `index.html`; that is the whole workflow.

## Stack

| | |
|---|---|
| **Markup** | Semantic HTML with an inline SVG icon sprite — one request, no icon font |
| **Styling** | CSS custom properties; light and dark themes share a single layout |
| **Behaviour** | ~90 lines of vanilla JS. No jQuery, no React, no bundler |
| **Fonts** | Inter and Caveat via Google Fonts |
| **Total weight** | ~460 KB, most of it the hero artwork |

## Features

- **Light and dark themes** — follows the visitor's OS setting on first load,
  remembers their choice in `localStorage` afterwards, and applies the theme
  before first paint so there is no flash of the wrong colours.
- **Nothing goes stale** — years of experience and the copyright year are both
  computed at runtime from a single start date in `script.js`.
- **Motion that asks permission** — scroll reveals, the vehicle counter and the
  hero's CAN/UDS/DoIP leader lines all switch off under
  `prefers-reduced-motion`.
- **Graceful degradation** — images that have not been added yet collapse to a
  labelled placeholder instead of a broken-image icon.
- **Accessible by default** — keyboard-navigable, focus-visible states on every
  interactive element, and tooltips that appear on focus as well as hover.

## Layout

```
index.html     markup + SVG icon sprite
style.css      design tokens, both themes, responsive rules
script.js      theme toggle, scroll-spy, reveals, counter
assets/
  car-dark.png   hero artwork, dark theme
  car-light.png  hero artwork, light theme
  resume.pdf     linked from the hero and the contact rail
  me.jpg         portrait in the About section
```

## Running locally

```bash
git clone https://github.com/srikant117/Portfolio.git
cd Portfolio
```

Then either open `index.html` directly, or serve it:

```bash
python -m http.server 8765    # http://127.0.0.1:8765
```

A server is only needed if you want `localStorage` to persist the theme —
Chrome restricts storage on `file://`.

## Editing the content

Everything lives in `index.html` as plain markup. The pieces most likely to
change:

| What | Where |
|---|---|
| Start date behind "4+ years" | `CAREER_START` in `script.js` |
| Skills | the five `.skill-grid` blocks |
| Experience | the `<ol class="timeline">` entries |
| Colours | the `:root` and `[data-theme="dark"]` blocks in `style.css` |

## Deploying

GitHub Pages, from `main` at the repository root. Every push to `main`
redeploys. All paths are relative, so the site works equally well from a
subpath, a custom domain, or the local filesystem.

## Credits

Icons inlined from [Lucide](https://lucide.dev) (MIT); brand marks follow
[Simple Icons](https://simpleicons.org) (CC0). Hero artwork generated with
Gemini, then keyed to transparency and recoloured per theme.

## Licence

Code is free to reuse. The content, artwork and résumé are mine — please do not
republish them as your own.
