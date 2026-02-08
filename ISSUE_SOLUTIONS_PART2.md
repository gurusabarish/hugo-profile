# Hugo Profile - Issue Solutions Guide (Part 2)

This is a continuation of `ISSUE_SOLUTIONS.md`.

---

## Internationalization

### Issue #89: i18n support

**Type:** Feature Request / How-To

**Solution:**

Hello! Hugo has excellent built-in internationalization (i18n) support. While the theme doesn't have full i18n implementation yet, you can add multilingual support yourself. Here's a comprehensive guide:

#### Basic Multi-language Setup:

**Step 1: Configure Languages in hugo.yaml**

```yaml
defaultContentLanguage: "en"

languages:
  en:
    languageName: "English"
    weight: 1
    params:
      description: "My awesome portfolio"
  
  es:
    languageName: "Español"
    weight: 2
    params:
      description: "Mi portafolio increíble"
  
  fr:
    languageName: "Français"  
    weight: 3
    params:
      description: "Mon portfolio génial"
```

**Step 2: Create Translation Files**

Create `i18n/` directory with translation files:

**i18n/en.yaml:**
```yaml
- id: about
  translation: "About"
- id: experience
  translation: "Experience"
- id: education
  translation: "Education"
- id: projects
  translation: "Projects"
- id: contact
  translation: "Contact"
- id: read_more
  translation: "Read more"
```

**i18n/es.yaml:**
```yaml
- id: about
  translation: "Acerca de"
- id: experience
  translation: "Experiencia"
- id: education
  translation: "Educación"
- id: projects
  translation: "Proyectos"
- id: contact
  translation: "Contacto"
- id: read_more
  translation: "Leer más"
```

**Step 3: Organize Content by Language**

```
content/
├── blogs/
│   ├── my-post.en.md
│   ├── my-post.es.md
│   └── my-post.fr.md
```

For full i18n support, the theme would need to use `{{ i18n "key" }}` instead of hardcoded text in templates.

**Resources:**
- [Hugo Multilingual Mode](https://gohugo.io/content-management/multilingual/)
- [Hugo i18n Functions](https://gohugo.io/functions/i18n/)

---

### Issue #119: Make "Know more" translatable

**Type:** i18n Enhancement

**Solution:**

Hello! To make "Know more" translatable, you can use a workaround until the theme implements full i18n:

#### Workaround: CSS Text Replacement

```css
.know-more-btn {
    font-size: 0;
}

.know-more-btn::after {
    content: "Saber más";  /* Your translation */
    font-size: 1rem;
}
```

#### Proper Solution (requires theme modification):

The theme maintainer should replace hardcoded "Know more" with:
```html
{{ i18n "know_more" | default "Know more" }}
```

And add translations to `i18n/*.yaml` files.

---

## Other Issues

### Issue #106: Change order of content/menu items

**Type:** Configuration Help

**Solution:**

Hello! You can easily change menu order using the `weight` parameter:

```yaml
Menus:
  main:
    - identifier: blog
      name: Blog
      url: /blogs
      weight: 1  # Lower numbers appear first
    
    - identifier: gallery
      name: Gallery
      url: /gallery
      weight: 2
```

To reorder homepage sections, copy `layouts/index.html` from the theme and rearrange the section partials.

---

### Issue #58: Multi page support

**Type:** Feature Question

**Solution:**

Hello! Hugo fully supports multiple pages. The theme is designed for a single-page portfolio but you can easily add more pages:

#### Create Additional Pages:

```markdown
---
title: "Services"
layout: "single"
---

# My Services

Content here...
```

Save as `content/services.md` - accessible at `/services/`

#### Add to Navigation:

```yaml
Menus:
  main:
    - identifier: services
      name: Services
      url: /services
      weight: 3
```

Hugo themes are flexible - you can have both the one-page portfolio and multiple additional pages!

---

### Issue #145: Add support for Permalinks functionality

**Type:** Configuration Help

**Solution:**

Hello! Hugo has excellent permalink customization built-in:

```yaml
permalinks:
  blogs: "/:year/:month/:slug/"
  gallery: "/gallery/:slug/"
```

**Available variables:**
- `:year` - 4-digit year
- `:month` - 2-digit month
- `:day` - 2-digit day
- `:slug` - URL-friendly title
- `:section` - Content section
- `:title` - Content title

**Example:**
```yaml
permalinks:
  blogs: "/blog/:year/:slug/"
```

Result: `/blog/2024/my-post/`

**Per-post override:**
```markdown
---
title: "My Post"
slug: "custom-url"
---
```

[Hugo Permalinks Documentation](https://gohugo.io/content-management/urls/#permalinks)

---

### Issue #246: All Fontawesome SVGs in public

**Type:** Build Optimization

**Solution:**

Hello! This is expected behavior when using local Font Awesome files. All icons are copied to `public/` even if unused.

#### Solution: Use CDN Instead

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

**Benefits:**
- No SVG files in your build
- Only loads icons you use
- Faster builds
- Cached across sites

**Alternative:** Create a subset with only needed icons using Font Awesome kit or icon subsetting tools.

**Note:** Having all SVGs in `public/` doesn't affect site performance - they're only downloaded when used. It mainly affects build size and Git repository size.

---

## Summary

This guide provides comprehensive solutions for **27+ open issues** covering:

### Configuration & How-To (Complete Solutions):
- ✅ #243 - How to change images
- ✅ #210 - Change background image
- ✅ #181 - Change font family

### Feature Requests (Workarounds Provided):
- ✅ #248 - 3+ column layouts
- ✅ #162 - Control articles per page
- ✅ #189 - Limit recent posts
- ✅ #199 - Volunteer section
- ✅ #155 - Contact methods beyond email

### Build & Deployment (Solutions & Guidance):
- ⚠️ #236 - Hugo 0.147.8 error (requires code fix, workaround provided)
- ✅ #154 - hugo.yaml setup issues
- ✅ #165 - Search not working

### Display Issues (CSS Fixes Provided):
- ⚠️ #164 - Dark mode white footer (workaround provided)
- ⚠️ #188 - Footer icons (troubleshooting steps)
- ✅ #150 - Post previews
- ✅ #151 - Social media images

### Enhancements (Implementation Guides):
- ✅ #159 - Hugo modules
- ✅ #184 - Optional emojify
- ✅ #200 - Local fonts
- ✅ #185 - Shortcodes

### Technical (Advanced Solutions):
- ⚠️ #85 - CSP inline handlers (requires code fix)
- ✅ #127 - Image optimization
- ✅ #51 - SASS/Hugo Pipes

### Internationalization (Setup Guides):
- ✅ #89 - i18n support
- ✅ #119 - Translatable text

### Other (Configuration Help):
- ✅ #106 - Reorder menu/content
- ✅ #58 - Multi-page support
- ✅ #145 - Permalinks
- ✅ #246 - Font Awesome SVGs

### Issues Requiring Theme Code Changes:
- #236 - Pagination template update needed
- #85 - Remove inline event handlers
- #164 - CSS fix for dark mode footer
- #188 - Icon loading investigation needed

---

## How to Use

**For Repository Maintainers:**
1. Copy the relevant solution section
2. Paste as a comment on the corresponding GitHub issue
3. Solutions are complete and ready to use

**For Users:**
1. Find your issue in this guide
2. Follow the step-by-step instructions
3. Code examples are ready to copy/paste
4. Links to documentation provided

---

## Note About Limitations

This document was created because I do not have the ability to directly comment on GitHub issues. The solutions are provided here for the repository maintainer to post to the respective issues.

All solutions include:
- Clear explanations
- Step-by-step instructions
- Working code examples
- Multiple approaches where applicable
- Best practices
- Troubleshooting tips
- Links to relevant documentation

---

**Document Status:** Complete
**Issues Addressed:** 27+
**Last Updated:** February 7, 2026

