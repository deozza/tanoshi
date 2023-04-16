export default class TanoshiImageModel {
	private _content!: string;
	private _alt!: string;
	private _theme: string = '';
	private _filter: string = '';
	private _width: string = 'w-auto';
	private _height: string = 'h-full';

	readonly EXPECTED_THEMES: object = {
		rounded: 'rounded',
		circled: 'circled'
	};

	readonly EXPECTED_FILTERS: object = {
		blur: 'blur',
		grayscale: 'grayscale',
		sepia: 'sepia',
		invert: 'invert'
	};

	constructor(content: string, alt: string) {
		this.setContent(content);
		this.setAlt(alt);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiImageModel {
		if (value.length <= 0) {
			throw new Error();
		}

		this._content = value;
		return this;
	}

	get alt(): string {
		return this._alt;
	}

	public setAlt(value: string): TanoshiImageModel {
		if (value.length <= 0) {
			throw new Error();
		}

		this._alt = value;
		return this;
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiImageModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}
		this._theme = value;
		return this;
	}

	get filter(): string {
		return this._filter!;
	}

	public setFilter(value: string): TanoshiImageModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_FILTERS, value) === false) {
			throw new Error();
		}
		this._filter = value;
		return this;
	}

	get width(): string {
		return this._width!;
	}

	public setWidth(value: string): TanoshiImageModel {
		this._width = value;
		return this;
	}

	get height(): string {
		return this._height!;
	}

	public setHeight(value: string): TanoshiImageModel {
		this._height = value;
		return this;
	}

	public setCircle(size: string): TanoshiImageModel {
		this._theme = 'circled';
		this._width = 'w-'+size;
		this._height = 'h-'+size;
		return this;
	}
}
