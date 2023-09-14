import type TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
import { BUTTON_TYPES, THEMES } from '$lib/enums';
import FormButtonTypeError from '$lib/errors/FormButtonTypeError';
import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

export default class TanoshiFormModel {
	private _submitButton!: TanoshiButtonModel;
	private _labelsAndInputs: Array<TanoshiLabelAndInputModel> = [];
	private _backgroundTheme: string = THEMES.Transparent;
	private _borderTheme: string = THEMES.Transparent;
	private _values: any = {};

	public constructor(submitButton: TanoshiButtonModel) {
		this.setSubmitButton(submitButton);
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

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiFormModel {
		this._backgroundTheme = value;
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	public setBorderTheme(value: THEMES): TanoshiFormModel {
		this._borderTheme = value;
		return this;
	}

	public getValues(): any {
		return this._values;
	}

	public updateValue(id: string, value: any): TanoshiFormModel {
		this._values[id] = value;
		return this;
	}
}
