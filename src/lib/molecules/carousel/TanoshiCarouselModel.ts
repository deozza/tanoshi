import type TanoshiImageModel from '$atoms/image/TanoshiImageModel';

export default class TanoshiCarouselModel {
	private _items: Array<TanoshiImageModel> = [];
	private _autoplay: boolean = false;
	private _autoplaySpeed: number = 5000;
	private _transitionDuration: number = 1000;
	private _showArrows: boolean = true;
	private _showDots: boolean = true;
	private _height: string = 'h-full'


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

	get transitionDuration(): number {
		return this._transitionDuration;
	}

	public setTransitionDuration(value: number): TanoshiCarouselModel {

		this._transitionDuration = value;
		return this;
	}

	get showArrows(): boolean {
		return this._showArrows;
	}

	public setShowArrows(value: boolean): TanoshiCarouselModel {

		this._showArrows = value;
		return this;
	}
	
	get showDots(): boolean {
		return this._showDots;
	}

	public setShowDots(value: boolean): TanoshiCarouselModel {

		this._showDots = value;
		return this;
	}

	public showControls(value: boolean): TanoshiCarouselModel{
		this.setShowArrows(value)
		this.setShowDots(value)

		return this;
	}
		
	get height(): string {
		return this._height;
	}

	public setHeight(value: string): TanoshiCarouselModel {

		this._height = value;
		return this;
	}
}
