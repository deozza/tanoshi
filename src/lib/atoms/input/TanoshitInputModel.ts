export default class TanoshiInputModel {
	protected _type: string = '';
	protected _id: string | null = null;
	protected _name: string | null = null;
	protected _required: boolean = false;
	protected _value: string | null = null;
	protected _readonly: boolean = false;
	protected _error: boolean = false;
	protected _errorMessage: string = '';

	public constructor(name: string) {
		this.setName(name);
		this.setId(name);
	}

	get type(): string {
		return this._type;
	}

	setType(value: string): TanoshiInputModel {
		this._type = value;
		return this;
	}

	get id(): string {
		return this._id!;
	}

	setId(value: string): TanoshiInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name!;
	}

	setName(value: string): TanoshiInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiInputModel {
		this._required = value;
		return this;
	}

	get value(): string | null {
		return this._value;
	}

	setValue(value: string | null): TanoshiInputModel {
		this._value = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiInputModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	setErrorMessage(value: string): TanoshiInputModel {
		this._errorMessage = value;
		return this;
	}
}
