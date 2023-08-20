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

	constructor(name: string) {
		this.setName(name);
		this.setId(name);
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
}
