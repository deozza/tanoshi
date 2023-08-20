import type { TanoshiChoiceAndLabelModel } from '$lib/types/Types';

export default class TanoshiChoiceGroupModel {
	private _choices: Array<TanoshiChoiceAndLabelModel> = [];
	private _id!: string;
	private _values: Array<string> = [];
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
		choice.input.setId(this.id);
		choice.input.setName(this.id);
		choice.label.setName(this.id);

		this._choices.push(choice);
		return this;
	}

	public get values(): Array<string> {
		return this._values;
	}
	
	public setValues(values: Array<string>): TanoshiChoiceGroupModel {
		this._values = values;
		return this;
	}

	public handleValue(values: string): TanoshiChoiceGroupModel {
		const index = this._values.indexOf(values);
		if (index > -1) {
			this._values.splice(index, 1);
		} else {
			this._values.push(values);
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
