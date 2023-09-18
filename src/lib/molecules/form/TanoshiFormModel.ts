import type TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
import { BUTTON_TYPES, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, THEMES } from '$lib/enums';
import FormButtonTypeError from '$lib/errors/FormButtonTypeError';
import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

export default class TanoshiFormModel {
	private _submitButton!: TanoshiButtonModel;
	private _labelsAndInputs: Array<TanoshiLabelAndInputModel> = [];
	private _values: any = {};
	private _container : TanoshiContainerModel;

	public constructor(submitButton: TanoshiButtonModel) {
		this.setSubmitButton(submitButton);
		this._container = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
			.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center);
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

	get container(): TanoshiContainerModel {
		return this._container;
	}
}
