
<div align="center">
  
# hugo-profile (100% performance)

![visitors](https://visitor-badge.glitch.me/badge?page_id=https://github.com/gurusabarish/hugo-profile)

A simple hugo theme for personal portfolio

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE)
[![lighthouse score](https://img.shields.io/static/v1?label=Lighthouse%20Score&message=Good&color=green)](https://hugo-profile.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
</div>

## Queries
- If you have any queries or bugs, feel free to open an issue in [github](https://github.com/gurusabarish/hugo-profile/issues)
- Join our community for further updates: [hugo-profile](https://discord.gg/zgTajK4)


## Performance of the website (100)
- [Lighthouse performance (100)](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fhugo-profile.netlify.app%2F)
- [Google pagespeed insights (100)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhugo-profile.netlify.app%2F&tab=desktop)

![High performance of the hugo-profile theme](https://raw.githubusercontent.com/gurusabarish/hugo-profile/master/images/100.png)

## Demo

![Thumpnail](https://github.com/gurusabarish/hugo-profile/blob/master/images/tn.png)

### Demo Site: [Hugo-profile (100)](https://hugo-profile.netlify.app)

*NOTE: If you are using this site as a template for your own portfolio and blog, I would be very glad if you add a link to the original site with my name in footer*

## Features
- High(100) performance
- Minimalist Design
- Fully Responsive
- Google Analytics Support
- Disqus Comment Support


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

Configure your `config.yaml` file of your site as below:

```
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxxxx-x
disqusShortname: yourdisqusname
Paginate: 3

taxonomies:
  tag: "tags"
  category: "categories"

params:
  favicon: ""
  description: "A high performance hugo theme for personal website. It is single page portfolio. It has blog."
  copyright: "2020"

  # Navbar Menus
  customMenus:
  - name: "Blog"
    Url: "/blog"
    
  # social
  name: "Hugo-profile"
  github: "https://github.com"
  linkedin: "https://linkedin.com"
  twitter: "https://twitter.com"
  instagram: "https://instagram.com"
  facebook: "https://facebook.com"

  # About
  profile_image: ""
  descripe_l1_person: "A high performance hugo theme for personal website and blog. It is a single page portfolio."
  descripe_l2_person: "This is just a example for about section. You can easily change with the help of cofig file."
  job: "Your job"
  useresume: true
  resume: ""

  # Things I do
  usedothings: true
  Things:
    - logo: fab fa-python
      title: Python
      description: I build something beautiful using Python.

    - logo: fas fa-robot
      title:  Machine learning 
      description: I train robust models for various tasks. 

    - logo: fab fa-html5
      title: Things for web 
      description: I love to build things for web

  #blog ( Description for seo. If you want to show description in your blog post, let's make it true)
  showdescription: true

Author:
  name: "Gurusabarish"
  website: "https://github.com/gurusabarish"

```

<b>Use Yaml as config file</b>

You can just copy the content for `config.yaml` files from `theme/toha/exampleSite/config.yaml`.

## Archetypes support
```
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
github_link: "https://github.com/gurusabarish/hugo-profile"
author: ""
tags:
  - 
bg_image: ""
description: ""
---
```

## Version 1
- [demo](https://hugo-profile-v1.netlify.app)
- [view](https://github.com/gurusabarish/hugo-profile/tree/V1.20)
- [download V1](https://github.com/gurusabarish/hugo-profile/archive/V1.20.zip)


## Contributing

> Contributers are always welcome :heart:

