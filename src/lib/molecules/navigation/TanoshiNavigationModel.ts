import type TanoshiLinkModel from "$lib/atoms/link/TanoshiLinkModel";

export default class TanoshiNavigationModel {
    private _items: Array<TanoshiLinkModel> = []
    private _orientation: string = "horizontal"
    private _theme: string = "primary"

    get items(): Array<TanoshiLinkModel> {
		return this._items;
	}

	public setItems(value: Array<TanoshiLinkModel>): TanoshiNavigationModel {
		this._items = value;
		return this
	}

    public addItem(value: TanoshiLinkModel): TanoshiNavigationModel {
		this._items = [...this._items, value];
		return this
	}

    get orientation(): string {
		return this._orientation;
	}

	public setOrientation(value: string): TanoshiNavigationModel {
		this._orientation = value;
		return this
	}

    get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiNavigationModel {
		this._theme = value;
		return this
	}
}