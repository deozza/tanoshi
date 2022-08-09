export default class TanoshiImageModel {
	private _content!: string;
	private _alt!: string;
	private _theme: string = '';
	private _filter: string = '';

	constructor(content: string, alt: string) {
		this.setContent(content);
		this.setAlt(alt);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiImageModel {
		this._content = value;
		return this;
	}

	get alt(): string {
		return this._alt;
	}

	public setAlt(value: string): TanoshiImageModel {
		this._alt = value;
		return this;
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiImageModel {
		this._theme = value;
		return this;
	}

	get filter(): string {
		return this._filter!;
	}

	public setFilter(value: string): TanoshiImageModel {
		this._filter = value;
		return this;
	}
}
