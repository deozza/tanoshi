export enum THEMES {
    Transparent = 'transparent',
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
    Info = 'info',
    Black = 'black',
    White = 'white'
}

export enum BUTTON_SIZES {
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Block = 'block'
}

export enum SIZES {
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Xl = 'xl',
    '2Xl' = '2xl',
    '3Xl' = '3xl',
    '4Xl' = '4xl',
    '5Xl' = '5xl',
    '6Xl' = '6xl',
    Block = 'block'
}

export enum TEXT_ALIGNMENT {
    Left = 'left',
    Center = 'center',
    Right = 'right',
    Justify = 'justify'
}

export enum BUTTON_TYPES {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset'
}

export enum IMAGE_FILTERS {
    Grayscale = 'grayscale',
    Sepia = 'sepia',
    Invert = 'invert',
    Blur = 'blur'
}

export enum IMAGE_SHAPES {
    Rounded = 'rounded',
    Circled = 'circled'
}

export enum HEADER_TAGS {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6'
}

export enum CONTAINER_ORIENTATIONS {
    C = 'c',
    CReverse = 'c-reverse',
    R = 'r'
}

export enum CONTAINER_ITEMS_ALIGNMENTS {
    Start = 'start',
    Center = 'center',
    End = 'end',
    Stretch = 'stretch',
    Baseline = 'baseline'
}

export enum CONTAINER_ITEMS_SPACING {
    Start = 'start',
    Centered = 'centered',
    End = 'end',
    Between = 'between',
    Around = 'around',
    Evenly = 'evenly'
}

export enum CONTAINER_BORDERS {
    None = 'none',
    Md = 'md',
    Full = 'full'
}

export enum WIDTHS {
    W0 = 'w-0',
    W1 = 'w-1',
    MinW1 = 'min-w-1',
    W2 = 'w-2',
    MinW2 = 'min-w-2',
    W3 = 'w-3',
    MinW3 = 'min-w-3',
    W4 = 'w-4',
    MinW4 = 'min-w-4',
    W5 = 'w-5',
    MinW5 = 'min-w-5',
    W6 = 'w-6',
    MinW6 = 'min-w-6',
    W7 = 'w-7',
    MinW7 = 'min-w-7',
    W8 = 'w-8',
    MinW8 = 'min-w-8',
    W9 = 'w-9',
    MinW9 = 'min-w-9',
    W10 = 'w-10',
    MinW10 = 'min-w-10',
    W11 = 'w-11',
    MinW11 = 'min-w-11',
    W12 = 'w-12',
    MinW12 = 'min-w-12',
    WAuto = 'w-auto',
}

export enum HEIGHTS {
    H100VH = 'h-100-vh',
    MINH100VH = 'min-h-100-vh',
    H100PRCT = 'h-100-prct',
    MINH100PRCT = 'min-h-100-prct',
    H75VH = 'h-75-vh',
    MINH75VH = 'min-h-75-vh',
    H175PRCT = 'h-75-prct',
    MINH75PRCT = 'min-h-75-prct',
    H66VH = 'h-66-vh',
    MINH66VH = 'min-h-66-vh',
    H66PRCT = 'h-66-prct',
    MINH66PRCT = 'min-h-66-prct',
    H50VH = 'h-50-vh',
    MINH50VH = 'min-h-50-vh',
    H50PRCT = 'h-50-prct',
    MINH50PRCT = 'min-h-50-prct',
    H33VH = 'h-33-vh',
    MINH33VH = 'min-h-33-vh',
    H33PRCT = 'h-33-prct',
    MINH33PRCT = 'min-h-33-prct',
    H25VH = 'h-25-vh',
    MINH25VH = 'min-h-25-vh',
    H25PRCT = 'h-25-prct',
    MINH25PRCT = 'min-h-25-prct',
    H0PRCT = 'h-0-prct',
    HAUTO = 'h-auto',
}

export enum NAVIGATION_ORIENTATIONS {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

export enum INPUT_TEXT_TYPES {
    Text = 'text',
    Password = 'password',
    Email = 'email',
    Tel = 'tel',
    Date = 'date',
    Color = 'color',
}

export enum INPUT_CHOICES_TYPES {
    Radio = 'radio',
    Checkbox = 'checkbox'
}

export function getThemeEnumKeyByEnumValue(enumValue: string): THEMES  {
    const enumKey = Object.keys(THEMES).find(
        (key) => THEMES[key as keyof typeof THEMES] === enumValue
      );
      if (enumKey !== undefined) {
        return THEMES[enumKey as keyof typeof THEMES];
      }
      throw new Error(enumValue + ' is not a valid value for enum Themes');
    }