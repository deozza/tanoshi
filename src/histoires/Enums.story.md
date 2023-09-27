---
icon: 'carbon:bookmark'
title: 'utils/enums'

---

# Enums

Enums are used in Tanoshi to define a list of values that can be used in a component for a specific attribute. This way, developers can't enter a non-valid value to configure the look of a component.

## Themes

**Enum to use : `THEMES`**

 * `Transparent`
 * `Primary`
 * `Secondary`
 * `Success`
 * `Warning`
 * `Danger`
 * `Info`
 * `White`
 * `Black`

## Button

### Button sizes

**Enum to use : `BUTTON_SIZES`**

 * `Sm`
 * `Md`
 * `Lg`
 * `Block`

### Button types

**Enum to use : `BUTTON_TYPES`**

 * `Button`
 * `Submit`
 * `Reset`

## Typography

### Font sizes

**Enum to use : `SIZES`**

 * `Sm`
 * `Md`
 * `Lg`
 * `Xl`
 * `2Xl`
 * `3Xl`
 * `4Xl`
 * `5Xl`
 * `6Xl`

### Alignments

**Enum to use : `TEXT_ALIGNMENTS`**

 * `Left`
 * `Center`
 * `Right`
 * `Justify`

### Headers

#### Tags

**Enum to use : `HEADER_TAGS`**

 * `H1`
 * `H2`
 * `H3`
 * `H4`
 * `H5`
 * `H6`

## Images

### Filters

**Enum to use : `IMAGE_FILTERS`**

 * `Grayscale`
 * `Sepia`
 * `Blur`
 * `Invert`

### Shapes

**Enum to use : `IMAGE_SHAPES`**

 * `Circlee`
 * `Rounded`

*Warning :*

When you use the `Circled` value, you need to add a custom class to your image to specify the size of the circle.

## Container

### Orientations

**Enum to use : `CONTAINER_ORIENTATIONS`**

 * `C`
 * `CReverse`
 * `R`

### Items alignments

**Enum to use : `CONTAINER_ITERMS_ALIGNMENTS`**

 * `Start`
 * `Center`
 * `End`
 * `Stretch`
 * `Baseline`

### Items spacing

**Enum to use : `CONTAINER_ITERMS_SPACING`**

 * `Start`
 * `Centered`
 * `End`
 * `Between`
 * `Around`
 * `Evenly`

### Borders

**Enum to use : `CONTAINER_BORDERS`**

 * `None`
 * `Md`
 * `Full`

## Widths

**Enum to use : `WIDTHS`**

* `W0`
* `W1`
* `MinW1`
* `MaxW1`
* `W2`
* `MinW2`
* `MaxW2`
* `W3`
* `MinW3`
* `MaxW3`
* `W4`
* `MinW4`
* `MaxW4`
* `W5`
* `MinW5`
* `MaxW5`
* `W6`
* `MinW6`
* `MaxW6`
* `W7`
* `MinW7`
* `MaxW7`
* `W8`
* `MinW8`
* `MaxW8`
* `W9`
* `MinW9`
* `MaxW9`
* `W10`
* `MinW10`
* `MaxW10`
* `W11`
* `MinW11`
* `MaxW11`
* `W12`
* `MinW12`
* `MaxW12`
* `WAuto`

## Heights

**Enum to use : `HEIGHTS`**

 * `H100VH`
 * `MINH100VH`
 * `H100PRCT`
 * `MINH100PRCT`
 * `H75VH`
 * `MINH75VH`
 * `H175PRCT`
 * `MINH75PRCT`
 * `H66VH`
 * `MINH66VH`
 * `H66PRCT`
 * `MINH66PRCT`
 * `H50VH`
 * `MINH50VH`
 * `H50PRCT`
 * `MINH50PRCT`
 * `H33VH`
 * `MINH33VH`
 * `H33PRCT`
 * `MINH33PRCT`
 * `H25VH`
 * `MINH25VH`
 * `H25PRCT`
 * `MINH25PRCT`
 * `H0PRCT`
 * `HAUTO`

## Navigation

### Orientations

**Enum to use : `NAVIGATION_ORIENTATIONS`**

 * `Horizontal`
 * `Vertical`

## Forms

### Methods

**Enum to use : `FORM_METHODS`**

 * `Get`
 * `Post`
 * `Put`
 * `Delete`
 * `Patch`

### Inputs 

#### Text types

**Enum to use : `INPUT_TEXT_TYPES`**

 * `Text`
 * `Password`
 * `Email`
 * `Tel`
 * `Date`
 * `Color`

#### Choices types

**Enum to use : `INPUT_CHOICES_TYPES`**

 * `Radio`
 * `Checkbox`