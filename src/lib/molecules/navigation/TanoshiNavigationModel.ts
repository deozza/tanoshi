import type TanoshiLinkModel from '$lib/atoms/link/TanoshiLinkModel';

export default class TanoshiNavigationModel {
	private _itemsAtLeft: Array<TanoshiLinkModel> = [];
	private _itemsAtCenter: Array<TanoshiLinkModel> = [];
	private _itemsAtRight: Array<TanoshiLinkModel> = [];
	private _orientation!: string;
	private _theme!: string;

	readonly EXPECTED_THEMES: object = {
		dark: 'dark',
		light: 'light',
		transparent: 'transparent',
		primary: 'primary',
		secondary: 'secondary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
		info: 'info'
	};

	readonly EXPECTED_ORIENTATIONS: object = {
		vertical: 'vertical',
		horizontal: 'horizontal'
	};

	public constructor() {
		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.primary);

		// @ts-ignore
		this.setOrientation(this.EXPECTED_ORIENTATIONS.horizontal);
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

	public setOrientation(value: string): TanoshiNavigationModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_ORIENTATIONS, value) === false) {
			throw new Error();
		}

		this._orientation = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiNavigationModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}
}
