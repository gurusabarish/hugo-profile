# Hugo Profile - Complete Configuration Reference

> **Version:** 4.0+  
> **Last Updated:** 2024  
> **Difficulty:** Beginner to Advanced

This is a comprehensive configuration reference for the Hugo Profile theme. This document explains every configuration option available in the theme, providing examples, best practices, and tips for beginners.

---

## Table of Contents

1. [Basic Hugo Settings](#basic-hugo-settings)
   - [Base Configuration](#base-configuration)
   - [Output Formats](#output-formats)
   - [Services](#services)
   - [Pagination](#pagination)
   - [Markup Settings](#markup-settings)
2. [Menu Configuration](#menu-configuration)
   - [Main Menu](#main-menu)
   - [Dropdown Menus](#dropdown-menus)
3. [Theme Parameters](#theme-parameters)
   - [General Parameters](#general-parameters)
   - [Theme Settings](#theme-settings)
   - [Font Configuration](#font-configuration)
   - [Color Customization](#color-customization)
4. [Navbar Configuration](#navbar-configuration)
5. [Hero Section](#hero-section)
6. [About Section](#about-section)
7. [Experience Section](#experience-section)
8. [Education Section](#education-section)
9. [Achievements Section](#achievements-section)
10. [Projects Section](#projects-section)
11. [Contact Section](#contact-section)
12. [Footer Configuration](#footer-configuration)
13. [Page Settings](#page-settings)
    - [List Pages](#list-pages)
    - [Single Pages](#single-pages)
14. [Translations and Terms](#translations-and-terms)
15. [Date Formats](#date-formats)
16. [Custom Scripts](#custom-scripts)
17. [Best Practices](#best-practices)
18. [Common Use Cases](#common-use-cases)

---

## Basic Hugo Settings

### Base Configuration

These are the fundamental Hugo settings that control your site's basic behavior.

#### `baseURL`

**Type:** String  
**Required:** Yes  
**Default:** None

The absolute URL of your website. This is used for generating canonical URLs and RSS feeds.

```yaml
baseURL: "https://yourwebsite.com"
```

**Best Practices:**
- Use HTTPS in production
- Don't include trailing slashes
- Update this before deploying to production

⚠️ **Warning:** Incorrect baseURL can break links and SEO.

---

#### `languageCode`

**Type:** String  
**Required:** No  
**Default:** "en-us"

The language code for your website. This is used for SEO and accessibility.

```yaml
languageCode: "en-us"
```

**Common Values:**
- `en-us` - English (United States)
- `en-gb` - English (United Kingdom)
- `fr` - French
- `de` - German
- `es` - Spanish
- `ja` - Japanese

---

#### `title`

**Type:** String  
**Required:** Yes  
**Default:** None

The main title of your website. This appears in the browser tab and is used for SEO.

```yaml
title: "John Doe - Portfolio"
```

💡 **Tip:** Keep it concise but descriptive. Include your name or brand.

---

#### `theme`

**Type:** String  
**Required:** Yes  
**Default:** None

The name of the Hugo theme to use.

```yaml
theme: hugo-profile
```

---

#### `enableRobotsTXT`

**Type:** Boolean  
**Required:** No  
**Default:** false

Enables automatic generation of robots.txt file for search engine crawlers.

```yaml
enableRobotsTXT: true
```

💡 **Tip:** Set to `true` for production sites to help with SEO.

---

### Output Formats

Defines the output formats Hugo will generate for your pages.

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

**Available Formats:**
- `HTML` - Standard web pages
- `RSS` - RSS feed for blog readers
- `JSON` - JSON feed for APIs and search

**When to Use:**
- Include `JSON` if you want to enable search functionality
- Include `RSS` for blog sections
- `HTML` should always be included

---

### Services

Integration with third-party services.

#### Google Analytics

```yaml
services:
  googleAnalytics:
    id: G-MEASUREMENT_ID
```

**How to Get Your ID:**
1. Create a Google Analytics 4 property
2. Get your Measurement ID (starts with "G-")
3. Replace `G-MEASUREMENT_ID` with your actual ID

---

#### Disqus Comments

```yaml
services:
  disqus:
    shortname: your-disqus-shortname
```

**How to Get Your Shortname:**
1. Create an account at disqus.com
2. Register your site
3. Use the shortname assigned to your site

💡 **Tip:** Disqus adds comments to your blog posts automatically.

---

### Pagination

Controls how many items appear per page in lists.

```yaml
pagination:
  pagerSize: 3
```

**Type:** Integer  
**Default:** 10  
**Recommended:** 5-10 for blogs, 3-6 for portfolios

---

### Markup Settings

Controls how Hugo renders markdown content.

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

**`unsafe: true`** - Allows raw HTML in markdown files

⚠️ **Warning:** Only enable `unsafe: true` if you need to include HTML in your markdown. This can be a security risk if you're accepting content from untrusted sources.

**Use Cases:**
- Embedding custom HTML widgets
- Adding complex layouts in blog posts
- Including iframes or custom scripts

---

## Menu Configuration

### Main Menu

Defines the navigation menu items at the top of your site.

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
      title: Gallery images
      url: /gallery
      weight: 2
```

**Parameters:**
- `identifier` - Unique ID for the menu item
- `name` - Display text
- `title` - Tooltip text (appears on hover)
- `url` - Link destination
- `weight` - Order (lower numbers appear first)

---

### Dropdown Menus

Create dropdown menus with sub-items.

```yaml
Menus:
  main:
    - identifier: dropdown
      title: Example dropdown menu
      name: Dropdown
      weight: 3
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

**Key Parameter:**
- `parent` - References the `identifier` of the parent menu item

💡 **Tip:** Keep dropdowns to 2 levels maximum for better UX.

---

## Theme Parameters

All theme-specific settings are under the `params` section.

### General Parameters

#### `title`

```yaml
params:
  title: "Hugo Profile"
```

The site title used in various places throughout the theme. Can differ from the main Hugo `title`.

---

#### `description`

```yaml
params:
  description: "Text about my cool site"
```

**Type:** String  
**Used For:** SEO meta description, social media previews

💡 **Tip:** Keep it between 50-160 characters for optimal SEO.

---

#### `staticPath`

```yaml
params:
  staticPath: ""
```

**Type:** String  
**Default:** "" (root)

Custom path for serving static files. Leave empty unless you have a specific CDN setup.

---

#### `favicon`

```yaml
params:
  favicon: "/fav.png"
```

**Type:** String  
**Required:** Recommended

Path to your favicon file. Supported formats: `.png`, `.ico`, `.svg`

**Best Practices:**
- Use 32x32 or 64x64 pixels
- Place in `/static/` folder
- Name it something recognizable


#### `useBootstrapCDN`

```yaml
params:
  useBootstrapCDN: false
```

**Type:** Boolean or String  
**Default:** false  
**Options:** `true`, `false`, `"css"`, `"js"`

Controls whether to load Bootstrap from CDN.

- `true` - Load both CSS and JS from CDN
- `false` - Use local Bootstrap files
- `"css"` - Only CSS from CDN
- `"js"` - Only JS from CDN

**When to Use CDN:**
✅ Faster loading from global network  
✅ Browser caching across sites  
❌ Requires internet connection  
❌ Less control over versions

---

#### `cloudinary_cloud_name`

```yaml
params:
  cloudinary_cloud_name: "YOUR_CLOUD_NAME"
```

**Type:** String  
**Optional**

Enables dynamic responsive images from Cloudinary CDN.

**Prerequisites:**
1. Create a Cloudinary account
2. Upload images to Cloudinary
3. Replace `YOUR_CLOUD_NAME` with your actual cloud name

💡 **Tip:** Great for optimizing image loading performance.

---

#### `mathjax`

```yaml
params:
  mathjax: false
```

**Type:** Boolean  
**Default:** false

Enables MathJax for rendering mathematical equations.

```yaml
# Enable globally
mathjax: true

# Or enable per page in frontmatter
---
mathjax: true
---
```

**Example Usage:**
```markdown
$$E = mc^2$$
```

---

#### `animate`

```yaml
params:
  animate: true
```

**Type:** Boolean  
**Default:** true

Enables fade-in animations on the home page sections.

💡 **Tip:** Set to `false` if you prefer instant loading or have accessibility concerns.

---

### Theme Settings

Controls the theme toggle and default theme.

```yaml
params:
  theme:
    disableThemeToggle: true
    defaultTheme: "light"
```

**Parameters:**

#### `disableThemeToggle`

**Type:** Boolean  
**Default:** false

Removes the light/dark mode toggle button.

**When to Use:**
- You want to force a specific theme
- Your design only works in one mode

---

#### `defaultTheme`

**Type:** String  
**Options:** `"light"`, `"dark"`  
**Default:** `"light"`

Sets the initial theme before user selection.

---

### Font Configuration

Customize the typography of your site.

```yaml
params:
  font:
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    textAlign: left
```

**Parameters:**

#### `fontSize`

**Type:** String (CSS unit)  
**Default:** `1rem`  
**Examples:** `1rem`, `16px`, `1.2em`

Base font size for body text.

💡 **Tip:** Use `rem` units for better accessibility and responsive design.

---

#### `fontWeight`

**Type:** Integer  
**Default:** 400  
**Range:** 100-900

Controls text weight/boldness.

**Common Values:**
- `300` - Light
- `400` - Normal (default)
- `500` - Medium
- `600` - Semi-bold
- `700` - Bold

---

#### `lineHeight`

**Type:** Number  
**Default:** 1.5  
**Recommended:** 1.4-1.8

Space between lines of text.

💡 **Tip:** Higher values (1.6-1.8) improve readability for long-form content.

---

#### `textAlign`

**Type:** String  
**Options:** `left`, `center`, `right`, `justify`  
**Default:** `left`

Text alignment for body content.

⚠️ **Warning:** `justify` can create uneven spacing. Use with caution.

---

### Color Customization

Customize colors for light and dark modes.

```yaml
params:
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

**Light Mode Parameters:**

#### `textColor`

Main text color. Should have good contrast with `backgroundColor`.

**Recommended:** Dark colors (#000000 to #4a4a4a)

---

#### `secondaryTextColor`

For less important text (captions, metadata).

**Recommended:** Medium gray (#666666 to #999999)

---

#### `textLinkColor`

Color for hyperlinks.

**Best Practices:**
- Use your brand color
- Ensure sufficient contrast (WCAG AA: 4.5:1)
- Make it distinct from regular text

---

#### `backgroundColor`

Main background color for the page.

**Recommended:** Light colors (#ffffff to #f5f5f5)

---

#### `secondaryBackgroundColor`

For cards, sections, and highlighted areas.

**Recommended:** Slightly different from main background

---

#### `primaryColor`

Your brand's primary color. Used for buttons and accents.

---

#### `secondaryColor`

Supporting color for UI elements.

---

**Dark Mode Parameters:**

All the same parameters as light mode, but optimized for dark backgrounds.

**Best Practices for Dark Mode:**
- Use lighter text colors (#e0e0e0 to #ffffff)
- Use darker backgrounds (#000000 to #2a2a2a)
- Reduce contrast slightly to prevent eye strain
- Test with actual dark mode users

⚠️ **Important:** When using hex codes, quotations are required: `"#ffffff"`, not `#ffffff`.

---

## Navbar Configuration

Customize the navigation bar behavior and appearance.

```yaml
params:
  navbar:
    align: ms-auto
    brandLogo: "/logo.png"
    showBrandLogo: false
    brandName: "Hugo Profile"
    disableSearch: false
    searchPlaceholder: "Search"
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

### Parameters

#### `align`

**Type:** String  
**Options:** 
- `ms-auto` - Align left
- `mx-auto` - Align center
- `me-auto` - Align right

**Default:** `ms-auto`

Controls menu item alignment.

---

#### `brandLogo`

**Type:** String  
**Optional**

Path to custom logo image. Defaults to favicon if not set.

```yaml
brandLogo: "/logo.png"
```

**Recommended Size:** 40px height, variable width

---

#### `showBrandLogo`

**Type:** Boolean  
**Default:** true

Show/hide the brand logo in navbar.

---

#### `brandName`

**Type:** String  
**Default:** Site title

Text displayed next to logo in navbar.

💡 **Tip:** Use a shorter version of your title for mobile.

---

#### `disableSearch`

**Type:** Boolean  
**Default:** false

Enables/disables the search functionality.

**Prerequisites for Search:**
- Add `JSON` to output formats
- Have blog posts or content to search

---

#### `searchPlaceholder`

**Type:** String  
**Default:** "Search"

Placeholder text in the search box.

---

#### `stickyNavBar.enable`

**Type:** Boolean  
**Default:** true

Makes the navbar stick to the top when scrolling.

---

#### `stickyNavBar.showOnScrollUp`

**Type:** Boolean  
**Default:** true

Shows navbar when scrolling up, hides when scrolling down.

💡 **Tip:** Provides better mobile experience and more screen real estate.

---

#### `enableSeparator`

**Type:** Boolean  
**Default:** false

Adds visual separator between navbar and content.

---

#### `menus.disable*`

**Type:** Boolean  
**Default:** false

Control visibility of section links in navbar.

```yaml
menus:
  disableAbout: false       # Hide "About" link
  disableExperience: false  # Hide "Experience" link
  disableEducation: false   # Hide "Education" link
  disableProjects: false    # Hide "Projects" link
  disableAchievements: false # Hide "Achievements" link
  disableContact: false     # Hide "Contact" link
```

**Use Case:** Disable sections you're not using on your portfolio.

---

## Hero Section

The hero section is the first thing visitors see - your introduction and call-to-action.

```yaml
params:
  hero:
    enable: true
    intro: "Hi, my name is"
    title: "Isabella."
    subtitle: "I build things for the web"
    content: "A passionate web app developer. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and function correctly."
    image: /images/hero.svg
    bottomImage:
      enable: true
    roundImage: true
    button:
      enable: true
      name: "Resume"
      url: "#"
      download: true
      newPage: false
    socialLinks:
      fontAwesomeIcons:
        - icon: fab fa-github
          url: https://example.com
        - icon: fab fa-x-twitter
          url: https://example.com
      customIcons:
        - icon: /fav.png
          url: "https://example.com"
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the entire hero section.

---

#### `intro`

**Type:** String  
**Optional**

Small text above the title.

**Examples:**
- "Hi, my name is"
- "Hello, I'm"
- "Welcome! I'm"

---

#### `title`

**Type:** String  
**Required**

Your name or main headline.

💡 **Tip:** Keep it short and impactful. This is the biggest text on the page.

---

#### `subtitle`

**Type:** String  
**Optional**

Your tagline or role.

**Examples:**
- "Full Stack Developer"
- "I build things for the web"
- "Designer & Creative Technologist"

---

#### `content`

**Type:** String  
**Optional**

Longer description about yourself or what you do.

**Best Practices:**
- 2-3 sentences maximum
- Focus on value proposition
- Make it engaging and personal

---

#### `image`

**Type:** String  
**Required**

Path to hero image.

**Recommendations:**
- SVG for illustrations (scalable, small file size)
- PNG for photos with transparency
- JPEG for photographs
- Optimal size: 500-800px width

---

#### `bottomImage.enable`

**Type:** Boolean  
**Default:** true

Adds decorative bottom wave/shape image.

---

#### `roundImage`

**Type:** Boolean  
**Default:** false

Makes the hero image circular.

💡 **Tip:** Great for profile photos. Not recommended for illustrations or rectangular images.

---

#### `button.enable`

**Type:** Boolean  
**Default:** true

Shows/hides the call-to-action button.

---

#### `button.name`

**Type:** String  
**Default:** "Resume"

Button text.

**Examples:**
- "Resume"
- "Download CV"
- "Get in Touch"
- "Hire Me"

---

#### `button.url`

**Type:** String  
**Required**

Button link destination.

**Examples:**
```yaml
url: "#"                          # Link to contact section
url: "/resume.pdf"                # Link to PDF
url: "https://example.com"        # External link
```

---

#### `button.download`

**Type:** Boolean  
**Default:** false

When `true`, prompts browser to download the file instead of navigating.

**Use Cases:**
- Resume/CV PDFs
- Portfolio documents
- Any downloadable file

---

#### `button.newPage`

**Type:** Boolean  
**Default:** false

Opens link in a new tab when `true`.

💡 **Tip:** Use `true` for external links, `false` for internal navigation.

---

#### `socialLinks.fontAwesomeIcons`

**Type:** Array  
**Optional**

Social media links using Font Awesome icons.

```yaml
socialLinks:
  fontAwesomeIcons:
    - icon: fab fa-github
      url: https://github.com/yourusername
    - icon: fab fa-linkedin
      url: https://linkedin.com/in/yourusername
    - icon: fab fa-twitter
      url: https://twitter.com/yourusername
```

**Popular Icons:**
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` / `fab fa-x-twitter` - Twitter/X
- `fab fa-instagram` - Instagram
- `fab fa-youtube` - YouTube
- `fab fa-facebook` - Facebook
- `fab fa-dev` - Dev.to
- `fab fa-medium` - Medium
- `fab fa-stack-overflow` - Stack Overflow

🔗 **Find More Icons:** [fontawesome.com/icons](https://fontawesome.com/icons)

---

#### `socialLinks.customIcons`

**Type:** Array  
**Optional**

Custom social icons using your own images.

```yaml
socialLinks:
  customIcons:
    - icon: /fav.png
      url: "https://example.com"
```

**Use Cases:**
- Social platforms not in Font Awesome
- Company logos
- Personal branding


---

## About Section

Tell your story and showcase your skills.

```yaml
params:
  about:
    enable: true
    title: "About Me"
    image: "/images/me.png"
    content: |-
      I am a software developer with a passion for web development. I have a background in computer science and mathematics, and I have a strong interest in the intersection of technology and art.

      I am currently working as a software developer at [example org.](https://example.com) in San Francisco, CA.
    skills:
      enable: true
      title: "Here are a few technologies I've been working with recently:"
      items:
        - "HTML"
        - "CSS"
        - "JavaScript"
        - "React"
        - "Node"
        - "Express"
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the about section.

---

#### `title`

**Type:** String  
**Default:** "About Me"

Section heading.

**Alternatives:**
- "About"
- "Who I Am"
- "My Story"
- "Get to Know Me"

---

#### `image`

**Type:** String  
**Required**

Path to your photo or avatar.

**Best Practices:**
- Use square images (1:1 ratio)
- Minimum 400x400px
- Professional photo
- Good lighting and background
- Compress for web (< 200KB)

---

#### `content`

**Type:** String (Markdown)  
**Required**

Your bio and background information.

**Tips for Writing:**
- Start with who you are professionally
- Mention current role and location
- Highlight unique experiences or interests
- Keep it concise (2-4 paragraphs)
- Use markdown for formatting (links, bold, etc.)

**Markdown Support:**
```markdown
I am a **software developer** with expertise in:
- Web Development
- Cloud Computing
- UI/UX Design

Currently working at [Company Name](https://example.com).
```

---

#### `skills.enable`

**Type:** Boolean  
**Default:** true

Show/hide the skills subsection.

---

#### `skills.title`

**Type:** String  
**Optional**

Heading for skills list.

**Examples:**
- "Here are a few technologies I've been working with recently:"
- "Technical Skills"
- "Tools & Technologies"

---

#### `skills.items`

**Type:** Array of Strings  
**Optional**

List of your skills or technologies.

```yaml
skills:
  items:
    - "Python"
    - "Django"
    - "JavaScript"
    - "React"
    - "PostgreSQL"
    - "AWS"
    - "Docker"
    - "Git"
```

**Best Practices:**
- List 6-12 skills
- Most relevant skills first
- Be specific (not just "Programming")
- Keep it current

💡 **Tip:** Skills are displayed in a responsive grid layout.

---

## Experience Section

Showcase your work history and professional experience.

```yaml
params:
  experience:
    enable: true
    title: "Custom Name"
    items:
      - company: "Facebook"
        companyUrl: "https://example.com"
        jobs:
          - name: "Senior Software Developer"
            date: "Jan 2023 - present"
            content: "I am currently working as a senior software developer."
            info:
              content: Working as a senior software developer
            featuredItems:
              fontAwesomeIcons:
                - icon: fa-brands fa-react
                  url: https://react.dev/
                  tooltip: React Expert
              customIcons:
                - icon: /fav.png
                  url: "https://example.com"
                  tooltip: Custom Technology
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the experience section.

---

#### `title`

**Type:** String  
**Default:** "Experience"

Section heading.

**Alternatives:**
- "Work Experience"
- "Professional Experience"
- "Career History"

---

#### `items`

**Type:** Array  
**Required**

List of companies you've worked for.

---

### Company Parameters

#### `company`

**Type:** String  
**Required**

Company name.

---

#### `companyUrl`

**Type:** String  
**Optional**

Link to company website.

💡 **Tip:** Company name becomes clickable when URL is provided.

---

#### `jobs`

**Type:** Array  
**Required**

List of positions at this company. Supports multiple jobs per company.

---

### Job Parameters

#### `name`

**Type:** String  
**Required**

Job title or position name.

**Examples:**
- "Senior Software Developer"
- "Frontend Engineer"
- "Product Designer"
- "DevOps Engineer"

---

#### `date`

**Type:** String  
**Required**

Employment period.

**Format Examples:**
- "Jan 2023 - present"
- "June 2020 - Dec 2022"
- "2019 - 2020"
- "Summer 2021"

💡 **Tip:** Use "present" for current positions.

---

#### `content`

**Type:** String (Markdown)  
**Required**

Job description and responsibilities.

**Best Practices:**
```yaml
content: |
  Led development of customer-facing web application serving 100K+ users.

  - Architected and implemented microservices backend
  - Reduced page load time by 60%
  - Mentored junior developers
  - Technologies: React, Node.js, PostgreSQL, AWS
```

**Tips:**
- Use bullet points for achievements
- Quantify impact when possible
- Start bullets with action verbs
- Mention key technologies

---

#### `info.content`

**Type:** String  
**Optional**

Additional information or status displayed above job content.

**Examples:**
- "Currently working here"
- "Contract position"
- "Remote"
- "Part-time"

---

#### `featuredItems`

**Type:** Object  
**Optional**

Highlight technologies or achievements with icons.

---

##### `featuredItems.fontAwesomeIcons`

**Type:** Array  
**Optional**

Technology icons from Font Awesome.

```yaml
featuredItems:
  fontAwesomeIcons:
    - icon: fa-brands fa-react
      url: https://react.dev/
      tooltip: React.js Development
    - icon: fa-brands fa-python
      url: https://python.org/
      tooltip: Python Programming
```

**Parameters:**
- `icon` - Font Awesome icon class
- `url` - Link when icon is clicked (optional)
- `tooltip` - Text shown on hover (optional)

**Popular Technology Icons:**
- `fa-brands fa-react` - React
- `fa-brands fa-python` - Python
- `fa-brands fa-node` - Node.js
- `fa-brands fa-java` - Java
- `fa-brands fa-docker` - Docker
- `fa-brands fa-aws` - AWS

---

##### `featuredItems.customIcons`

**Type:** Array  
**Optional**

Custom technology icons using your own images.

```yaml
featuredItems:
  customIcons:
    - icon: /images/golang.png
      url: "https://golang.org"
      tooltip: Go Programming
```

---

### Multiple Jobs Example

```yaml
experience:
  items:
    - company: "Tech Corp"
      companyUrl: "https://techcorp.com"
      jobs:
        - name: "Senior Developer"
          date: "Jan 2023 - present"
          content: "Leading the frontend team."
        - name: "Software Developer"
          date: "Jan 2021 - Dec 2022"
          content: "Worked on backend services."
        - name: "Junior Developer"
          date: "June 2019 - Dec 2020"
          content: "Started my career here."
```

💡 **Tip:** Jobs within the same company are automatically grouped and visually connected.

---

## Education Section

Display your academic background and qualifications.

```yaml
params:
  education:
    enable: true
    title: "Custom Name"
    index: false
    items:
      - title: "Master of Business Administration"
        school:
          name: "University of California, Berkeley"
          url: "https://example.org"
        date: "2013 - 2015"
        GPA: "3.8 out of 5.0"
        content: |-
          Extracurricular Activities
            - Lorem ipsum dolor sit amet
            - Campus leader and volunteer
        featuredLink:
          enable: true
          name: "My academic record"
          url: "https://example.com"
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the education section.

---

#### `title`

**Type:** String  
**Default:** "Education"

Section heading.

---

#### `index`

**Type:** Boolean  
**Default:** false

When `true`, education entries are indexed by search engines.

💡 **Tip:** Set to `false` if you want this content private from search engines.

---

#### `items`

**Type:** Array  
**Required**

List of your educational qualifications.

---

### Education Entry Parameters

#### `title`

**Type:** String  
**Required**

Degree or qualification name.

**Examples:**
- "Bachelor of Science in Computer Science"
- "Master of Business Administration"
- "Ph.D. in Artificial Intelligence"
- "Certificate in Web Development"

---

#### `school.name`

**Type:** String  
**Required**

Institution name.

---

#### `school.url`

**Type:** String  
**Optional**

Link to institution website.

---

#### `date`

**Type:** String  
**Required**

Period of study.

**Examples:**
- "2015 - 2019"
- "2020 - present"
- "Expected 2025"

---

#### `GPA`

**Type:** String  
**Optional**

Grade point average or equivalent.

**Examples:**
- "3.8 out of 4.0"
- "First Class Honours"
- "4.0 GPA"
- "Summa Cum Laude"

💡 **Tip:** Include the scale for clarity.

---

#### `content`

**Type:** String (Markdown)  
**Optional**

Additional details about your education.

**What to Include:**
```yaml
content: |-
  Relevant Coursework
    - Machine Learning
    - Distributed Systems
    - Advanced Algorithms

  Extracurricular Activities
    - President, Computer Science Club
    - Volunteer tutor for coding bootcamp

  Publications
    - [Research Paper Title](https://example.com)
```

---

#### `featuredLink`

**Type:** Object  
**Optional**

Add a prominent link related to this education.

```yaml
featuredLink:
  enable: true
  name: "My academic record"
  url: "https://example.com"
```

**Use Cases:**
- Transcript
- Thesis or dissertation
- Academic portfolio
- Certificate


---

## Achievements Section

Highlight your accomplishments, awards, and recognition.

```yaml
params:
  achievements:
    enable: true
    title: "Custom Name"
    items:
      - title: Google kickstart runner
        content: I solved all problems with optimal solution.
        url: https://example.com
        image: /images/achievement.jpg
      - title: Facebook Hackathon Winner
        content: Developed a product using Artificial Intelligence.
        image: /images/achievement.jpg
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the achievements section.

---

#### `title`

**Type:** String  
**Default:** "Achievements"

Section heading.

**Alternatives:**
- "Awards & Recognition"
- "Accomplishments"
- "Honors"

---

#### `items`

**Type:** Array  
**Required**

List of achievements.

---

### Achievement Entry Parameters

#### `title`

**Type:** String  
**Required**

Achievement name or title.

**Examples:**
- "Best Paper Award"
- "Employee of the Year"
- "Open Source Contributor"
- "1st Place - Hackathon"

---

#### `content`

**Type:** String  
**Optional**

Description of the achievement.

**Best Practices:**
- Be specific about what you accomplished
- Quantify impact when possible
- Keep it concise (1-2 sentences)

---

#### `url`

**Type:** String  
**Optional**

Link to more information or proof.

**Examples:**
- Award website
- News article
- Certificate
- Project repository

💡 **Tip:** Achievement becomes clickable when URL is provided.

---

#### `image`

**Type:** String  
**Optional**

Image representing the achievement.

**Ideas:**
- Award trophy photo
- Certificate
- Logo of awarding organization
- Screenshot of accomplishment

**Recommended Size:** 400x300px or 16:9 ratio

---

## Projects Section

Showcase your portfolio projects and work samples.

```yaml
params:
  projects:
    enable: true
    title: "Custom Name"
    items:
      - title: Hugo Profile
        content: A highly customizable and mobile first Hugo template for personal portfolio and blog.
        image: /images/projects/profile.png
        featured:
          name: Demo
          link: https://hugo-profile.netlify.app
        badges:
          - "Hugo"
          - "Bootstrap"
          - "Javascript"
        links:
          - icon: fa fa-envelope
            url: mailto:?subject=Hugo%20Profile%20Template
          - icon: fab fa-github
            url: https://github.com/gurusabarish/hugo-profile
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the projects section.

---

#### `title`

**Type:** String  
**Default:** "Projects"

Section heading.

**Alternatives:**
- "Portfolio"
- "My Work"
- "Featured Projects"

---

#### `items`

**Type:** Array  
**Required**

List of projects.

---

### Project Entry Parameters

#### `title`

**Type:** String  
**Required**

Project name.

---

#### `content`

**Type:** String  
**Required**

Project description.

**Best Practices:**
- Explain what the project does
- Highlight key features
- Mention your role
- Keep it to 2-3 sentences

**Example:**
```yaml
content: A real-time chat application built with React and WebSockets. Features include user authentication, private messaging, and group chats. Handles 10,000+ concurrent users.
```

---

#### `image`

**Type:** String  
**Required**

Project screenshot or preview image.

**Best Practices:**
- Use actual project screenshots
- Show the main interface or key feature
- Recommended ratio: 16:9 or 4:3
- Optimize for web (< 500KB)
- Size: 800-1200px width

---

#### `featured`

**Type:** Object  
**Optional**

Primary call-to-action button for the project.

```yaml
featured:
  name: "Live Demo"
  link: "https://example.com"
```

**Parameters:**
- `name` - Button text ("Demo", "Live Site", "View Project")
- `link` - URL to demo or live version

---

#### `badges`

**Type:** Array of Strings  
**Optional**

Technologies or tags for the project.

```yaml
badges:
  - "React"
  - "Node.js"
  - "MongoDB"
  - "AWS"
  - "Docker"
```

**Best Practices:**
- List 3-6 main technologies
- Use recognizable names
- Most important tech first

💡 **Tip:** Badges are displayed as colored pills below the project description.

---

#### `links`

**Type:** Array  
**Optional**

Additional links for the project.

```yaml
links:
  - icon: fab fa-github
    url: https://github.com/username/repo
  - icon: fab fa-youtube
    url: https://youtube.com/watch?v=demo
  - icon: fa fa-globe
    url: https://project-site.com
```

**Common Link Types:**
- GitHub repository
- Live website
- Documentation
- Video demo
- Blog post
- Case study

**Icons:**
- `fab fa-github` - GitHub
- `fab fa-gitlab` - GitLab
- `fa fa-globe` - Website
- `fab fa-youtube` - Video
- `fa fa-book` - Documentation
- `fa fa-envelope` - Email/Share

---

## Contact Section

Enable visitors to get in touch with you.

```yaml
params:
  contact:
    enable: true
    title: "Custom Name"
    content: My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
    btnName: Mail me
    btnLink: mailto:your@email.com
    formspree:
      enable: true
      formId: abcdefgh
      emailCaption: "Enter your email address"
      messageCaption: "Enter your message here"
      messageRows: 5
```

### Parameters

#### `enable`

**Type:** Boolean  
**Default:** true

Show/hide the contact section.

---

#### `title`

**Type:** String  
**Default:** "Contact"

Section heading.

**Alternatives:**
- "Get In Touch"
- "Contact Me"
- "Let's Talk"
- "Reach Out"

---

#### `content`

**Type:** String  
**Optional**

Introductory text for the contact section.

**Examples:**
```yaml
content: "I'm always interested in hearing about new opportunities and projects. Feel free to reach out!"

content: "Currently available for freelance work and collaborations."

content: "Have a question or want to work together? Drop me a message!"
```

---

#### `btnName`

**Type:** String  
**Default:** "Contact"

Button text.

**Examples:**
- "Mail me"
- "Send Message"
- "Get in Touch"
- "Say Hello"

---

#### `btnLink`

**Type:** String  
**Required**

Button destination.

**Options:**

**Email Link:**
```yaml
btnLink: mailto:your@email.com
```

**Contact Form:**
```yaml
btnLink: /contact
```

**External Form:**
```yaml
btnLink: https://forms.gle/yourform
```

**Calendly:**
```yaml
btnLink: https://calendly.com/yourusername
```

---

### FormSpree Integration

FormSpree provides easy form backend without server-side code.

#### `formspree.enable`

**Type:** Boolean  
**Default:** false

Enables FormSpree contact form.

**Prerequisites:**
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID

⚠️ **Note:** When FormSpree is enabled, `btnLink` is ignored.

---

#### `formspree.formId`

**Type:** String  
**Required** (when FormSpree enabled)

Your FormSpree form ID from the endpoint URL.

**Example:**
- Endpoint: `https://formspree.io/f/abcdefgh`
- FormId: `abcdefgh`

---

#### `formspree.emailCaption`

**Type:** String  
**Default:** "Email"

Label for email input field.

---

#### `formspree.messageCaption`

**Type:** String  
**Default:** "Message"

Label for message textarea.

---

#### `formspree.messageRows`

**Type:** Integer  
**Default:** 5

Number of visible rows in message textarea.

---

### Contact Section Examples

**Simple Email Button:**
```yaml
contact:
  enable: true
  content: "Feel free to reach out!"
  btnName: "Email Me"
  btnLink: "mailto:your@email.com"
```

**With FormSpree:**
```yaml
contact:
  enable: true
  content: "I'd love to hear from you!"
  formspree:
    enable: true
    formId: "xyzabc123"
    emailCaption: "Your Email"
    messageCaption: "What's on your mind?"
    messageRows: 8
```


---

## Footer Configuration

Customize the footer content and appearance.

```yaml
params:
  footer:
    recentPosts:
      path: "blogs"
      count: 3
      title: Recent Posts
      enable: true
      disableFeaturedImage: false
    socialNetworks:
      github: https://github.com/yourusername
      linkedin: https://linkedin.com/in/yourusername
      twitter: https://twitter.com/yourusername
      instagram: https://instagram.com/yourusername
      facebook: https://facebook.com/yourusername
```

### Recent Posts

#### `recentPosts.enable`

**Type:** Boolean  
**Default:** true

Show/hide recent posts in footer.

---

#### `recentPosts.path`

**Type:** String  
**Default:** "blogs"

Content section to pull posts from.

💡 **Tip:** Must match your content folder name (e.g., `content/blogs/`).

---

#### `recentPosts.count`

**Type:** Integer  
**Default:** 3

Number of recent posts to display.

**Recommended:** 3-5

---

#### `recentPosts.title`

**Type:** String  
**Default:** "Recent Posts"

Heading for recent posts section.

---

#### `recentPosts.disableFeaturedImage`

**Type:** Boolean  
**Default:** false

Hide featured images in footer post list.

---

### Social Networks

Direct links to your social media profiles.

```yaml
socialNetworks:
  github: https://github.com/username
  linkedin: https://linkedin.com/in/username
  twitter: https://twitter.com/username
  instagram: https://instagram.com/username
  facebook: https://facebook.com/username
  youtube: https://youtube.com/@username
  medium: https://medium.com/@username
  dev: https://dev.to/username
  stackoverflow: https://stackoverflow.com/users/id/username
  reddit: https://reddit.com/u/username
  dribbble: https://dribbble.com/username
  behance: https://behance.net/username
```

💡 **Tip:** Only include platforms you're active on. Empty entries are automatically hidden.

**Best Practices:**
- Use full URLs
- Keep list to 5-7 platforms
- Update profile URLs to your actual accounts

---

## Page Settings

### List Pages

Settings for blog list and archive pages.

```yaml
params:
  listPages:
    disableFeaturedImage: false
```

#### `disableFeaturedImage`

**Type:** Boolean  
**Default:** false

Hide featured images on blog list pages.

**Use Cases:**
- Minimalist design preference
- Faster page loading
- Text-focused blog

---

### Single Pages

Settings for individual blog posts and content pages.

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

#### `socialShare`

**Type:** Boolean  
**Default:** true

Enable social media sharing buttons on posts.

---

#### `readTime.enable`

**Type:** Boolean  
**Default:** true

Show estimated reading time.

---

#### `readTime.content`

**Type:** String  
**Default:** "min read"

Text appended to reading time.

**Examples:**
- "5 min read"
- "5 minutes"
- "5 min"

---

#### `scrollprogress.enable`

**Type:** Boolean  
**Default:** true

Show reading progress bar at top of page.

💡 **Tip:** Great for long-form content. Shows how much of the article has been read.

---

#### `tags.openInNewTab`

**Type:** Boolean  
**Default:** true

Opens tag pages in new tab when clicked.

---

## Translations and Terms

Customize text strings used throughout the theme.

```yaml
params:
  terms:
    read: "Read"
    toc: "Table Of Contents"
    copyright: "All rights reserved"
    pageNotFound: "Page not found"
    emailText: "Check out this site"
```

### Parameters

#### `read`

**Type:** String  
**Default:** "Read"

Button text for "Read More" on blog cards.

**Alternatives:**
- "Read More"
- "Continue Reading"
- "View Post"

---

#### `toc`

**Type:** String  
**Default:** "Table Of Contents"

Heading for table of contents in blog posts.

---

#### `copyright`

**Type:** String  
**Default:** "All rights reserved"

Copyright text in footer.

**Examples:**
- "All rights reserved"
- "CC BY-SA 4.0"
- "Open Source"

---

#### `pageNotFound`

**Type:** String  
**Default:** "Page not found"

404 error page heading.

---

#### `emailText`

**Type:** String  
**Default:** "Check out this site"

Default subject/message for email sharing.

---

## Date Formats

Customize how dates are displayed throughout the site.

```yaml
params:
  datesFormat:
    article: "Jan 2, 2006"
    articleList: "Jan 2, 2006"
    articleRecent: "Jan 2, 2006"
```

### Format String

Uses Go's time format reference date: `Jan 2 15:04:05 2006 MST`

**Common Formats:**

```yaml
# January 2, 2006
article: "January 2, 2006"

# Jan 2, 2006
article: "Jan 2, 2006"

# 01/02/2006
article: "01/02/2006"

# 2006-01-02
article: "2006-01-02"

# 2 Jan 2006
article: "2 Jan 2006"

# Monday, January 2, 2006
article: "Monday, January 2, 2006"
```

### Parameters

#### `article`

Date format for full blog posts.

---

#### `articleList`

Date format for blog list pages.

---

#### `articleRecent`

Date format for recent posts (footer, sidebar).

💡 **Tip:** Use shorter formats for lists and longer formats for full articles.

---

## Custom Scripts

Add custom JavaScript or analytics code.

```yaml
params:
  customScripts: |-
    <script type="text/javascript">
      // Your custom JavaScript here
      console.log('Custom script loaded');
    </script>
```

**Type:** String (HTML)  
**Optional**

Inserted before closing `</body>` tag.

**Use Cases:**
- Custom analytics (beyond Google Analytics)
- Third-party widgets
- Custom JavaScript functionality
- Chat widgets
- A/B testing scripts

**Example - Multiple Scripts:**
```yaml
customScripts: |-
  <!-- Analytics -->
  <script async src="https://analytics.example.com/script.js"></script>

  <!-- Chat Widget -->
  <script>
    window.chatConfig = { apiKey: 'your-key' };
  </script>
  <script src="https://chat.example.com/widget.js"></script>

  <!-- Custom Function -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Site loaded!');
    });
  </script>
```

⚠️ **Security Warning:** Only add scripts from trusted sources. Malicious scripts can compromise your site and visitors' security.

---

## Best Practices

### General Tips

1. **Start Simple**
   - Begin with minimal configuration
   - Add features gradually
   - Test after each change

2. **Performance**
   - Optimize images before uploading
   - Use WebP format when possible
   - Enable CDN for Bootstrap if needed
   - Compress large files

3. **SEO**
   - Fill in all meta descriptions
   - Use descriptive titles
   - Enable `enableRobotsTXT`
   - Include relevant keywords naturally
   - Set correct `baseURL`

4. **Accessibility**
   - Ensure good color contrast
   - Provide alt text for images
   - Use semantic HTML in content
   - Test with screen readers
   - Consider disabling animations if needed

5. **Mobile Responsiveness**
   - Test on multiple devices
   - Keep navbar simple
   - Use appropriate image sizes
   - Test touch interactions

6. **Content**
   - Keep text concise and scannable
   - Use bullet points
   - Break up long paragraphs
   - Include relevant links
   - Update regularly

### Configuration Tips

1. **YAML Syntax**
   ```yaml
   # ✅ Correct
   title: "My Site"
   enable: true
   count: 5

   # ❌ Incorrect
   title: My Site      # Missing quotes (use quotes for safety)
   enable: "true"      # Should be boolean, not string
   count: "5"          # Should be number, not string
   ```

2. **Quotes Usage**
   ```yaml
   # Always use quotes for:
   color: "#ffffff"    # Hex colors
   url: "https://..."  # URLs
   text: "It's fine"   # Text with apostrophes

   # Optional quotes for:
   name: "John"        # Simple text (but recommended)
   title: "My Title"   # Titles
   ```

3. **Multiline Text**
   ```yaml
   # Use |-  for multiline without trailing newline
   content: |-
     First paragraph.

     Second paragraph.

   # Use |   for multiline with trailing newline
   content: |
     Text with
     trailing newline.
   ```

4. **Comments**
   ```yaml
   # This is a comment
   title: "My Site"  # Inline comment

   # Disable a feature by commenting out:
   # enable: true
   ```


---

## Common Use Cases

### Minimal Portfolio

For a simple portfolio without blog:

```yaml
params:
  navbar:
    disableSearch: true  # No blog = no search needed
    menus:
      disableAbout: false
      disableExperience: false
      disableEducation: true     # Skip if not relevant
      disableProjects: false
      disableAchievements: true  # Skip if not needed
      disableContact: false

  hero:
    enable: true
    # ... hero config

  about:
    enable: true
    skills:
      enable: true

  experience:
    enable: true

  projects:
    enable: true

  contact:
    enable: true

  footer:
    recentPosts:
      enable: false  # No blog posts
```

---

### Developer Portfolio

For software developers:

```yaml
params:
  hero:
    subtitle: "Full Stack Developer"
    socialLinks:
      fontAwesomeIcons:
        - icon: fab fa-github
        - icon: fab fa-linkedin
        - icon: fab fa-stack-overflow
        - icon: fab fa-dev

  about:
    skills:
      items:
        - "JavaScript/TypeScript"
        - "React/Next.js"
        - "Node.js"
        - "Python"
        - "PostgreSQL"
        - "AWS"
        - "Docker/Kubernetes"
        - "Git/CI/CD"

  experience:
    # Show detailed work history

  projects:
    # Feature 4-6 best projects
    # Include GitHub links
    # Show live demos
```

---

### Designer Portfolio

For designers and creatives:

```yaml
params:
  hero:
    subtitle: "UI/UX Designer & Creative"
    image: /images/creative-hero.svg
    roundImage: false  # Use full illustration

  navbar:
    menus:
      disableExperience: true     # Optional
      disableEducation: true      # Optional
      disableAchievements: true   # Optional

  projects:
    enable: true
    # Focus on visual projects
    # Large, high-quality images
    # Link to Behance/Dribbble

  footer:
    socialNetworks:
      behance: https://behance.net/username
      dribbble: https://dribbble.com/username
      instagram: https://instagram.com/username
```

---

### Blog-Focused Site

For content creators:

```yaml
Menus:
  main:
    - identifier: blog
      name: Blog
      url: /blogs
      weight: 1
    - identifier: about
      name: About
      url: /#about
      weight: 2

params:
  navbar:
    disableSearch: false  # Enable search

  hero:
    enable: true
    content: "Writing about technology, design, and life."

  # Minimize or disable other sections
  experience:
    enable: false
  education:
    enable: false
  projects:
    enable: false
  achievements:
    enable: false

  # Focus on blog settings
  listPages:
    disableFeaturedImage: false

  singlePages:
    socialShare: true
    readTime:
      enable: true
    scrollprogress:
      enable: true

  footer:
    recentPosts:
      enable: true
      count: 5
```

---

### Student/Entry Level

For students or early career:

```yaml
params:
  hero:
    intro: "Hi, I'm"
    title: "Jane Doe"
    subtitle: "Computer Science Student"
    button:
      name: "View Resume"
      url: "/resume.pdf"
      download: true

  about:
    # Mention school, interests, learning goals

  education:
    enable: true
    # List education prominently

  experience:
    # Include internships, part-time jobs, volunteer work

  projects:
    # Showcase school projects, hackathons, personal projects

  achievements:
    # Scholarships, awards, hackathon wins
```

---

### Freelancer

For freelance professionals:

```yaml
params:
  hero:
    subtitle: "Freelance Web Developer"
    content: "Available for hire. Building custom web solutions for businesses."
    button:
      enable: true
      name: "Hire Me"
      url: "#contact"

  about:
    content: |-
      I'm a freelance developer specializing in React and Node.js.
      Currently accepting new clients for Q1 2024.

  experience:
    # Show client work, project-based

  projects:
    # Feature client projects (with permission)
    # Include case studies

  contact:
    enable: true
    content: "Currently accepting new projects. Let's discuss how I can help bring your ideas to life!"
    formspree:
      enable: true
```

---

## Troubleshooting

### Common Issues

**Issue: Colors not working**
```yaml
# ❌ Wrong - missing quotes
color: #ffffff

# ✅ Correct
color: "#ffffff"
```

**Issue: Boolean not recognized**
```yaml
# ❌ Wrong - boolean as string
enable: "true"

# ✅ Correct - boolean without quotes
enable: true
```

**Issue: Multiline content not formatting correctly**
```yaml
# ✅ Use |- for clean multiline text
content: |-
  First line
  Second line
```

**Issue: Images not loading**
- Check file path (starts with `/`)
- Verify file exists in `/static/` folder
- Check file name capitalization
- Ensure correct file extension

**Issue: Social links not showing**
- Verify icon class name (check Font Awesome)
- Use full URLs including `https://`
- Check for typos in YAML structure

---

## Quick Reference Card

### Essential Settings Checklist

```yaml
# Basic Setup
baseURL: "https://yoursite.com"  ✅
title: "Your Name"  ✅
theme: hugo-profile  ✅

# SEO
enableRobotsTXT: true  ✅
params:
  description: "..."  ✅

# Appearance
params:
  useBootstrapCDN: false
  animate: true
  theme:
    defaultTheme: "light"

# Sections
  hero:
    enable: true  ✅
  about:
    enable: true  ✅
  experience:
    enable: true
  education:
    enable: true
  projects:
    enable: true  ✅
  contact:
    enable: true  ✅
```

---

## Additional Resources

- **Theme Repository:** [github.com/gurusabarish/hugo-profile](https://github.com/gurusabarish/hugo-profile)
- **Hugo Documentation:** [gohugo.io/documentation/](https://gohugo.io/documentation/)
- **Font Awesome Icons:** [fontawesome.com/icons](https://fontawesome.com/icons)
- **YAML Syntax:** [yaml.org](https://yaml.org/)
- **Markdown Guide:** [markdownguide.org](https://www.markdownguide.org/)

---

## Getting Help

If you're stuck or have questions:

1. Check this documentation thoroughly
2. Review the example site configuration
3. Search existing GitHub issues
4. Create a new GitHub issue with:
   - Your Hugo version
   - Your configuration file
   - Description of the problem
   - Screenshots if applicable

---

**Happy building! 🚀**

*This documentation is maintained by the Hugo Profile community. Last updated: 2024*
