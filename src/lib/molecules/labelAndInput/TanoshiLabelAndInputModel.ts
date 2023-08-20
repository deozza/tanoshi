import type TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
import type { TanoshiInputModel } from '$lib/types/Types';
import type { ComponentType } from 'svelte';

export default class TanoshiLabelAndInputModel {
	private _label!: TanoshiLabelModel;
	private _input!: TanoshiInputModel;
	private _component!: ComponentType

	public constructor(label: TanoshiLabelModel, input: TanoshiInputModel, component: ComponentType) {
		this.setLabel(label);
		this.setInput(input);
		this.setComponent(component);
	}

	get label(): TanoshiLabelModel {
		return this._label;
	}

	public setLabel(value: TanoshiLabelModel): TanoshiLabelAndInputModel {
		this._label = value;
		return this;
	}
	
	get input(): TanoshiInputModel {
		return this._input;
	}

	public setInput(value: TanoshiInputModel): TanoshiLabelAndInputModel {
		this._input = value;
		return this;
	}

	get component(): ComponentType {
		return this._component;
	}

	public setComponent(value: ComponentType): TanoshiLabelAndInputModel {
		this._component = value;
		return this;
	}
}
