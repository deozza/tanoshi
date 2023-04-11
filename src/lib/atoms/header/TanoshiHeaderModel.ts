export default class TanoshiHeaderModel {
	private _content!: string;
	private _displaySize!: string;
	private _alignment!: string;
	private _htmlSize!: string;
	private _theme!: string;

	readonly EXPECTED_DISPLAY_SIZES: object = {
		sm: 'sm',
		base: 'base',
		lg: 'lg',
		xl: 'xl',
		'2xl': '2xl',
		'3xl': '3xl',
		'4xl': '4xl',
		'5xl': '5xl',
		'6xl': '6xl'
	};

	readonly EXPECTED_HTML_SIZES: object = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		h6: 'h6'
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

		// @ts-ignore
		this.setDisplaySize(this.EXPECTED_DISPLAY_SIZES['3xl']);

		// @ts-ignore
		this.setHtmlSize(this.EXPECTED_HTML_SIZES.h1);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.black);

		// @ts-ignore
		this.setAligment(this.EXPECTED_ALIGNMENT.left);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiHeaderModel {
		this._content = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiHeaderModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get displaySize(): string {
		return this._displaySize;
	}

	public setDisplaySize(value: string): TanoshiHeaderModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_DISPLAY_SIZES, value) === false) {
			throw new Error();
		}

		this._displaySize = value;
		return this;
	}

	get htmlSize(): string {
		return this._htmlSize;
	}

	public setHtmlSize(value: string): TanoshiHeaderModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_HTML_SIZES, value) === false) {
			throw new Error();
		}

		this._htmlSize = value;
		return this;
	}

	get aligment(): string {
		return this._alignment;
	}

	public setAligment(value: string): TanoshiHeaderModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ALIGNMENT, value) === false) {
			throw new Error();
		}

		this._alignment = value;
		return this;
	}
}
