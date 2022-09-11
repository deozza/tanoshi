export default class TanoshiImageModel {
	private _content!: string;
	private _alt!: string;
	private _theme: string = '';
	private _filter: string = '';

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
}
