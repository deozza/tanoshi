import { NAVIGATION_ORIENTATIONS, THEMES } from '$lib/enums';
import type { TanoshiNavigationLinkModel } from '$lib/types/Types';

export default class TanoshiNavigationModel {
	private _itemsAtLeft: Array<TanoshiNavigationLinkModel> = [];
	private _itemsAtCenter: Array<TanoshiNavigationLinkModel> = [];
	private _itemsAtRight: Array<TanoshiNavigationLinkModel> = [];
	private _theme!: string;

	public constructor() {
		this.setTheme(THEMES.Primary);
	}

	get itemsAtLeft(): Array<TanoshiNavigationLinkModel> {
		return this._itemsAtLeft;
	}

	public setItemsAtLeft(value: Array<TanoshiNavigationLinkModel>): TanoshiNavigationModel {
		this._itemsAtLeft = value;
		return this;
	}

	public addItemAtLeft(value: TanoshiNavigationLinkModel): TanoshiNavigationModel {
		this._itemsAtLeft = [...this._itemsAtLeft, value];
		return this;
	}

	get itemsAtCenter(): Array<TanoshiNavigationLinkModel> {
		return this._itemsAtCenter;
	}

	public setItemsAtCenter(value: Array<TanoshiNavigationLinkModel>): TanoshiNavigationModel {
		this._itemsAtCenter = value;
		return this;
	}

	public addItemAtCenter(value: TanoshiNavigationLinkModel): TanoshiNavigationModel {
		this._itemsAtCenter = [...this._itemsAtCenter, value];
		return this;
	}

	get itemsAtRight(): Array<TanoshiNavigationLinkModel> {
		return this._itemsAtRight;
	}

	public setItemsAtRight(value: Array<TanoshiNavigationLinkModel>): TanoshiNavigationModel {
		this._itemsAtRight = value;
		return this;
	}

	public addItemAtRight(value: TanoshiNavigationLinkModel): TanoshiNavigationModel {
		this._itemsAtRight = [...this._itemsAtRight, value];
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiNavigationModel {
		this._theme = value;
		return this;
	}
}
