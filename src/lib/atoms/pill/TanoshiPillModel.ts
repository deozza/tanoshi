import { BUTTON_SIZES, THEMES } from "$lib/enums";
import ThemeError from "$lib/errors/ThemeError";

export default class TanoshiPillModel {
	private _content!: string;
	private _backgroundTheme!: string;
	private _borderTheme!: string;
	private _textTheme!: string;
	private _size!: string;
	private _hasPadding: boolean = true;

	constructor(content: string) {
		this.setContent(content);
		this.setBasicTheme(THEMES.Primary);
		this.setSize(BUTTON_SIZES.Md);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiPillModel {
		this._content = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiPillModel {
		this._backgroundTheme = value;
		return this;
	}


	get borderTheme(): string {
		return this._borderTheme;
	}

	public setBorderTheme(value: THEMES): TanoshiPillModel {
		this._borderTheme = value;
		return this;
	}
	
	get textTheme(): string {
		return this._textTheme;
	}

	public setTextTheme(value: THEMES): TanoshiPillModel {
		if(this._backgroundTheme === value ) {
			//throw new ThemeError('Background and text themes cannot be the same');
		}
		
		this._textTheme = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: BUTTON_SIZES): TanoshiPillModel {
		this._size = value;
		return this;
	}

	get hasPadding(): boolean {
		return this._hasPadding;
	}

	public setHasPadding(value: boolean): TanoshiButtonModel {
		this._hasPadding = value;
		return this;
	}

	public setBasicTheme(value: THEMES):TanoshiPillModel {
		this.setBackgroundTheme(value);
		this.setBorderTheme(value);

		if(value === THEMES.White) {
			this.setTextTheme(THEMES.Black);
		}else{
			this.setTextTheme(THEMES.White);
		}


		return this;
	}
}
