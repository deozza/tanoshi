export default class TanoshiHeaderModel {
	private _content: string|null = null;
	private _displaySize: string|null = null;
	private _htmlSize: string|null = null;
	private _theme: string|null = null;

	constructor(content: string) {
		this.setContent(content);
		this.setDisplaySize('3xl');
		this.setHtmlSize('h1');
		this.setTheme('black');
	}

	get content(): string {
		return this._content!;
	}

	public setContent(value: string): TanoshiHeaderModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiHeaderModel {
		this._theme = value;
		return this
	}


	get displaySize(): string {
		return this._displaySize!;
	}

	public setDisplaySize(value: string): TanoshiHeaderModel {
		this._displaySize = value;
		return this
	}

	get htmlSize(): string {
		return this._htmlSize!;
	}

	public setHtmlSize(value: string): TanoshiHeaderModel {
		this._htmlSize = value;
		return this
	}
}