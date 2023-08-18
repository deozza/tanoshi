---
icon: 'carbon:bookmark'
title: 'atoms/link/Guide'

---

# Link

Use a link atom component when you want the user to navigate inside or outside your website.

## Basic usage

```html

<script lang="ts">
    import { TanoshiLink, TanoshiLinkModel } from 'tanoshi';

    const link: TanoshiLinkModel = new TanoshiLinkModel('content').setLink('/');

</script>

<TanoshiLink TanoshiLinkModel={link} />

```

## How to customize

### Themes


```html

<script lang="ts">
    import { TanoshiLink, TanoshiLinkModel } from 'tanoshi';
    import { THEMES } from 'tanoshi';

    const link: TanoshiLinkModel = new TanoshiLinkModel('content').setTheme(THEMES.Danger);

</script>

<TanoshiLink tanoshiLinkModel={link} />

```

### Size
 

```html

<script lang="ts">
    import { TanoshiLink, TanoshiLinkModel } from 'tanoshi';
    import { SIZES } from 'tanoshi';

    const link: TanoshiLinkModel = new TanoshiLinkModel('content').setSize(SIZES.['3Xl']);

</script>

<TanoshiLink tanoshiLinkModel={link} />

```

### Link target

```html

<script lang="ts">
    import { TanoshiLinkModel, TanoshiLinkModel } from 'tanoshi';

    const link: TanoshiLinkModel = new TanoshiLinkModel('content').setIsInternal(false).setLink('www.github.com/deozza/tanoshi');

</script>

<TanoshiLink tanoshiLinkModel={link} />

```
