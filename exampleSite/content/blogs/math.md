---
title: "Render Math With Mathjax"
date: 2022-12-09T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Markdown syntax
  - MathJax
  - example
image: /images/mathjax.png
description: ""
toc: true
---

## MathJax

Math equations can be rendered using [MathJax](https://www.mathjax.org) syntax with AMS symbol support.

Then, put your block equation inside a `math` code block.

````
```math
| Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible}
```
````

This block above renders to :

```math
| Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible}
```

If you want to write in-line equations, you need manually enable MathJax support on a per-page basis by adding `mathjax: true` to your frontmatter.

```
Now you can write in-line equations with `\\( ... \\)` , like \\( x^n / y \\) . It's easy!
```

The block above renders to:

Now you can write in-line equations with `\\( ... \\)` , like \\( x^n / y \\) . It's easy!


