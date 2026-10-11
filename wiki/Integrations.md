# Integrations

## Google Analytics

The theme includes Hugo's internal Google Analytics template in `<head>`. Configure it with Hugo's service settings:

```yaml
services:
  googleAnalytics:
    id: G-MEASUREMENT_ID
```

Only production builds (`hugo`, not `hugo server`) emit the snippet. See Hugo's [privacy configuration](https://gohugo.io/about/privacy/) for options.

## Disqus comments

Single posts include Hugo's internal Disqus template. Enable it by setting your shortname:

```yaml
services:
  disqus:
    shortname: your-disqus-shortname
```

Comments render below each post. Leave unset to disable.

## Formspree contact form

1. Create a form at <https://formspree.io> and copy the form ID from the endpoint (`https://formspree.io/f/abcdefgh` → `abcdefgh`).
2. Configure:

   ```yaml
   params:
     contact:
       enable: true
       content: My inbox is always open.
       btnName: Send
       formspree:
         enable: true
         formId: abcdefgh
         emailCaption: "Enter your email address"
         messageCaption: "Enter your message here"
         messageRows: 5
   ```

The theme loads `static/js/contact.js`, which submits the form with `fetch`, shows a success or error alert and resets the form on success. When Formspree is enabled the mailto button is not rendered.

## MathJax

```yaml
params:
  mathjax: true       # every page
```

or `mathjax: true` in a single post's front matter. MathJax 3.2.2 is loaded from cdnjs (with SRI).

## Cloudinary

Serve responsive, auto-optimised images that are hosted on Cloudinary.

1. Set your cloud name:

   ```yaml
   params:
     cloudinary_cloud_name: "YOUR_CLOUD_NAME"
   ```
2. Use the shortcode in a post:

   ```markdown
   {{< dynamic-img src="/v1/folder/photo.jpg" title="Alt text" width="w_600" style="max-width:60%" >}}
   ```

   | Parameter | Default | Meaning |
   | --- | --- | --- |
   | `src` | – | Path after the transformation segment, e.g. `/v1234/photo.jpg`. |
   | `title` | – | Used as `alt` and `title`. |
   | `width` | `w_auto` | Cloudinary width transformation. |
   | `style` | `max-width:80%` | Inline CSS. |

The Cloudinary JS library is loaded only when `cloudinary_cloud_name` is set.

## Bootstrap CDN

Bootstrap 5 and Font Awesome 6 are bundled in `static/`. Set `params.useBootstrapCDN` to `true`, `"css"` or `"js"` to load Bootstrap from jsDelivr instead.

## Hugo built-in shortcodes

Everything in Hugo's [embedded shortcodes](https://gohugo.io/content-management/shortcodes/#embedded) (YouTube, Vimeo, X/Twitter, Instagram, Gist, figure…) works in posts. See `rich-content.md` in the example site.
