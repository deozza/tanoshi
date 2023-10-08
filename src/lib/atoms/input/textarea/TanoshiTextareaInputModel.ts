import { CONTAINER_BORDERS, THEMES } from "$lib/enums";

export default class TanoshiTextareaInputModel {
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
	private _rows: number = 3;
	private _cols: number = 50;
	private _backgroundTheme!: string;
	private _textTheme!: string;
	private _borderTheme!: string;
	private _borderShape!: string;

	constructor(name: string) {
		this.setName(name);
		this.setId(name);
		this.setBackgroundTheme(THEMES.White);
		this.setTextTheme(THEMES.Black);
		this.setBorderTheme(THEMES.Black);
		this.setBorderShape(CONTAINER_BORDERS.Md);
	}

	get id(): string {
		return this._id;
	}

	setId(value: string): TanoshiTextareaInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiTextareaInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiTextareaInputModel {
		this._required = value;
		return this;
	}

	get value(): string | null {
		return this._value;
	}

	set value(value: string) {
		this._value = value;
	}

	setValue(value: string | null): TanoshiTextareaInputModel {
		this._value = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiTextareaInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiTextareaInputModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	setErrorMessage(value: string): TanoshiTextareaInputModel {
		this._errorMessage = value;
		return this;
	}

	get minLength(): number | null {
		return this._minLength;
	}

	setMinLength(value: number): TanoshiTextareaInputModel {
		this._minLength = value;
		return this;
	}

	get maxLength(): number | null {
		return this._maxLength;
	}

	setMaxLength(value: number): TanoshiTextareaInputModel {
		this._maxLength = value;
		return this;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	setPlaceholder(value: string): TanoshiTextareaInputModel {
		this._placeholder = value;
		return this;
	}

	get rows(): number {
		return this._rows;
	}

	setRows(value: number): TanoshiTextareaInputModel {
		this._rows = value;
		return this;
	}

	get cols(): number {
		return this._cols;
	}

	setCols(value: number): TanoshiTextareaInputModel {
		this._cols = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	setBackgroundTheme(value: THEMES): TanoshiTextareaInputModel {
		this._backgroundTheme = value;
		return this;
	}

	get textTheme(): string {
		return this._textTheme;
	}

	setTextTheme(value: THEMES): TanoshiTextareaInputModel {
		this._textTheme = value;
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	setBorderTheme(value: THEMES): TanoshiTextareaInputModel {
		this._borderTheme = value;
		return this;
	}

	get borderShape(): string {
		return this._borderShape;
	}

	setBorderShape(value: CONTAINER_BORDERS): TanoshiTextareaInputModel {
		this._borderShape = value;
		return this;
	}
}
