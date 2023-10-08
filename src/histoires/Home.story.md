---
icon: 'carbon:bookmark'
title: 'home'

---

# Tanoshi

## Introduction

Tanoshi is a component library built the atomic way. Create beautiful pages easily with configurable typescript objects. You won't need to write CSS or HTML anymore.

## Why using Tanoshi ?

 * Components are alreay styled, you only need to add you graphic chart
 * With its object-oriented components, we make sure you respect accessibility and web best practices
 * Use [iconify](https://icones.js.org/) for the largest icon library available 
 * Compatible with SSR and SSG deploys, for the best user experience possible

## Getting started

### Requirements

This library was built to be used with [sveltekit](https://kit.svelte.dev/) . Therefore, you need to have installed : 

 * [nodejs](https://nodejs.org/en)
 * [svelte 4.2](https://github.com/sveltejs/svelte)
 * [vite 4.4](https://vitejs.dev/)

### Installation

```bash
npm install --save-dev tanoshi
```

### Configuration

Once it is installed, Tanoshi needs you to add your graphic chart for its components. 

Create a `app.css` file in the `/src/routes` folder with the following css variables : 

```css
:root{
    --primary: rgb(217, 119, 52);
    --primary-dark: rgb(108, 68, 28);
    --secondary: rgb(107 114 128);
    --secondary-dark: rgb(75 85 99);
    --success: rgb(34 197 94);
    --success-dark: rgb(22 163 74);
    --warning: rgb(234 179 8);
    --warning-dark: rgb(202 138 4);
    --danger: rgb(239 68 68);
    --danger-dark: rgb(220 38 38);
    --info: rgb(103 232 249);
    --info-dark: rgb(34 211 238);
    --white: rgb(255 255 255);
    --white-dark: rgb(100 116 139);
    --black: rgb(60, 59, 59);
    --black-dark: rgb(4, 4, 4);
}
```

These are the mandatory CSS variables that will be used to style the components. To get the list of all the options available, check [this page](https://tanoshi.netlify.app/story/src-histoires-configuratiom-story-js)

Then import the CSS file in your `+layout.page` :

```html
<script lang="ts">
    import './app.css';
</script>
```

## Start to build components

Check the [documentation](https://tanoshi.netlify.app/story/src-histoires-home-story-js) to learn how to build components and add them to your pages.