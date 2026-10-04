# Internationalization (i18n)

Hugo Profile supports Hugo's multilingual mode and ships translations for **English (`en`)**, **Spanish (`es`)** and **French (`fr`)**.

## Enable languages

```yaml
defaultContentLanguage: "en"
defaultContentLanguageInSubdir: false   # English at "/", others at "/es/", "/fr/"

languages:
  en:
    languageName: "English"
    weight: 1
    contentDir: "content"
    menu:
      main:
        - identifier: blog
          name: Blog
          url: /blogs
          weight: 1
  es:
    languageName: "Español"
    weight: 2
    contentDir: "content/es"
    menu:
      main:
        - identifier: blog
          name: Blog
          url: /es/blogs
          weight: 1
    params:
      hero:
        intro: "Hola, mi nombre es"
        title: "Isabella."
```

With one language configured nothing changes for visitors – existing single-language sites keep working.

## Where translated text comes from

1. **Language-specific params** – `languages.<lang>.params.<section>` for the homepage sections (`hero`, `about`, `experience`, `education`, `projects`, `achievements`, `contact`). The section partials read the language's section object and fall back to the root `params` object when the language doesn't define one. Non-text settings (images, `enable`, icons, links, button `url`) are always read from root `params`, so only translate text fields and mirror the complete structure of the section you override.
2. **Site-wide overrides** – `params.terms.*`.
3. **Theme i18n files** – `i18n/<lang>.toml`.

A complete example with Spanish and French is in [`exampleSite/hugo.yaml`](https://github.com/gurusabarish/hugo-profile/blob/master/exampleSite/hugo.yaml).

> Translated content arrays (e.g. `experience.items`) replace the default list, so repeat the entire list.

### Translation keys (`i18n/*.toml`)

| Key | English default |
| --- | --- |
| `nav_about`, `nav_experience`, `nav_education`, `nav_projects`, `nav_achievements`, `nav_contact` | Navbar link labels |
| `search_placeholder` | Search... |
| `about`, `experience`, `education`, `projects`, `achievements` | Section headings |
| `contact` | Get in Touch |
| `contact_email_placeholder`, `contact_message_placeholder` | Contact form placeholders |
| `recent_posts` | Recent Posts |
| `read` | Read |
| `toc` | Table Of Contents |
| `tags`, `social` | Sidebar headings |
| `copyright` | All Rights Reserved |
| `email_text` | Check out this site |
| `page_not_found` | Page not found |
| `min_read` | min read |

## Content per language

Place translated content under the language's `contentDir`:

```text
content/
├── blogs/…            # English
├── gallery.md
├── es/
│   ├── blogs/…
│   └── gallery.md
└── fr/…
```

Pages with the same relative path are linked as translations, so the switcher jumps to the translated page when it exists.

## Language switcher

When `hugo.IsMultilingual` is true a 🌐 dropdown appears in the navbar listing each `languageName`. It links to the translation of the current page, or to the home page of each language if the page has no translations. Styling: `static/css/language-switcher.css`.

## Add a new language (example: German)

1. Create `i18n/de.toml` (in the theme or, to avoid editing the theme, in your site root – the site copy wins). Copy `i18n/en.toml` and translate every value:

   ```toml
   [nav_about]
   other = "Über uns"
   ```
2. Register the language:

   ```yaml
   languages:
     de:
       languageName: "Deutsch"
       weight: 4
       contentDir: "content/de"
   ```
3. (Optional) add `content/de/…` and per-language `params` and `menu`.

## Override single strings

```yaml
params:
  terms:
    read: "Custom Read Text"
    pageNotFound: "Custom 404 Message"
```

More: [Hugo multilingual docs](https://gohugo.io/content-management/multilingual/).
