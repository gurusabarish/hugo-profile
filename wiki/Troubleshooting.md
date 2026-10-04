# Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| Site looks empty, images missing, no Blog or Gallery | Example content/images live in `themes/hugo-profile/exampleSite/`. Copy `exampleSite/content/` → `content/` and `exampleSite/static/` → `static/`. See [Installation](Installation). |
| `Error: module "hugo-profile" not found` / theme not found | `theme:` must match the folder name in `themes/`, or use `--themesDir`. For submodules run `git submodule update --init --recursive`. |
| `unknown ... function` or template errors | Hugo is older than 0.87.0 – upgrade (`hugo version`). Newer features (`time.Format`, `pagination.pagerSize`) work best with a recent version such as 0.143.0. |
| Search returns nothing | `outputs.home` must include `JSON`; open `/index.json` to verify. Search is also disabled when `navbar.disableSearch: true`. |
| `resources.GetRemote … TLS handshake timeout` while building | Network issue fetching an embedded tweet in `content/blogs/rich-content.md`. Retry or delete the `{{< x … >}}` example. |
| Colours ignored / `hugo.yaml` parse error | Quote hex values: `"#007bff"`. |
| Share links lack the domain | Set `baseURL` and `params.hostName`. |
| Language switcher missing | Only shown with ≥ 2 entries under `languages`. |
| Translated pages not linked | Translated files need the same relative path/name in each language's `contentDir`. |
| Raw HTML disappears from posts | Enable `markup.goldmark.renderer.unsafe: true`. |
| Boolean option set to `false` has no effect | Several templates use `default true` (e.g. `toc`, `socialShare`, `readTime.enable`, `scrollprogress.enable`, `tags.openInNewTab`), and Hugo treats `false` as unset. Override the template (see [Advanced Customization](Advanced-Customization#overriding-templates)). |
| Gallery page renders as a blog page | Front matter needs `layout: "gallery"`. |
| Contact form does nothing | Check `contact.formspree.enable: true`, correct `formId`, and that `contact.js` loads (browser console). |
| Fonts differ offline | Google Fonts are loaded from the network. |

Still stuck? [Open an issue](https://github.com/gurusabarish/hugo-profile/issues) with your Hugo version (`hugo version`), your `hugo.yaml` (without secrets) and the full error output.
