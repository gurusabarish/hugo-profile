
<div align="center">
  
# hugo-profile
  
A high performance hugo theme for personal portfolio and blog

[![Twitter](https://img.shields.io/twitter/url?label=Tweet&style=social&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)
[![GitHub forks](https://img.shields.io/github/forks/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/network)
[![GitHub stars](https://img.shields.io/github/stars/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/stargazers)
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
![Repository Size](https://img.shields.io/github/repo-size/gurusabarish/hugo-profile)
![Latest Release](https://img.shields.io/github/v/release/gurusabarish/hugo-profile?include_prereleases)
![Last Commit](https://img.shields.io/github/last-commit/gurusabarish/hugo-profile)
![Open Issues](https://img.shields.io/github/issues/gurusabarish/hugo-profile?color=important)
![Open Pull Requests](https://img.shields.io/github/issues-pr/gurusabarish/hugo-profile?color=yellowgreen)
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)
</div>

## Queries
- If you have any queries or bugs, feel free to open an issue in [github](https://github.com/gurusabarish/hugo-profile/issues)

## Quick deployment
*Fork this repo or create your own github repo using "*use this template*" button. Edit the content inside website folder and connect your repo to netlify*
> Please, use your google analytics after deployment
## Demos

### [Demo Site V3(latest)](https://profile.gurusabarish.tech)
### [Demo Site V2](https://v2.profile.gurusabarish.tech)
### [Demo Site V1](https://v1.profile.gurusabarish.tech)

*NOTE: If you are using this site as a template for your own portfolio and blog, I would be very glad if you add a link to the original template in footer*

> Open an issue and give your feedback and feature requests. It will help us to make the better version.

## Requirements

- Hugo Version 0.68.0 or higher



## Installation

- [Install Hugo](https://gohugo.io/overview/installing)

- Create your site if you haven't already

```
hugo new site my-site -f=yaml
cd my-site
```

- Add the theme as git clone

```
cd themes
git clone https://github.com/gurusabarish/hugo-profile.git
```

<b>Go to the config file and add the line after titile ```theme: "hugo-profile"``` </b>

## Configuration
### Version 1
```
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxxxx-x
disqusShortname: yourdiscussshortname
Paginate: 3

taxonomies:
  tag: "tags"
  category: "categories"

params:
  version: 1

  favicon: "/images/hugo.png"
  description: "A hugh performance hugo theme for personal website. It is single page portfolio. It has blog, contact sections also. Contact is powered by formspree."
  disqus: ""

  # Background
  custombackground: false
  background: ""
  backimg: ""

  # Contact
  contact: true
  action: ""
  emailname: ""
  messagename: ""

  # Navbar Menus
  customMenus:
    - name: "Blog"
      Url: "/blog"

  # Home
  name: "Example name"
  profile: "/images/v1/avatar.webp"
  github: "https://github.com/"
  linkedin: "https://linkedin.com/"
  twitter: "https://twitter.com/"
  instagram: "https://instagram.com/"

  # Things I do
  usedothings: true
  Things:
    - logo: fab fa-python
      title: Python
      description: I build something beautiful using Python.
      #url: https://example.com

    - logo: fas fa-robot
      title: Machine learning
      description: I train robust models for various tasks.
      #url: https://guru.com

    - logo: fab fa-html5
      title: Things for web
      description: I love to build things for web
      #url: https://guru.com

  # About
  profile_image: "/images/profile.webp"
  descripe_l1_person: "Hi, I'm Profile, a passionate web developer. I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly."
  descripe_l2_person: "This is just a example for about section. You can easily change with the help of cofig file."
  job: "your role"
  resume: "/resume.pdf"

  #projects
  projects:
    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

    - title: "Project name"
      image: "/images/project.jpg"
      description: "This is your description"
      secoundarylink: true
      secoundaryurlname: "Featured link"
      secoundaryurl: "/"
      sourceurl: "https://github.com/gurusabarish/hugo-profile"

  #Blog
  showdescription: false
  tweet: true
```

### Version 2
```
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxx-x
disqusShortname:
Paginate: 3
markup:
  goldmark:
    renderer:
      unsafe: true

taxonomies:
  tag: "tags"
  category: "categories"

enableEmoji: true
params:
  version: 2

  favicon: "/images/fav.png"
  description: "A high performance hugo theme for personal portfolio and blog."
  copyright: "2021"

  # Navbar Menus
  customMenus:
    - name: "About"
      Url: "/#"
    - name: "Blog"
      Url: "/blog"

  # social
  socialicontop: false
  name: "Examble name"
  github: "https://github.com"
  linkedin: "https://linkedin.com"
  twitter: "https://twitter.com/"
  instagram: "https://instagram.com/"
  facebook: "https://facebook.com"

  # About
  profile_image: "/images/profile.webp"
  descripe_l1_person: "Hi, I'm Profile, a passionate web developer. I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly. This is a example template for about section."
  descripe_l2_person: ""

  useresume: true
  customname: ""
  resumelink: "/resume.pdf"

  # Things I do
  usedothings: true
  Things:
    - logo: fab fa-python
      title: Python
      description: I build something beautiful using Python.
      #url: https://example.com

    - logo: fas fa-robot
      title: Machine learning
      description: I train robust models for various tasks.
      #url: https://guru.com

    - logo: fab fa-html5
      title: Things for web
      description: I love to build things for web
      #url: https://guru.com

  # Footer
  socialiconfooter: true
  recentposts: true

  # Blog
  showdescription: false
  tweet: true
```

### Version 3
```
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxx-x
disqusShortname:
Paginate: 3
markup:
  goldmark:
    renderer:
      unsafe: true

taxonomies:
  tag: "tags"
  category: "categories"

enableEmoji: true
params:
  version: 3

  favicon: "/images/fav.png"
  description: "A high performance hugo theme for personal portfolio and blog."

  # Navbar Menus
  customMenus:
    - name: "Blog"
      Url: "/blog"

  # home
  disable_home: false
  profile_image: "/images/profile.png"
  name: "Example name"
  profession: "Profession"
  github: "https://github.com"
  linkedin: "https://linkedin.com"
  twitter: "https://twitter.com/"
  instagram: "https://instagram.com/"
  facebook: "https://facebook.com"

  # About
  disable_about: false
  descripe_l1_person: "Hi, I'm Profile, a passionate web developer. I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly."
  descripe_l2_person: "This is a example template for about section. You can find my works [here](#projects)"
  skills:
    - name: CSS
      percentage: 90
    - name: Django
      percentage: 85
    - name: Hugo
      percentage: 80
    - name: React JS
      percentage: 70

  # Experience
  disable_experience: false
  experience:
    - company: "Google"
      role: "Software developer"
      startdate: Feb 2021
      enddate: present
      featuredpoints:
        - point: Lead backend developer for a product.
        - point: Created a frontend design for a product.
    - company: "Facebook"
      role: "Fullstack developer"
      startdate: Mar 2020
      enddate: Dec 2020
      featuredpoints:
        - point: Lead backend developer for a product.
        - point: Created a frontend design for a product.
    - company: "Amazon"
      role: "Fullstack developer"
      startdate: Feb 2019
      enddate: Jan 2020
      featuredpoints:
        - point: Lead backend developer for a product.
        - point: Created a frontend design for a product.

  # Education
  disable_education: false
  education:
    - degree: "B.tech"
      branch: "Information Technology"
      university: "Example university"
      startedyear: "2013"
      graduation: "2018"
    - degree: "Degree"
      branch: "Branch"
      university: "Example university"
      startedyear: "year"
      graduation: "year"
    - degree: "Degree"
      branch: "Branch"
      university: "Example university"
      startedyear: "year"
      graduation: "year"

  # Projects
  disable_projects: false
  projects:
    - name: "Example project without details"
      img: /images/project.jpg
      githublink: "https://github.com/"
      featuredlink: "/"
      description: "Description of project"

  # Achievements
  disable_achievements: false
  achievements:
    - title: Competition winner
      description: We are developed a product which can help others.
      img: /images/achiv.jpg
    - title: Competition winner
      description: We are developed a product which can help others.
      img: /images/achiv.jpg
    - title: Competition winner
      description: We are developed a product which can help others.
      img: /images/achiv.jpg
    - title: Competition winner
      description: We are developed a product which can help others.
      img: /images/achiv.jpg

  # Contact
  disable_contact: false
  contact_content: My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
  email: "example@mail.com"

  # Footer
  socialiconfooter: true
  recentposts: true

  # Blog
  showdescription: false
  tweet: true
```

## Contributing

> Contributers are always welcome :heart:
