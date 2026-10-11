# Multi-Page Sites

Hugo Profile is a **single-page portfolio** (the homepage holds Hero, About, Experience, … Contact) combined with **extra pages** that you add as normal Hugo content. This page explains how the pages fit together and how to add your own.

## Page types at a glance

| URL | Source | Layout used | Notes |
| --- | --- | --- | --- |
| `/` | `layouts/index.html` | Homepage sections | Configured in `hugo.yaml`, no content file needed. |
| `/blogs/` | `content/blogs/_index.md` | `_default/list.html` | Paginated card list. |
| `/blogs/<post>/` | `content/blogs/<post>.md` | `_default/single.html` | Post with TOC, tags, share, comments. |
| `/gallery/` | `content/gallery.md` with `layout: "gallery"` | `_default/gallery.html` | See [Gallery](Gallery). |
| `/projects/` | `content/projects/_index.md` | `projects/list.html` | See [Project Pages](Project-Pages). |
| `/about/` (example) | `content/about.md` with `layout: "about"` | `_default/about.html` | Standalone profile page. |
| `/tags/<tag>/` | Generated from front-matter `tags` | `_default/list.html` | Automatic. |
| `/404.html` | `layouts/404.html` | – | Automatic. |

Pages that live in `content/` use Hugo's normal [template lookup](https://gohugo.io/templates/lookup-order/): a front-matter `layout:` wins, then the section/type-specific template, then `_default/`.

## Adding a new page

### 1. A simple standalone page (e.g. "Uses", "Talks")

```bash
hugo new content content/uses.md
```

```yaml
---
title: "Uses"
draft: false
description: "Tools I use every day"
toc: true
---

Markdown content…
```

It renders with `_default/single.html` at `/uses/` (title, date, optional TOC, tags, share buttons). Notes:

- The single layout shows the **date** and **reading time**; set `singlePages.readTime.enable: false` only if you also override the template (see [Blog and Content](Blog-and-Content)).
- Drafts (`draft: true`) are skipped in production builds.

### 2. A standalone "About" page

```yaml
---
title: "About"
layout: "about"
description: "More about me"
image: /images/me.png        # optional sidebar picture
name: "Your Name"            # shown under the picture
socialLinks:
  fontAwesomeIcons:
    - icon: fab fa-github
      url: https://github.com/you
  customIcons:
    - icon: /fav.png
      url: https://example.com
---

Markdown content in the main column.
```

### 3. A new section with a list page (e.g. "Talks")

```text
content/talks/
├── _index.md        # title: "Talks"  → /talks/ (uses _default/list.html)
├── first-talk.md    # → /talks/first-talk/ (uses _default/single.html)
└── second-talk.md
```

`_index.md`:

```yaml
---
title: "Talks"
---
```

The list layout is the same card grid as the blog (image, title, date, summary, **Read** button, pagination controlled by `pagination.pagerSize`). To give a section its own look, copy a layout to `layouts/<section>/list.html` in your site, the way the theme does for `layouts/projects/list.html`.

### 4. Link the page in the navbar

Pages don't appear in the navbar automatically. Add them to the menu:

```yaml
menus:                       # or languages.<lang>.menu for multilingual sites
  main:
    - identifier: talks
      name: Talks
      title: Conference talks
      url: /talks
      weight: 3
```

Items are sorted by `weight`; the built-in section links (About, Experience, …) always come first, custom items follow. Use `parent:` for dropdowns – see [Navigation and Search](Navigation-and-Search).

You can also link from the footer or hero by using the page URL in `socialLinks`, `hero.button.url` or Markdown links.

## Navigating between the homepage and other pages

The built-in navbar links use the homepage address plus an anchor (`/#about`, `/#experience`, …). On any inner page they therefore take the visitor back to the right section of the homepage. The brand logo/name links to the homepage. Search (`/index.json`) covers **all** regular pages, so new pages are searchable automatically.

If you don't want the one-page sections at all, disable them (`enable: false` on each section and/or `navbar.menus.disable*: true`) and build the site purely from content pages and custom menu items.

## Multiple languages = multiple page trees

With several languages each language has its own page tree (`content/`, `content/es/`, `content/fr/`). Give a translated page the same relative path to link translations; the language switcher then jumps between them. Details: [Internationalization](Internationalization).

## Quick reference: front matter that selects behaviour

| Key | Effect |
| --- | --- |
| `layout: "gallery"` | Image gallery layout. |
| `layout: "about"` | Standalone about layout. |
| `type: "projects"` (or folder `content/projects/`) | Project cards on `/projects/` and the homepage. |
| `showInHome: false` | Hide a project page from the homepage Projects section. |
| `toc: true/false`, `socialShare`, `enableReadingTime`, `enableScrollProgress`, `mathjax` | Per-page single-layout options. |
