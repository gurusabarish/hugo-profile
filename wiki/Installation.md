# Installation

## Requirements

- **Hugo 0.87.0 or newer** (the demo site is built with 0.143.0 – see `netlify.toml`). Check with `hugo version`. Use the *extended* edition if you plan to add SCSS of your own.
- Git (for cloning or adding a submodule).

## Quick start

1. **Create a site** (YAML configuration is recommended because the theme ships a YAML example):

   ```bash
   hugo new site my-site --format="yaml"
   cd my-site
   ```

2. **Add the theme** – pick one:

   *Clone* (best if you will edit theme files):

   ```bash
   cd themes
   git clone https://github.com/gurusabarish/hugo-profile.git
   cd ..
   ```

   *Git submodule* (best for receiving upstream updates):

   ```bash
   git init
   git submodule add https://github.com/gurusabarish/hugo-profile.git themes/hugo-profile
   ```

3. **Copy the example configuration** into the site root:

   ```bash
   cp -f themes/hugo-profile/exampleSite/hugo.yaml ./hugo.yaml
   ```

   The file already contains `theme: hugo-profile`.

4. **(Recommended) Copy the example content and images** so the blog, gallery and images work immediately:

   ```bash
   rsync -av themes/hugo-profile/exampleSite/static/ ./static/
   rsync -av themes/hugo-profile/exampleSite/content/ ./content/
   ```

   Hugo only reads `content/` and `static/` from your *site* root (and from the theme root), not from the theme's `exampleSite/` folder, which is why this copy step is needed.

5. **Run the dev server**:

   ```bash
   hugo server
   ```

   Open <http://localhost:1313>. Edits to `hugo.yaml`, content and static files are live-reloaded.

## Using the demo site directly

You can also work inside the repository itself:

```bash
git clone https://github.com/gurusabarish/hugo-profile.git
cd hugo-profile/exampleSite
hugo server --themesDir ../..
```

`--themesDir ../..` tells Hugo the theme named in `hugo.yaml` lives two directories up.

## Updating the theme

- Clone: `cd themes/hugo-profile && git pull`
- Submodule: `git submodule update --remote --merge`

Check your `hugo.yaml` against the latest [`exampleSite/hugo.yaml`](https://github.com/gurusabarish/hugo-profile/blob/master/exampleSite/hugo.yaml) after updating – new options are added over time.

## Next steps

Continue with the [Configuration Reference](Configuration-Reference).
