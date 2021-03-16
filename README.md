
<div align="center">
  
# hugo-profile

A high performance hugo theme for personal portfolio and blog

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE)
[![lighthouse score](https://img.shields.io/static/v1?label=Lighthouse%20Score&message=Good&color=green)](https://hugo-profile.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
</div>

## Queries
- If you have any queries or bugs, feel free to open an issue in [github](https://github.com/gurusabarish/hugo-profile/issues)


## Performance of the website (100)
- [Lighthouse performance (100)](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fhugo-profile.netlify.app%2F)
- [Google pagespeed insights (100)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fhugo-profile.netlify.app%2F&tab=desktop)


### [Demo Site](https://hugo-profile.netlify.app)

*NOTE: If you are using this site as a template for your own portfolio and blog, I would be very glad if you add a link to the original template in footer*

## Features
- High performance
- Minimalist Design
- Fully Responsive
- Google Analytics Support
- Disqus Comment Support

> Open an issue and give some feedbacks, feature requests. It will help us to make the better version.

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

Configure your `config.yaml` file of your site as [here](https://github.com/gurusabarish/hugo-profile/blob/master/exampleSite/config.yaml):


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
