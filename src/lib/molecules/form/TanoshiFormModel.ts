import type TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
import { BUTTON_TYPES, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, FORM_METHODS, THEMES } from '$lib/enums';
import FormButtonTypeError from '$lib/errors/FormButtonTypeError';
import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

export default class TanoshiFormModel {
	private _submitButton!: TanoshiButtonModel;
	private _labelsAndInputs: Array<TanoshiLabelAndInputModel> = [];
	private _values: any = {};
	private _formData: FormData | null = null;
	private _container : TanoshiContainerModel;
	private _name: string;
	private _method!: string;
	private _action: string | null = null;
	private _preventDefault: boolean = false;

	public constructor(submitButton: TanoshiButtonModel, name: string) {
		this.setSubmitButton(submitButton);
		this._container = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
			.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center);

		this._name = name;
		this.setMethod(FORM_METHODS.Post);
	}

	get submitButton(): TanoshiButtonModel {
		return this._submitButton;
	}

	public setSubmitButton(value: TanoshiButtonModel): TanoshiFormModel {
		if (BUTTON_TYPES.Submit !== value.type) {
			throw new FormButtonTypeError('The submit button must have the type `submit`');
		}

		this._submitButton = value;
		return this;
	}

	get labelsAndInputs(): Array<TanoshiLabelAndInputModel> {
		return this._labelsAndInputs;
	}

	public addLabelAndInput(tanoshiLabelAndInputModel: TanoshiLabelAndInputModel): TanoshiFormModel {
		
		this._labelsAndInputs.push(tanoshiLabelAndInputModel);
		this._values[tanoshiLabelAndInputModel.input.id] = null;
		return this;
	}

	get values(): any {
		return this._values;
	}

	public setValues(values: any): TanoshiFormModel {
		this._values = values;
		return this;
	}

	public updateValue(id: string, value: any): TanoshiFormModel {
		this._values[id] = value;
		return this;
	}

	get formData(): FormData | null {
		return this._formData;
	}

	public setFormData(value: FormData): TanoshiFormModel {
		this._formData = value;
		return this;
	}

	get container(): TanoshiContainerModel {
		return this._container;
	}

	
	get name(): string {
		return this._name;
	}

	public setName(value: string): TanoshiFormModel {
		this._name = value;
		return this;
	}

	get method(): string {
		return this._method;
	}

	public setMethod(value: FORM_METHODS): TanoshiFormModel {
		this._method = value;
		return this;
	}

	get action(): string | null {
		return this._action;
	}

	public setAction(value: string): TanoshiFormModel {
		this._action = value;
		return this;
	}

	get preventDefault(): boolean {
		return this._preventDefault;
	}

	public setPreventDefault(value: boolean): TanoshiFormModel {
		this._preventDefault = value;
		return this;
	}
}
