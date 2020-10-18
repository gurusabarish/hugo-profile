
<div align="center">
  
# hugo-profile (100% performance)

A simple hugo theme for personal portfolio

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE)
[![lighthouse score](https://img.shields.io/static/v1?label=Lighthouse%20Score&message=Good&color=green)](https://hugo-profile.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a572f1e-5a21-4ad5-8b55-2eee7a626da8/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)

### 
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

```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "Hugo-profile"
theme: "hugo-profile"

googleanalytics: UA-xxxxxxx-x
disqusShortname: yourdisqusname
Paginate: 3

taxonomies:
  tag: "tags"
  category: "categories"

params:
  favicon: "/images/fav.png"
  description: "A high performance hugo theme for personal website. It is single page portfolio. It has blog."
  copyright: "2020"

  # Navbar Menus
  customMenus:
  - name: "Blog"
    Url: "/blog"
    
  # social
  name: "Gurusabarish"
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
  profile_image: "/images/gurusabarish.webp"
  descripe_l1_person: "Hi, I'm Gurusabarish, a passionate web developer and ML engineer. 
  I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly."
  descripe_l2_person: "This is just a example for about section. You can easily change with the help of cofig file."
  job: "Web developer"
  resume: ""

Author:
  name: "Gurusabarish"
  website: "https://github.com/gurusabarish"
```

<b>Use Yaml as config file</b>

You can just copy the content for `config.yaml` files from `theme/toha/exampleSite/config.yaml`.

## Version 1
- [demo](https://hugo-profile-v1.netlify.app)
- [view](https://github.com/gurusabarish/hugo-profile/tree/V1.20)
- [download V1](https://github.com/gurusabarish/hugo-profile/archive/V1.20.zip)


## Contributing

> Contributers are always welcome :heart:

