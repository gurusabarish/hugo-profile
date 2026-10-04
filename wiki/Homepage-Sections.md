# Homepage Sections

The homepage (`layouts/index.html`) renders the following partials in this order: **Hero → About → Experience → Education → Projects → Achievements → Contact**. Each section is configured under `params.<section>` in `hugo.yaml` and is only rendered when `enable: true`. Hiding a section's navbar link without hiding the section is done with `params.navbar.menus.disable<Section>` (see [Navigation and Search](Navigation-and-Search)).

Text fields may contain Markdown where noted. For translating sections see [Internationalization](Internationalization).

## Hero

```yaml
params:
  hero:
    enable: true
    intro: "Hi, my name is"
    title: "Isabella."
    subtitle: "I build things for the web"
    content: "A passionate web app developer..."
    image: /images/hero.svg
    bottomImage:
      enable: true            # Decorative SVG under the hero (default true)
    # roundImage: true        # Circular hero image (default false)
    button:
      enable: true
      name: "Resume"
      url: "#"                # e.g. /resume.pdf
      download: true          # Adds the `download` attribute
      newPage: false          # Open in a new tab
    socialLinks:
      fontAwesomeIcons:
        - icon: fab fa-github
          url: https://example.com
      customIcons:
        - icon: /fav.png      # Image file in static/
          url: "https://example.com"
```

- `intro`, `title`, `subtitle`, `content` and `button.name` can be translated per language.
- Social links open in a new tab unless the URL starts with `#`.
- Icons use [Font Awesome 6](https://fontawesome.com/search?o=r&m=free) class names (`fab fa-…` brands, `fas fa-…` solid).

## About

```yaml
  about:
    enable: true
    title: "About Me"
    image: "/images/me.png"       # Shown as a round picture (hidden on small screens)
    content: |-
      Markdown text. Blank lines create paragraphs.
    skills:
      enable: true
      title: "Here are a few technologies I've been working with recently:"
      items:
        - "HTML"
        - "JavaScript"
```

`content` and `skills.items` are rendered as Markdown. `title` and `skills.title` are translatable.

## Experience

Displayed as tabs (one per company) containing one or more jobs.

```yaml
  experience:
    enable: true
    # title: "Custom Name"
    items:
      - company: "Facebook"
        companyUrl: "https://example.com"
        jobs:
          - name: "Senior Software Developer"
            date: "Jan 2023 - present"
            content: |
              Markdown description, lists allowed.
            info:
              content: Tooltip shown next to the job title
            featuredItems:
              fontAwesomeIcons:
                - icon: fa-brands fa-react
                  url: https://react.dev/
                  tooltip: Optional tooltip
              customIcons:
                - icon: /fav.png
                  url: "https://example.com"
                  tooltip: Optional tooltip
```

| Field | Notes |
| --- | --- |
| `company`, `companyUrl` | Tab label and link of the company. |
| `jobs[].name`, `date` | Role title and period. |
| `jobs[].content` | Markdown. |
| `jobs[].info.content` | Optional info tooltip. |
| `jobs[].featuredItems` | Optional technology/links icons with optional tooltips. |

The tab id is derived from the company name and the first job's date, so keep that pair unique.

## Education

```yaml
  education:
    enable: true
    # title: "Custom Name"
    index: false                    # true = show numbered markers beside cards
    items:
      - title: "Bachelor of Science in Computer Science"
        school:
          name: "Massachusetts Institute of Technology"
          url: "https://example.org"
        date: "2009 - 2013"
        GPA: "3.9 out of 5.0"
        content: |-
          Markdown details.
        featuredLink:
          enable: true
          name: "My academic record"   # default: "Featured"
          url: "https://example.com"
```

`date`, `GPA`, `content` and `featuredLink` are optional. `school.url` makes the school name a link.

## Projects

```yaml
  projects:
    enable: true
    # title: "Custom Name"
    items:
      - title: Hugo Profile
        content: A highly customizable Hugo template.
        image: /images/projects/profile.png
        featured:
          name: Demo
          link: https://hugo-profile.netlify.app
        badges:
          - "Hugo"
          - "Bootstrap"
        links:
          - icon: fab fa-github
            url: https://github.com/gurusabarish/hugo-profile
```

Cards are also generated from any page of the `projects` content type – see [Project Pages](Project-Pages).

## Achievements

```yaml
  achievements:
    enable: true
    # title: "Custom Name"
    items:
      - title: Google kickstart runner
        content: I solved all problems with optimal solution.
        url: https://example.com     # Optional: makes the whole card a link
        image: /images/achievement.jpg   # Optional
```

## Contact

```yaml
  contact:
    enable: true
    # title: "Custom Name"
    content: My inbox is always open...
    btnName: Mail me
    btnLink: mailto:you@example.com   # Or `email: you@example.com` for a mailto: link
    # formspree:
    #   enable: true
    #   formId: abcdefgh
    #   emailCaption: "Enter your email address"
    #   messageCaption: "Enter your message here"
    #   messageRows: 5
```

- **Button mode** (default): `btnLink` (or `email`) produces a button.
- **Form mode**: with `formspree.enable: true` the button is replaced by an e-mail + message form posted to Formspree and `btnLink`/`email` are ignored. Setup steps are in [Integrations](Integrations#formspree-contact-form).

## Default section titles

If `title` is omitted the theme uses the translation keys `about`, `experience`, `education`, `projects`, `achievements` and `contact` (the contact heading defaults to "Get in Touch").
