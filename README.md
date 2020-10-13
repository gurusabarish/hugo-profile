
<div align="center">
  
# hugo-profile

A simple hugo theme for personal portfolio

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE)
[![lighthouse score](https://img.shields.io/static/v1?label=Lighthouse%20Score&message=Good&color=green)](https://hugo-profile.netlify.app/)
</div>

## Performance of the website by web.dev
[check the performance of website](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fhugo-profile.netlify.app%2F)
## Demo

![Thumpnail](https://github.com/gurusabarish/hugo-profile/blob/master/images/tn.png)

### Site: [Hugo-profile](https://hugo-profile.netlify.com)


## Features
- Minimalist Design
- Fully Responsive
- Google Analytics Support
- Disqus Comment Support
- Contact form using [Formpree](https://formspree.io/)



## Requirements

- Hugo Version 0.68.0 or higher



## Installation

- [Install Hugo](https://gohugo.io/overview/installing)

- Create your site if you haven't already

```console
hugo new site my-site -f=yaml
cd my-site
git init
```

- Add the theme as git sub-module

```console
git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
```

>Don't use SSH URL of the theme during adding as git sub-module. Also, don't clone the theme in your `themes` directory using `git clone`. They don't work well with Github Action or Netlify.


## Configuration

Configure your `config.yaml` file of your site as below:

```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxxxxx-x
disqusShortname: yourdiscussshortname
Paginate: 3

taxonomies:
  tag: "tags"
  category: "categories"

params:
  favicon: "/images/hugo.png"
  description: "A hugh performance hugo theme for personal website. It is single page portfolio. It has blog, contact sections also. Contact is powered by formspree."
  disqus: ""
  copyright: "2020"

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
  name: "Gurusabarish"
  profile: "/images/avatar-370-456322.webp"
  github: "https://github.com/gurusabarish"
  linkedin: "https://linkedin.com/in/gurusabarish"
  twitter: "https://twitter.com/gurusabarishh"
  instagram: "https://instagram.com/gurusabarishh"

  # Do things 
  usedothings: true
  usedefaultlogos: true

  thing1: "Python"
  thing2: "Machine learning"
  thing3: "Things for web"
  thing1_des: "I build something beautiful using Python."
  thing2_des: "I train robust models for various tasks."
  thing3_des: "I love to build things for web."

  # About
  profile_image: "/images/gurusabarish.jpg"
  descripe_l1_person: "Hi, I'm Gurusabarish, a passionate web developer and ML engineer. 
  I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly."
  descripe_l2_person: "This is just a example for about section. You can easily change with the help of cofig file."
  job: "your role"
  resume: ""
  
  #projects
  projects:
  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"
  
  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"

  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"

  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"

  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"

  - title: "Project name"
    image: "/images/project-preview.jpg"
    description:  "This is your description"
    secoundarylink: true
    secoundaryurlname: "Secoundary link"
    secoundaryurl: "https://github.com/gurusabarish/hugo-profile"
    sourceurl: "https://github.com/gurusabarish/hugo-profile"
  

Author:
  name: "Gurusabarish"
  website: "https://github.com/gurusabarish"

```

<b>Use Yaml as config file</b>

You can just copy the content for `config.yaml` files from `theme/toha/exampleSite/config.yaml`.


## Contributing

> Contributers are always welcome :heart:

