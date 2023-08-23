import type { TanoshiInputModel } from "$lib/types/Types";

export default class TanoshiLabelModel {
	private _name!: string;
	private _value!: string;
	private _spacing: boolean = true;

	public constructor(name: string = '', value: string = '') {
		this.setName(name);
		this.setValue(value);
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

	get spacing(): boolean {
		return this._spacing;
	}

	setSpacing(value: boolean): TanoshiLabelModel {
		this._spacing = value;
		return this;
	}
}
