export default class TanoshiFileInputModel {
	private _id!: string;
	private _name!: string;
	private _required: boolean = false;
	private _value: number | null = null;
	private _readonly: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';
	private _placeholder: string | null = null;
	private _multiple: boolean = false;
	private _accept: string | null = null;

	constructor(name: string) {
		this.setName(name);
		this.setId(name);
	}

	get id(): string {
		return this._id;
	}

	setId(value: string): TanoshiFileInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiFileInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiFileInputModel {
		this._required = value;
		return this;
	}

	get value(): number | null {
		return this._value;
	}

	setValue(value: number | null): TanoshiFileInputModel {
		this._value = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiFileInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiFileInputModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	setErrorMessage(value: string): TanoshiFileInputModel {
		this._errorMessage = value;
		return this;
	}

	get placeholder(): string | null {
		return this._placeholder;
	}

	setPlaceholder(value: string): TanoshiFileInputModel {
		this._placeholder = value;
		return this;
	}

	get multiple(): boolean {
		return this._multiple;
	}

	public setMultiple(value: boolean): TanoshiFileInputModel {
		this._multiple = value;
		return this;
	}

	get accept(): string | null {
		return this._accept;
	}

	public setAccept(value: string | null): TanoshiFileInputModel {
		this._accept = value;
		return this;
	}

}
