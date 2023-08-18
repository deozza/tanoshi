---
icon: 'carbon:bookmark'
title: 'atoms/pill/Guide'

---

# Pill

Use a pill atom component when you want to display a small information (like a tag) to the user.

## Basic usage

```html

<script lang="ts">
    import { TanoshiPill, TanoshiPillModel } from 'tanoshi';

    const pill: TanoshiPillModel = new TanoshiPillModel('content');

</script>

<TanoshiPill tanoshiPillModel={pill} />

```

## How to customize

### Basic themes

You can set the theme of the pill by using the `setBasicTheme` of the model : 

```html

<script lang="ts">
    import { TanoshiPill, TanoshiPillModel } from 'tanoshi';
    import { THEMES } from 'tanoshi';

    const pill: TanoshiPillModel = new TanoshiPillModel('content').setBasicTheme(THEMES.Secondary);

</script>

<TanoshiPill tanoshiPillModel={pill} />

```

### Advance themes

You can customize the looks of your pill by using manually all these methods : 

 * setBackgroundTheme
 * setBackgroundHoverTheme
 * setBorderTheme
 * setBorderHoverTheme
 * setTextTheme
 * setTextHoverTheme


### Size

You can change the sized of the pill by using the `setSize` of the model : 

```html

<script lang="ts">
    import { TanoshiPill, TanoshiPillModel } from 'tanoshi';
    import { BUTTON_SIZE } from 'tanoshi';

    const pill: TanoshiPillModel = new TanoshiPillModel('content').setSize(BUTTON_SIZE.Lg);

</script>

<TanoshiPill tanoshiPillModel={pill} />

```
