import type TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

export default class TanoshiFormModel {
	private _submitButton!: TanoshiButtonModel;
	private _labelsAndInputs: Array<TanoshiLabelAndInputModel> = [];

	public constructor(submitButton: TanoshiButtonModel) {
		this.setSubmitButton(submitButton);
	}

	get submitButton(): TanoshiButtonModel {
		return this._submitButton;
	}

	public setSubmitButton(value: TanoshiButtonModel): TanoshiFormModel {
		if ('submit' !== value.type) {
			throw new Error();
		}

		this._submitButton = value;
		return this;
	}

	get labelsAndInputs(): Array<TanoshiLabelAndInputModel> {
		return this._labelsAndInputs;
	}

	public addLabelAndInput(tanoshiLabelAndInputModel: TanoshiLabelAndInputModel): TanoshiFormModel {
		
		this._labelsAndInputs.push(tanoshiLabelAndInputModel);
		return this;
	}
}
