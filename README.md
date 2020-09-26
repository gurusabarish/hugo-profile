# hugo-profile

A simple hugo theme for personal portfolio

![Thumpnail](https://github.com/gurusabarish/hugo-profile/blob/master/static/images/tn.png)

### Demo Site: [Hugo-profile](https://hugo-profile.netlify.com)

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

Paginate: 3

taxonomies:
  tag: "tags"
  category: "categories"
  
  
params:
  favicon: "/images/hugo.png"
  description: "Portfolio and personal blog of gurusabarish"
  googleanalytics: "UA-167646412-8"
  disqus: ""
  contact: "true"
  
  # Navbar Menus
  customMenus:
  - name: "Blog"
    url: "blog"
 
  # Home
  name: "Gurusabarish"
  profile: "/images/avatar-370-456322.webp"
  github: "https://github.com/gurusabarish"
  linkedin: "https://linkedin.com/in/gurusabarish"
  twitter: "https://twitter.com/gurusabarishh"
  instagram: "https://instagram.com/gurusabarishh"

  # Do things { Please change the svg icons width="3em" height="3em" }
  thing1: "Python"
  thing2: "Machine learning"
  thing3: "Build things for web"
  thing1_des: "I build something beautiful using python."
  thing2_des: "I train robust models for various tasks."
  thing3_des: "I love to build things for web."

  # About
  profile_image: "/images/gurusabarish.jpg"
  jop: "Web developer"
  jops_about: "web developer and ML engineer"
  resume: ""
  
  projects:
  - title: "Project name"
    image: "/images/project.png"
    description:  "This is your description"
    url: "https://github.com"
  

Author:
  name: "Gurusabarish"
  website: "https://github.com/gurusabarish"
```

<b>Use Yaml as config file</b>

You can just copy the content for `config.yaml` files from `theme/toha/exampleSite/config.yaml`.


## Contributing

> Contributers are always welcome :heart:

