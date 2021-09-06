<div align="center">
  
# hugo-profile 
 
[![Twitter](https://img.shields.io/twitter/url?label=Tweet&style=social&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile) [![GitHub forks](https://img.shields.io/github/forks/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/network) [![GitHub stars](https://img.shields.io/github/stars/gurusabarish/hugo-profile?style=plastic)](https://github.com/gurusabarish/hugo-profile/stargazers)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c1dcb34-cada-4c80-82b7-cfdbdbd7c774/deploy-status)](https://app.netlify.com/sites/hugo-profile/deploys)
![Repository Size](https://img.shields.io/github/repo-size/gurusabarish/hugo-profile)
![Latest Release](https://img.shields.io/github/v/release/gurusabarish/hugo-profile?include_prereleases)
![Last Commit](https://img.shields.io/github/last-commit/gurusabarish/hugo-profile)
![Open Issues](https://img.shields.io/github/issues/gurusabarish/hugo-profile?color=important)
![Open Pull Requests](https://img.shields.io/github/issues-pr/gurusabarish/hugo-profile?color=yellowgreen)
![License](https://img.shields.io/github/license/gurusabarish/hugo-profile)

</div>

A high performance and mobile first hugo template for personal portfolio and blog

### Credit

I spent a non-trivial amount of effort building this template. It's always disheartening whenever I find that someone use this template without giving me credit. Please, give me proper credit in footer.

### Demo

- [Live demo V1](https://hugo-profile-1.netlify.app)
- [Live demo V2](https://hugo-profile-2.netlify.app)
- [Live demo V3 (latest)](https://hugo-profile.netlify.app)
- [Github pages demo](https://gurusabarish.github.io/hugo-profile)

## Requirements

- Hugo Version 0.68.0 or higher

## How to use this template

- [Hugo theme format](#Hugo-theme-format)
- [Local Development](#Local-Development)
- [Direct deployment using netlify](#Direct-deployment-using-netlify)
- [Direct deployment using Github Pages and action](#Direct-deployment-using-Github-Pages-and-action)

### Hugo theme format

- Install Hugo and create a site using `hugo new site my-site -f=yaml`
- Clone this repo inside your themes folder and create config.yaml (_I am not much aware about toml. So, I am using yaml format._) inside root folder and use one of these [v1config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v1.yaml), [v2config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v2.yaml), [v3config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v3.yaml) as base template.

```
cd themes
git clone https://github.com/gurusabarish/hugo-profile.git
```

- You should have the mentioned (_inside the config file_) images in static folder to use them.

### Local Development

- Install hugo and just clone this repo

```
git clone https://github.com/gurusabarish/hugo-profile.git
cd hugo-profile
```

- Now create config.yaml file in your root folder and use one of these [v1config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v1.yaml), [v2config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v2.yaml), [v3config](https://github.com/gurusabarish/hugo-profile/blob/master/website/v3.yaml) as base template.
- Run your site using `hugo serve` commend

### Direct deployment using netlify

- Fork this repo or create new repo using `use this template` button and connect repo to netlify.
- You can customize the config file, content and everything inside website folder. Netlify will automatically deploy your changes every time you modify the repo.

**[What is netlify?](https://www.netlify.com/about/)** An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps

### Direct deployment using Github Pages and action

- Fork this repo or create new repo using `use this template` button. Github action will generate all files and push to demo branch. Now, you have to connect your github pages to that `demo` branch. _No need to create demo branch. Github action will take care of it_
- You can customize the config file, content and everything inside website folder. Github action will automatically deploy your changes to demo branch every time you modify the repo.

## Deployment

Run `hugo`. It will generate a folder called public. You can use the files inside public folder for deployment. You should delete the public folder for each time when you are using `hugo` commend.

## Issues

If you have a question, please [open an issue](https://github.com/gurusabarish/hugo-profile/issues) for help and to help those who come after you. The more information you can provide, the better!

## Contributing

Contributions, issues, and feature requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under [MIT](LICENSE)

## 🤝 Support

Give a ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/gurusabarish" target="_blank" rel="noopener"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="145" alt="Buy Me A Coffee"></a>
