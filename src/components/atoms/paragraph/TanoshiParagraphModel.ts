export default class TanoshiParagraphModel {
	private _content: string;
	private _displaySize: string;
	private _theme: string;

	constructor(content: string) {
		this._content = content;
		this._displaySize = 'base';
		this._theme = 'black';
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiParagraphModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiParagraphModel {
		this._theme = value;
		return this
	}


	get displaySize(): string {
		return this._displaySize;
	}

	public setdisplaySize(value: string): TanoshiParagraphModel {
		this._displaySize = value;
		return this
	}
}