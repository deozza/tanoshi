import type TanoshiLinkModel from '$lib/atoms/link/TanoshiLinkModel';

export default class TanoshiNavigationModel {
	private _items: Array<TanoshiLinkModel> = [];
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

	get items(): Array<TanoshiLinkModel> {
		return this._items;
	}

	public setItems(value: Array<TanoshiLinkModel>): TanoshiNavigationModel {
		this._items = value;
		return this;
	}

	public addItem(value: TanoshiLinkModel): TanoshiNavigationModel {
		this._items = [...this._items, value];
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
