# Hugo Profile

[![Twitter](https://img.shields.io/twitter/url?label=Tweet&style=social&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile) [![GitHub forks](https://img.shields.io/github/forks/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/network) [![GitHub stars](https://img.shields.io/github/stars/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/stargazers)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
![Latest Release](https://img.shields.io/github/v/release/gurusabarish/hugo-profile?include_prereleases)
![Last Commit](https://img.shields.io/github/last-commit/gurusabarish/hugo-profile)
![Open Issues](https://img.shields.io/github/issues/gurusabarish/hugo-profile?color=important)
![Open Pull Requests](https://img.shields.io/github/issues-pr/gurusabarish/hugo-profile?color=yellowgreen)
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)

**Hugo Profile:** a high-performance, mobile-first Hugo theme for personal portfolios and blogs.

- Example Site: [https://hugo-profile.netlify.app](https://hugo-profile.netlify.app)
- Wiki Page: [https://github.com/gurusabarish/hugo-profile/wiki](https://github.com/gurusabarish/hugo-profile/wiki)

**Features:**
- Fully Responsive
- Minimalist Design
- SEO Friendly
- [Light/Dark/Auto Theme Color Configuration](https://github.com/gurusabarish/hugo-profile/wiki/Color-Customization)
- Categories and Tags Support
- Analytics Support ([Google Analytics](https://gohugo.io/templates/internal/#google-analytics))
- Comment Support ([Disqus](https://gohugo.io/content-management/comments/))
- Contact Form Integration ([FormSpree](https://formspree.io/))
- Built with Bootstrap and Font Awesome


## Requirements

- **Hugo version 0.87.0 or higher**   
To check your installed version, run:   
  ```bash
  hugo version
  ```
  If Hugo is not installed, follow the [official installation guide](https://gohugo.io/installation/) for installation.


## Quick Start 

1. Create a new Hugo site:  

    ```bash
    hugo new site my-site --format="yaml"
    ```  
    This uses a `hugo.yaml` configuration file instead of the default TOML format. 

2. Add a theme.  

    Option A: Clone this repository inside your themes folder.  
    This allows you to make lots of custom changes.
    ```bash
    cd my-site/themes
    git clone https://github.com/gurusabarish/hugo-profile.git
    ```

    Option B: Add as a Git submodule.  
    This allows you to get automatic or structured updates from the original repository.

    ```bash
    cd my-site
    git init
    git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
    ```    

3. Copy the example configuration file to your site root:
    ```bash
    cp -f themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml
    ```

4. Start the Hugo development server:
    ```bash
    hugo server
    ```
5. Recommended: Copy example content and assets.

    When you first run `hugo server`, the site may look incomplete — images may be missing and the Blog or Gallery sections might not appear.  

    This is because their content currently resides in `themes/hugo-profile/exampleSite/`, whereas Hugo expects them in the root-level `static/` (for images) and `content/` (for pages) directories.

    To have a complete view of the example site, run:  

    ```bash
    rsync -av themes/hugo-profile/exampleSite/static/ ./static/
    rsync -av themes/hugo-profile/exampleSite/content/ ./content/
    ```

    You can customize or replace this content to match your own site.


## Content Management

You can now start customizing your site.

To change the site title or homepage content, edit the `hugo.yaml` file in the root directory. This file also controls settings for showing or hiding sections of the site (e.g., About, Education).

To create a new page, for example, in the Blog section, run:

```bash
hugo new content content/blogs/my-post.md
```

This creates a new file in the `content/blogs/` folder with front matter that includes metadata like the date.

Here are some useful resources for your reference:

* [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/) – About how to create a site, add content, and publish the site.

* [Hugo Content Organization – Giraffe Academy](https://www.mikedane.com/static-site-generators/hugo/content-organization/)

* [Wiki Page](https://github.com/gurusabarish/hugo-profile/wiki) – Tips specific to this theme.


## Deployment

If you do not require extensive customization, the easiest way to deploy is:
1. Click the **Use this template** button to create your own repository.
2. Connect the repository to **Netlify**.

Whenever you make changes to the files inside the `exampleSite` folder, Netlify will automatically detect and deploy your changes. 

---


If you followed the steps in the [Quick Start](#quick-start) section above, you can still deploy your site to Netlify, but you'll need a few additional configurations.   

See the **[Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)** guide for further information.

---

For manual deployment, run `hugo` to generate the final, ready-to-deploy static site in the `public/` folder, which you can upload to any hosting platform.

It is recommended to delete the `public/` folder before each build to ensure it only contains the latest output:

```bash
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
