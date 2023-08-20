import type { TanoshiChoiceAndLabelModel } from '$lib/types/Types';

export default class TanoshiChoiceGroupModel {
	private _choices: Array<TanoshiChoiceAndLabelModel> = [];
	private _id!: string;
	private _radioValue: string | null = null;

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

	public get radioValue(): string | null {
		return this._radioValue;
	}

	public setRadioValue(value: string): TanoshiChoiceGroupModel {
		this._radioValue = value;
		return this;
	}

}
