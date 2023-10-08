import { CONTAINER_BORDERS, INPUT_TEXT_TYPES, THEMES } from "$lib/enums";

export default class TanoshiTextInputModel {
	private _type: string = '';
	private _id!: string;
	private _name!: string;
	private _required: boolean = false;
	private _value: string | null = null;
	private _readonly: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';
	private _minLength: number | null = null;
	private _maxLength: number | null = null;
	private _placeholder: string | null = null;
	private _backgroundTheme!: string;
	private _textTheme!: string;
	private _borderTheme!: string;
	private _borderShape!: string;

	constructor(name: string) {
		this.setType(INPUT_TEXT_TYPES.Text);
		this.setName(name);
		this.setId(name);
		this.setBackgroundTheme(THEMES.White);
		this.setTextTheme(THEMES.Black);
		this.setBorderTheme(THEMES.Black);
		this.setBorderShape(CONTAINER_BORDERS.Md);
	}

	get type(): string {
		return this._type;
	}

	setType(value: INPUT_TEXT_TYPES): TanoshiTextInputModel {
		this._type = value;
		return this;
	}

	get id(): string {
		return this._id;
	}

	setId(value: string): TanoshiTextInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiTextInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiTextInputModel {
		this._required = value;
		return this;
	}

	get value(): string | null {
		return this._value;
	}

	setValue(value: string | null): TanoshiTextInputModel {
		this._value = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiTextInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiTextInputModel {
		this._error = value;
		if(value === true) {
			this.setBorderTheme(THEMES.Danger);
			this.setTextTheme(THEMES.Danger);
		}
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	setErrorMessage(value: string): TanoshiTextInputModel {
		this._errorMessage = value;
		return this;
	}

	get minLength(): number | null {
		return this._minLength;
	}

	setMinLength(value: number): TanoshiTextInputModel {
		this._minLength = value;
		return this;
	}

	get maxLength(): number | null {
		return this._maxLength;
	}

	setMaxLength(value: number): TanoshiTextInputModel {
		this._maxLength = value;
		return this;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	setPlaceholder(value: string): TanoshiTextInputModel {
		this._placeholder = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	setBackgroundTheme(value: THEMES): TanoshiTextInputModel {
		this._backgroundTheme = value;
		return this;
	}

	get textTheme(): string {
		return this._textTheme;
	}

	setTextTheme(value: THEMES): TanoshiTextInputModel {
		this._textTheme = value;
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	setBorderTheme(value: THEMES): TanoshiTextInputModel {
		this._borderTheme = value;
		return this;
	}

	get borderShape(): string {
		return this._borderShape;
	}

	setBorderShape(value: CONTAINER_BORDERS): TanoshiTextInputModel {
		this._borderShape = value;
		return this;
	}
}
