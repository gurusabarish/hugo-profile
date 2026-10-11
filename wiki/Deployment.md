# Deployment

## Build locally

```bash
rm -rf public/ && hugo --gc --minify
```

`public/` is the finished static site; upload it to any static host. Deleting `public/` first guarantees stale files are removed.

## Netlify (one-click path)

1. On GitHub click **Use this template** to create your repository.
2. Connect it to [Netlify](https://www.netlify.com). The repo's `netlify.toml` builds `exampleSite` (`cd exampleSite && hugo --gc --minify --themesDir ../..`) and publishes `exampleSite/public`, with Hugo `0.143.0`.
3. Edit files in `exampleSite/` – every push redeploys.

Optional environment variables used by the demo build: `GOOGLE_ANALYTICS`, `DISQUS_SHORTNAME`.

### Netlify with your own Hugo site

Follow Hugo's [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/) guide and add a `netlify.toml` like:

```toml
[build]
publish = "public"
command = "hugo --gc --minify"

[build.environment]
HUGO_VERSION = "0.143.0"
```

If the theme is a submodule, make sure submodules are fetched (Netlify does this automatically).

## GitHub Pages

Use the official Hugo workflow ([docs](https://gohugo.io/hosting-and-deployment/hosting-on-github/)). Set `baseURL` to `https://<user>.github.io/<repo>/` (or your custom domain) and check out submodules with `submodules: recursive` in `actions/checkout`.

## Other hosts

Cloudflare Pages, Vercel, Firebase, S3, nginx etc. only need the `public/` folder and Hugo ≥ 0.87.0 (if building remotely).

## Pre-launch checklist

- `baseURL` is your production URL (affects share links, sitemap, RSS and search result links).
- `params.hostName` set if you use share buttons.
- `outputs.home` includes `JSON` (search).
- Replace example images in `static/` and sample posts in `content/blogs/`.
- Remove or translate `es`/`fr` entries if you don't need them.
- Add analytics/comments IDs ([Integrations](Integrations)).
- Run `hugo --gc --minify` locally without errors or warnings.
