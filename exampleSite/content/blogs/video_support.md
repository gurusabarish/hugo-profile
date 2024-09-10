---
title: "Video Support to Blog Posts"
date: 2021-09-06T22:41:10+05:30
draft: false
author: "Robert Viquez"
tags: 
    - Hugo
    - Video
description: "Brief overview of how video support was added to blog posts."
# image:
video: "https://res.cloudinary.com/dqyllgamr/video/upload/v1725611771/ExampleVideo_uifgil.mp4" 
toc: true
---

---

## Overview

This guide briefly outlines how to add video support to blog posts in Hugo. The implementation involves updating configuration files and layout templates to handle video content.

## Configuration Updates

### `config.yaml`

Updated to enable video support:

```yaml
disableFeaturedImage: false
disableFeaturedVideo: false
```

## Layout Modifications

### List Page (`layouts/_default/list.html`)

Added video support:

```html
{{ if .Params.video }}
<div class="video-container">
    <video width="640" height="360" autoplay loop>
        <source src="{{ .Params.video }}" type="video/mp4">
        Your browser does not support video.
    </video>
</div>
{{ end }}
```

### Single Page (`layouts/_default/single.html`)

Included video support:

```html
{{ if .Params.video }}
<div class="video-container">
    <video width="640" height="360" autoplay loop>
        <source src="{{ .Params.video }}" type="video/mp4">
        Your browser does not support video.
    </video>
</div>
{{ end }}
```

## CSS Adjustments

### List Page (`static/css/list.css`)

Styled video containers:

```css
.video-container {
    position: relative;
    padding-top: 56.25%; 
    width: 100%; 
    max-width: 640px; 
    margin: 0 auto; 
}

.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    border-radius: 8px; 
}
```

### Single Page (`static/css/single.css`)

Centered video on single pages:

```css
#single .video-container {
    display: flex; 
    justify-content: center; 
    align-items: center;
}

#single .video-container video {
    border-radius: 16px; 
}
```

## Conclusion

These changes add video support to blog posts, enhancing both list and single post displays. 