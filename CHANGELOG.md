# Changelog

## Version 0.13.0

### Breaking changes

**For the components `button`, `input`, `pill`, `alert`, `container`, `form`, `navigation`, `taa` :**

You must specify the design style in order to use the svelte component. In the 0.12 versions, the default style was Material Design. Now, Glassmorphism and Neumorphism are available : 

```html
<TanoshiButtonMaterial tanoshiButtonModel={primaryButton} />
```

```html
<TanoshiButtonGlass tanoshiButtonModel={primaryButton} />
```

```html
<TanoshiButtonNeumorphism tanoshiButtonModel={primaryButton} />
```

**For the component `navigation` :**

In the previous version 0.12, there was a unique model for both the desktop view and the mobile view. Now you will need to build a different model for each view : 

```html
<script lang=ts>
const primaryDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

const primaryMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
    .setTheme(THEMES.Primary)
    .setItemsWhenClosed(logoNavbarModel)
    .setItemsWhenOpened(navbarRightItemModels);
</script>

<TanoshiNavigationMaterial tanoshiDesktopNavigationModel={primaryDesktopNavigationModel}  tanoshiMobileNavigationModel={primaryMobileNavigationModel} />

``` 
