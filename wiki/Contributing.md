# Contributing

Contributions, issues and feature requests are welcome. For major changes open an issue first.

## Development setup

```bash
git clone https://github.com/gurusabarish/hugo-profile.git
cd hugo-profile/exampleSite
hugo server --themesDir ../..
```

The example site (`exampleSite/`) is the test bed and the live demo; keep it in sync with any new option you add:

1. Implement the option in `layouts/…` and `static/…`.
2. Add it (commented out if optional) to `exampleSite/hugo.yaml`.
3. Add translation keys to **all** of `i18n/en.toml`, `i18n/es.toml` and `i18n/fr.toml`.
4. Document it in this wiki (`wiki/`) and, if it is a headline feature, in the README.

## Conventions

- Use `.Site.Params.staticPath` when linking theme assets (`{{ (printf "%scss/x.css" (.Site.Params.staticPath | default "")) | relURL }}`).
- Wrap user-visible strings with `i18n "<key>"` and allow overriding through `params.terms` where it makes sense.
- Keep new features opt-out friendly and backward compatible with existing configs.
- Escape user-provided data in JavaScript (see `static/js/search.js`).

## Pull requests

1. Fork and branch from the default branch.
2. Verify `hugo --gc --minify` succeeds in `exampleSite` (also with `--buildFuture` if you use future-dated content).
3. Describe the change and add screenshots for UI changes.

## Publishing these docs on the GitHub Wiki

The files in `wiki/` use GitHub Wiki naming (`Home.md`, `_Sidebar.md`, `Page-Name.md`). To publish:

```bash
git clone https://github.com/gurusabarish/hugo-profile.wiki.git
cp hugo-profile/wiki/*.md hugo-profile.wiki/
cd hugo-profile.wiki && git add -A && git commit -m "Update docs" && git push
```

(The wiki must be enabled and initialised once from the repository's **Wiki** tab.)

## License

[MIT](https://github.com/gurusabarish/hugo-profile/blob/master/LICENSE)
