import type TanoshiSelectOptionModel from "$atoms/input/select/option/TanoshiSelectOptionModel";
import SelectOptionError from "$lib/errors/SelectOptionError";

export default class TanoshiSelectInputModel {
	private _id!: string;
	private _options: Array<TanoshiSelectOptionModel> = [];
	private _multiple: boolean = false;
	private _selected = [];
	private _name!: string;
	private _required: boolean = false;
	private _readonly: boolean = false;
	private _error: boolean = false;
	private _errorMessage: string = '';

	constructor(id: string) {
		this.setId(id);
		this.setName(id);
	}

	get id(): string {
		return this._id;
	}

	public setId(value: string): TanoshiSelectInputModel {
		this._id = value;
		return this;
	}

	get name(): string {
		return this._name;
	}

	public setName(value: string): TanoshiSelectInputModel {
		this._name = value;
		return this;
	}

	get required(): boolean {
		return this._required;
	}

	public setRequired(value: boolean): TanoshiSelectInputModel {
		this._required = value;
		return this;
	}

	get readonly(): boolean {
		return this._readonly;
	}

	public setReadonly(value: boolean): TanoshiSelectInputModel {
		this._readonly = value;
		return this;
	}

	get options(): Array<TanoshiSelectOptionModel> {
		return this._options;
	}

	public setOptions(value: Array<TanoshiSelectOptionModel>): TanoshiSelectInputModel {
		this._options = value;
		return this;
	}

	public addOption(value: TanoshiSelectOptionModel): TanoshiSelectInputModel {
		const index = this._options.findIndex((option) => option.value === value.value);
		if (index > -1) {
			throw new SelectOptionError(`Option with value ${value.value} already exists`);
		}

		this._options.push(value);
		return this;
	}

	get multiple(): boolean {
		return this._multiple;
	}

	public setMultiple(value: boolean): TanoshiSelectInputModel {
		this._multiple = value;
		return this;
	}

	
	get selected() {
		return this._selected;
	}

	set selected(value: any) {
		this._selected = value;
	}

	get error(): boolean {
		return this._error;
	}

	public setError(value: boolean): TanoshiSelectInputModel {
		this._error = value;
		return this;
	}

	get errorMessage(): string {
		return this._errorMessage;
	}

	public setErrorMessage(value: string): TanoshiSelectInputModel {
		this._errorMessage = value;
		return this;
	}
}
