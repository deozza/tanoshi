export default class TanoshiParagraphModel {
	private _content: string|null = null;
	private _displaySize: string|null = null;
	private _theme: string|null = null;

	constructor(content: string) {
		this.setContent(content);
		this.setDisplaySize('base');
		this.setTheme('black');
	}

	get content(): string {
		return this._content!;
	}

	public setContent(value: string): TanoshiParagraphModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiParagraphModel {
		this._theme = value;
		return this
	}


	get displaySize(): string {
		return this._displaySize!;
	}

	public setDisplaySize(value: string): TanoshiParagraphModel {
		this._displaySize = value;
		return this
	}
}