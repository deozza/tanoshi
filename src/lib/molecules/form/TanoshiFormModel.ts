import type TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
import type TanoshiInputModelInterface from '$atoms/input/TanoshiInputModelInterface';
import type TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
import type TanoshiLabelAndInputModelInterface from './TanoshiLabelAndInputModelInterface';

export default class TanoshiFormModel {
	private _submitButton!: TanoshiButtonModel;
	private _labelsAndInputs: Array<TanoshiLabelAndInputModelInterface> = [];

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

	get labelsAndInputs(): Array<TanoshiLabelAndInputModelInterface> {
		return this._labelsAndInputs;
	}

	public addLabelAndInput(label: TanoshiLabelModel, input: TanoshiInputModelInterface): TanoshiFormModel {
		const tanoshiLabelAndInputModel: TanoshiLabelAndInputModelInterface = {
			tanoshiLabelModel: label,
			tanoshiInputModel: input
		};
		this._labelsAndInputs.push(tanoshiLabelAndInputModel);
		return this;
	}
}
