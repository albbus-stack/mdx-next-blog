# mdx-next-blog

This is a simple blog built with NextJS, Typescript and MDX.

## Getting Started

Change your website name, description, domain and main author in `/utils/config.ts`.
Here you can tweak the two main colors of the blog choosing from the [tailwindcss palette](https://tailwindcss.com/docs/customizing-colors).

Provide a `/public/images/card-preview.png` as a preview image for your blog used in link cards.

## Notes for the editor

Each file in the `/posts` directory is a blog post and has some metadata that you can specify at the top of the file like so:

```json
---
title: Example Post
description: My first post.
date: "2021-03-20"
image: "bridge.jpg"
author: Me
---
```

The required fields are `title`, `description` and `date`. The `author` field is optional and will default to the main author.

If you specify an image this will be displayed in the home page along with the post. The image should be placed in the `/public/images` directory.

On markdown images you can specify the smaller size (`small`) or/and the rounded corners (`round`) with the following syntax:

```md
![alt text](/images/image.png "small round")
```

Links can be specified with the following syntax:

```md
[link text](/url)
```

All the other [standard markdown elements](https://www.markdownguide.org/cheat-sheet/) like headings, lists, code blocks and tables are supported.

For convenience you can use the [push-to-git.bat](push-to-git.bat) script to push the new posts and images to your git repository, after having configured the remote.
