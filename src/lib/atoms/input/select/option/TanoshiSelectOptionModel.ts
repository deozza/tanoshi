export default class TanoshiSelectOptionModel {
	private _name!: string;
	private _value!: string;

	constructor(name: string, value: string) {
		this.setName(name);
		this.setValue(value);
	}

	get name(): string {
		return this._name;
	}

	public setName(value: string): TanoshiSelectOptionModel {
		this._name = value;
		return this;
	}

	get value(): string {
		return this._value;
	}

	public setValue(value: string): TanoshiSelectOptionModel {
		this._value = value;
		return this;
	}
}
