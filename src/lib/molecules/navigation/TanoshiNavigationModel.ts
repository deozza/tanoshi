import type TanoshiLinkModel from '$lib/atoms/link/TanoshiLinkModel';
import { NAVIGATION_ORIENTATIONS, THEMES } from '$lib/enums';

export default class TanoshiNavigationModel {
	private _itemsAtLeft: Array<TanoshiLinkModel> = [];
	private _itemsAtCenter: Array<TanoshiLinkModel> = [];
	private _itemsAtRight: Array<TanoshiLinkModel> = [];
	private _orientation!: string;
	private _theme!: string;


	public constructor() {
		this.setTheme(THEMES.Primary);
		this.setOrientation(NAVIGATION_ORIENTATIONS.Horizontal);
	}

	get itemsAtLeft(): Array<TanoshiLinkModel> {
		return this._itemsAtLeft;
	}

	public setItemsAtLeft(value: Array<TanoshiLinkModel>): TanoshiNavigationModel {
		this._itemsAtLeft = value;
		return this;
	}

	public addItemAtLeft(value: TanoshiLinkModel): TanoshiNavigationModel {
		this._itemsAtLeft = [...this._itemsAtLeft, value];
		return this;
	}

	get itemsAtCenter(): Array<TanoshiLinkModel> {
		return this._itemsAtCenter;
	}

	public setItemsAtCenter(value: Array<TanoshiLinkModel>): TanoshiNavigationModel {
		this._itemsAtCenter = value;
		return this;
	}

	public addItemAtCenter(value: TanoshiLinkModel): TanoshiNavigationModel {
		this._itemsAtCenter = [...this._itemsAtCenter, value];
		return this;
	}

	get itemsAtRight(): Array<TanoshiLinkModel> {
		return this._itemsAtRight;
	}

	public setItemsAtRight(value: Array<TanoshiLinkModel>): TanoshiNavigationModel {
		this._itemsAtRight = value;
		return this;
	}

	public addItemAtRight(value: TanoshiLinkModel): TanoshiNavigationModel {
		this._itemsAtRight = [...this._itemsAtRight, value];
		return this;
	}


	get orientation(): string {
		return this._orientation;
	}

	public setOrientation(value: NAVIGATION_ORIENTATIONS): TanoshiNavigationModel {
		this._orientation = value;
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
