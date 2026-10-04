# Project Pages

Besides the YAML-defined cards in `params.projects.items` (see [Homepage Sections](Homepage-Sections#projects)), you can write full project pages in Markdown.

## Create a project

```bash
hugo new content content/projects/my-project.md
```

Because the folder is `projects`, Hugo uses the content type `projects` and the theme's `layouts/projects/list.html` for `/projects/`.

```yaml
---
title: "My Project"
image: /images/projects/my-project.png
badges:
  - "Hugo"
  - "Bootstrap"
links:
  - icon: fab fa-github
    url: https://github.com/you/my-project
showInHome: true        # default true; false hides the card on the homepage
---

Markdown body of the project page. The first ~100 characters of the summary appear on the card.
```

## Where projects appear

| Place | Content |
| --- | --- |
| Homepage Projects section (when `params.projects.enable: true`) | Cards from `params.projects.items` **plus** cards for every page of type `projects` where `showInHome` isn't `false`. |
| `/projects/` list page | Card grid of all project pages: image, badges, truncated title, summary, link icons and a "Know more" button. |
| `/projects/<slug>/` | Rendered with the regular single-page layout. |

Project cards need an `image`; `badges` and `links` are optional.
