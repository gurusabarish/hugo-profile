# Hugo Profile - Complete Documentation

Welcome to the complete documentation for the Hugo Profile theme! This guide will help you install, configure, customize, and deploy your professional portfolio website.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Additional Resources](#additional-resources)

---

## Introduction

Hugo Profile is a high-performance, mobile-first Hugo theme designed specifically for personal portfolios and blogs. Whether you're a developer, designer, or creative professional, this theme provides everything you need to showcase your work and share your thoughts.

### Key Features

✨ **Fully Responsive** - Works seamlessly on all devices  
🎨 **Customizable** - Easy color, font, and layout customization  
🌓 **Light/Dark Mode** - Automatic theme switching with user preference  
⚡ **Fast** - Optimized for performance with minimal dependencies  
🔍 **SEO Friendly** - Built-in SEO optimization  
📝 **Blog Ready** - Full-featured blogging capabilities  
💼 **Portfolio Sections** - Showcase projects, experience, and achievements  
📧 **Contact Form** - Integrated with FormSpree  
📊 **Analytics** - Google Analytics support  
💬 **Comments** - Disqus integration  

### Demo

- **Live Demo**: [https://hugo-profile.netlify.app](https://hugo-profile.netlify.app)
- **Wiki**: [https://github.com/gurusabarish/hugo-profile/wiki](https://github.com/gurusabarish/hugo-profile/wiki)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### 1. Hugo Extended

Hugo Profile requires **Hugo Extended version 0.87.0 or higher**.

#### Check Your Hugo Version

```bash
hugo version
```

You should see output like: `hugo v0.143.0+extended`

#### Install Hugo

**macOS** (using Homebrew):
```bash
brew install hugo
```

**Windows** (using Chocolatey):
```bash
choco install hugo-extended
```

**Linux** (using Snap):
```bash
snap install hugo
```

**Manual Installation**:
Download from [Hugo Releases](https://github.com/gohugoio/hugo/releases) and follow the [official installation guide](https://gohugo.io/installation/).

### 2. Git

Git is required for theme installation and version control.

Check if Git is installed:
```bash
git --version
```

Install Git from [git-scm.com](https://git-scm.com/downloads) if needed.

### 3. Text Editor

You'll need a text editor to edit configuration files. We recommend:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)

---

## Installation

Follow these steps to install Hugo Profile theme:

### Step 1: Create a New Hugo Site

Open your terminal and create a new Hugo site:

```bash
hugo new site my-portfolio --format="yaml"
cd my-portfolio
```

> **Note**: We're using `--format="yaml"` to create the configuration file in YAML format, which is more readable than TOML.

### Step 2: Add the Theme

You have two options for adding the theme:

#### Option A: Clone the Repository (Recommended for Customization)

```bash
cd themes
git clone https://github.com/gurusabarish/hugo-profile.git
cd ..
```

This option is best if you plan to make extensive customizations to the theme.

#### Option B: Add as Git Submodule (Recommended for Easy Updates)

```bash
git init
git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
```

This option makes it easier to receive updates from the original theme repository.

### Step 3: Copy Example Configuration

Copy the example configuration file to your site root:

```bash
cp themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml
```

### Step 4: Copy Example Content and Assets (Optional but Recommended)

To see a fully functional example site, copy the example content and images:

```bash
# Copy static files (images)
rsync -av themes/hugo-profile/exampleSite/static/ ./static/

# Copy content files (blog posts)
rsync -av themes/hugo-profile/exampleSite/content/ ./content/
```

> **Note**: You can delete or replace this example content later with your own.

### Step 5: Start the Hugo Server

Start the Hugo development server:

```bash
hugo server
```

Or, to see draft content:

```bash
hugo server -D
```

Your site should now be running at `http://localhost:1313`!

---

## Configuration

Hugo Profile is configured through the `hugo.yaml` file in your site's root directory. Let's walk through each section.

### Basic Settings

```yaml
baseURL: "https://yoursite.com"
languageCode: "en-us"
title: "Your Name - Portfolio"
theme: hugo-profile
```

- **baseURL**: Your site's final URL (important for SEO and links)
- **languageCode**: Language code for your site
- **title**: Your site's main title (appears in browser tab)
- **theme**: Must be `hugo-profile`

### Output Formats

```yaml
outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"
  page:
    - "HTML"
    - "RSS"
```

These output formats are required for the theme's search functionality and RSS feeds.

### Enable Features

```yaml
enableRobotsTXT: true
```

This enables the robots.txt file for better SEO.

### Analytics and Comments

```yaml
services:
  googleAnalytics:
    id: G-MEASUREMENT_ID
  disqus:
    shortname: your-disqus-shortname
```

Uncomment and add your IDs to enable:
- **Google Analytics**: Get your Measurement ID from [Google Analytics](https://analytics.google.com/)
- **Disqus**: Get your shortname from [Disqus](https://disqus.com/)

### Pagination

```yaml
pagination:
  pagerSize: 3
```

Sets how many blog posts to show per page (default: 3).

### Markdown Rendering

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

This allows HTML inside Markdown files (required for some features).

### Navigation Menu

```yaml
Menus:
  main:
    - identifier: blog
      name: Blog
      title: Blog posts
      url: /blogs
      weight: 1
    - identifier: gallery
      name: Gallery
      title: Gallery
      url: /gallery
      weight: 2
```

Configure your top navigation menu:
- **identifier**: Unique ID for the menu item
- **name**: Display text
- **title**: Tooltip text
- **url**: Link URL
- **weight**: Order (lower numbers appear first)

### Site Parameters

The `params` section contains the main configuration for your site's appearance and content.

#### General Parameters

```yaml
params:
  title: "Hugo Profile"
  description: "A personal portfolio website"
  favicon: "/fav.png"
  useBootstrapCDN: false
  mathjax: false
  animate: true
```

- **title**: Site title in params (used in various places)
- **description**: Site description for SEO
- **favicon**: Path to your favicon image
- **useBootstrapCDN**: Set to `true` to use Bootstrap from CDN (faster load times)
- **mathjax**: Enable mathematical notation support
- **animate**: Enable fade animations on the home page

#### Theme Configuration

```yaml
theme:
  # disableThemeToggle: true
  # defaultTheme: "light" # or "dark"
```

- **disableThemeToggle**: Set to `true` to hide the light/dark mode toggle
- **defaultTheme**: Set default theme to "light" or "dark"

#### Font Configuration

```yaml
font:
  fontSize: 1rem      # default: 1rem
  fontWeight: 400     # default: 400
  lineHeight: 1.5     # default: 1.5
  textAlign: left     # default: left
```

Customize typography across your site.

#### Color Customization

```yaml
color:
  textColor: "#343a40"
  secondaryTextColor: "#6c757d"
  textLinkColor: "#007bff"
  backgroundColor: "#eaedf0"
  secondaryBackgroundColor: "#64ffda1a"
  primaryColor: "#007bff"
  secondaryColor: "#f8f9fa"

  darkmode:
    textColor: "#e4e6eb"
    secondaryTextColor: "#b0b3b8"
    textLinkColor: "#ffffff"
    backgroundColor: "#18191a"
    secondaryBackgroundColor: "#212529"
    primaryColor: "#ffffff"
    secondaryColor: "#212529"
```

> **Note**: See the [Customization Guide](docs/CUSTOMIZATION.md) for detailed color customization instructions.

#### Navbar Configuration

```yaml
navbar:
  align: ms-auto  # Left: ms-auto | center: mx-auto | right: me-auto
  brandName: "Hugo Profile"
  disableSearch: false
  stickyNavBar:
    enable: true
    showOnScrollUp: true
  enableSeparator: false
  menus:
    disableAbout: false
    disableExperience: false
    disableEducation: false
    disableProjects: false
    disableAchievements: false
    disableContact: false
```

Configure the navigation bar and which sections appear in the menu.

#### Hero Section

The hero section is the first thing visitors see:

```yaml
hero:
  enable: true
  intro: "Hi, my name is"
  title: "Your Name"
  subtitle: "I build amazing things"
  content: "A passionate developer with expertise in web technologies..."
  image: /images/hero.svg
  bottomImage:
    enable: true
  button:
    enable: true
    name: "Resume"
    url: "#"
    download: true
    newPage: false
  socialLinks:
    fontAwesomeIcons:
      - icon: fab fa-github
        url: https://github.com/yourusername
      - icon: fab fa-linkedin
        url: https://linkedin.com/in/yourusername
    customIcons:
      - icon: /fav.png
        url: "https://yoursite.com"
```

#### About Section

```yaml
about:
  enable: true
  title: "About Me"
  image: "/images/me.png"
  content: |-
    Tell your story here...
  skills:
    enable: true
    title: "Technologies I work with:"
    items:
      - "HTML/CSS"
      - "JavaScript"
      - "React"
```

#### Experience Section

```yaml
experience:
  enable: true
  items:
    - company: "Company Name"
      companyUrl: "https://company.com"
      jobs:
        - name: "Senior Developer"
          date: "Jan 2023 - present"
          content: "Description of your role and achievements..."
          featuredItems:
            fontAwesomeIcons:
              - icon: fab fa-react
                url: https://react.dev/
                tooltip: "React expertise"
```

> **Tip**: See the [Configuration Guide](docs/CONFIGURATION.md) for complete details on all sections.

---

## Content Management

### Creating Blog Posts

Create a new blog post:

```bash
hugo new content/blogs/my-first-post.md
```

This creates a new Markdown file with front matter:

```yaml
---
title: "My First Post"
date: 2024-01-15T10:00:00Z
draft: false
author: "Your Name"
tags:
  - tutorial
  - hugo
image: /images/post-image.jpg
description: "A short description for SEO"
toc: true
---

Your content here...
```

#### Front Matter Fields

- **title**: Post title
- **date**: Publication date (ISO 8601 format)
- **draft**: Set to `false` to publish
- **author**: Author name
- **tags**: Array of tags for categorization
- **image**: Featured image path
- **description**: SEO description
- **toc**: Enable table of contents

### Markdown Formatting

Hugo supports standard Markdown plus many extensions:

#### Headings

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

#### Text Formatting

```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

#### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](/images/photo.jpg)
```

#### Code Blocks

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

#### Lists

```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

### Using Hugo Shortcodes

Hugo shortcodes add extra functionality:

#### YouTube Video

```markdown
{{< youtube VIDEO_ID >}}
```

#### Twitter Tweet

```markdown
{{< tweet user="username" id="1234567890" >}}
```

#### Gist

```markdown
{{< gist username gist-id >}}
```

### Managing Images

1. Place images in the `static/images/` directory
2. Reference them with `/images/filename.jpg`
3. For blog post images, organize them in subdirectories:
   - `/static/images/posts/`
   - `/static/images/projects/`

### Categories and Tags

Add categories and tags to your posts for better organization:

```yaml
---
categories:
  - Web Development
  - Tutorial
tags:
  - hugo
  - javascript
  - tutorial
---
```

> **Learn More**: See the [Content Guide](docs/CONTENT-GUIDE.md) for advanced content management.

---

## Customization

### Changing Colors

Edit the `color` section in `hugo.yaml`:

```yaml
color:
  primaryColor: "#ff5733"  # Your brand color
  textLinkColor: "#ff5733"
```

### Custom CSS

Create a custom CSS file:

1. Create `static/css/custom.css`
2. Add your custom styles
3. Reference it in your `hugo.yaml`:

```yaml
params:
  customCSS: ["/css/custom.css"]
```

### Custom JavaScript

```yaml
params:
  customJS: ["/js/custom.js"]
```

### Changing Fonts

Edit the font section in `hugo.yaml`:

```yaml
font:
  fontSize: 1.1rem
  fontWeight: 400
```

Or add custom fonts via CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

### Layout Overrides

To customize layouts:

1. Copy the layout file from `themes/hugo-profile/layouts/` to your site's `layouts/` directory
2. Make your changes to the copied file
3. Hugo will use your version instead of the theme's version

> **Learn More**: See the [Customization Guide](docs/CUSTOMIZATION.md) for detailed instructions.

---

## Deployment

### Building for Production

Before deploying, build your site:

```bash
hugo --minify
```

This creates a `public/` directory with your complete static site.

### Deploy to Netlify

#### Method 1: Deploy from GitHub (Recommended)

1. Push your site to a GitHub repository
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `hugo --gc --minify`
   - **Publish directory**: `public`
   - **Environment variables**:
     - `HUGO_VERSION`: `0.143.0`
     - `HUGO_ENV`: `production`

6. Click "Deploy site"

#### Method 2: Manual Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
hugo --minify
netlify deploy --prod --dir=public
```

### Deploy to GitHub Pages

1. Create a GitHub Actions workflow file: `.github/workflows/hugo.yml`

```yaml
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.143.0'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

2. Enable GitHub Pages in repository settings
3. Push changes to trigger deployment

### Deploy to Vercel

1. Import your repository to [Vercel](https://vercel.com/)
2. Configure settings:
   - **Framework Preset**: Hugo
   - **Build Command**: `hugo --gc --minify`
   - **Output Directory**: `public`
   - **Environment Variables**:
     - `HUGO_VERSION`: `0.143.0`

3. Deploy!

> **Learn More**: See the [Deployment Guide](docs/DEPLOYMENT.md) for detailed platform-specific instructions.

---

## Troubleshooting

### Common Issues

#### Issue: Theme not loading

**Symptoms**: Site appears unstyled or shows errors

**Solutions**:
1. Check that `theme: hugo-profile` is set in `hugo.yaml`
2. Verify the theme is in the `themes/hugo-profile` directory
3. Ensure Hugo version is 0.87.0 or higher

#### Issue: Images not showing

**Symptoms**: Broken image links on the site

**Solutions**:
1. Ensure images are in the `static/` directory
2. Use absolute paths starting with `/`: `/images/photo.jpg`
3. Check file names match exactly (case-sensitive)
4. Verify images exist in your build output (`public/images/`)

#### Issue: TLS handshake timeout error

**Symptoms**: Build error with "TLS handshake timeout" message

**Solutions**:
1. This is usually related to the Twitter shortcode
2. Remove or comment out the tweet shortcode in `content/blogs/rich-content.md`
3. Or wait and retry, as it may be a temporary network issue

#### Issue: Site builds but looks different from demo

**Symptoms**: Missing sections or different appearance

**Solutions**:
1. Copy example content: `rsync -av themes/hugo-profile/exampleSite/content/ ./content/`
2. Copy static files: `rsync -av themes/hugo-profile/exampleSite/static/ ./static/`
3. Verify all sections are enabled in `hugo.yaml`

#### Issue: Changes not appearing

**Symptoms**: Edits to files don't show up on the site

**Solutions**:
1. Stop and restart Hugo server
2. Clear Hugo cache: `hugo --cleanDestinationDir`
3. Delete `public/` folder and rebuild
4. Check for typos in `hugo.yaml`

#### Issue: Build fails on deployment

**Symptoms**: Successful local build but deployment fails

**Solutions**:
1. Check Hugo version matches (set environment variable)
2. Ensure all files are committed to Git
3. Check deployment logs for specific errors
4. Verify `baseURL` is correct for deployment platform

### Performance Optimization

#### Optimize Images

```bash
# Use compressed images
# Recommended formats: WebP, optimized JPEG
# Keep images under 1MB when possible
```

#### Enable Minification

```bash
hugo --minify
```

#### Use CDN for Bootstrap

```yaml
params:
  useBootstrapCDN: true
```

### Getting Help

If you're still stuck:

1. Check the [FAQ](docs/FAQ.md)
2. Search [existing issues](https://github.com/gurusabarish/hugo-profile/issues)
3. Ask on [Hugo Discourse](https://discourse.gohugo.io/)
4. [Open a new issue](https://github.com/gurusabarish/hugo-profile/issues/new) with:
   - Your Hugo version
   - Operating system
   - Complete error message
   - Steps to reproduce

---

## FAQ

### General Questions

**Q: Do I need to know how to code?**  
A: Basic knowledge helps, but you can create a site by just editing the `hugo.yaml` configuration file and writing Markdown content.

**Q: Is Hugo Profile free?**  
A: Yes! Hugo Profile is open source under the MIT license.

**Q: Can I use this for commercial projects?**  
A: Yes, the MIT license allows commercial use.

### Configuration Questions

**Q: How do I add more sections?**  
A: All sections are in `hugo.yaml`. Copy and customize existing section configurations.

**Q: Can I change the order of sections?**  
A: The order is determined by the layout files. You can override layouts by copying them to your `layouts/` directory.

**Q: How do I add a custom page?**  
A: Create a new `.md` file in `content/` and add it to the menu in `hugo.yaml`.

### Content Questions

**Q: Where do I put my blog posts?**  
A: In the `content/blogs/` directory. Create new posts with `hugo new content/blogs/post-name.md`.

**Q: How do I add images to blog posts?**  
A: Place images in `static/images/` and reference them with `/images/filename.jpg`.

**Q: Can I write in languages other than English?**  
A: Yes! Hugo supports multiple languages. See [Hugo's multilingual documentation](https://gohugo.io/content-management/multilingual/).

### Customization Questions

**Q: Can I change the color scheme?**  
A: Yes! Edit the `color` section in `hugo.yaml`. See the [Customization Guide](docs/CUSTOMIZATION.md).

**Q: How do I add custom CSS?**  
A: Create `static/css/custom.css` and reference it in the `params.customCSS` array.

**Q: Can I modify the layout?**  
A: Yes! Copy layout files from `themes/hugo-profile/layouts/` to your `layouts/` directory and edit them.

### Deployment Questions

**Q: Where can I host my Hugo site?**  
A: Many options: Netlify, GitHub Pages, Vercel, AWS, or any static hosting service.

**Q: How much does hosting cost?**  
A: Many services (Netlify, GitHub Pages, Vercel) offer free tiers that work great for personal sites.

**Q: Do I need a server?**  
A: No! Hugo generates static files that can be hosted anywhere.

> **More Questions?** See the [detailed FAQ](docs/FAQ.md).

---

## Additional Resources

### Documentation

- 📖 [Quick Start Guide](docs/QUICKSTART.md) - Get up and running in 5 minutes
- ⚙️ [Configuration Reference](docs/CONFIGURATION.md) - Complete config options
- ✍️ [Content Guide](docs/CONTENT-GUIDE.md) - Creating and managing content
- 🎨 [Customization Guide](docs/CUSTOMIZATION.md) - Styling and theming
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md) - Deploy to various platforms
- ❓ [FAQ](docs/FAQ.md) - Frequently asked questions
- 💡 [Examples](docs/EXAMPLES.md) - Real-world configuration examples

### Hugo Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Hugo Discourse Forum](https://discourse.gohugo.io/)
- [Hugo Content Management](https://gohugo.io/content-management/)

### Theme Resources

- [GitHub Repository](https://github.com/gurusabarish/hugo-profile)
- [Wiki Pages](https://github.com/gurusabarish/hugo-profile/wiki)
- [Live Demo](https://hugo-profile.netlify.app)
- [Issue Tracker](https://github.com/gurusabarish/hugo-profile/issues)

### Community

- [Hugo Community](https://discourse.gohugo.io/)
- [GitHub Discussions](https://github.com/gurusabarish/hugo-profile/discussions)

---

## Contributing

Found a bug or have a suggestion? We'd love to hear from you!

1. Check [existing issues](https://github.com/gurusabarish/hugo-profile/issues)
2. Open a [new issue](https://github.com/gurusabarish/hugo-profile/issues/new)
3. Submit a [pull request](https://github.com/gurusabarish/hugo-profile/pulls)

---

## License

Hugo Profile is licensed under the [MIT License](LICENSE).

---

## Support the Project

If you find Hugo Profile useful, consider:

- ⭐ Starring the [GitHub repository](https://github.com/gurusabarish/hugo-profile)
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 📖 Improving documentation
- ☕ [Buying the creator a coffee](https://www.buymeacoffee.com/gurusabarish)

---

**Happy building! 🚀**