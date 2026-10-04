# Configuration Reference

All theme options live in your site's `hugo.yaml` (the complete, working sample is [`exampleSite/hugo.yaml`](https://github.com/gurusabarish/hugo-profile/blob/master/exampleSite/hugo.yaml)). Options are grouped below. Sections that have their own page link to it for the full field list.

## 1. Top-level Hugo settings

```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo Profile"           # Used in <title> and as the default brand name
theme: hugo-profile

defaultContentLanguage: "en"
defaultContentLanguageInSubdir: false

outputs:
  home: ["HTML", "RSS", "JSON"] # JSON output is REQUIRED for the search box (index.json)
  page: ["HTML", "RSS"]

enableRobotsTXT: true

pagination:
  pagerSize: 3                  # Blog posts per page on list pages

markup:
  goldmark:
    renderer:
      unsafe: true              # Allow raw HTML inside Markdown
```

| Key | Purpose |
| --- | --- |
| `outputs.home` must include `JSON` | Generates `/index.json`, the search index read by `static/js/search.js`. Without it the search box finds nothing. |
| `pagination.pagerSize` | Page size of the blog list ([`.Paginator`](https://gohugo.io/templates/pagination/)). |
| `markup.goldmark.renderer.unsafe` | Needed if your posts contain inline HTML or `<script>` tags. |
| `languages` | See [Internationalization](Internationalization). |
| `menu` / `Menus` | See [Navigation and Search](Navigation-and-Search). |
| `services.googleAnalytics.id`, `services.disqus.shortname` | See [Integrations](Integrations). |

## 2. `params` – general

```yaml
params:
  title: "Hugo Profile"          # Alt text for images, default brand name
  description: Text about my cool site   # Homepage <meta name="description">
  favicon: "/fav.png"            # Also used as default navbar/footer logo
  # staticPath: ""               # Prefix for theme asset URLs (see below)
  useBootstrapCDN: false         # true | "css" | "js" | false
  # cloudinary_cloud_name: "YOUR_CLOUD_NAME"
  mathjax: false                 # true = enable MathJax on every page
  animate: true                  # Fade-in animations on the homepage
  # copyright: "Your Name"       # Text placed after "© <year>" in the footer
  # hostName: "https://example.com"  # Prefix for share links on posts
  # customCSS: true              # Load /style.css from your site's static folder
  # customScripts: |-            # Raw HTML appended before </body>
  #   <script>...</script>
```

| Option | Details |
| --- | --- |
| `staticPath` | All theme CSS/JS/Bootstrap/Font Awesome URLs are built as `<staticPath>css/...`, `<staticPath>js/...`. Set it when you serve the theme's `static/` folder from a different sub-path or CDN. |
| `useBootstrapCDN` | `true` loads both Bootstrap CSS and JS from jsDelivr, `"css"` only CSS, `"js"` only JS. Any other value serves the bundled copy in `static/bootstrap-5`. (Note: boolean `true` is not quoted.) |
| `mathjax` | Per-page opt-in is possible with `mathjax: true` in a post's front matter. |
| `cloudinary_cloud_name` | Enables the [`dynamic-img` shortcode](Integrations#cloudinary). |
| `copyright` | Rendered as `© 2025 <copyright> All rights reserved`. |
| `hostName` | Prepended to permalinks in LinkedIn/Twitter/WhatsApp/e-mail share URLs. |
| `customCSS` / `customScripts` | See [Advanced Customization](Advanced-Customization). |

## 3. `params.theme`, `params.font`, `params.color`

```yaml
  theme:
    # disableThemeToggle: true   # Hide the sun/moon button
    # defaultTheme: "light"      # "light" | "dark" | omit for auto (follow OS)
  font:
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    textAlign: left
```

Colours are documented in [Color Customization](Color-Customization).

## 4. `params.navbar`

```yaml
  navbar:
    align: ms-auto               # ms-auto (default) | mx-auto (center) | me-auto
    # brandLogo: "/logo.png"     # default: params.favicon
    # showBrandLogo: false       # default: true
    brandName: "Hugo Profile"    # default: params.title
    disableSearch: false
    # searchPlaceholder: "Search"
    stickyNavBar:
      enable: true
      showOnScrollUp: true       # Only reveal the sticky bar while scrolling up
    enableSeparator: false       # Divider between built-in and custom menu items
    menus:
      disableAbout: false
      disableExperience: false
      disableEducation: false
      disableProjects: false
      disableAchievements: false
      disableContact: false
```

Details: [Navigation and Search](Navigation-and-Search).

## 5. Homepage sections

`params.hero`, `params.about`, `params.experience`, `params.education`, `params.achievements`, `params.projects` and `params.contact` – each has `enable: true|false`. Every field is documented in [Homepage Sections](Homepage-Sections).

## 6. `params.footer`

```yaml
  footer:
    recentPosts:
      path: "blogs"
      count: 3
      title: Recent Posts
      enable: true
      disableFeaturedImage: false
    socialNetworks:
      github: https://github.com
      linkedin: https://linkedin.com
      twitter: https://twitter.com
      instagram: https://instagram.com
      facebook: https://facebook.com
```

Details: [Footer](Footer).

## 7. List and single pages

```yaml
  listPages:
    disableFeaturedImage: false   # Hide card images on blog list pages

  singlePages:
    socialShare: true             # Share buttons on posts
    readTime:
      enable: true
      content: "min read"
    scrollprogress:
      enable: true                # Reading progress bar
    tags:
      openInNewTab: true
```

Details: [Blog and Content](Blog-and-Content).

## 8. `params.terms` – text overrides

```yaml
  terms:
    read: "Read"
    toc: "Table Of Contents"
    copyright: "All rights reserved"
    emailText: "Check out this site"
    # tags: "Tags"
    # social: "Social"
    # pageNotFound: "Page not found"
```

Every key falls back to the matching string in `i18n/<lang>.toml`; see [Internationalization](Internationalization).

## 9. Dates

`params.datesFormat` appears in the example config, but the shipped layouts format dates with Hugo's localised `time.Format` presets (`:date_long` on lists/footer, `:date_medium` on single posts). Dates therefore follow the active language automatically.

## Precedence summary

For every translatable string the theme uses, in order: **language-specific `languages.<lang>.params.…` →** **`params.…` →** **`i18n` file default**. Image, link and icon values are read from `params.…` only.
