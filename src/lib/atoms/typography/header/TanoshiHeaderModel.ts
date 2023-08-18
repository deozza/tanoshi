import { HEADER_TAGS, SIZES } from "$lib/enums";
import { TEXT_ALIGNMENT, THEMES } from "../../../enums/Themes";

export default class TanoshiHeaderModel {
	private _content!: string;
	private _size!: string;
	private _alignment!: string;
	private _tag!: string;
	private _theme!: string;

	constructor(content: string) {
		this.setContent(content);
		this.setSize(SIZES['3Xl']);
		this.setTag(HEADER_TAGS.H1);
		this.setTheme(THEMES.Black);
		this.setAligment(TEXT_ALIGNMENT.Left);
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

	public setTheme(value: THEMES): TanoshiHeaderModel {
		this._theme = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: SIZES): TanoshiHeaderModel {
		this._size = value;
		return this;
	}

	get tag(): string {
		return this._tag;
	}

	public setTag(value: HEADER_TAGS): TanoshiHeaderModel {
		this._tag = value;
		return this;
	}

	get aligment(): string {
		return this._alignment;
	}

	public setAligment(value: TEXT_ALIGNMENT): TanoshiHeaderModel {
		this._alignment = value;
		return this;
	}
}
