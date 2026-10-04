# Footer

The footer (`layouts/partials/sections/footer/`) has three parts, rendered on every page.

## 1. Recent posts

```yaml
params:
  footer:
    recentPosts:
      enable: true
      path: "blogs"          # content section to list (default "blogs")
      count: 3               # number of posts (default 3)
      title: Recent Posts    # default: i18n `recent_posts`
      disableFeaturedImage: false
```

Shown only when `enable` is true **and** the section has posts. Each card shows image, title, date, summary and a **Read** button.

## 2. Social networks

```yaml
params:
  footer:
    socialNetworks:
      github: https://github.com/you
      linkedin: https://linkedin.com/in/you
      twitter: https://twitter.com/you
      instagram: https://instagram.com/you
      facebook: https://facebook.com/you
```

Only networks with a URL render an icon. These five are supported by default; for others, use the [layout override](Advanced-Customization#overriding-templates) mechanism or add icons to the hero's `socialLinks`.

## 3. Copyright

Renders the brand logo (`navbar.brandLogo` or `favicon`) and:

```text
© <current year> <params.copyright> <params.terms.copyright | i18n copyright>
```

```yaml
params:
  copyright: "Your Name"
  terms:
    copyright: "All rights reserved"
```
