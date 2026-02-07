# Quick Start Guide - Hugo Profile

Get your Hugo Profile site up and running in just 5 minutes! ⚡

## Table of Contents

- [Prerequisites](#prerequisites)
- [5-Minute Setup](#5-minute-setup)
- [Essential Configuration](#essential-configuration)
- [Basic Customization](#basic-customization)
- [Next Steps](#next-steps)

---

## Prerequisites

✅ **Hugo Extended** version 0.87.0 or higher  
✅ **Git** installed  
✅ **5 minutes** of your time  

Check your Hugo version:
```bash
hugo version
```

If you don't have Hugo, install it:
- **macOS**: `brew install hugo`
- **Windows**: `choco install hugo-extended`
- **Linux**: `snap install hugo`

---

## 5-Minute Setup

### Step 1: Create Your Site (1 minute)

```bash
# Create a new Hugo site
hugo new site my-portfolio --format="yaml"
cd my-portfolio

# Initialize Git
git init

# Add Hugo Profile theme
git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
```

### Step 2: Copy Configuration (1 minute)

```bash
# Copy the example configuration
cp themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml

# Copy example content and images
rsync -av themes/hugo-profile/exampleSite/static/ ./static/
rsync -av themes/hugo-profile/exampleSite/content/ ./content/
```

### Step 3: Start the Server (30 seconds)

```bash
hugo server
```

🎉 **Your site is now running at** `http://localhost:1313`

### Step 4: Open in Browser (30 seconds)

Open your browser and navigate to `http://localhost:1313`

You should see the Hugo Profile demo site running locally!

---

## Essential Configuration

Now let's personalize your site. Open `hugo.yaml` in your text editor and update these key fields:

### 1. Basic Site Information (2 minutes)

```yaml
baseURL: "https://yoursite.com"  # Your future domain
title: "Your Name - Portfolio"    # Your site title
```

### 2. Hero Section (Your Introduction)

Find the `hero` section and update:

```yaml
hero:
  enable: true
  intro: "Hi, my name is"
  title: "Your Name"                    # ← Your name
  subtitle: "What you do"               # ← Your tagline
  content: "Your bio goes here..."      # ← About you
  image: /images/hero.svg               # ← Your photo
```

### 3. About Section

```yaml
about:
  enable: true
  title: "About Me"
  image: "/images/me.png"               # ← Your photo
  content: |-
    Write a brief introduction about yourself.
    What you do, what you're passionate about, etc.
```

### 4. Social Links

Update your social media links:

```yaml
hero:
  socialLinks:
    fontAwesomeIcons:
      - icon: fab fa-github
        url: https://github.com/yourusername      # ← Your GitHub
      - icon: fab fa-linkedin
        url: https://linkedin.com/in/yourusername # ← Your LinkedIn
      - icon: fab fa-twitter
        url: https://twitter.com/yourusername     # ← Your Twitter
```

### 5. Contact Information

```yaml
contact:
  enable: true
  content: "Feel free to reach out!"
  btnName: "Email Me"
  btnLink: mailto:your.email@example.com  # ← Your email
```

### 6. Footer Social Links

```yaml
footer:
  socialNetworks:
    github: https://github.com/yourusername
    linkedin: https://linkedin.com/in/yourusername
    twitter: https://twitter.com/yourusername
```

**Save the file** and check your browser. Hugo will automatically reload with your changes!

---

## Basic Customization

### Change Colors

Want to use your brand colors? Update the `color` section:

```yaml
color:
  primaryColor: "#007bff"        # Your main brand color
  textLinkColor: "#007bff"       # Links color
  backgroundColor: "#ffffff"     # Background color
```

### Disable Unwanted Sections

Don't need a section? Disable it:

```yaml
navbar:
  menus:
    disableAbout: false        # Set to true to hide
    disableExperience: false   # Set to true to hide
    disableEducation: false    # Set to true to hide
    disableProjects: false     # Set to true to hide
    disableAchievements: false # Set to true to hide
    disableContact: false      # Set to true to hide
```

### Add Your Resume

Replace the example resume button with your actual resume:

```yaml
hero:
  button:
    enable: true
    name: "Download Resume"
    url: "/resume.pdf"    # Place your resume.pdf in static/ folder
    download: true
```

### Change Your Photo

1. Place your photo in `static/images/`
2. Update the image paths:

```yaml
hero:
  image: /images/your-photo.jpg

about:
  image: "/images/your-photo.jpg"
```

---

## Next Steps

Congratulations! You now have a working Hugo Profile site. 🎉

Here's what to do next:

### 1. Add Your Content

#### Create Your First Blog Post

```bash
hugo new content/blogs/hello-world.md
```

Edit the file and set `draft: false` to publish it.

#### Update Projects Section

Edit the `projects` section in `hugo.yaml`:

```yaml
projects:
  enable: true
  items:
    - title: "Your Project Name"
      content: "Project description"
      image: /images/projects/project1.png
      links:
        - icon: fab fa-github
          url: https://github.com/yourusername/project
```

#### Update Experience Section

```yaml
experience:
  enable: true
  items:
    - company: "Your Company"
      companyUrl: "https://company.com"
      jobs:
        - name: "Your Role"
          date: "Jan 2023 - Present"
          content: "What you do/did at this company..."
```

### 2. Learn More

📖 **Detailed Guides:**
- [Complete Documentation](../DOCUMENTATION.md) - Full guide to all features
- [Configuration Reference](CONFIGURATION.md) - All configuration options
- [Content Guide](CONTENT-GUIDE.md) - Creating and managing content
- [Customization Guide](CUSTOMIZATION.md) - Styling your site
- [Deployment Guide](DEPLOYMENT.md) - Deploy to Netlify, GitHub Pages, etc.

### 3. Deploy Your Site

When you're ready to share your site with the world:

**Quick Deploy to Netlify:**
1. Push your site to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

See the [Deployment Guide](DEPLOYMENT.md) for detailed instructions.

### 4. Join the Community

- ⭐ [Star the project on GitHub](https://github.com/gurusabarish/hugo-profile)
- 🐛 [Report issues](https://github.com/gurusabarish/hugo-profile/issues)
- 💬 [Ask questions](https://github.com/gurusabarish/hugo-profile/discussions)

---

## Quick Reference

### Common Commands

```bash
# Start development server
hugo server

# Start with drafts visible
hugo server -D

# Build for production
hugo --minify

# Create new blog post
hugo new content/blogs/post-name.md

# Clean and rebuild
hugo --cleanDestinationDir
```

### Important Files

- `hugo.yaml` - Main configuration file
- `content/` - All your content (blog posts, pages)
- `static/` - Static files (images, PDFs, etc.)
- `themes/` - Theme files (don't edit directly)
- `public/` - Generated site (created by `hugo` command)

### Getting Help

- 📖 [Full Documentation](../DOCUMENTATION.md)
- ❓ [FAQ](FAQ.md)
- 🔍 [Troubleshooting](../DOCUMENTATION.md#troubleshooting)
- 💬 [GitHub Issues](https://github.com/gurusabarish/hugo-profile/issues)

---

## Tips for Success

✨ **Start Simple**: Don't try to customize everything at once. Get the basics working first.

✨ **Use Example Content**: Learn from the example content before creating your own.

✨ **Save Often**: Hugo auto-reloads, but save your files frequently.

✨ **One Section at a Time**: Configure and test one section before moving to the next.

✨ **Check the Console**: If something doesn't work, check your terminal for error messages.

✨ **Use Version Control**: Commit your changes to Git regularly.

```bash
git add .
git commit -m "Updated hero section"
```

---

**You're all set! Start building your amazing portfolio! 🚀**

Need help? Check the [full documentation](../DOCUMENTATION.md) or [open an issue](https://github.com/gurusabarish/hugo-profile/issues).
