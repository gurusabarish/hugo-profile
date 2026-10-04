# Advanced Customization

## Custom CSS

1. Create `static/style.css` in **your site** (not in the theme).
2. Enable it:

   ```yaml
   params:
     customCSS: true
   ```

The stylesheet is linked after the theme CSS, so your rules win. The theme uses CSS variables (`--primary-color`, `--background-color`, …) – see [Color Customization](Color-Customization). Dark mode rules are scoped under `.dark`.

## Custom scripts

Anything under `params.customScripts` is injected (unescaped) before `</body>`:

```yaml
params:
  customScripts: |-
    <script>console.log("hello");</script>
```

This is the place for third-party widgets or trackers.

## Extra `<head>` content

Create `layouts/partials/head/extensions.html` in your site. It is an empty hook in the theme (`layouts/partials/head/extensions.html`) that is included inside `<head>`, which lets you add `<meta>` tags, fonts or stylesheets without copying other theme files.

## Overriding templates

Hugo looks in your site's `layouts/` before the theme's. Copy any theme file to the same path in your site and edit it.

| To change | Copy and edit |
| --- | --- |
| Homepage section order | `layouts/index.html` |
| Navbar | `layouts/partials/sections/header.html` |
| Footer | `layouts/partials/sections/footer/*.html` |
| Blog list cards | `layouts/_default/list.html` |
| Blog post | `layouts/_default/single.html` |
| About page layout | `layouts/_default/about.html` |
| Gallery | `layouts/_default/gallery.html` |
| Projects list | `layouts/projects/list.html` |
| 404 | `layouts/404.html` |
| Search index fields | `layouts/_default/index.json` |
| Individual homepage section | `layouts/partials/sections/<name>.html` |

### Standalone "About" page

`layouts/_default/about.html` renders a page with a sticky profile sidebar. Use it with:

```yaml
---
title: "About"
layout: "about"
image: /images/me.png
name: "Your Name"
---
```

## Serving theme assets from another path

`params.staticPath` prefixes every theme asset URL (`css/`, `js/`, `bootstrap-5/`, `fontawesome-6/`, `viewer/`, `404.png`). Use it when theme `static/` files are hosted under a sub-folder or CDN.

## Static assets in the theme

| Folder | Contents |
| --- | --- |
| `static/css` | One stylesheet per area: `index`, `about`, `list`, `single`, `projects`, `gallery`, `header`, `footer`, `theme`, `font`, `language-switcher` |
| `static/js` | `search.js`, `contact.js`, `readingTime.js`, `scrollProgressBar.js` |
| `static/bootstrap-5`, `static/fontawesome-6` | Bundled frameworks/icons |
| `static/viewer` | Viewer.js for the gallery |
| `static/404.png`, `static/fav.png` | Default images |

## Menu icons and Font Awesome

Icon fields (`icon: fab fa-github`) accept any class from the bundled Font Awesome 6 free set (`fab`, `fas`, `far`, `fa-brands`, `fa-solid`). Image icons (`customIcons`) are plain files in `static/`.
