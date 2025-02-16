---
title: "Rich Content"
date: 2021-04-03T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Rich content
  - Sample
  - example
image: /images/post.jpg
description: ""
toc: 
---

Hugo ships with several [Embedded Shortcodes](https://gohugo.io/content-management/shortcodes/#embedded) for rich content, along with a [Privacy Config](https://gohugo.io/about/privacy/#configuration) and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.

## X Simple Shortcode
```
{{</* x user="GoHugoIO" id="1315233626070503424" */>}}
```
<br>
{{< x user="GoHugoIO" id="1315233626070503424" >}}
<br>



## Vimeo Simple Shortcode
```
{{</* vimeo 146022717 */>}}
```
<br>
{{< vimeo 146022717 >}}
<br>



## Youtube Simple Shortcode
```
{{</* youtube w7Ft2ymGmfc */>}}
```
<br>
{{< youtube w7Ft2ymGmfc >}}
<br>

## Theme Custom Shortcodes

These shortcodes are not Hugo built-ins, but are provided by the theme.

### Responsive Images with Cloudinary

You can learn more about this [here](https://cloudinary.com/documentation/responsive_images).

Set the `cloudinary_cloud_name` parameter in your site config to use this shortcode.

```
{{</* dynamic-img src="/my/image/on/cloudinary" title="A title for the image" */>}}
```

Note that you do not include the file extension (e.g. `.png`) in the `src` parameter, as the shortcode will automatically determine the best quality and format for the user's device.

Optionally, you can customize the general CSS styles for the image:

```
{{</* dynamic-img src="/my/image/on/cloudinary" title="A title for the image" style="max-width:60%" */>}}
```
