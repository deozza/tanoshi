import { INPUT_CHOICES_TYPES } from "$lib/enums";

export default class TanoshiChoiceInputModel {
	private _id!: string;
	private _type: string = '';
	private _name!: string;
	private _required: boolean = false;
	private _value!: string;
	private _checked: boolean = false;
	private _readonly: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';

	constructor(value: string) {
		this.setValue(value);
		this.setType(INPUT_CHOICES_TYPES.Radio);
	}

	get id(): string {
		return this._id;
	}

	setId(value: string): TanoshiChoiceInputModel {
		this._id = value;
		return this;
	}

	get type(): string {
		return this._type;
	}

	setType(value: INPUT_CHOICES_TYPES): TanoshiChoiceInputModel {
		this._type = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiChoiceInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	setRequired(value: boolean): TanoshiChoiceInputModel {
		this._required = value;
		return this;
	}

	get value(): string {
		return this._value;
	}

	setValue(value: string): TanoshiChoiceInputModel {
		this._value = value;
		return this;
	}

	get checked(): boolean {
		return this._checked;
	}

	set checked(value: boolean) {
		this._checked = value;
	}
	

	setChecked(value: boolean): TanoshiChoiceInputModel {
		this._checked = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	setReadonly(value: boolean): TanoshiChoiceInputModel {
		this._readonly = value;
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiChoiceInputModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	setErrorMessage(value: string): TanoshiChoiceInputModel {
		this._errorMessage = value;
		return this;
	}
}
