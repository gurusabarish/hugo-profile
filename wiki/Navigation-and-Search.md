# Navigation and Search

The navbar is rendered by `layouts/partials/sections/header.html` on every page.

## Anatomy (left → right)

1. **Brand** – logo + name linking to the homepage.
2. **Search box** (unless disabled).
3. **Built-in section links** – About, Experience, Education, Projects, Achievements, Contact (anchor links to `/#about`, `/#experience`, …).
4. **Your custom menu items** (`menu.main`).
5. **Language switcher** (only on multilingual sites).
6. **Light/dark toggle** (unless disabled).

## Brand

```yaml
params:
  favicon: "/fav.png"
  navbar:
    brandLogo: "/logo.png"   # default: params.favicon
    showBrandLogo: true      # false hides the logo
    brandName: "My Name"     # default: params.title
```

## Alignment and sticky behaviour

```yaml
  navbar:
    align: ms-auto           # ms-auto = right (default), mx-auto = centre, me-auto = left
    stickyNavBar:
      enable: true
      showOnScrollUp: true   # only show the sticky bar when scrolling up
    enableSeparator: false   # thin divider between section links and custom links
```

## Hiding built-in links

A link is shown when its section is `enable: true` **and** the matching flag below is not `true`:

```yaml
  navbar:
    menus:
      disableAbout: false
      disableExperience: false
      disableEducation: false
      disableProjects: false
      disableAchievements: false
      disableContact: false
```

The link text is the section's `title` or, if empty, the translation keys `nav_about`, `nav_experience`, `nav_education`, `nav_projects`, `nav_achievements`, `nav_contact`.

## Custom menu items

Use Hugo's [menu configuration](https://gohugo.io/content-management/menus/#define-in-site-configuration). With multiple languages, define the menu under each language (as `exampleSite/hugo.yaml` does); for a single language you can use top-level `menus`:

```yaml
menus:
  main:
    - identifier: blog
      name: Blog
      title: Blog posts
      url: /blogs
      weight: 1
    - identifier: gallery
      name: Gallery
      title: Image gallery
      url: /gallery
      weight: 2
```

### Dropdown menus

Give children a `parent` equal to the parent's `identifier`:

```yaml
menus:
  main:
    - identifier: dropdown
      name: Dropdown
      title: Example dropdown menu
      weight: 3
    - identifier: dropdown1
      name: Example 1
      title: Example dropdown 1
      url: /#
      parent: dropdown
      weight: 1
```

`pre` can hold an icon or HTML that is printed before the name.

## Search

- A search box appears in the navbar (twice in the markup: desktop and mobile collapse menu).
- It queries `/index.json`, produced by `layouts/_default/index.json` for every regular page (`title`, `description`, `content`, `image`, `permalink`). **The home page must output `JSON`**:

  ```yaml
  outputs:
    home: ["HTML", "RSS", "JSON"]
  ```
- `static/js/search.js` debounces typing (300 ms), matches the query case-insensitively against title, description and content, HTML-escapes results and only links to `http(s)` URLs.
- Customise or remove:

  ```yaml
  params:
    navbar:
      disableSearch: true          # remove search entirely (also skips search.js)
      searchPlaceholder: "Search"  # default comes from i18n key `search_placeholder`
  ```
- In multilingual sites the index URL is the current language home (`.Site.Home.RelPermalink + index.json`), so results are language-specific.

## Theme (light/dark) toggle

A sun/moon button toggles the `dark` class and stores the choice in `localStorage` (`pref-theme`). See [Color Customization](Color-Customization) for default theme and disabling the button.

## Language switcher

See [Internationalization](Internationalization#language-switcher).

## 404 page

`layouts/404.html` shows `static/404.png` and the translated text from `params.terms.pageNotFound` or the `page_not_found` i18n key.
