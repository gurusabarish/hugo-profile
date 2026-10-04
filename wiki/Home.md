# Hugo Profile Wiki

Welcome to the end-to-end documentation for **Hugo Profile**, a high-performance, mobile-first [Hugo](https://gohugo.io) theme for personal portfolios and blogs.

- Live demo: <https://hugo-profile.netlify.app>
- Source: <https://github.com/gurusabarish/hugo-profile>

> These pages live in the [`wiki/`](https://github.com/gurusabarish/hugo-profile/tree/master/wiki) folder of the repository so they are versioned with the theme. Every file is named like a GitHub Wiki page, so the folder can be copied as-is into the repository's `.wiki.git` to publish it on the GitHub Wiki tab.

## Feature overview

| Area | What you get | Page |
| --- | --- | --- |
| Homepage | Hero, About, Experience, Education, Projects, Achievements and Contact sections, each individually switchable | [Homepage Sections](Homepage-Sections) |
| Navigation | Sticky navbar, brand logo/name, custom and dropdown menus, built-in search | [Navigation and Search](Navigation-and-Search) |
| Blog | Lists, single posts, table of contents, tags, reading time, scroll progress, social sharing, comments | [Blog and Content](Blog-and-Content) |
| Gallery | Image gallery with lightbox viewer | [Gallery](Gallery) |
| Projects | Optional project pages that also appear on the homepage | [Project Pages](Project-Pages) |
| Look and feel | Light / dark / auto theme, colour variables, fonts, animations | [Color Customization](Color-Customization) |
| Multilingual | English, Spanish and French built in; add your own | [Internationalization](Internationalization) |
| Footer | Recent posts, social links, copyright | [Footer](Footer) |
| Integrations | Google Analytics, Disqus, Formspree, MathJax, Cloudinary, Bootstrap CDN | [Integrations](Integrations) |
| Extending | Custom CSS, custom scripts, layout overrides, shortcodes | [Advanced Customization](Advanced-Customization) |
| Ship it | Netlify, GitHub Pages, any static host | [Deployment](Deployment) |

## Recommended reading order

1. [Installation](Installation) – get a site running.
2. [Configuration Reference](Configuration-Reference) – every `hugo.yaml` option in one place.
3. [Homepage Sections](Homepage-Sections) and [Blog and Content](Blog-and-Content) – fill in your content.
4. [Color Customization](Color-Customization) and [Advanced Customization](Advanced-Customization) – make it yours.
5. [Deployment](Deployment) – publish.

Stuck? See [Troubleshooting](Troubleshooting) or [open an issue](https://github.com/gurusabarish/hugo-profile/issues).

## Repository layout

```text
hugo-profile/
├── archetypes/default.md     # Template used by `hugo new content`
├── exampleSite/              # Complete demo site (hugo.yaml, content, static assets)
├── i18n/                     # Built-in translations: en.toml, es.toml, fr.toml
├── layouts/
│   ├── index.html            # Homepage (assembles the section partials)
│   ├── 404.html              # "Page not found" page
│   ├── _default/             # baseof, list, single, about, gallery, index.json (search index)
│   ├── projects/list.html    # List layout for the `projects` content type
│   ├── partials/             # head, scripts, head/extensions and sections/*
│   └── shortcodes/           # dynamic-img (Cloudinary)
├── static/                   # Theme CSS, JS, Bootstrap 5, Font Awesome 6, viewer.js, 404 image
├── netlify.toml              # Netlify build for the demo site
└── theme.toml                # Hugo theme metadata
```
