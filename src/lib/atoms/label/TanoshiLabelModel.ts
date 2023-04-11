import type TanoshiInputModel from '$atoms/input/TanoshiInputModel';

export default class TanoshiLabelModel {
	protected _name!: string;
	protected _value!: string;

	public constructor(name: string = '', value: string = '') {
		this.setName(name);
		this.setValue(name);
	}

	initWithInput(tanoshiInputModel: TanoshiInputModel): TanoshiLabelModel {
		this.setName(tanoshiInputModel.id);
		this.setValue(tanoshiInputModel.name);
		return this;
	}

	get name(): string {
		return this._name;
	}

	setName(value: string): TanoshiLabelModel {
		this._name = value;
		return this;
	}

	get value(): string {
		return this._value;
	}

	setValue(value: string): TanoshiLabelModel {
		this._value = value;
		return this;
	}
}
