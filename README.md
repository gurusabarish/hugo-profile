# Hugo Profile

[![Twitter](https://img.shields.io/twitter/url?label=Tweet&style=social&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile) [![GitHub forks](https://img.shields.io/github/forks/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/network) [![GitHub stars](https://img.shields.io/github/stars/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/stargazers)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
![Latest Release](https://img.shields.io/github/v/release/gurusabarish/hugo-profile?include_prereleases)
![Last Commit](https://img.shields.io/github/last-commit/gurusabarish/hugo-profile)
![Open Issues](https://img.shields.io/github/issues/gurusabarish/hugo-profile?color=important)
![Open Pull Requests](https://img.shields.io/github/issues-pr/gurusabarish/hugo-profile?color=yellowgreen)
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)

Hugo Profile is a high-performance, mobile-first Hugo theme for personal portfolios and blogs.

- Example Site: [https://hugo-profile.netlify.app](https://hugo-profile.netlify.app)
- Wiki Page: [https://github.com/gurusabarish/hugo-profile/wiki](https://github.com/gurusabarish/hugo-profile/wiki)

**Features:**
- Fully Responsive
- Minimalist Design
- SEO Friendly
- Light / Dark / Auto Theme Modes
  - See our wiki for [theme color customization](https://github.com/gurusabarish/hugo-profile/wiki/Color-Customization)
- Taxonomy Support – Categories and tags for organizing content
- Analytics Support 
  - [Google Analytics](https://gohugo.io/templates/internal/#google-analytics)
- Comment Support
  - [Disqus](https://gohugo.io/content-management/comments/)
- Contact Form Integration
  - Integration with [FormSpree](https://formspree.io/) for submitting "Contact me" form
- Technology used: Bootstrap, fontawesome 


## Requirements

- **Hugo version 0.87.0 or higher**   
If you haven't installed Hugo, see [here](https://gohugo.io/installation/) for installation.


## Quick Start 


1. Create your site with Hugo.  
    This uses the `config.yaml` configuration file instead of the default TOML.   

    ```
    hugo new site my-site --format="yaml"
    ```
  

2. Clone this repository inside your themes folder:
    ```
    cd my-site/themes && git clone https://github.com/gurusabarish/hugo-profile.git
    ```
    This allows you to make lots of custom changes. However, if you wish to get automatic or structured updates from the original repo, you can add the theme as a submodule:

    ```
    cd my-site
    git init
    git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
    ```    

3. Copy the example configuration file to your root directory:
    ```
    cp -f themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml
    ```

4. Verify your site is on:
    ```
    hugo server
    ```


***Note:*** 

You may not see the images or the Blog/Gallery sections on the site initially, because their content currently resides in "themes/hugo-profile/exampleSite/", whereas Hugo expects them in the root-level `static/` (for images) and `content/` (for pages).

To have a complete view of the example site, simply run:    

```
rsync -av themes/hugo-profile/exampleSite/static/ ./static/
rsync -av themes/hugo-profile/exampleSite/content/ ./content/
```

You can customize or replace this content to match your own site.


## Content Management



For more details: [Hugo's official docs](https://gohugo.io/getting-started/quick-start/), [content management](https://www.mikedane.com/static-site-generators/hugo/content-organization/)


Refer to our [wiki](https://github.com/gurusabarish/hugo-profile/wiki) for more details.




## Deployment

If you do not require extensive customization of website elements, the simplest way is to click the **Use this template** button to create your own repo, and connect that repo to Netlify. Whenever you make changes to the files inside the `exampleSite` folder, Netlify will automatically detect and deploy your changes. 


If you follow the steps in the [Quick Start](#quick-start) section above, you can still deploy your site to Netlify, but a few additional configurations are required. **See [here](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/) to host your site on Netlify**.


Alternatively, you can run `hugo` to generate the final, ready-to-deploy static output (i.e., the `public/` folder) and upload to the hosting platform. It is recommended to delete the `public/` folder before re-building to ensure it contains only the latest output:
```
rm -rf public/ && hugo
```


## Trouble-Shooting

```
ERROR error calling resources.GetRemote: Get "https://publish.twitter.com/oembed?dnt=false&url=https%3A%2F%2Ftwitter.com%2FGoHugoIO%2Fstatus%2F1315233626070503424": net/http: TLS handshake timeout
Built in 10266 ms
Error: error building site: logged 1 error(s)
```
The TLS handshake timeout error can happen due to network issues. If this error persists, you can delete the shortcode example `{{< tweet user="GoHugoIO" id="1315233626070503424" >}}` in the "content/blogs/rich-content.md" file.


## Issues

If you have a question, please [open an issue](https://github.com/gurusabarish/hugo-profile/issues) for help and to help those who come after you. The more information you can provide, the better!

## Contributing

Contributions, issues, and feature requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under [MIT](LICENSE)

## 🤝 Support

Give a ⭐️ or buy me a ~`coffee`~ tea if you like this project!

<a href="https://www.buymeacoffee.com/gurusabarish" target="_blank" rel="noopener"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="145" alt="Buy Me A Coffee"></a>
