import { CONTAINER_BORDERS, THEMES } from "$lib/enums";

export default class TanoshiNumberInputModel {
	private _id!: string;
	private _name!: string;
	private _required: boolean = false;
	private _value: number | null = null;
	private _readonly: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';
	private _min: number | null = null;
	private _max: number | null = null;
	private _placeholder: string | null = null;
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

	setId(value: string): TanoshiNumberInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiNumberInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiNumberInputModel {
		this._required = value;
		return this;
	}

	get value(): number | null {
		return this._value;
	}

	set value(value: number | null) {
		this._value = value;
	}

	setValue(value: number | null): TanoshiNumberInputModel {
		this._value = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiNumberInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiNumberInputModel {
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

	setErrorMessage(value: string): TanoshiNumberInputModel {
		this._errorMessage = value;
		return this;
	}

	get min(): number | null {
		return this._min;
	}

	setMin(value: number): TanoshiNumberInputModel {
		this._min = value;
		return this;
	}

	get max(): number | null {
		return this._max;
	}

	setMax(value: number): TanoshiNumberInputModel {
		this._max = value;
		return this;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	setPlaceholder(value: string): TanoshiNumberInputModel {
		this._placeholder = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	setBackgroundTheme(value: THEMES): TanoshiNumberInputModel {
		this._backgroundTheme = value;
		return this;
	}

	get textTheme(): string {
		return this._textTheme;
	}

	setTextTheme(value: THEMES): TanoshiNumberInputModel {
		this._textTheme = value;
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	setBorderTheme(value: THEMES): TanoshiNumberInputModel {
		this._borderTheme = value;
		return this;
	}

	get borderShape(): string {
		return this._borderShape;
	}

	setBorderShape(value: CONTAINER_BORDERS): TanoshiNumberInputModel {
		this._borderShape = value;
		return this;
	}
}
