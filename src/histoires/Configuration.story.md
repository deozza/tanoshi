---
icon: 'carbon:bookmark'
title: 'Configuration'

---

# Configuration

In order to use Tanoshi, you only need to create a CSS file in your `/src/routes` folder with the following CSS variables :

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

Then import the CSS file in your `+layout.page` :

```html
<script lang="ts">
    import './app.css';
</script>
```

## List of all the variables available :


### General :

 * `--primary`
 * `--primary-dark`
 * `--secondary`
 * `--secondary-dark`
 * `--success`
 * `--success-dark`
 * `--warning`
 * `--warning-dark`
 * `--danger`
 * `--danger-dark`
 * `--info`
 * `--info-dark`
 * `--white`
 * `--white-dark`
 * `--black`
 * `--black-dark`

### Button : 
 
 * `--primary-bg-button`
 * `--primary-text-button`
 * `--primary-border-button`
 * `--primary-bg-button-hover`
 * `--primary-text-button-hover`
 * `--primary-border-button-hover`
 * `--secondary-bg-button`
 * `--secondary-text-button`
 * `--secondary-border-button`
 * `--secondary-bg-button-hover`
 * `--secondary-text-button-hover`
 * `--secondary-border-button-hover`
 * `--success-bg-button`
 * `--success-text-button`
 * `--success-border-button`
 * `--success-bg-button-hover`
 * `--success-text-button-hover`
 * `--success-border-button-hover`
 * `--warning-bg-button`
 * `--warning-text-button`
 * `--warning-border-button`
 * `--warning-bg-button-hover`
 * `--warning-text-button-hover`
 * `--warning-border-button-hover`
 * `--danger-bg-button`
 * `--danger-text-button`
 * `--danger-border-button`
 * `--danger-bg-button-hover`
 * `--danger-text-button-hover`
 * `--danger-border-button-hover`
 * `--info-bg-button`
 * `--info-text-button`
 * `--info-border-button`
 * `--info-bg-button-hover`
 * `--info-text-button-hover`
 * `--info-border-button-hover`
 * `--white-bg-button`
 * `--white-text-button`
 * `--white-border-button`
 * `--white-bg-button-hover`
 * `--white-text-button-hover`
 * `--white-border-button-hover`
 * `--black-bg-button`
 * `--black-text-button`
 * `--black-border-button`
 * `--black-bg-button-hover`
 * `--black-text-button-hover`
 * `--black-border-button-hover`
    
### Input :

 * `--black-text-input`

### Link :
 
 * `--primary-text-link`
 * `--primary-text-link-hover`
 * `--secondary-text-link`
 * `--secondary-text-link-hover`
 * `--success-text-link`
 * `--success-text-link-hover`
 * `--warning-text-link`
 * `--warning-text-link-hover`
 * `--danger-text-link`
 * `--danger-text-link-hover`
 * `--info-text-link`
 * `--info-text-link-hover`
 * `--white-text-link`
 * `--white-text-link-hover`
 * `--black-text-link`
 * `--black-text-link-hover`

### Pill :

 * `--primary-bg-pill`
 * `--primary-text-pill`
 * `--primary-border-pill`
 * `--secondary-bg-pill`
 * `--secondary-text-pill`
 * `--secondary-border-pill`
 * `--success-bg-pill`
 * `--success-text-pill`
 * `--success-border-pill`
 * `--warning-bg-pill`
 * `--warning-text-pill`
 * `--warning-border-pill`
 * `--danger-bg-pill`
 * `--danger-text-pill`
 * `--danger-border-pill`
 * `--info-bg-pill`
 * `--info-text-pill`
 * `--info-border-pill`
 * `--white-bg-pill`
 * `--white-text-pill`
 * `--white-border-pill`
 * `--black-bg-pill`
 * `--black-text-pill`
 * `--black-border-pill`

### Typography (paragraph, header and input label) :

 * `--primary-text-header`
 * `--secondary-text-header`
 * `--success-text-header`
 * `--warning-text-header`
 * `--danger-text-header`
 * `--info-text-header`
 * `--white-text-header`
 * `--black-text-header`

### Container (divs, forms, tabs, modals) :

 * `--primary-background-container`
 * `--primary-border-container`
 * `--secondary-background-container`
 * `--secondary-border-container`
 * `--success-background-container`
 * `--success-border-container`
 * `--warning-background-container`
 * `--warning-border-container`
 * `--danger-background-container`
 * `--danger-border-container`
 * `--info-background-container`
 * `--info-border-container`
 * `--white-background-container`
 * `--white-border-container`
 * `--black-background-container`
 * `--black-border-container`