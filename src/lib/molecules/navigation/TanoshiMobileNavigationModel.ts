import { THEMES } from '$lib/enums';
import type { TanoshiNavigationLinkModel } from '$lib/types/Types';

export default class TanoshiMobileNavigationModel {
	private _itemsWhenClosed: Array<TanoshiNavigationLinkModel> = [];
	private _itemsWhenOpened: Array<TanoshiNavigationLinkModel> = [];
	private _theme!: string;

	public constructor() {
		this.setTheme(THEMES.Primary);
	}

	get itemsWhenClosed(): Array<TanoshiNavigationLinkModel> {
		return this._itemsWhenClosed;
	}

	public setItemsWhenClosed(value: Array<TanoshiNavigationLinkModel>): TanoshiMobileNavigationModel {
		this._itemsWhenClosed = value;
		return this;
	}

	public addItemAtWhenClosed(value: TanoshiNavigationLinkModel): TanoshiMobileNavigationModel {
		this._itemsWhenClosed = [...this._itemsWhenClosed, value];
		return this;
	}

	get itemsWhenOpened(): Array<TanoshiNavigationLinkModel> {
		return this._itemsWhenOpened;
	}

	public setItemsWhenOpened(value: Array<TanoshiNavigationLinkModel>): TanoshiMobileNavigationModel {
		this._itemsWhenOpened = value;
		return this;
	}

	public addItemAtWhenOpened(value: TanoshiNavigationLinkModel): TanoshiMobileNavigationModel {
		this._itemsWhenOpened = [...this._itemsWhenOpened, value];
		return this;
	}
	
	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiMobileNavigationModel {
		this._theme = value;
		return this;
	}
}
