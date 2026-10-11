# Blog and Content

## Directory structure

```text
content/
├── blogs/
│   ├── _index.md          # title of the blog list page
│   └── my-post.md
├── gallery.md             # see Gallery page
├── projects/              # optional, see Project Pages
├── es/ …                  # per-language content, see Internationalization
```

The blog URL is `/blogs/`. The menu item `url: /blogs` and `footer.recentPosts.path: "blogs"` point at it; if you use a different section name (e.g. `posts`), update both.

## Creating a post

```bash
hugo new content content/blogs/my-post.md
```

This uses `archetypes/default.md`:

```yaml
---
title: "My Post"
date: 2025-01-01T10:00:00+00:00
draft: true
author:
tags:
image:
description:
toc:
---
```

Set `draft: false` (or run `hugo server -D`) to publish.

## Front matter reference

| Key | Used by | Description |
| --- | --- | --- |
| `title` | list, single, search | Post title. |
| `date` | list, single, footer | Publication date (formatted per language). |
| `draft` | Hugo | `true` hides the post from production builds. |
| `author` | single | Shown before the date. |
| `tags` | single | Rendered as links in the sidebar and used for tag pages (`/tags/<tag>/`). |
| `image` | list, single, footer, search | Featured image (path under `static/` or URL). |
| `description` | `<meta>`, search, LinkedIn share text | Short summary. |
| `toc` | single | Table of contents sidebar; shown by default (see note). |
| `socialShare` | single | Per-post override for share buttons. |
| `enableReadingTime` | single | Show reading time even if disabled globally. |
| `enableScrollProgress` | single | Show scroll bar even if disabled globally. |
| `mathjax` | scripts | `true` loads MathJax for this page only. |
| `github_link` | – | Example posts include it; not used by the layouts. |

> **Note on booleans:** several templates use `… | default true`, and Hugo treats `false` as "unset", so writing `false` in these options may not turn the feature off. If a switch does not work, remove the corresponding partial/section via a [layout override](Advanced-Customization#overriding-templates).

## List page (blog index)

`layouts/_default/list.html` renders cards (image, title, date, summary, **Read** button) with pagination (`pagination.pagerSize`). Hide card images with:

```yaml
params:
  listPages:
    disableFeaturedImage: true
```

The label "Read" comes from `params.terms.read` or the `read` i18n key.

## Single page features

- **Header**: title, author, date, reading time (`~225 words/minute`, computed client-side by `static/js/readingTime.js`).
- **Featured image** from `image`.
- **Table of contents** (`.TableOfContents`) in a sticky sidebar.
- **Tags** – links open in a new tab when `singlePages.tags.openInNewTab` is true.
- **Social share** – LinkedIn, Twitter/X, WhatsApp, e-mail. Uses `params.hostName`, the page permalink, title/description and tags.
- **Scroll progress bar** (`static/js/scrollProgressBar.js`).
- **Back-to-top button**.
- **Comments** – Disqus when `services.disqus.shortname` is set.
- **Emoji** – `:smile:` shortcodes are converted (`emojify`).

```yaml
params:
  singlePages:
    socialShare: true
    readTime:
      enable: true
      content: "min read"
    scrollprogress:
      enable: true
    tags:
      openInNewTab: true
```

## Markdown and rich content

The example posts under `exampleSite/content/blogs/` demonstrate everything supported:

| Post | Shows |
| --- | --- |
| `markdown-syntax.md` | Headings, quotes, tables, code blocks, lists, inline HTML |
| `rich-content.md` | Hugo built-in shortcodes: X/Twitter, Vimeo, YouTube, Instagram, GitHub gists… |
| `math.md` | MathJax equations (needs `mathjax`) |
| `emoji-support.md` | Emoji shortcodes |
| `placeholder-text.md` | Long-form filler |

Raw HTML in Markdown requires `markup.goldmark.renderer.unsafe: true` (set in the example config).

### MathJax

Enable globally (`params.mathjax: true`) or per post (`mathjax: true`). Inline math uses `\( … \)`, display math uses `$$ … $$`.

### Responsive images with Cloudinary

See [Integrations](Integrations#cloudinary).

## Tags and taxonomies

Standard Hugo taxonomies apply: tags in front matter automatically create `/tags/` and `/tags/<term>/` list pages that use the same list layout. Terms with special characters (e.g. `C#`) are URL-safe.

## RSS

With `outputs.page`/`home` containing `RSS` Hugo generates `index.xml` feeds.
