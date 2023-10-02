import type TanoshiIconModel from "$atoms/icon/TanoshiIconModel";
import { BUTTON_TYPES, THEMES, BUTTON_SIZES, CONTAINER_BORDERS } from "$lib/enums";
import ThemeError from "$lib/errors/ThemeError";

export default class TanoshiButtonModel {
	private _content!: string;
	private _iconAtLeft: TanoshiIconModel | null = null;
	private _iconAtRight: TanoshiIconModel | null = null;
	private _label!: string;
	private _backgroundTheme!: string;
	private _backgroundHoverTheme!: string;
	private _borderTheme!: string;
	private _shape!: string;
	private _borderHoverTheme!: string;
	private _textTheme!: string;
	private _textHoverTheme!: string;
	private _type!: string;
	private _size!: string;
	private _isDisabled: boolean = false;
	private _isLoading: boolean = false;
	private _hasPadding: boolean = true;

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

	get iconAtLeft(): TanoshiIconModel | null {
		return this._iconAtLeft;
	}

	public setIconAtLeft(value: TanoshiIconModel): TanoshiButtonModel {
		this._iconAtLeft = value;
		return this;
	}

	get iconAtRight(): TanoshiIconModel | null {
		return this._iconAtRight;
	}

	public setIconAtRight(value: TanoshiIconModel): TanoshiButtonModel {
		this._iconAtRight = value;
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
		return this._backgroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiButtonModel {
		this._backgroundTheme = value;
		return this;
	}

	get backgroundHoverTheme(): string {
		return this._backgroundHoverTheme;
	}

	public setBackgroundHoverTheme(value: THEMES): TanoshiButtonModel {
		this._backgroundHoverTheme = value;
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	public setBorderTheme(value: THEMES): TanoshiButtonModel {
		this._borderTheme = value;
		return this;
	}

	get shape(): string {
		return this._shape;
	}

	public setShape(value: CONTAINER_BORDERS): TanoshiButtonModel {
		this._shape = value;
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
		if(this._backgroundTheme === value ) {
			//throw new ThemeError('Background and text themes cannot be the same');
		}
		
		this._textTheme = value;
		return this;
	}

	get textHoverTheme(): string {
		return this._textHoverTheme;
	}

	public setTextHoverTheme(value: THEMES): TanoshiButtonModel {
		if(this._backgroundHoverTheme === value ) {
			//throw new ThemeError('Background and text themes cannot be the same');
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

	get hasPadding(): boolean {
		return this._hasPadding;
	}

	public setHasPadding(value: boolean): TanoshiButtonModel {
		this._hasPadding = value;
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
