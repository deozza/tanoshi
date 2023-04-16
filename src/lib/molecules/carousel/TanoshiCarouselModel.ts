import type TanoshiImageModel from '$atoms/image/TanoshiImageModel';

export default class TanoshiCarouselModel {
	private _items: Array<TanoshiImageModel> = [];
	private _autoplay: boolean = false;
	private _autoplaySpeed: number = 5000;


	get items(): Array<TanoshiImageModel> {
		return this._items;
	}

	public setItems(value: Array<TanoshiImageModel>): TanoshiCarouselModel {
		this._items = value;
		return this;
	}

	public addItem(value: TanoshiImageModel): TanoshiCarouselModel {
		this._items = [...this._items, value];
		return this;
	}

	get autoplay(): boolean {
		return this._autoplay;
	}

	public setAutoplay(value: boolean): TanoshiCarouselModel {

		this._autoplay = value;
		return this;
	}

	get autoplaySpeed(): number {
		return this._autoplaySpeed;
	}

	public setAutoplaySpeed(value: number): TanoshiCarouselModel {

		this._autoplaySpeed = value;
		return this;
	}
}
