import ChoiceOptionError from '$lib/errors/ChoiceOptionError';
import type { TanoshiChoiceAndLabelModel } from '$lib/types/Types';

export default class TanoshiChoiceGroupModel {
	private _choices: Array<TanoshiChoiceAndLabelModel> = [];
	private _id!: string;
	private _value: Array<string> = [];
	private _error: boolean = false;
	private _errorMessage: string = '';

	public constructor(id: string) {
		this.setId(id);
	}

	get id(): string {
		return this._id;
	}

	setId(value: string): TanoshiChoiceGroupModel {
		this._id = value;
		return this;
	}

	public get choices(): Array<TanoshiChoiceAndLabelModel> {
		return this._choices;
	}
	
	public setChoices(choices: Array<TanoshiChoiceAndLabelModel>): TanoshiChoiceGroupModel { 
		this._choices = choices;
		return this;
	}

	public addChoice(choice: TanoshiChoiceAndLabelModel): TanoshiChoiceGroupModel {

		const index = this._choices.findIndex((c) => c.label.value === choice.label.value);
		if (index > -1) {
			throw new ChoiceOptionError(`Choice with value ${choice.label.value} already exists`);
		}

		choice.input.setId(this.id);
		choice.input.setName(this.id);
		choice.label.setName(this.id);

		this._choices.push(choice);
		return this;
	}

	public get value(): Array<string> {
		return this._value;
	}
	
	public setValue(value: Array<string>): TanoshiChoiceGroupModel {
		this._value = value;
		return this;
	}

	public handleValue(value: string, checked: boolean|null): TanoshiChoiceGroupModel {
		const index = this._value.indexOf(value);
		if (index > -1 || checked === false) {
			this._value.splice(index, 1);
		} else {
			this._value.push(value);
		}
		return this;
	}

	get error(): boolean {
		return this._error;
	}

	setError(value: boolean): TanoshiChoiceGroupModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	public setErrorMessage(value: string): TanoshiChoiceGroupModel {
		this._errorMessage = value;
		return this;
	}



}
