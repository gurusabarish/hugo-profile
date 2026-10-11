# Color Customization

The theme is driven by CSS custom properties generated in `layouts/partials/head.html` from `params.color`. Light-mode values come from `params.color.*`, dark-mode values from `params.color.darkmode.*`. Any omitted value uses the default shown below.

> When using hex codes in YAML, **quote them** because `#` starts a YAML comment.

```yaml
params:
  color:
    textColor: "#343a40"
    secondaryTextColor: "#6c757d"
    textLinkColor: "#007bff"            # default: primaryColor
    backgroundColor: "#eaedf0"
    secondaryBackgroundColor: "#64ffda1a"
    primaryColor: "#007bff"
    secondaryColor: "#f8f9fa"

    darkmode:
      textColor: "#e4e6eb"
      secondaryTextColor: "#b0b3b8"
      textLinkColor: "#ffffff"          # default: darkmode.primaryColor
      backgroundColor: "#18191a"
      secondaryBackgroundColor: "#212529"
      primaryColor: "#ffffff"
      secondaryColor: "#212529"
```

| Option | Used for |
| --- | --- |
| `textColor` / `secondaryTextColor` | Body text / muted text (card descriptions, dates). |
| `textLinkColor` | Links. |
| `backgroundColor` | Page background. |
| `secondaryBackgroundColor` | Alternate section backgrounds. |
| `primaryColor` | Buttons, accents, active tab/nav states. |
| `secondaryColor` | Card/navbar surfaces and button text. |

## Light, dark or auto

```yaml
params:
  theme:
    defaultTheme: "light"     # "light" | "dark" | omit for automatic (follows the OS)
    disableThemeToggle: false # true removes the sun/moon button
```

- **Auto** (default): uses a visitor's saved choice (`localStorage` key `pref-theme`), otherwise `prefers-color-scheme`.
- **light / dark**: forces that theme on page load, overriding a previously saved opposite choice.

## Typography

```yaml
params:
  font:
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    textAlign: left
```

Fonts (Alata, Lora, Roboto) are loaded from Google Fonts in `head.html`; edit `static/css/font.css` or add [custom CSS](Advanced-Customization#custom-css) to change families.

## Animations

`params.animate: false` disables the fade-in effects on the navbar and hero.
