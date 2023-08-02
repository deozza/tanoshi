import { BUTTON_TYPES, THEMES, SIZES, BUTTON_SIZES } from "$lib/enums";
import ThemeError from "$lib/errors/ThemeError";

export default class TanoshiButtonModel {
	private _content!: string;
	private _label!: string;
	private _backroundTheme!: string;
	private _backroundHoverTheme!: string;
	private _borderTheme!: string;
	private _borderHoverTheme!: string;
	private _textTheme!: string;
	private _textHoverTheme!: string;
	private _type!: string;
	private _size!: string;
	private _isDisabled: boolean = false;
	private _isLoading: boolean = false;

	public constructor(content: string) {
		this.setContent(content);
		this.setLabel(content);

		this.setBasicTheme(THEMES.Primary);

		this.setType(BUTTON_TYPES.Button);
		this.setSize(BUTTON_SIZES.Md);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiButtonModel {
		this._content = value;
		return this;
	}
	
	get label(): string {
		return this._label;
	}

	public setLabel(value: string): TanoshiButtonModel {
		this._label = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiButtonModel {
		this._backroundTheme = value;
		return this;
	}

	get backgroundHoverTheme(): string {
		return this._backroundHoverTheme;
	}

	public setBackgroundHoverTheme(value: THEMES): TanoshiButtonModel {
		this._backroundHoverTheme = value;
		return this;
	}


	get borderTheme(): string {
		return this._borderTheme;
	}

	public setBorderTheme(value: THEMES): TanoshiButtonModel {
		this._borderTheme = value;
		return this;
	}

	get borderHoverTheme(): string {
		return this._borderHoverTheme;
	}

	public setBorderHoverTheme(value: THEMES): TanoshiButtonModel {
		this._borderHoverTheme = value;
		return this;
	}
	
	get textTheme(): string {
		return this._textTheme;
	}

	public setTextTheme(value: THEMES): TanoshiButtonModel {
		if(this._backroundTheme === value ) {
			throw new ThemeError('Background and text themes cannot be the same');
		}
		
		this._textTheme = value;
		return this;
	}

	get textHoverTheme(): string {
		return this._textHoverTheme;
	}

	public setTextHoverTheme(value: THEMES): TanoshiButtonModel {
		if(this._backroundHoverTheme === value ) {
			throw new ThemeError('Background and text themes cannot be the same');
		}
		
		this._textHoverTheme = value;
		return this;
	}

	get type(): string {
		return this._type;
	}

	public setType(value: BUTTON_TYPES): TanoshiButtonModel {
		this._type = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: BUTTON_SIZES): TanoshiButtonModel {
		this._size = value;
		return this;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(value: boolean): TanoshiButtonModel {
		this._isDisabled = value;
		return this;
	}

	get isLoading(): boolean {
		return this._isLoading;
	}

	public setLoaderOn() : TanoshiButtonModel {
		this._isLoading = true;
		this.setIsDisabled(true)
		return this;
	}

	public setLoaderOff() : TanoshiButtonModel {
		this._isLoading = false;
		this.setIsDisabled(false)
		return this;
	}

	public setBasicTheme(value: THEMES):TanoshiButtonModel {
		this.setBackgroundTheme(value);
		this.setBackgroundHoverTheme(value);
		this.setBorderTheme(value);
		this.setBorderHoverTheme(value);

		if(value === THEMES.White) {
			this.setTextTheme(THEMES.Black);
			this.setTextHoverTheme(THEMES.Black);
		}else{
			this.setTextTheme(THEMES.White);
			this.setTextHoverTheme(THEMES.White);
		}


		return this;
	}
}
