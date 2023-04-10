export default class TanoshiLinkModel {
	private _content!: string;
	private _link!: string;
	private _isInternal!: string;
	private _displaySize!: string;
	private _alignment!: string;
	private _theme!: string;

	readonly EXPECTED_DISPLAY_SIZES: object = {
		sm: 'sm',
		base: 'base',
		lg: 'lg',
		xl: 'xl',
		'2xl': '2xl',
		'3xl': '3xl'
	};

	readonly EXPECTED_THEMES: object = {
		black: 'black',
		white: 'white',
		primary: 'primary',
		secondary: 'secondary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
		info: 'info'
	};

	readonly EXPECTED_ALIGNMENT: object = {
		left: 'left',
		center: 'center',
		right: 'right',
		justify: 'justify'
	};

	constructor(content: string) {
		this.setContent(content);
		this.setLink('#');
		this.setIsInternal(true);

		// @ts-ignore
		this.setDisplaySize(this.EXPECTED_DISPLAY_SIZES.base);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.black);

		// @ts-ignore
		this.setAligment(this.EXPECTED_ALIGNMENT.left);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiLinkModel {
		this._content = value;
		return this;
	}

	get link(): string {
		return this._link;
	}

	public setLink(value: string): TanoshiLinkModel {
		this._link = value;
		return this;
	}

	get isInternal(): string {
		return this._isInternal;
	}

	public setIsInternal(value: boolean): TanoshiLinkModel {
		if (true === value) {
			this._isInternal = '_self';
		} else {
			this._isInternal = '_blank';
		}

		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiLinkModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get displaySize(): string {
		return this._displaySize;
	}

	public setDisplaySize(value: string): TanoshiLinkModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_DISPLAY_SIZES, value) === false) {
			throw new Error();
		}

		this._displaySize = value;
		return this;
	}
	get aligment(): string {
		return this._alignment;
	}

	public setAligment(value: string): TanoshiLinkModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ALIGNMENT, value) === false) {
			throw new Error();
		}

		this._alignment = value;
		return this;
	}
}
