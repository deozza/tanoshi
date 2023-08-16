import type { TanoshiLinkModel } from "$atoms";
import type TanoshiButtonModel from "$atoms/button/TanoshiButtonModel";

export default class TanoshiLinkAsButtonModel {
	private _button!: TanoshiButtonModel;
	private _link!: TanoshiLinkModel;

	constructor(link: TanoshiLinkModel, button: TanoshiButtonModel) {
		this.setLink(link);
		this.setButton(button);
	}

	get button(): TanoshiButtonModel {
		return this._button;
	}

	public setButton(value: TanoshiButtonModel): TanoshiLinkAsButtonModel {
		this._button = value;
		return this;
	}

	get link(): TanoshiLinkModel {
		return this._link;
	}

	public setLink(value: TanoshiLinkModel): TanoshiLinkAsButtonModel {
		this._link = value;
		return this;
	}
}
