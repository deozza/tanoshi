import { THEMES } from '$lib/enums';
import type { TanoshiNavigationLinkModel } from '$lib/types/Types';

export default class TanoshiDesktopNavigationModel {
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

	public setItemsAtLeft(value: Array<TanoshiNavigationLinkModel>): TanoshiDesktopNavigationModel {
		this._itemsAtLeft = value;
		return this;
	}

	public addItemAtLeft(value: TanoshiNavigationLinkModel): TanoshiDesktopNavigationModel {
		this._itemsAtLeft = [...this._itemsAtLeft, value];
		return this;
	}

	get itemsAtCenter(): Array<TanoshiNavigationLinkModel> {
		return this._itemsAtCenter;
	}

	public setItemsAtCenter(value: Array<TanoshiNavigationLinkModel>): TanoshiDesktopNavigationModel {
		this._itemsAtCenter = value;
		return this;
	}

	public addItemAtCenter(value: TanoshiNavigationLinkModel): TanoshiDesktopNavigationModel {
		this._itemsAtCenter = [...this._itemsAtCenter, value];
		return this;
	}

	get itemsAtRight(): Array<TanoshiNavigationLinkModel> {
		return this._itemsAtRight;
	}

	public setItemsAtRight(value: Array<TanoshiNavigationLinkModel>): TanoshiDesktopNavigationModel {
		this._itemsAtRight = value;
		return this;
	}

	public addItemAtRight(value: TanoshiNavigationLinkModel): TanoshiDesktopNavigationModel {
		this._itemsAtRight = [...this._itemsAtRight, value];
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiDesktopNavigationModel {
		this._theme = value;
		return this;
	}
}
