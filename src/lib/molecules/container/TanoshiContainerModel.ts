export default class TanoshiContainerModel {
	private _theme!: string;
	private _borders!: string;
	private _size: string = 'w-full';
	private _backgroundImage: string | null = null;
	private _desktopOrientation!: string;
	private _mobileOrientation!: string;
	private _desktopSpacing!: string;
	private _mobileSpacing!: string;
	private _itemsAlignment!: string;

	readonly EXPECTED_THEMES: object = {
		transparent: 'transparent',
		primary: 'primary',
		secondary: 'secondary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
		info: 'info',
		light: 'light',
		dark: 'dark'
	};

	readonly EXPECTED_ORIENTATIONS: object = {
		c: 'c',
		'c-reverse': 'c-reverse',
		r: 'r'
	};

	readonly EXPECTED_SPACING: object = {
		start: 'start',
		centered: 'centered',
		end: 'end',
		between: 'between',
		around: 'around',
		evenly: 'evenly'
	};

	readonly EXPECTED_ALIGNMENT: object = {
		start: 'start',
		center: 'center',
		end: 'end',
		stretch: 'stretch',
		baseline: 'baseline'
	};

	readonly EXPECTED_BORDERS: object = {
		none: 'none',
		md: 'md',
		full: 'full',
	};

	public constructor(desktopOrientation: string) {
		// @ts-ignore
		this.setItemsAlignment(this.EXPECTED_ALIGNMENT['start']);

		this.setDesktopOrientation(desktopOrientation);
		this.setMobileOrientation(desktopOrientation);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.transparent);
		
		// @ts-ignore
		this.setBorders(this.EXPECTED_BORDERS.none);
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get borders(): string {
		return this._borders;
	}

	public setBorders(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_BORDERS, value) === false) {
			throw new Error();
		}

		this._borders = value;
		return this;
	}
	
	get size(): string {
		return this._size;
	}

	public setSize(value: string): TanoshiContainerModel {
		this._size = value;
		return this;
	}

	get backgroundImage(): string | null {
		return this._backgroundImage;
	}

	public setBackgroundImage(value: string): TanoshiContainerModel {
		this._theme = '';
		this._backgroundImage = value;
		return this;
	}

	get desktopOrientation(): string {
		return this._desktopOrientation;
	}

	public setDesktopOrientation(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ORIENTATIONS, value) === false) {
			throw new Error();
		}
		this._desktopOrientation = value;
		return this;
	}

	get mobileOrientation(): string {
		return this._mobileOrientation;
	}

	public setMobileOrientation(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ORIENTATIONS, value) === false) {
			throw new Error();
		}
		this._mobileOrientation = value;
		return this;
	}

	get desktopSpacing(): string {
		return this._desktopSpacing;
	}

	public setDesktopSpacing(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_SPACING, value) === false) {
			throw new Error();
		}
		this._desktopSpacing = value;
		return this;
	}

	get itemsAlignment(): string {
		return this._itemsAlignment;
	}

	public setItemsAlignment(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ALIGNMENT, value) === false) {
			throw new Error();
		}
		this._itemsAlignment = value;
		return this;
	}

	get mobileSpacing(): string {
		return this._mobileSpacing;
	}

	public setMobileSpacing(value: string): TanoshiContainerModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_SPACING, value) === false) {
			throw new Error();
		}
		this._mobileSpacing = value;
		return this;
	}
}
