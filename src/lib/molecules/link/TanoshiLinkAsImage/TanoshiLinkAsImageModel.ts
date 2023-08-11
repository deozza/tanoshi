import type { TanoshiImageModel, TanoshiLinkModel } from "$atoms";

export default class TanoshiLinkAsImageModel {
	private _image!: TanoshiImageModel;
	private _link!: TanoshiLinkModel;

	constructor(link: TanoshiLinkModel, image: TanoshiImageModel) {
		this.setLink(link);
		this.setImage(image);
	}

	get image(): TanoshiImageModel {
		return this._image;
	}

	public setImage(value: TanoshiImageModel): TanoshiLinkAsImageModel {
		this._image = value;
		return this;
	}

	get link(): TanoshiLinkModel {
		return this._link;
	}

	public setLink(value: TanoshiLinkModel): TanoshiLinkAsImageModel {
		this._link = value;
		return this;
	}
}
