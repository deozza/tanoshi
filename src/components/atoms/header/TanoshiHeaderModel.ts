export default class TanoshiHeaderModel {
	private _content: string;
	private _displaySize: string;
	private _htmlSize: string;
	private _theme: string;

	constructor(content: string) {
		this._content = content;
		this._displaySize = '3xl';
		this._htmlSize = 'h1';
		this._theme = 'black';
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiHeaderModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiHeaderModel {
		this._theme = value;
		return this
	}


	get displaySize(): string {
		return this._displaySize;
	}

	public setdisplaySize(value: string): TanoshiHeaderModel {
		this._displaySize = value;
		return this
	}

	get htmlSize(): string {
		return this._htmlSize;
	}

	public setHtmlSize(value: string): TanoshiHeaderModel {
		this._htmlSize = value;
		return this
	}
}