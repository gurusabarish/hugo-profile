# Hugo Profile

## Font
You can customize the font size, font weight, line height, text align properties in `config.yaml`

```yaml
params:
    font:
        fontSize: 1.5rem # default: 1rem
        fontWeight: 500 # default: 400
        lineHeight: 1 # default: 1.5
        textAlign: right # default: left
```

### Font used
- [Roboto (default)](https://fonts.google.com/specimen/Roboto)
- [Alata](https://fonts.google.com/specimen/Alata)
- [Lara](https://fonts.google.com/specimen/Lora)

If you want to customize the font, edit these files [head.html]('./../../layouts/partials/head.html'), [font.css]('./../../static/css/font.css')

## Color palette
You can customize the color palette in `config.yaml`

```yaml
params:
    color:
        textColor: 
        backgroundColor:
        primaryColor:
        secondaryColor:

        darkmode:
            textColor: 
            backgroundColor:
            primaryColor:
            secondaryColor:
```

## Theme
you can disable the toggle in `config.yaml`. It will be in auto by default. 
`note:` *customizing default theme will release further*

```yaml
params:
    theme:
        disableThemeToggle: false
```

## SEO and analytics
It has Hugo's [`_internal/opengraph.html`](https://gohugo.io/templates/internal/#open-graph), [`_internal/twitter_cards.html`](https://gohugo.io/templates/internal/#twitter-cards) for SEO performance and [`_internal/google_analytics.html`](https://gohugo.io/templates/internal/#google-analytics) for analytics.

## Navbar
If you want to customize the menu, you can customize in `config.yaml`
- alignment: It will align the menus. If you didn't specify by default it will be `ms-auto`. *Left: `ms-auto` | center: `mx-auto` | right: `me-auto`*.
- brandLogo: If you want you different logo for brand, you can change by this property.
- brandName: If you want you different name for brand, you can change by this property.

```yaml
params:
    navbar:
        align: mx-auto
        brandLogo: "/logo.png" # Logo for the brand | default is the favicon variable
        brandName: "Profile" # Brand name for the brand | default is the title variable
```

### Menus
It follows Hugo's [menus](https://gohugo.io/content-management/menus)

```yaml
Menus:
  main:
    - identifier: blog
      name: Blog
      title: Blog posts
      url: /blog
      weight: 1

    #Dropdown menu
    - identifier: dropdown
      title: Example dropdown menu
      name: Dropdown
      weight: 2
    - identifier: dropdown1
      title: example dropdown 1
      name: example 1
      url: /#
      parent: dropdown
      weight: 1
    - identifier: dropdown2
      title: example dropdown 2
      name: example 2
      url: /#
      parent: dropdown
      weight: 2
```