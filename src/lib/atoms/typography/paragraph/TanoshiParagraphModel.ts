import { SIZES, TEXT_ALIGNMENT, THEMES } from "$lib/enums";

export default class TanoshiParagraphModel {
	private _content!: string;
	private _size!: string;
	private _alignment!: string;
	private _theme!: string;
	private _hasSpacing: boolean = true;

	constructor(content: string) {
		this.setContent(content);
		this.setSize(SIZES.Md);
		this.setTheme(THEMES.Black);
		this.setAlignment(TEXT_ALIGNMENT.Left);
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

	public setTheme(value: THEMES): TanoshiParagraphModel {
		this._theme = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setDisplaySize(value: SIZES): TanoshiParagraphModel {
		this._size = value;
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

	public setAlignment(value: TEXT_ALIGNMENT): TanoshiParagraphModel {
		this._alignment = value;
		return this;
	}
}
