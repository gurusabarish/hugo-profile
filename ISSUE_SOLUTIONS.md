# Hugo Profile - Issue Solutions Guide

This document provides comprehensive solutions and guidance for open issues that can be resolved through configuration changes, documentation, or workarounds rather than code changes to the theme.

**Note:** Issues #225 and #247 have already been addressed and are not included in this guide.

---

## Table of Contents

1. [Configuration & How-To Questions](#configuration--how-to-questions)
2. [Feature Requests & Workarounds](#feature-requests--workarounds)
3. [Build & Deployment Issues](#build--deployment-issues)
4. [Display Issues](#display-issues)
5. [Enhancement Requests](#enhancement-requests)
6. [Technical Improvements](#technical-improvements)
7. [Internationalization](#internationalization)
8. [Other Issues](#other-issues)

---

## Configuration & How-To Questions

### Issue #243: How do I change images?

**Type:** Configuration Help

**Solution:**

Hello! Thank you for using Hugo Profile. Here's a comprehensive guide to working with images:

#### Image Path Requirements

Images in Hugo need to be placed in the `static/` directory of your site (not the theme directory). The path you specify in `hugo.yaml` is relative to the `static/` folder.

#### Step-by-Step Guide:

1. **Place your images in the static directory:**
   ```
   your-site/
   └── static/
       └── images/
           ├── ML_classifier_ex.png
           ├── hero.svg
           └── projects/
               └── your-project.png
   ```

2. **Reference them in hugo.yaml with a leading slash:**
   ```yaml
   projects:
     enable: true
     items:
       - title: ML Song Segmentation Classification
         content: An analysis of different Machine Learning algorithms...
         image: /images/ML_classifier_ex.png  # Note the leading slash
   ```

#### Common Issues & Solutions:

**Problem: Images not showing after deployment**
- Make sure you're using the correct base URL in `hugo.yaml`
- For GitHub Pages, set: `baseURL: "https://yourusername.github.io/repository-name/"`
- Images need the leading slash: `/images/file.png`

**Problem: Images work locally but not in production**
- Run `hugo` command to build your site
- Check the `public/` directory - your images should be there
- Verify the `baseURL` matches your deployment URL exactly

#### Image Format Support:

Hugo (and browsers) support all common image formats:
- `.png` ✓
- `.jpg` / `.jpeg` ✓
- `.svg` ✓
- `.webp` ✓
- `.gif` ✓

There's no inherent size limit from the theme, but keep images optimized:
- Profile/hero images: ~500KB or less
- Project thumbnails: ~200KB or less
- Use tools like TinyPNG or Squoosh for optimization

#### Troubleshooting Checklist:

1. ✓ Images are in `static/` directory (not `themes/hugo-profile/static/`)
2. ✓ Paths start with `/` (e.g., `/images/photo.png`)
3. ✓ File names match exactly (case-sensitive on Linux servers)
4. ✓ Run `hugo` to rebuild after adding images
5. ✓ Clear browser cache if images still show old versions

#### For Your Site:

Looking at https://pereiraa10.github.io/, make sure:
- Images are in your repository's `static/images/` folder
- The `baseURL` in `hugo.yaml` is set to `https://pereiraa10.github.io/`
- After pushing changes, GitHub Pages may take a few minutes to rebuild

**Additional Resources:**
- [Hugo Static Files Documentation](https://gohugo.io/content-management/static-files/)
- [Hugo Content Organization](https://gohugo.io/content-management/organization/)

---

### Issue #210: How to change the background image?

**Type:** Configuration Help

**Solution:**

Hi! Great question about customizing the background. The Hugo Profile theme doesn't have a built-in background image feature by default, but you can easily add one with custom CSS.

#### Method 1: Add Background to Hero Section

Add this to your site (create file if it doesn't exist):
`static/css/custom.css`

```css
/* Add background image to hero section */
#hero {
    background-image: url('/images/your-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

/* Optional: Add overlay for better text readability */
#hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
}
```

#### Method 2: Full Page Background

```css
/* Add background to entire page */
body {
    background-image: url('/images/your-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

/* Make sections semi-transparent to see background */
#content > section {
    background-color: rgba(255, 255, 255, 0.95);
}

/* For dark mode */
[data-theme="dark"] #content > section {
    background-color: rgba(24, 25, 26, 0.95);
}
```

#### How to Include Your Custom CSS:

Add this to your `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="/css/custom.css">
```

#### Steps:

1. Create your custom CSS file: `static/css/custom.css`
2. Add your background styles (use examples above)
3. Place your background image in: `static/images/your-background.jpg`
4. Update `hugo.yaml` to include the custom CSS
5. Restart `hugo server` to see changes

#### Tips:

- Use high-quality images (1920x1080 or larger)
- Optimize image size (aim for under 500KB using tools like TinyPNG)
- Test in both light and dark modes
- Consider using subtle patterns instead of photos for better readability

**Alternative - Use Hero Bottom Image:**

The theme has a built-in `bottomImage` feature in the hero section:

```yaml
params:
  hero:
    enable: true
    bottomImage:
      enable: true
      # This shows a wave pattern at bottom of hero
```

This is useful for decorative elements but won't give you a full background image.

Let me know if you need help implementing any of these solutions!

---

### Issue #181: How to change font family?

**Type:** Configuration Help

**Solution:**

Hello! Changing the font family is straightforward. Here's the complete guide:

#### Method 1: Override in Custom CSS (Recommended)

Create `static/css/custom.css` in your site:

```css
/* Change the main body font */
body {
    font-family: "Your Font Name", sans-serif !important;
}

/* Change primary font (used in headings, navigation) */
.primary-font, #primary-font {
    font-family: "Your Heading Font", sans-serif;
}

/* Change secondary font */
.secondary-font, #secondary-font {
    font-family: "Your Secondary Font", serif;
}
```

Then include it in your `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="/css/custom.css">
```

#### Method 2: Using Google Fonts

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your fonts (e.g., "Poppins", "Inter", "Roboto")
3. Copy the `<link>` tag Google provides
4. Add to your `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/custom.css">
```

5. Create `static/css/custom.css`:

```css
body {
    font-family: "Poppins", sans-serif !important;
}

.primary-font, #primary-font {
    font-family: "Poppins", sans-serif;
}
```

#### Method 3: Using Local/Downloaded Fonts

If you want to host fonts locally:

1. Download font files (.woff2, .woff, .ttf)
2. Place them in `static/fonts/`:
   ```
   static/
   └── fonts/
       ├── YourFont-Regular.woff2
       ├── YourFont-Bold.woff2
       └── ...
   ```

3. Create `static/css/custom.css`:

```css
/* Define your custom font */
@font-face {
    font-family: 'Your Font Name';
    src: url('/fonts/YourFont-Regular.woff2') format('woff2'),
         url('/fonts/YourFont-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Your Font Name';
    src: url('/fonts/YourFont-Bold.woff2') format('woff2'),
         url('/fonts/YourFont-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Apply the font */
body {
    font-family: "Your Font Name", sans-serif !important;
}
```

#### Why You Shouldn't Edit `themes/hugo-profile/static/css/font.css` Directly:

- Theme updates will overwrite your changes
- The syncing loop you experienced happens because Hugo rebuilds when theme files change
- Custom CSS keeps your changes separate and safe

#### Full Example (Poppins font from Google Fonts):

**hugo.yaml:**
```yaml
params:
  customScripts: |
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/custom.css">
```

**static/css/custom.css:**
```css
/* Main body text */
body {
    font-family: "Poppins", sans-serif !important;
}

/* Headings and navigation */
.primary-font, #primary-font,
h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", serif;
}

/* Secondary text */
.secondary-font, #secondary-font {
    font-family: "Poppins", sans-serif;
}

.default-font, #default-font {
    font-family: "Poppins", sans-serif;
}
```

#### Testing Your Changes:

1. Stop `hugo server` if running (Ctrl+C)
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Restart: `hugo server`
4. Check your site at http://localhost:1313

This approach ensures your changes persist through theme updates and won't cause infinite rebuild loops!

---


## Feature Requests & Workarounds

### Issue #248: How to arrange items into 3+ cols? default 2 is few for labels in large numbers

**Type:** CSS Customization

**Solution:**

Hello! Thank you for using the theme! You can definitely customize the number of columns for your skills or badges. Here's how:

#### Solution: Custom CSS for Multiple Columns

Create or edit `static/css/custom.css`:

```css
/* Change skills section to 3 columns */
#about .skills-list {
    column-count: 3 !important;
    column-gap: 1.5rem;
}

/* For tablets - 2 columns */
@media (max-width: 768px) {
    #about .skills-list {
        column-count: 2 !important;
    }
}

/* For mobile - 1 column */
@media (max-width: 480px) {
    #about .skills-list {
        column-count: 1 !important;
    }
}
```

#### For Project Badges (if that's what you're customizing):

```css
/* Make badges wrap into more columns */
#projects .badges {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 0.5rem;
}

/* Responsive - 2 columns on tablets */
@media (max-width: 768px) {
    #projects .badges {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

/* 1 column on mobile */
@media (max-width: 480px) {
    #projects .badges {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}
```

#### For 4 or More Columns:

Simply change the number in `repeat(3, 1fr)` to whatever you need:
- 4 columns: `repeat(4, 1fr)`
- 5 columns: `repeat(5, 1fr)`
- 6 columns: `repeat(6, 1fr)`

#### Alternative - Using Flexbox:

```css
#about .skills-list {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between;
}

#about .skills-list li {
    flex: 0 0 30% !important; /* 3 columns = 30% each */
    margin-bottom: 1rem;
}

/* 4 columns would be: flex: 0 0 23%; */
/* 5 columns would be: flex: 0 0 18%; */
```

#### How to Apply:

1. Create `static/css/custom.css` with the code above
2. Add to your `hugo.yaml`:
   ```yaml
   params:
     customScripts: |
       <link rel="stylesheet" href="/css/custom.css">
   ```
3. Restart `hugo server`

#### For Your Specific Use Case (12+ items):

I'd recommend 3-4 columns on desktop, which provides good readability. Here's a complete solution:

```css
/* Skills section - 4 columns for many items */
#about .skills-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    list-style: none;
    padding: 0;
}

/* 3 columns on smaller desktops */
@media (max-width: 1200px) {
    #about .skills-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* 2 columns on tablets */
@media (max-width: 768px) {
    #about .skills-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 1 column on mobile */
@media (max-width: 480px) {
    #about .skills-list {
        grid-template-columns: repeat(1, 1fr);
    }
}
```

This will give you a clean, responsive layout that adapts to different screen sizes. Let me know if you need any adjustments!

---

### Issue #162: Control number of Articles displayed per page for blogs

**Type:** Configuration Help

**Solution:**

Hello! You can easily control the number of articles per page. This is a Hugo configuration setting.

#### Solution:

Add or modify this in your `hugo.yaml`:

```yaml
pagination:
  pagerSize: 9  # Change 3 to any number you want
```

By default, the example site uses `pagerSize: 3`, but you can change it to any number:
- 6 articles per page: `pagerSize: 6`
- 9 articles per page: `pagerSize: 9`
- 12 articles per page: `pagerSize: 12`

#### Complete Example:

```yaml
baseURL: "https://yoursite.com"
languageCode: "en-us"
title: "Your Site"
theme: hugo-profile

pagination:
  pagerSize: 9  # Number of posts per page

outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"
```

#### Different Pagination for Different Sections:

If you want different pagination settings for different sections, you can create section-specific configs. However, the simpler approach is to use the global `pagerSize` setting.

#### Testing:

1. Update `pagerSize` in `hugo.yaml`
2. Restart `hugo server`
3. Navigate to your blog list page (e.g., `/blogs/`)
4. If you have more posts than `pagerSize`, you'll see pagination links at the bottom

**Note:** The `footer.recentPosts.count` setting (which you correctly mentioned can be changed) only affects the "Recent Posts" section in the footer. The `pagination.pagerSize` controls the main blog list page.

**Hugo Documentation:**
- [Pagination Documentation](https://gohugo.io/templates/pagination/)
- [Configure Pagination](https://gohugo.io/getting-started/configuration/#configure-pagination)

Hope this helps! Let me know if you need anything else.

---

### Issue #189: [suggestion] Limit `recent posts` to main page only

**Type:** Configuration Workaround

**Solution:**

Great observation! You're right that having the same recent posts on every page can feel redundant. While the theme doesn't have a built-in config option for this yet, here's a workaround:

#### Workaround: Disable Recent Posts on Blog Pages

You can use custom CSS to hide recent posts on specific pages:

Create `static/css/custom.css`:

```css
/* Hide recent posts on blog list page */
body.list #recent-posts {
    display: none;
}

/* Hide recent posts on individual blog posts */
body.single #recent-posts {
    display: none;
}

/* Keep recent posts only on home page */
/* Home page typically has body.home class, so no changes needed */
```

This hides recent posts on blog-related pages while keeping them on the main homepage.

#### Alternative: Conditional Display

If you want more control, you can also disable the footer recent posts entirely and only show them in a specific section on your homepage:

In `hugo.yaml`:

```yaml
params:
  footer:
    recentPosts:
      enable: false  # Disable in footer globally
```

Then, you could create a custom section on your homepage if you still want to show recent posts there.

#### Better Solution (Requires Theme Modification):

If you're comfortable with a small theme modification, you could:

1. Copy `layouts/partials/sections/footer/index.html` to your site's `layouts/partials/sections/footer/index.html`
2. Modify the recent posts section to check the page type:

```html
{{- if and (site.Params.footer.recentPosts.enable) (eq .Kind "home") -}}
    <!-- Recent posts content here -->
{{- end -}}
```

This modification would make recent posts show only on the home page. However, remember that copying theme files means you'll need to manually update them if the theme changes.

#### Recommendation:

I'd suggest using the CSS approach first (simplest and safest). If you want a permanent solution, consider opening a feature request for a configuration option like:

```yaml
footer:
  recentPosts:
    enable: true
    showOnHome: true
    showOnBlogList: false
    showOnSingle: false
```

This would give users fine-grained control without modifying theme files.

---

### Issue #199: Volunteer Section

**Type:** Feature Request with Workaround

**Solution:**

Hello! Great suggestion! While there isn't a dedicated volunteer section yet, you can easily add volunteer experience using the existing Experience section. Here's how:

#### Solution 1: Use the Experience Section

The Experience section is flexible and can accommodate volunteer work:

```yaml
params:
  experience:
    enable: true
    title: "Experience & Volunteering"  # Customize the title
    items:
      # Paid work experience
      - company: "Tech Company"
        companyUrl: "https://example.com"
        jobs:
          - name: "Software Developer"
            date: "Jan 2020 - Present"
            content: "Full-time software development role..."
      
      # Volunteer experience
      - company: "Local Non-Profit"
        companyUrl: "https://nonprofit.org"
        jobs:
          - name: "Volunteer Developer"
            date: "Jan 2019 - Dec 2019"
            content: |
              🌟 **Volunteer Position**
              
              Built and maintained the organization's website, helping them reach 1000+ beneficiaries.
              
              - Developed responsive website using modern web technologies
              - Trained staff on content management
              - Implemented donation system
            info:
              content: "Volunteer role"
      
      - company: "Community Coding Initiative"
        companyUrl: "https://example.org"
        jobs:
          - name: "Volunteer Instructor"
            date: "Mar 2018 - Dec 2018"
            content: |
              🌟 **Volunteer Teaching Role**
              
              Taught programming fundamentals to underprivileged youth.
              
              - Designed curriculum for Python basics
              - Mentored 20+ students
              - Organized coding workshops
```

#### Solution 2: Create a Custom "Volunteering" Section

If you want a completely separate section, you can create a custom achievements section specifically for volunteering:

```yaml
params:
  achievements:
    enable: true
    title: "Volunteer Work"  # Change the title
    items:
      - title: Red Cross Volunteer
        content: |
          Provided disaster relief support and organized blood donation drives.
          Contributed 200+ hours of service.
        url: https://redcross.org
        image: /images/redcross-logo.png
      
      - title: Open Source Contributor
        content: |
          Active contributor to various open-source projects.
          Helped improve documentation and fixed bugs.
        url: https://github.com/yourusername
        image: /images/opensource-logo.png
      
      - title: Habitat for Humanity
        content: |
          Participated in building homes for families in need.
          Worked on 5 home construction projects.
        url: https://habitat.org
        image: /images/habitat-logo.png
```

#### Solution 3: Visual Distinction for Volunteer Work

Use emojis or formatting to visually distinguish volunteer work from paid positions:

```yaml
experience:
  items:
    - company: "🌟 Local Youth Center (Volunteer)"
      companyUrl: "https://youthcenter.org"
      jobs:
        - name: "Volunteer Coding Instructor"
          date: "2019 - 2020"
          content: "Taught programming to young students..."
```

#### Recommended Approach:

I'd suggest **Solution 1** - using the Experience section with clear labels. This keeps all your professional timeline in one place, which is how most resumes are structured. Use formatting to distinguish between paid and volunteer roles:

- Add 🌟 or "Volunteer" in the position name
- Use the `info.content` field to specify it's volunteer work
- Group volunteer experiences together (put them all at the end, or in chronological order with paid work)

#### If You Want a Theme Feature:

If you'd like a dedicated volunteer section in a future version of the theme, I'd recommend opening a feature request with your preferred design and data structure. The maintainer can then consider adding it as a new section type similar to Experience.

Hope this helps! Let me know if you need more guidance on any of these approaches.

---

### Issue #155: Contact us assumes that contact should be via email

**Type:** Feature Request with Workaround

**Solution:**

Hello! You're absolutely right - the contact section is currently designed primarily for email. However, you can customize it for other contact methods. Here are several solutions:

#### Solution 1: Use FormSpree for Contact Forms

The theme supports FormSpree, which gives you a full contact form:

```yaml
params:
  contact:
    enable: true
    title: "Get In Touch"
    content: "Have a question or want to work together? Fill out the form below!"
    btnName: "Send Message"  # This won't show when using formspree
    # btnLink: mailto:email@example.com  # Comment this out
    
    formspree:
      enable: true
      formId: "your-formspree-id"  # Get from formspree.io
      emailCaption: "Your email address"
      messageCaption: "Your message"
      messageRows: 5
```

With FormSpree, users fill out a form instead of being directed to their email client.

#### Solution 2: Link to Other Contact Methods

You can use the contact button to link to other platforms:

```yaml
params:
  contact:
    enable: true
    title: "Contact"
    content: "Let's connect! Click below to message me on LinkedIn."
    btnName: "Message on LinkedIn"
    btnLink: "https://www.linkedin.com/in/yourprofile"
```

Or for phone:

```yaml
params:
  contact:
    enable: true
    title: "Contact"
    content: "Need to reach me? Give me a call!"
    btnName: "Call Me"
    btnLink: "tel:+1234567890"
```

Or for messaging apps:

```yaml
params:
  contact:
    enable: true
    title: "Contact"
    content: "Message me directly on WhatsApp!"
    btnName: "WhatsApp"
    btnLink: "https://wa.me/1234567890"
```

#### Solution 3: Multiple Contact Methods

Use social links (already in the theme) to provide multiple contact options. Instead of having a contact section, use the social networks in the footer:

```yaml
params:
  footer:
    socialNetworks:
      github: https://github.com/yourusername
      linkedin: https://linkedin.com/in/yourprofile
      twitter: https://twitter.com/yourusername
      instagram: https://instagram.com/yourusername
      facebook: https://facebook.com/yourprofile
      # These appear in the footer and provide multiple contact options
```

And/or in the hero section:

```yaml
params:
  hero:
    socialLinks:
      fontAwesomeIcons:
        - icon: fab fa-linkedin
          url: https://linkedin.com/in/yourprofile
        - icon: fab fa-telegram
          url: https://t.me/yourusername
        - icon: fab fa-whatsapp
          url: https://wa.me/1234567890
        - icon: fas fa-phone
          url: tel:+1234567890
```

#### Solution 4: Custom Contact Section (Advanced)

If you want full control, you can create `layouts/partials/sections/contact.html` in your site and customize it completely:

```html
<section id="contact" class="py-5">
    <div class="container">
        <h2 class="text-center mb-4">{{ .Site.Params.contact.title | default "Contact" }}</h2>
        <div class="row">
            <div class="col-md-12 text-center">
                <p>{{ .Site.Params.contact.content }}</p>
                
                <!-- Multiple contact buttons -->
                <div class="mt-4">
                    <a href="mailto:email@example.com" class="btn btn-primary m-2">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                    <a href="https://linkedin.com/in/profile" class="btn btn-primary m-2">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="tel:+1234567890" class="btn btn-primary m-2">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <a href="https://wa.me/1234567890" class="btn btn-primary m-2">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### Recommended Approach:

1. **For simple needs**: Use Solution 2 - change the button link to your preferred contact method
2. **For form submissions**: Use Solution 1 - FormSpree integration
3. **For multiple contact options**: Use Solution 3 - leverage social network links that are already prominently displayed
4. **For full customization**: Use Solution 4 - create a custom contact partial

#### Example Configuration (Multiple Methods):

```yaml
params:
  contact:
    enable: true
    title: "Let's Connect"
    content: |
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      
      📧 Email: contact@example.com
      💼 LinkedIn: linkedin.com/in/yourprofile
      📱 Phone: +1 (234) 567-8900
    btnName: "Email Me"
    btnLink: "mailto:contact@example.com"
  
  footer:
    socialNetworks:
      github: https://github.com/you
      linkedin: https://linkedin.com/in/you
      twitter: https://twitter.com/you
```

This gives users multiple ways to contact you without being limited to email!

---


## Build & Deployment Issues

### Issue #236: Hugo Version 0.147.8 produces error on _internal/pagination.html

**Type:** Build Error - Requires Code Fix

**Solution:**

Hello! This is indeed a bug that needs to be fixed in the theme code. Hugo v0.128+ deprecated the `paginate` configuration key and v0.147.8 removed the internal pagination template entirely.

#### Temporary Workaround (Until Fixed):

**Option 1: Use an Older Hugo Version**

Downgrade to Hugo v0.127.0 or earlier for now:

```bash
# Check your current version
hugo version

# Use Hugo Extended v0.127.0 (stable version before the changes)
# Download from: https://github.com/gohugoio/hugo/releases/tag/v0.127.0
```

**Option 2: Pin Hugo Version in Deployment**

For Cloudflare Pages/Workers:
```toml
# netlify.toml or deployment config
[build.environment]
HUGO_VERSION = "0.127.0"
```

#### What Needs to be Fixed (For Theme Maintainer):

1. **Update config to use new pagination key:**
   The `exampleSite/hugo.yaml` should use:
   ```yaml
   pagination:
     pagerSize: 3  # Already correct ✓
   ```
   Not the deprecated `paginate: 3` key.

2. **Replace internal pagination template:**
   The file `layouts/projects/list.html` (line 53) and `layouts/_default/list.html` need to replace:
   ```html
   {{ template "_internal/pagination.html" . }}
   ```
   
   With a custom pagination implementation. Hugo provides examples in their documentation.

#### Reference Issue:

As you correctly noted, this is related to:
- Hugo issue: https://github.com/gohugoio/hugo/issues/13553
- The internal pagination template was removed in Hugo v0.147.0

#### Tracking:

This issue requires a code change to the theme and cannot be resolved through configuration alone. The theme maintainer will need to:
1. Create a custom pagination partial
2. Update all templates that reference `_internal/pagination.html`
3. Test with Hugo v0.147.8+

**Recommended:** Stick with Hugo v0.127.0 until this is fixed in the theme.

---

### Issue #154: Issue with 'hugo.yaml' file hindering site initialisation

**Type:** Setup/Configuration Help

**Solution:**

Hello! I understand the confusion. Let me clarify what's happening and how to set up the theme correctly.

#### The Issue Explained:

When you run `hugo new site my-site --format="yaml"`, Hugo creates a basic `hugo.yaml` in your site root. Then, when you copy everything from `exampleSite` (including its `hugo.yaml`), you end up with conflicting configurations.

#### Correct Setup Method:

Here's the proper way to set up the theme:

**Method 1: Replace, Don't Copy Everything**

```bash
# 1. Create new site
hugo new site my-site --format="yaml"
cd my-site

# 2. Add theme as submodule
git init
git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile

# 3. REPLACE (not copy) the hugo.yaml
rm hugo.yaml  # Remove the basic one
cp themes/hugo-profile/exampleSite/hugo.yaml ./

# 4. Copy static assets and content
cp -r themes/hugo-profile/exampleSite/static/* ./static/
cp -r themes/hugo-profile/exampleSite/content/* ./content/

# 5. Start the server
hugo server
```

**Method 2: Manual Configuration**

If you want to keep your original `hugo.yaml` and just add theme settings:

```bash
# 1-2. Same as above (create site and add theme)

# 3. Edit your hugo.yaml and add:
#    - theme: hugo-profile
#    - All the params from themes/hugo-profile/exampleSite/hugo.yaml

# 4. Copy assets
cp -r themes/hugo-profile/exampleSite/static/* ./static/
cp -r themes/hugo-profile/exampleSite/content/* ./content/

# 5. Start server
hugo server
```

**Method 3: Start from Example Site**

The easiest method:

```bash
# 1. Clone the theme
git clone https://github.com/gurusabarish/hugo-profile.git my-site

# 2. Navigate to example site
cd my-site/exampleSite

# 3. Run Hugo
hugo server --themesDir ../..
```

Then copy the exampleSite to your own repository when ready.

#### Why Deleting hugo.yaml "Fixed" It:

When you deleted your `hugo.yaml`, Hugo fell back to looking for configuration in the theme's `exampleSite/` or using defaults, which happened to work. But this isn't the correct solution.

#### Recommended Approach for macOS 14.2.1:

```bash
# Start fresh
cd ~/Projects  # or wherever you keep projects
hugo new site my-portfolio --format="yaml"
cd my-portfolio

# Initialize git
git init

# Add theme
git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile

# Copy example config (REPLACE your hugo.yaml)
cp -f themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml

# Copy example content and static files
rsync -av themes/hugo-profile/exampleSite/static/ ./static/
rsync -av themes/hugo-profile/exampleSite/content/ ./content/

# Start server
hugo server

# Visit: http://localhost:1313
```

#### Verify Your Setup:

After setup, your directory structure should look like:

```
my-site/
├── hugo.yaml          # The config from exampleSite
├── content/           # Copied from exampleSite
│   ├── blogs/
│   └── gallery/
├── static/            # Copied from exampleSite
│   └── images/
├── themes/
│   └── hugo-profile/  # The theme (as git submodule)
└── public/            # Generated after running hugo
```

#### Common Mistakes to Avoid:

1. ❌ Using `cp -r exampleSite/* ./` - this creates nested directories
2. ❌ Having two `hugo.yaml` files with different settings
3. ❌ Forgetting to set `theme: hugo-profile` in your config
4. ❌ Not copying static assets (images won't show)

#### If You're Still Having Issues:

Share the error message you're getting with `hugo server`, and I can help troubleshoot further. Common issues:
- "module not found" - need to set `theme: hugo-profile`
- "template not found" - theme not properly in `themes/` directory
- Images not loading - static files not copied

Hope this clears things up! Let me know if you need more help.

---

### Issue #165: Search not working - seeking help

**Type:** Configuration Help

**Solution:**

Hello! The search functionality requires specific configuration and file setup. Let me help you troubleshoot.

#### Requirements for Search to Work:

1. **Correct Output Formats in hugo.yaml:**
   ```yaml
   outputs:
     home:
       - "HTML"
       - "RSS"
       - "JSON"  # This is REQUIRED for search
   ```

2. **Search Must Be Enabled:**
   ```yaml
   params:
     navbar:
       disableSearch: false  # Must be false or omitted
   ```

3. **You Need Content to Search:**
   The search indexes your blog posts. If you have no blog posts, the index will be empty.

#### Troubleshooting Steps:

**Step 1: Verify index.json is Generated**

```bash
# Build your site
hugo

# Check if index.json exists
ls -la public/index.json

# Check its content
cat public/index.json
```

If `index.json` is empty `[]`, it means no content is being indexed.

**Step 2: Verify You Have Blog Content**

```bash
# Check for blog posts
ls -la content/blogs/

# Posts must NOT be drafts
# Check your blog post front matter:
cat content/blogs/your-post.md
```

Make sure posts have `draft: false` or no draft field:

```markdown
---
title: "My Post"
date: 2024-01-15
draft: false  # or remove this line
author: "Your Name"
---

Your content here...
```

**Step 3: Verify index.json Template Exists**

The theme should have `layouts/_default/index.json`. Verify it exists:

```bash
# Check theme's index.json template
ls -la themes/hugo-profile/layouts/_default/index.json

# Or check if you have it in your site
ls -la layouts/_default/index.json
```

If the file doesn't exist, create `layouts/_default/index.json`:

```json
{{- $.Scratch.Add "index" slice -}}
{{- range .Site.RegularPages -}}
    {{- if (and (not .Params.excludeFromSearch) (ne .Type "page")) -}}
        {{- $.Scratch.Add "index" (dict "title" .Title "tags" .Params.tags "categories" .Params.categories "contents" .Plain "permalink" .Permalink "date" .Date) -}}
    {{- end -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

**Step 4: Check Your Config File Location**

You mentioned: `hugo server --config config/default/config.yaml`

This is unusual. Most Hugo sites have `hugo.yaml` in the root. Make sure your config is in the expected location:

```bash
# Standard location
hugo server

# Or if your config is elsewhere
hugo server --config config/default/config.yaml --logLevel debug
```

**Step 5: Clear Cache and Rebuild**

```bash
# Remove public and resources folders
rm -rf public/ resources/

# Rebuild
hugo

# Check index.json again
cat public/index.json
```

#### Common Issues:

**Issue: Index.json is empty `[]`**
- Cause: No publishable content
- Solution: Make sure you have blog posts with `draft: false`

**Issue: Search box doesn't appear**
- Cause: `disableSearch: true` in config
- Solution: Set to `false` or remove the line

**Issue: Search box appears but doesn't work**
- Cause: index.json not loading or JavaScript error
- Solution: Check browser console for errors (F12 → Console tab)

#### Complete Working Configuration:

```yaml
baseURL: "https://yoursite.com"
languageCode: "en-us"
title: "Your Site"
theme: hugo-profile

outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"   # REQUIRED

params:
  navbar:
    disableSearch: false  # Enable search
```

#### Verification:

After following these steps:

1. Run `hugo` (no server, just build)
2. Check `public/index.json` - should contain your posts
3. Run `hugo server`
4. Open your site
5. Click the search icon in navigation
6. Type a keyword that appears in your posts

#### Still Not Working?

If you're still having issues, please share:
1. Content of your `hugo.yaml` (specifically the `outputs` section)
2. Output of `ls -la content/blogs/`
3. Content of `public/index.json` (first few lines)
4. Any JavaScript errors in browser console

This will help diagnose the exact issue!

---


## Display Issues

### Issue #164: Dark mode shows a white footer on pages that are too short

**Type:** CSS Bug - Workaround Available

**Solution:**

Hello! Thank you for the detailed bug report. This is a CSS issue where the page content doesn't fill the viewport height, exposing the white background. Here's how to fix it:

#### Solution: CSS Fix

Create `static/css/custom.css`:

```css
/* Fix white footer in dark mode on short pages */
html {
    min-height: 100%;
    height: 100%;
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
}

#content {
    flex: 1 0 auto;
    background-color: var(--background-color);
}

footer {
    flex-shrink: 0;
    background-color: var(--background-color);
}

/* Ensure dark mode background is applied everywhere */
[data-theme="dark"] body,
[data-theme="dark"] html {
    background-color: #18191a !important;
}

[data-theme="dark"] #content {
    background-color: #18191a !important;
}

[data-theme="dark"] footer {
    background-color: #18191a !important;
}
```

#### Include the Custom CSS:

Add to your `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="/css/custom.css">
```

#### Alternative Solution (More Aggressive):

If the above doesn't fully fix it, try this more comprehensive approach:

```css
/* Force dark background on everything */
[data-theme="dark"] * {
    background-color: inherit;
}

[data-theme="dark"] html,
[data-theme="dark"] body {
    background-color: #18191a !important;
    min-height: 100vh;
}

[data-theme="dark"] body {
    display: flex;
    flex-direction: column;
}

[data-theme="dark"] #content {
    flex: 1;
    background-color: #18191a !important;
}

/* Ensure footer sticks to bottom */
footer {
    margin-top: auto;
}
```

#### Why This Happens:

The issue occurs because:
1. The page content is shorter than the viewport height
2. The body element doesn't extend to fill the viewport
3. The white background (from the root HTML element or body) shows through

#### Testing the Fix:

1. Apply the CSS above
2. Create a test blog post with minimal content (like your example)
3. Toggle dark mode
4. Zoom out or use a large monitor
5. The white footer should no longer appear

#### Temporary Workaround (Without Code Changes):

If you can't apply CSS immediately, ensure your blog posts have enough content to fill the screen, or add padding to sections to push the footer down:

```yaml
# Add more "Recent Posts" to fill space
params:
  footer:
    recentPosts:
      count: 6  # Increase from 3
```

Hope this fixes the issue! Let me know if you need any adjustments.

---

### Issue #188: Footer icon doesn't show on blog page or blog posts

**Type:** Configuration/Bug

**Solution:**

Hello! This issue might be related to how Font Awesome icons are loaded or configured. Let's troubleshoot:

#### Check 1: Verify Font Awesome is Loading

The theme uses Font Awesome for icons. First, verify it's being loaded properly.

**In your browser (F12 → Network tab):**
- Look for Font Awesome CSS files loading
- Check for any 404 errors

#### Check 2: Verify Your Social Network Configuration

Make sure your `hugo.yaml` has correct social network URLs:

```yaml
params:
  footer:
    socialNetworks:
      github: https://github.com/yourusername  # Full URL
      linkedin: https://linkedin.com/in/yourprofile
      twitter: https://twitter.com/yourusername
      instagram: https://instagram.com/yourusername
      facebook: https://facebook.com/yourprofile
```

**Important:** Use full URLs, not just usernames.

#### Check 3: Verify CDN Setting

The theme can load Font Awesome from CDN or locally. Check your config:

```yaml
params:
  useBootstrapCDN: false  # or true
```

If `false`, Font Awesome should be in `static/` directory.  
If `true`, it loads from CDN.

**Try switching this setting and see if icons appear.**

#### Check 4: Custom Icons

If you're using custom icons, make sure the image files exist:

```yaml
params:
  hero:
    socialLinks:
      customIcons:
        - icon: /fav.png  # Must exist in static/fav.png
          url: "https://example.com"
```

#### Solution: Force Font Awesome Load

Add this to ensure Font Awesome is available on all pages.

Create `layouts/partials/head/extensions.html` (if it doesn't exist):

```html
<!-- Force Font Awesome on all pages -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Or in `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

#### Check 5: CSS Conflicts

Sometimes custom CSS can hide icons. Check for:

```css
/* Make sure you don't have this */
.social-networks a {
    display: none; /* This would hide icons */
}

footer svg,
footer i {
    display: none; /* This would hide icons */
}
```

#### Debugging Steps:

1. **Open browser console (F12 → Console)**
   - Look for errors related to Font Awesome
   - Look for 404 errors

2. **Inspect the footer element (F12 → Elements)**
   - Find the social network section
   - See if the icon HTML is there but not visible
   - Check computed styles

3. **Test on a clean browser**
   - Clear cache (Ctrl+Shift+Delete)
   - Try in incognito/private mode
   - Try a different browser

#### Common Causes:

1. **Font Awesome not loading** - Use CDN link above
2. **Incorrect icon names** - Font Awesome 6 changed some names
3. **CSS `display: none`** somewhere
4. **Content Security Policy** blocking external fonts
5. **Adblocker** blocking Font Awesome

#### Quick Fix (Use CDN):

Update your `hugo.yaml`:

```yaml
params:
  useBootstrapCDN: true  # This often fixes icon issues
```

Then add explicit Font Awesome load:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Restart `hugo server` and check if icons appear.

If you're still having issues, please share:
1. Your footer configuration from `hugo.yaml`
2. Any browser console errors
3. Screenshot of the footer (using F12 → Elements view)

This will help identify the exact cause!

---

### Issue #150: Post previews not working as intended

**Type:** Configuration/Feature Question

**Solution:**

Hello! I'd be happy to help with post previews. However, I need a bit more information about what's not working as intended. Let me provide solutions for common post preview issues:

#### Issue 1: Preview Text Too Long/Short

Control the preview length using the Hugo summary feature.

**Option A: Manual Summary (Recommended)**

Use `<!--more-->` in your blog post to define exactly where the preview should end:

```markdown
---
title: "My Blog Post"
date: 2024-01-15
---

This is the introduction paragraph that will appear in the preview.

This is another paragraph that will also appear.

<!--more-->

This content will only appear when reading the full post, not in previews.
```

**Option B: Automatic Summary**

Hugo automatically creates summaries. Configure the length in `hugo.yaml`:

```yaml
summaryLength: 70  # Number of words in auto-generated summaries (default: 70)
```

**Option C: Custom Description**

Set a custom description in the front matter:

```markdown
---
title: "My Post"
date: 2024-01-15
description: "This exact text will appear as the preview on list pages."
---

Your post content here...
```

#### Issue 2: Featured Images Not Showing in Previews

Make sure your posts have featured images defined:

```markdown
---
title: "My Post"
date: 2024-01-15
author: "Your Name"
image: /images/posts/my-post-thumbnail.jpg  # Featured image
description: "Post description"
---
```

And ensure images are in the correct location:
```
static/
└── images/
    └── posts/
        └── my-post-thumbnail.jpg
```

#### Issue 3: Disable Featured Images in Previews

If you don't want featured images in list pages:

```yaml
params:
  listPages:
    disableFeaturedImage: true  # Hides images on blog list page
```

#### Issue 4: Preview Card Styling

If the preview cards look wrong, you can customize them with CSS.

Create `static/css/custom.css`:

```css
/* Customize blog preview cards */
#list-page .card {
    min-height: 400px;  /* Ensure consistent heights */
}

#list-page .card-text {
    max-height: 150px;  /* Limit preview text height */
    overflow: hidden;
}

/* Featured image sizing */
#list-page .card-img-top {
    height: 250px;
    object-fit: cover;  /* Crop images to fit */
}
```

#### Issue 5: No Previews Showing at All

**Check your blog posts:**

```bash
# Verify you have published posts
ls -la content/blogs/

# Check that posts aren't drafts
cat content/blogs/your-post.md
# Look for: draft: false (or no draft field at all)
```

**Check your config:**

```yaml
params:
  footer:
    recentPosts:
      enable: true  # For footer recent posts
      path: "blogs"  # Must match your content folder name
      count: 3
```

#### Issue 6: Wrong Content in Previews

If the preview is showing HTML tags or weird formatting:

This usually happens with rich content. Hugo's `.Summary` tries to handle this, but you can force plain text:

Create `layouts/partials/sections/footer/recentBlogPosts.html` (copy from theme and modify):

```html
<!-- Use .Plain for plain text only -->
<p>{{ .Plain | truncate 150 }}</p>
```

Or use manual summaries with `<!--more-->` as shown in Issue 1.

#### Complete Example Post:

```markdown
---
title: "Complete Guide to Hugo"
date: 2024-01-15T10:00:00+00:00
draft: false
author: "John Doe"
tags: ["hugo", "tutorial", "web-development"]
image: /images/posts/hugo-guide.jpg
description: "A comprehensive guide to getting started with Hugo static site generator."
toc: false
---

## Introduction

Hugo is a fast static site generator written in Go. In this guide, we'll cover everything you need to know to get started.

### Why Hugo?

Hugo is incredibly fast and flexible.

<!--more-->

## Detailed Content

This section appears only in the full post, not in previews...

[Rest of your detailed content]
```

#### Troubleshooting Checklist:

- [ ] Posts have `draft: false` or no draft field
- [ ] Posts are in `content/blogs/` directory
- [ ] Featured images exist in `static/images/`
- [ ] Using `<!--more-->` for custom preview length
- [ ] Config has correct `path: "blogs"` setting
- [ ] Ran `hugo server` to rebuild

Please let me know specifically what's not working with your previews, and I can provide a more targeted solution!

---

### Issue #151: Image not being read when posted in social networks

**Type:** SEO/Social Media Configuration

**Solution:**

Hello! This issue relates to Open Graph and Twitter Card meta tags, which control how your site appears when shared on social media. Here's how to fix it:

#### The Problem:

Social networks (Facebook, Twitter, LinkedIn, etc.) look for specific meta tags to find:
- og:image (Open Graph image)
- twitter:image
- og:title, og:description, etc.

#### Solution: Add Open Graph/Twitter Card Meta Tags

Create `layouts/partials/head/extensions.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
<meta property="og:url" content="{{ .Permalink }}">
<meta property="og:title" content="{{ .Title }} | {{ .Site.Title }}">
<meta property="og:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">

{{ with .Params.image }}
<meta property="og:image" content="{{ . | absURL }}">
{{ else }}
{{ with $.Site.Params.favicon }}
<meta property="og:image" content="{{ . | absURL }}">
{{ end }}
{{ end }}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="{{ .Permalink }}">
<meta name="twitter:title" content="{{ .Title }} | {{ .Site.Title }}">
<meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">

{{ with .Params.image }}
<meta name="twitter:image" content="{{ . | absURL }}">
{{ else }}
{{ with $.Site.Params.favicon }}
<meta name="twitter:image" content="{{ . | absURL }}">
{{ end }}
{{ end }}
```

#### Add Default Social Image in Config:

Update your `hugo.yaml`:

```yaml
params:
  title: "Your Site"
  description: "Your site description for social sharing"
  
  # Default image for social sharing
  images:
    - /images/social-share.jpg  # Create this image (1200x630px recommended)
  
  # Or use your existing favicon
  favicon: "/fav.png"
```

#### Create Social Share Images:

**Recommended Image Sizes:**
- **Facebook/Open Graph:** 1200 x 630 pixels
- **Twitter:** 1200 x 675 pixels (16:9) or 1200 x 600 pixels
- **LinkedIn:** 1200 x 627 pixels

Create a default social share image:
```
static/
└── images/
    └── social-share.jpg  # 1200x630px
```

#### Per-Post Social Images:

For individual blog posts, add in front matter:

```markdown
---
title: "My Amazing Post"
date: 2024-01-15
image: /images/posts/my-post-social.jpg  # Post-specific social image
description: "This description appears when shared on social media"
---
```

#### Complete Example (Best Practice):

**hugo.yaml:**
```yaml
baseURL: "https://yoursite.com"  # MUST be your actual domain
languageCode: "en-us"
title: "Your Name - Portfolio"

params:
  title: "Your Name"
  description: "Full-stack developer specializing in web technologies"
  favicon: "/images/favicon.png"
  
  # Default social share image
  images:
    - /images/og-default.jpg
```

**Blog Post:**
```markdown
---
title: "10 Tips for Better Code"
date: 2024-01-15
author: "Your Name"
image: /images/posts/10-tips-og.jpg  # Custom image for this post
description: "Improve your coding skills with these 10 essential tips"
tags: ["programming", "tips"]
---

Your content...
```

#### Testing Your Social Images:

**1. Facebook Debugger:**
- Go to: https://developers.facebook.com/tools/debug/
- Enter your URL
- Click "Scrape Again" if you've made changes

**2. Twitter Card Validator:**
- Go to: https://cards-dev.twitter.com/validator
- Enter your URL
- See how it will appear

**3. LinkedIn Post Inspector:**
- Go to: https://www.linkedin.com/post-inspector/
- Enter your URL

#### Important Notes:

1. **Absolute URLs Required:**  
   ```html
   <!-- Wrong -->
   <meta property="og:image" content="/images/photo.jpg">
   
   <!-- Correct -->
   <meta property="og:image" content="https://yoursite.com/images/photo.jpg">
   ```
   Use `{{ . | absURL }}` in templates to ensure absolute URLs.

2. **Clear Social Network Cache:**  
   Social networks cache images. Use their debugging tools to force refresh.

3. **HTTPS Required:**  
   Most social networks require images to be served over HTTPS.

4. **Image Size:**  
   Images should be at least 1200x630px for best results across all platforms.

5. **Test After Deployment:**  
   Social meta tags won't work on localhost. Test after deploying to your actual domain.

#### Quick Checklist:

- [ ] `baseURL` in `hugo.yaml` is correct (your actual domain)
- [ ] Created `layouts/partials/head/extensions.html` with meta tags
- [ ] Have a default social image (1200x630px) in `static/images/`
- [ ] Posts have `image:` and `description:` in front matter
- [ ] Deployed to production (not testing on localhost)
- [ ] Used Facebook Debugger to test
- [ ] Cleared social network cache with debugging tools

After implementing these changes, your site will display properly with images when shared on social networks!

---


## Enhancement Requests

### Issue #159: Does this theme support installation as a hugo module?

**Type:** Feature Request / How-To

**Solution:**

Hello! Yes, you can use this theme as a Hugo module! Hugo modules are a more modern way to manage themes compared to Git submodules. Here's how:

#### Method 1: Use as Hugo Module (Recommended for Hugo 0.110.0+)

**Step 1: Initialize Your Site as a Module**

```bash
# In your site root
hugo mod init github.com/yourusername/yoursite
```

**Step 2: Add Theme as Module**

Edit your `hugo.yaml`:

```yaml
module:
  imports:
    - path: github.com/gurusabarish/hugo-profile
```

**Step 3: Get the Module**

```bash
hugo mod get -u
```

**Step 4: Copy Example Configuration**

```bash
# The theme files are now in your module cache
# Copy example config manually or use this structure:
```

Your `hugo.yaml`:

```yaml
baseURL: "https://yoursite.com"
languageCode: "en-us"
title: "Your Site"

module:
  imports:
    - path: github.com/gurusabarish/hugo-profile

outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"

params:
  # Copy all params from exampleSite/hugo.yaml
  title: "Your Name"
  description: "Your description"
  # ... rest of config
```

#### Method 2: Pin to Specific Version

For production, pin to a specific version:

```yaml
module:
  imports:
    - path: github.com/gurusabarish/hugo-profile
      disable: false
      # Use a specific version/tag
      # Replace with actual version tag
```

Or use a specific commit:

```bash
hugo mod get github.com/gurusabarish/hugo-profile@v2.0.0
```

#### Method 3: Use Hugo Module with Workspace (Development)

If you want to develop/customize the theme:

```bash
# Clone theme for development
git clone https://github.com/gurusabarish/hugo-profile.git ../hugo-profile

# Use workspace mode
hugo mod get github.com/gurusabarish/hugo-profile

# Create hugo.work file
cat > hugo.work <<EOF
go 1.20

use .
use ../hugo-profile
EOF

# Now changes in ../hugo-profile will be reflected immediately
hugo server
```

#### Benefits of Hugo Modules:

✅ No git submodules hassle  
✅ Easy updates: `hugo mod get -u`  
✅ Version pinning  
✅ Can use multiple modules  
✅ Better dependency management  

#### Updating the Theme:

```bash
# Update to latest version
hugo mod get -u github.com/gurusabarish/hugo-profile

# Clean module cache if needed
hugo mod clean
```

#### Troubleshooting:

**Error: "module not found"**
```bash
# Clear cache and try again
hugo mod clean
hugo mod get -u
```

**Error: "go: not found"**
- Hugo modules require Go to be installed
- Install from: https://golang.org/dl/
- Or use the traditional Git submodule method

#### Complete Example Setup:

```bash
# Create new site
hugo new site mysite --format=yaml
cd mysite

# Initialize as module
hugo mod init github.com/yourusername/mysite

# Create hugo.yaml
cat > hugo.yaml <<EOF
baseURL: "https://yoursite.com"
languageCode: "en-us"
title: "My Site"

module:
  imports:
    - path: github.com/gurusabarish/hugo-profile

outputs:
  home:
    - "HTML"
    - "RSS"
    - "JSON"

# Copy params from theme's exampleSite/hugo.yaml
params:
  title: "Your Name"
  description: "Your description"
  # ... rest of configuration
EOF

# Get the module
hugo mod get -u

# Start server
hugo server
```

#### Comparison: Git Submodule vs Hugo Module

| Feature | Git Submodule | Hugo Module |
|---------|--------------|-------------|
| Setup complexity | Medium | Easy |
| Updates | `git submodule update` | `hugo mod get -u` |
| Version pinning | Git commits/tags | Go module versions |
| Requires Go | No | Yes |
| Offline work | Easy | Needs cache |

#### Recommendation:

- **Use Hugo Modules** if you have Go installed and want modern dependency management
- **Use Git Submodules** if you want simplicity or don't have Go installed
- **Both work perfectly** - choose based on your workflow preference

The theme works great with either approach!

---

### Issue #184: Emojify should be optional

**Type:** Feature Request with Workaround

**Solution:**

Hello! While there isn't a built-in configuration option to disable emojify yet, here's how you can control emoji rendering:

#### Understanding Hugo's Emojify:

Hugo's `emojify` function converts emoji codes like `:smile:` into actual emoji characters (😄). This happens during site build.

#### Solution 1: Disable Emoji Rendering Globally

Add this to your `hugo.yaml`:

```yaml
enableEmoji: false  # Disables :emoji_code: conversion
```

This prevents Hugo from converting `:smile:` to 😄, but regular emoji characters (typed directly) will still appear.

#### Solution 2: Remove Emojis from Content

If the theme is adding emojis you don't want:

**Check your hugo.yaml:**
```yaml
params:
  hero:
    intro: "Hi, my name is"  # Remove emojis from here
    title: "Isabella."
    subtitle: "I build things for the web"  # No emojis here
```

**Check your content:**
```markdown
---
title: "My Post"  # Don't use :emoji_codes: in titles
---

Regular content without :emoji_codes: won't have emojis.
```

#### Solution 3: CSS to Hide Emoji (If Built-In):

If the theme has emojis you can't remove, hide them with CSS:

Create `static/css/custom.css`:

```css
/* Hide all emoji spans (if theme wraps them) */
.emoji {
    display: none;
}

/* Or make emoji invisible */
.emoji {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
}
```

#### Solution 4: Custom Markdown Configuration

If you want more control over markdown rendering:

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true  # Allows HTML in markdown
  highlight:
    style: monokai
```

#### For Theme Maintainer:

Adding an optional emojify setting would be great:

```yaml
params:
  enableEmoji: true  # Optional: control emoji rendering
```

Then in templates:
```html
{{ if .Site.Params.enableEmoji }}
  {{ .Content | emojify }}
{{ else }}
  {{ .Content }}
{{ end }}
```

#### Current Status:

The theme doesn't force emojis - they only appear if:
1. You use `:emoji_codes:` in your content
2. You have `enableEmoji: true` in Hugo config
3. You type actual emoji characters

#### Recommendation:

Simply set `enableEmoji: false` in your `hugo.yaml` and avoid typing emoji characters in your content. This gives you complete control.

If the theme itself is adding emojis somewhere, please point out where, and I can provide a specific solution to remove them!

---

### Issue #200: Local fonts

**Type:** Feature Request / How-To

**Solution:**

Hello! You can definitely use local fonts instead of loading them from Google Fonts or other CDNs. Here's a comprehensive guide:

#### Step 1: Prepare Your Font Files

Download your desired fonts and convert them to web formats:

**Recommended formats:**
- `.woff2` (best compression, modern browsers)
- `.woff` (fallback for older browsers)
- Optional: `.ttf` for very old browsers

**Tools for conversion:**
- https://transfonter.org/ (recommended)
- https://everythingfonts.com/font-face
- https://www.fontsquirrel.com/tools/webfont-generator

#### Step 2: Organize Font Files

Place fonts in your static directory:

```
static/
└── fonts/
    ├── Poppins-Regular.woff2
    ├── Poppins-Regular.woff
    ├── Poppins-Bold.woff2
    ├── Poppins-Bold.woff
    ├── Roboto-Regular.woff2
    ├── Roboto-Regular.woff
    └── ...
```

#### Step 3: Create Font CSS

Create `static/css/fonts.css`:

```css
/* Poppins Regular */
@font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.woff2') format('woff2'),
         url('/fonts/Poppins-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Improves loading performance */
}

/* Poppins Bold */
@font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Bold.woff2') format('woff2'),
         url('/fonts/Poppins-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Poppins Italic */
@font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Italic.woff2') format('woff2'),
         url('/fonts/Poppins-Italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

/* Apply the fonts */
body {
    font-family: 'Poppins', sans-serif !important;
}

h1, h2, h3, h4, h5, h6,
.primary-font, #primary-font {
    font-family: 'Poppins', sans-serif;
}
```

#### Step 4: Include Font CSS

In your `hugo.yaml`:

```yaml
params:
  customScripts: |
    <link rel="stylesheet" href="/css/fonts.css">
```

#### Complete Example (Multiple Font Families):

**static/css/fonts.css:**

```css
/* Body font - Roboto */
@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.woff2') format('woff2'),
         url('/fonts/Roboto-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.woff2') format('woff2'),
         url('/fonts/Roboto-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Heading font - Playfair Display */
@font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/PlayfairDisplay-Bold.woff2') format('woff2'),
         url('/fonts/PlayfairDisplay-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Apply fonts */
body,
.default-font, #default-font,
.secondary-font, #secondary-font {
    font-family: 'Roboto', sans-serif !important;
}

h1, h2, h3, h4, h5, h6,
.primary-font, #primary-font {
    font-family: 'Playfair Display', serif;
}
```

#### Step 5: Optimize Loading

For better performance, preload critical fonts:

Create `layouts/partials/head/extensions.html`:

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" type="font/woff2" crossorigin>

<!-- Load font CSS -->
<link rel="stylesheet" href="/css/fonts.css">
```

#### Benefits of Local Fonts:

✅ **Privacy:** No third-party requests (GDPR friendly)  
✅ **Performance:** No external DNS lookups  
✅ **Reliability:** Works offline, no CDN dependency  
✅ **Control:** Exact font versions, no breaking changes  
✅ **Speed:** Cached with your site  

#### Font Optimization Tips:

1. **Subset fonts:** Include only characters you need
   ```
   # Using pyftsubset (from fonttools)
   pyftsubset Font.ttf --output-file=Font-subset.woff2 \
       --flavor=woff2 \
       --unicodes=U+0020-007F  # Basic Latin only
   ```

2. **Use woff2:** Best compression (30% smaller than woff)

3. **Limit weights:** Only include weights you use (400, 700)

4. **Font display:** Use `font-display: swap` for better UX

5. **Preload:** Preload only critical fonts (typically just regular weight)

#### Example Directory Structure:

```
your-site/
├── static/
│   ├── css/
│   │   └── fonts.css
│   └── fonts/
│       ├── Roboto-Regular.woff2
│       ├── Roboto-Regular.woff
│       ├── Roboto-Bold.woff2
│       └── Roboto-Bold.woff
├── layouts/
│   └── partials/
│       └── head/
│           └── extensions.html
└── hugo.yaml
```

#### Testing:

1. Build your site: `hugo`
2. Check fonts load: Developer Tools → Network → Filter "font"
3. Should see requests to `/fonts/YourFont.woff2`
4. Verify no requests to Google Fonts or other CDNs

#### Common Sources for Free Fonts:

- Google Fonts (download, don't link) - fonts.google.com
- Font Squirrel - fontsquirrel.com
- Adobe Fonts (with subscription) - fonts.adobe.com
- DaFont - dafont.com
- 1001 Fonts - 1001fonts.com

Make sure to check the license for commercial use!

---

### Issue #185: [suggestion] Use Shortcodes to Create Submodules

**Type:** Feature Request

**Solution:**

Hello! This is an interesting suggestion. While implementing this would require theme modifications, I can explain the concept and provide workarounds.

#### Understanding the Suggestion:

The idea is to use Hugo shortcodes to modularize sections, making it easier to:
- Reuse components across pages
- Customize sections without editing theme files
- Create custom section variants

#### Current Workaround: Custom Shortcodes

You can create custom shortcodes now for reusable components.

**Example: Create a custom "Feature Box" shortcode**

Create `layouts/shortcodes/feature-box.html`:

```html
<div class="feature-box p-4 mb-3" style="border: 2px solid var(--primary-color); border-radius: 0.5rem;">
    <h3>{{ .Get "title" }}</h3>
    <p>{{ .Inner | markdownify }}</p>
</div>
```

**Use in content:**

```markdown
---
title: "My Page"
---

{{< feature-box title="Fast Performance" >}}
Built with Hugo for lightning-fast load times.
{{< /feature-box >}}

{{< feature-box title="Easy to Use" >}}
Simple configuration with YAML.
{{< /feature-box >}}
```

#### Example: Project Shortcode

Create `layouts/shortcodes/project.html`:

```html
<div class="col-md-6 mb-4">
    <div class="card">
        {{ with .Get "image" }}
        <img src="{{ . }}" class="card-img-top" alt="{{ $.Get "title" }}">
        {{ end }}
        <div class="card-body">
            <h5 class="card-title">{{ .Get "title" }}</h5>
            <p class="card-text">{{ .Inner | markdownify }}</p>
            {{ with .Get "link" }}
            <a href="{{ . }}" class="btn btn-primary">View Project</a>
            {{ end }}
        </div>
    </div>
</div>
```

**Use:**

```markdown
{{< project title="My App" image="/images/app.jpg" link="https://myapp.com" >}}
A revolutionary app that changes everything.
{{< /project >}}
```

#### Example: Reusable Skills Section

Create `layouts/shortcodes/skills-list.html`:

```html
<div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
    {{ range split (.Get "skills") "," }}
    <div class="skill-badge p-3 text-center" style="background: var(--secondary-color); border-radius: 0.5rem;">
        {{ . }}
    </div>
    {{ end }}
</div>
```

**Use:**

```markdown
{{< skills-list skills="Python,JavaScript,Go,React,Docker,Kubernetes" >}}
```

#### Example: Timeline Shortcode

Create `layouts/shortcodes/timeline-item.html`:

```html
<div class="timeline-item mb-4 ps-4" style="border-left: 2px solid var(--primary-color);">
    <h4>{{ .Get "title" }}</h4>
    <p class="text-muted"><small>{{ .Get "date" }}</small></p>
    <p>{{ .Inner | markdownify }}</p>
</div>
```

**Use:**

```markdown
{{< timeline-item title="Started Company" date="2020" >}}
Launched my startup focusing on web development.
{{< /timeline-item >}}

{{< timeline-item title="First Product" date="2021" >}}
Released our first SaaS product.
{{< /timeline-item >}}
```

#### Creating a Custom Section with Shortcodes:

Create `layouts/shortcodes/custom-section.html`:

```html
<section id="custom-{{ .Get "id" }}" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5">{{ .Get "title" }}</h2>
        <div class="row">
            {{ .Inner }}
        </div>
    </div>
</section>
```

**Use in content/custom-page.md:**

```markdown
---
title: "Custom Page"
layout: single
---

{{< custom-section id="services" title="Our Services" >}}

{{< project title="Web Development" image="/images/web.jpg" >}}
Custom websites built with modern technologies.
{{< /project >}}

{{< project title="Mobile Apps" image="/images/mobile.jpg" >}}
Native and cross-platform mobile applications.
{{< /project >}}

{{< /custom-section >}}
```

#### Advanced: Paired Shortcodes

Create `layouts/shortcodes/accordion.html`:

```html
<div class="accordion" id="accordion-{{ .Ordinal }}">
    {{ .Inner }}
</div>
```

Create `layouts/shortcodes/accordion-item.html`:

```html
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapse-{{ .Ordinal }}">
            {{ .Get "title" }}
        </button>
    </h2>
    <div id="collapse-{{ .Ordinal }}" class="accordion-collapse collapse">
        <div class="accordion-body">
            {{ .Inner | markdownify }}
        </div>
    </div>
</div>
```

**Use:**

```markdown
{{< accordion >}}
  {{< accordion-item title="Question 1" >}}
  Answer to question 1
  {{< /accordion-item >}}
  
  {{< accordion-item title="Question 2" >}}
  Answer to question 2
  {{< /accordion-item >}}
{{< /accordion >}}
```

#### For Theme Maintainer:

To implement this suggestion fully, the theme could:

1. **Convert sections to shortcodes:**
   ```markdown
   {{< hero 
       title="John Doe" 
       subtitle="Developer" 
       image="/images/hero.svg" 
   >}}
   ```

2. **Allow section customization:**
   ```markdown
   {{< experience company="Google" role="Engineer" date="2020-2024" >}}
   Worked on amazing projects...
   {{< /experience >}}
   ```

3. **Enable mixing and matching:**
   ```markdown
   {{< hero >}}
   {{< custom-section >}}
   {{< experience >}}
   {{< projects >}}
   ```

#### Current Best Practice:

For now, use a combination of:
1. Hugo's built-in configuration (hugo.yaml params)
2. Custom shortcodes (as shown above)
3. Custom layouts (copy theme files to your layouts/)

This gives you flexibility without waiting for theme changes!

---

## Technical Improvements

### Issue #85: Use of inline event handlers is insecure - causes Content-Security-Policy failure

**Type:** Security Issue - Requires Code Fix

**Solution:**

Hello! You're absolutely right - inline event handlers like `onclick` violate Content Security Policy (CSP) best practices and should be moved to external JavaScript. This is a security and best practice issue that requires theme code changes.

#### The Problem:

Inline event handlers like:
```html
<button onclick="doSomething()">Click</button>
```

Require unsafe CSP headers:
```
Content-Security-Policy: script-src 'self' 'unsafe-inline';
```

This weakens security and opens XSS vulnerabilities.

#### Secure CSP Headers (Goal):

```
Content-Security-Policy: script-src 'self'; object-src 'none';
```

#### Temporary Workaround (User-Side):

Until the theme is fixed, you can:

**Option 1: Use CSP Nonces**

If your server supports it, add nonces to allowed inline scripts.

**Option 2: Relax CSP Temporarily**

Add to your server/hosting config:
```
Content-Security-Policy: script-src 'self' 'unsafe-inline';
```

**Option 3: Disable CSP (Not Recommended)**

Only for development/testing.

#### What Needs to Be Fixed (For Theme Maintainer):

**1. Replace Inline Event Handlers:**

Find all inline handlers:
```bash
cd themes/hugo-profile
grep -r "onclick=" layouts/
grep -r "onload=" layouts/
grep -r "onerror=" layouts/
```

**2. Move to External JavaScript:**

❌ **Bad (Current):**
```html
<button onclick="toggleTheme()">Toggle</button>
```

✅ **Good (Fixed):**
```html
<button id="theme-toggle" data-action="toggle-theme">Toggle</button>

<script>
document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme();
});
</script>
```

**3. Use Event Delegation:**

For dynamic content:
```javascript
document.addEventListener('click', function(e) {
    if (e.target.matches('[data-action="toggle-theme"]')) {
        toggleTheme();
    }
});
```

#### Example Fix for Theme Toggle:

**Current (Insecure):**
```html
<button onclick="toggleColorScheme('dark')">Dark</button>
<button onclick="toggleColorScheme('light')">Light</button>
```

**Fixed (Secure):**
```html
<button class="theme-toggle" data-theme="dark">Dark</button>
<button class="theme-toggle" data-theme="light">Light</button>

<script>
(function() {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleColorScheme(this.dataset.theme);
        });
    });
})();
</script>
```

#### Testing CSP:

Add to your hosting config or `layouts/partials/head.html`:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
```

If inline handlers exist, browser console will show CSP violations.

#### Impact Assessment:

Common inline handlers in Hugo themes:
- Theme toggle buttons
- Mobile menu toggles
- Image lazy loading
- Form submissions
- Modal/popup triggers

All should be moved to external event listeners.

#### For Users:

This issue requires theme code changes and cannot be fully resolved through configuration. Until fixed:

1. Accept the CSP restriction (use 'unsafe-inline')
2. Or avoid deploying with strict CSP
3. Or contribute a PR to fix the inline handlers

#### For Theme Maintainer:

I'd recommend:
1. Audit all templates for inline event handlers
2. Create a centralized JavaScript file for event handling
3. Use data attributes for configuration
4. Test with strict CSP headers
5. Update documentation about CSP compatibility

This is a worthwhile security improvement that aligns with modern web standards!

---

### Issue #127: Image optimizations

**Type:** Enhancement Request

**Solution:**

Hello! Great suggestion for image optimization. While Hugo has built-in image processing, the theme would need modifications to fully implement it. Here are solutions you can use now:

#### Solution 1: Hugo Image Processing (Manual)

Use Hugo's built-in image processing in your content:

```markdown
---
title: "My Post"
---

{{< figure src="/images/large-photo.jpg" alt="Description" >}}

Or with Hugo's image processing:

{{ $img := resources.Get "images/large-photo.jpg" }}
{{ $resized := $img.Resize "800x" }}
<img src="{{ $resized.RelPermalink }}" alt="Description">
```

#### Solution 2: Optimize Images Before Upload

Use tools to optimize images before adding them to `static/`:

**Command-line Tools:**
```bash
# Install ImageMagick
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux

# Optimize JPEG
convert input.jpg -quality 85 -strip output.jpg

# Optimize PNG
pngquant input.png --output output.png

# Resize and optimize
convert input.jpg -resize 1200x -quality 85 output.jpg
```

**GUI Tools:**
- [Squoosh](https://squoosh.app/) - Web-based
- [ImageOptim](https://imageoptim.com/) - Mac
- [RIOT](https://riot-optimizer.com/) - Windows

#### Solution 3: Automated Build-Time Optimization

Add to your build process:

```bash
# package.json (if using npm)
{
  "scripts": {
    "optimize-images": "imagemin static/images/* --out-dir=static/images",
    "build": "npm run optimize-images && hugo"
  }
}
```

#### Solution 4: Use CDN with Image Optimization

**Cloudinary:**

Update your images in `hugo.yaml`:

```yaml
params:
  # Enable Cloudinary
  cloudinary_cloud_name: "YOUR_CLOUD_NAME"
```

Then in templates:
```html
<img src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_800,q_auto,f_auto/{{ .Params.image }}" alt="">
```

**Cloudflare Images:**

If using Cloudflare, enable automatic image optimization in dashboard.

#### Solution 5: Responsive Images with Shortcode

Create `layouts/shortcodes/responsive-img.html`:

```html
{{ $src := .Get "src" }}
{{ $alt := .Get "alt" }}

{{ with resources.Get $src }}
  {{ $small := .Resize "400x" }}
  {{ $medium := .Resize "800x" }}
  {{ $large := .Resize "1200x" }}
  
  <picture>
    <source media="(max-width: 400px)" srcset="{{ $small.RelPermalink }}">
    <source media="(max-width: 800px)" srcset="{{ $medium.RelPermalink }}">
    <source media="(min-width: 801px)" srcset="{{ $large.RelPermalink }}">
    <img src="{{ $medium.RelPermalink }}" alt="{{ $alt }}" loading="lazy">
  </picture>
{{ end }}
```

Use in content:
```markdown
{{< responsive-img src="images/photo.jpg" alt="My photo" >}}
```

#### Solution 6: WebP Format with Fallback

Create `layouts/shortcodes/webp-img.html`:

```html
{{ $src := .Get "src" }}
{{ $alt := .Get "alt" }}

{{ with resources.Get $src }}
  {{ $webp := .Resize "800x webp" }}
  {{ $jpeg := .Resize "800x jpg" }}
  
  <picture>
    <source type="image/webp" srcset="{{ $webp.RelPermalink }}">
    <source type="image/jpeg" srcset="{{ $jpeg.RelPermalink }}">
    <img src="{{ $jpeg.RelPermalink }}" alt="{{ $alt }}" loading="lazy">
  </picture>
{{ end }}
```

#### Solution 7: Lazy Loading (Already Supported!)

Modern browsers support native lazy loading:

```html
<img src="/images/photo.jpg" loading="lazy" alt="Description">
```

Check if the theme already uses this. If not, add via custom CSS/JS or modify templates.

#### Best Practices:

1. **Optimize before upload:**
   - JPEGs: 85% quality, progressive
   - PNGs: Use pngquant or similar
   - Convert to WebP when possible

2. **Appropriate dimensions:**
   - Hero images: 1920x1080 or 1200x630
   - Project thumbnails: 800x600
   - Profile photos: 400x400
   - Blog thumbnails: 600x400

3. **Use appropriate formats:**
   - Photos: JPEG or WebP
   - Graphics/logos: PNG or SVG
   - Icons: SVG when possible

4. **Enable lazy loading:**
   - Add `loading="lazy"` to images
   - Or use JavaScript lazy loading library

5. **Consider srcset:**
   ```html
   <img src="image-800.jpg" 
        srcset="image-400.jpg 400w,
                image-800.jpg 800w,
                image-1200.jpg 1200w"
        sizes="(max-width: 600px) 400px,
               (max-width: 1200px) 800px,
               1200px"
        alt="Description">
   ```

#### File Size Targets:

- **Hero images:** < 200KB
- **Featured images:** < 150KB
- **Thumbnails:** < 50KB
- **Icons:** < 20KB

#### For Theme Maintainer:

Consider adding built-in support for:
- Automatic image resizing/optimization
- WebP format generation
- Srcset for responsive images
- Lazy loading by default
- Cloudinary integration (already partially there)

#### Immediate Action:

1. Audit your current images:
   ```bash
   find static/images -type f -exec ls -lh {} \; | sort -k5 -hr | head -20
   ```

2. Optimize large images with online tools
3. Enable lazy loading where possible
4. Consider a CDN for automatic optimization

Hope this helps improve your site's performance!

---

### Issue #51: Build CSS files with sass/gohugo pipe

**Type:** Technical Enhancement

**Solution:**

Hello! This is a great suggestion for modernizing the theme's CSS build process. Currently, the theme uses plain CSS files. Here's how to implement SASS/SCSS with Hugo Pipes:

#### Benefits of Using Hugo Pipes with SASS:

✅ Variables and mixins  
✅ Nesting  
✅ Automatic minification  
✅ Source maps (for development)  
✅ Better organization  
✅ No external build tools needed  

#### Implementation Guide:

**Step 1: Convert CSS to SCSS**

Rename and reorganize:
```
themes/hugo-profile/
└── assets/
    └── scss/
        ├── main.scss
        ├── _variables.scss
        ├── _mixins.scss
        ├── components/
        │   ├── _header.scss
        │   ├── _footer.scss
        │   ├── _hero.scss
        │   └── _projects.scss
        └── pages/
            ├── _index.scss
            ├── _single.scss
            └── _list.scss
```

**Step 2: Create Main SCSS File**

`assets/scss/main.scss`:
```scss
// Variables
@import 'variables';
@import 'mixins';

// Components
@import 'components/header';
@import 'components/footer';
@import 'components/hero';
@import 'components/projects';

// Pages
@import 'pages/index';
@import 'pages/single';
@import 'pages/list';
```

**Step 3: Create Variables File**

`assets/scss/_variables.scss`:
```scss
// Colors (can be overridden by Hugo params)
$primary-color: #007bff;
$secondary-color: #f8f9fa;
$text-color: #343a40;
$background-color: #eaedf0;

// Dark mode
$dark-text-color: #e4e6eb;
$dark-background-color: #18191a;

// Spacing
$spacing-unit: 1rem;
$section-padding: 60px 0;

// Breakpoints
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1200px;

// Typography
$font-primary: "Alata", sans-serif;
$font-secondary: "Lora", serif;
$font-default: "Roboto", sans-serif;
```

**Step 4: Process SCSS in Templates**

Update `layouts/partials/head.html`:

```html
{{ $options := (dict "targetPath" "css/style.css" "outputStyle" "compressed" "enableSourceMap" true) }}
{{ $style := resources.Get "scss/main.scss" | resources.ToCSS $options | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $style.RelPermalink }}" integrity="{{ $style.Data.Integrity }}">
```

**Step 5: Use SCSS Features**

`assets/scss/components/_header.scss`:
```scss
@import '../variables';
@import '../mixins';

#nav {
    background-color: $secondary-color;
    padding: $spacing-unit;
    
    .nav-link {
        color: $text-color;
        
        &:hover {
            color: $primary-color;
            transition: color 0.3s ease;
        }
        
        @media (max-width: $tablet) {
            display: block;
            padding: 0.5rem 0;
        }
    }
}

// Dark mode
[data-theme="dark"] #nav {
    background-color: $dark-background-color;
    
    .nav-link {
        color: $dark-text-color;
    }
}
```

**Step 6: Create Mixins**

`assets/scss/_mixins.scss`:
```scss
// Responsive breakpoints
@mixin mobile {
    @media (max-width: #{$mobile}) {
        @content;
    }
}

@mixin tablet {
    @media (max-width: #{$tablet}) {
        @content;
    }
}

@mixin desktop {
    @media (min-width: #{$desktop}) {
        @content;
    }
}

// Card mixin
@mixin card {
    background-color: var(--secondary-color);
    border-radius: 0.75rem;
    box-shadow: 0px 8px 56px rgba(15, 80, 100, 0.16);
    padding: 1.5rem;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
}

// Flexbox center
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**Step 7: Use Mixins**

```scss
.project-card {
    @include card;
    @include tablet {
        padding: 1rem;
    }
}

.hero-content {
    @include flex-center;
    min-height: 100vh;
}
```

#### Advanced: Hugo Params Integration

Make SCSS use Hugo configuration:

`layouts/partials/head.html`:
```html
{{ $scssOptions := (dict 
    "targetPath" "css/style.css" 
    "outputStyle" "compressed"
    "vars" (dict 
        "primaryColor" .Site.Params.color.primaryColor
        "backgroundColor" .Site.Params.color.backgroundColor
    )
) }}
{{ $style := resources.Get "scss/main.scss" | resources.ToCSS $scssOptions | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $style.RelPermalink }}">
```

Then in SCSS:
```scss
$primary-color: {{ .Site.Params.color.primaryColor | default "#007bff" }};
```

#### Build Process:

**Development:**
```bash
hugo server --disableFastRender
# SCSS will be recompiled on changes
```

**Production:**
```bash
hugo --minify
# CSS will be minified and fingerprinted
```

#### For Theme Maintainer - Complete Migration:

1. **Create assets/scss/ structure**
2. **Convert all CSS to SCSS** (modular files)
3. **Add variables for customization**
4. **Create mixins for common patterns**
5. **Update head.html** to use Hugo Pipes
6. **Add documentation** for SCSS customization
7. **Keep CSS fallback** (optional) for backwards compatibility

#### User Benefits:

Once implemented, users can:

**Override variables:**
Create `assets/scss/custom-variables.scss`:
```scss
// Override theme variables
$primary-color: #ff6b6b;
$font-primary: "Inter", sans-serif;
```

**Extend styles:**
Create `assets/scss/custom.scss`:
```scss
@import 'custom-variables';

.my-custom-section {
    background: $primary-color;
    padding: 2rem;
}
```

**Use in hugo.yaml:**
```yaml
params:
  customCSS:
    - scss/custom.scss
```

#### Temporary Solution (For Users Now):

Until the theme implements this, you can:

1. Create your own SCSS in `assets/scss/custom.scss`
2. Compile it yourself in head extensions
3. Use it alongside theme's CSS

```html
<!-- layouts/partials/head/extensions.html -->
{{ $style := resources.Get "scss/custom.scss" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $style.RelPermalink }}">
```

This is a great enhancement that would modernize the theme's CSS architecture!

---

