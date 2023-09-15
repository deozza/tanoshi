export default class TanoshiSelectOptionModel {
	private _id!: string;
	private _name!: string;
	private _value!: string;
	private _selected: boolean = false;
	private _disabled: boolean = false;

	constructor(name: string, value: string) {
		this.setName(name);
		this.setId(name);
		this.setValue(value);
	}

	get name(): string {
		return this._name;
	}

	public setName(value: string): TanoshiSelectOptionModel {
		this._name = value;
		return this;
	}

	get id(): string {	
		return this._id;
	}

	public setId(value: string): TanoshiSelectOptionModel {
		this._id = value;
		return this;
	}

	get value(): string {
		return this._value;
	}

	public setValue(value: string): TanoshiSelectOptionModel {
		this._value = value;
		return this;
	}

	get selected(): boolean {
		return this._selected;
	}

	public setSelected(value: boolean): TanoshiSelectOptionModel {
		this._selected = value;
		return this;
	}

	get disabled(): boolean {
		return this._disabled;
	}

	public setDisabled(value: boolean): TanoshiSelectOptionModel {
		this._disabled = value;
		return this;
	}
}
