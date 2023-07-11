export default class TanoshiParagraphModel {
	private _content!: string;
	private _displaySize!: string;
	private _alignment!: string;
	private _theme!: string;
	private _hasSpacing: boolean = true;

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

		// @ts-ignore
		this.setDisplaySize(this.EXPECTED_DISPLAY_SIZES.base);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.black);

		// @ts-ignore
		this.setAlignment(this.EXPECTED_ALIGNMENT.left);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiParagraphModel {
		this._content = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiParagraphModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get displaySize(): string {
		return this._displaySize;
	}

	public setDisplaySize(value: string): TanoshiParagraphModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_DISPLAY_SIZES, value) === false) {
			throw new Error();
		}

		this._displaySize = value;
		return this;
	}

	get hasSpacing(): boolean {
		return this._hasSpacing;
	}

	public setHasSpacing(value: boolean): TanoshiParagraphModel {
		this._hasSpacing = value;
		return this;
	}

	get alignment(): string {
		return this._alignment;
	}

	public setAlignment(value: string): TanoshiParagraphModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ALIGNMENT, value) === false) {
			throw new Error();
		}

		this._alignment = value;
		return this;
	}
}
