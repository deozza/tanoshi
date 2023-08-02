import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, HEIGHTS, THEMES, WIDTHS } from "$lib/enums";

export default class TanoshiContainerModel {
	private _theme!: string;
	private _borders!: string;
	private _width!: string;
	private _height!: string;
	private _backgroundImage: string | null = null;
	private _desktopOrientation!: string;
	private _mobileOrientation!: string;
	private _desktopSpacing!: string;
	private _mobileSpacing!: string;
	private _itemsAlignment!: string;

	public constructor(desktopOrientation: CONTAINER_ORIENTATIONS) {
		this.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start);
		this.setDesktopOrientation(desktopOrientation);
		this.setMobileOrientation(desktopOrientation);
		this.setTheme(THEMES.Transparent);
		this.setBorders(CONTAINER_BORDERS.None);
		this.setHeight(HEIGHTS.H100PRCT);
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiContainerModel {
		this._theme = value;
		return this;
	}

	get borders(): string {
		return this._borders;
	}

	public setBorders(value: CONTAINER_BORDERS): TanoshiContainerModel {
		this._borders = value;
		return this;
	}
	
	get width(): string {
		return this._width;
	}

	public setWidth(value: WIDTHS): TanoshiContainerModel {
		this._width = value;
		return this;
	}

	get height(): string {
		return this._height;
	}

	public setHeight(value: HEIGHTS): TanoshiContainerModel {
		this._height = value;
		return this;
	}

	get backgroundImage(): string | null {
		return this._backgroundImage;
	}

	public setBackgroundImage(value: string): TanoshiContainerModel {
		this._theme = '';
		this._backgroundImage = value;
		return this;
	}

	get desktopOrientation(): string {
		return this._desktopOrientation;
	}

	public setDesktopOrientation(value: CONTAINER_ORIENTATIONS): TanoshiContainerModel {
		this._desktopOrientation = value;
		return this;
	}

	get mobileOrientation(): string {
		return this._mobileOrientation;
	}

	public setMobileOrientation(value: CONTAINER_ORIENTATIONS): TanoshiContainerModel {
		this._mobileOrientation = value;
		return this;
	}

	get desktopSpacing(): string {
		return this._desktopSpacing;
	}

	public setDesktopSpacing(value: CONTAINER_ITEMS_SPACING): TanoshiContainerModel {
		this._desktopSpacing = value;
		return this;
	}

	get itemsAlignment(): string {
		return this._itemsAlignment;
	}

	public setItemsAlignment(value: CONTAINER_ITEMS_ALIGNMENTS): TanoshiContainerModel {
		this._itemsAlignment = value;
		return this;
	}

	get mobileSpacing(): string {
		return this._mobileSpacing;
	}

	public setMobileSpacing(value: CONTAINER_ITEMS_SPACING): TanoshiContainerModel {
		this._mobileSpacing = value;
		return this;
	}
}
