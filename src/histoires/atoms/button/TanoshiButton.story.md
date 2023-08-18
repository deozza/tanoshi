---
icon: 'carbon:bookmark'
title: 'atoms/button/Guide'

---

# Button

Use a button atom component when you want the user to trigger an action from your interface.

## Basic usage

```html

<script lang="ts">
    import { TanoshiButton, TanoshiButtonModel } from 'tanoshi';

    const button: TanoshiButtonModel = new TanoshiButtonModel('content');

</script>

<TanoshiButton tanoshiButtonModel={button} />

```

## How to customize

### Basic themes

You can set the theme of the button by using the `setBasicTheme` of the model : 

```html

<script lang="ts">
    import { TanoshiButton, TanoshiButtonModel } from 'tanoshi';
    import { THEMES } from 'tanoshi';

    const button: TanoshiButtonModel = new TanoshiButtonModel('content').setBasicTheme(THEMES.Secondary);

</script>

<TanoshiButton tanoshiButtonModel={button} />

```

### Advance themes

You can customize the looks of your button by using manually all these methods : 

 * setBackgroundTheme
 * setBackgroundHoverTheme
 * setBorderTheme
 * setBorderHoverTheme
 * setTextTheme
 * setTextHoverTheme


### Size

You can change the sized of the button by using the `setSize` of the model : 

```html

<script lang="ts">
    import { TanoshiButton, TanoshiButtonModel } from 'tanoshi';
    import { BUTTON_SIZE } from 'tanoshi';

    const button: TanoshiButtonModel = new TanoshiButtonModel('content').setSize(BUTTON_SIZE.Block);

</script>

<TanoshiButton tanoshiButtonModel={button} />

```

### Button comportment

In order to disable the button, use : 

```html

<script lang="ts">
    import { TanoshiButton, TanoshiButtonModel } from 'tanoshi';

    const button: TanoshiButtonModel = new TanoshiButtonModel('content').setIsDisabled(true);

</script>

<TanoshiButton tanoshiButtonModel={button} />

```

If the user has clicked on the button and an action has been triggered, you can change the button state to loading to notify your user and prevent them to click again.

```html

<script lang="ts">
    import { TanoshiButton, TanoshiButtonModel } from 'tanoshi';

    const button: TanoshiButtonModel = new TanoshiButtonModel('content').setLoaderOn();

</script>

<TanoshiButton tanoshiButtonModel={button} />

```