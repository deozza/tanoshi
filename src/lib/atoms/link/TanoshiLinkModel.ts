import { SIZES, TEXT_ALIGNMENT, THEMES } from "$lib/enums";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types"; 

export default class TanoshiLinkModel {
	private _content!: string;
	private _iconAtLeft: IconDefinition | null = null;
	private _iconAtRight: IconDefinition | null = null;
	private _link!: string;
	private _isInternal!: string;
	private _displaySize!: string;
	private _alignment!: string;
	private _theme!: string;

	constructor(content: string) {
		this.setContent(content);
		this.setLink('#');
		this.setIsInternal(true);
		this.setDisplaySize(SIZES.Md);
		this.setTheme(THEMES.Black);
		this.setAligment(TEXT_ALIGNMENT.Left);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiLinkModel {
		this._content = value;
		return this;
	}

	get iconAtLeft(): IconDefinition | null {
		return this._iconAtLeft;
	}

	public setIconAtLeft(value: IconDefinition): TanoshiLinkModel {
		this._iconAtLeft = value;
		return this;
	}

	get iconAtRight(): IconDefinition | null {
		return this._iconAtRight;
	}

	public setIconAtRight(value: IconDefinition): TanoshiLinkModel {
		this._iconAtRight = value;
		return this;
	}


	get link(): string {
		return this._link;
	}

	public setLink(value: string): TanoshiLinkModel {
		this._link = value;
		return this;
	}

	get isInternal(): string {
		return this._isInternal;
	}

	public setIsInternal(value: boolean): TanoshiLinkModel {
		if (true === value) {
			this._isInternal = '_self';
		} else {
			this._isInternal = '_blank';
		}

		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiLinkModel {
		this._theme = value;
		return this;
	}

	get displaySize(): string {
		return this._displaySize;
	}

	public setDisplaySize(value: SIZES): TanoshiLinkModel {
		this._displaySize = value;
		return this;
	}
	get aligment(): string {
		return this._alignment;
	}

	public setAligment(value: TEXT_ALIGNMENT): TanoshiLinkModel {
		this._alignment = value;
		return this;
	}
}
