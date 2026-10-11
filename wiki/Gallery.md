# Gallery

A gallery page shows a responsive grid of images and, optionally, a lightbox powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs) (bundled in `static/viewer`).

## Create the page

`content/gallery.md`:

```yaml
---
title: "Image Gallery"
date: 2022-06-25T18:35:46+05:30
draft: false
description: "My gallery :earth_asia:"
layout: "gallery"
galleryImages:
  - src: /images/gallery/one.jpg
  - src: https://example.com/two.jpg
viewer: true
viewerOptions: {
  title: false
  # more options: https://github.com/fengyuanchen/viewerjs#options
}
---
```

Add it to the navbar:

```yaml
menus:
  main:
    - identifier: gallery
      name: Gallery
      title: Image gallery
      url: /gallery
      weight: 2
```

## Front matter

| Key | Description |
| --- | --- |
| `layout: "gallery"` | **Required** – selects `layouts/_default/gallery.html`. |
| `description` | Shown centred above the grid (emoji shortcodes work). |
| `galleryImages[].src` | Image path (from `static/`) or absolute URL. |
| `viewer` | `true` (default) enables the click-to-zoom lightbox; `false` is intended to disable it (see the note in [Blog and Content](Blog-and-Content)). |
| `viewerOptions` | Passed to Viewer.js (toolbar, title, navbar, …). |

Translations: create `content/<lang>/gallery.md` per language (see [Internationalization](Internationalization)).
