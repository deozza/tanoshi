import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, HEIGHTS, THEMES, WIDTHS } from "$lib/enums";

export default class TanoshiContainerModel {
	private _backgroundTheme!: string;
	private _borderTheme!: string;
	private _borderShape!: string;
	private _width!: string;
	private _customWidth: string = '';
	private _height!: string;
	private _customHeight: string = '';
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
		this.setBackgroundTheme(THEMES.Transparent);
		this.setBorderTheme(THEMES.Transparent);
		this.setBorderShape(CONTAINER_BORDERS.None);
		this.setHeight(HEIGHTS.H100PRCT);
		this.setWidth(WIDTHS.W12);
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiContainerModel {
		this._backgroundTheme
		return this;
	}

	get borderTheme(): string {
		return this._borderTheme;
	}

	public setBorderTheme(value: THEMES): TanoshiContainerModel {
		this._borderTheme
		return this;
	}

	get borderShape(): string {
		return this._borderShape;
	}

	public setBorderShape(value: CONTAINER_BORDERS): TanoshiContainerModel {
		this._borderShape = value;
		return this;
	}
	
	get width(): string {
		return this._width;
	}

	public setWidth(value: WIDTHS): TanoshiContainerModel {
		this._width = value;
		return this;
	}

	get customWidth(): string {
		return this._customWidth;
	}

	public setCustomWidth(value: string): TanoshiContainerModel {
		this._customWidth = value;
		return this;
	}

	get height(): string {
		return this._height;
	}

	public setHeight(value: HEIGHTS): TanoshiContainerModel {
		this._height = value;
		return this;
	}

	get customHeight(): string {
		return this._customHeight;
	}

	public setCustomHeight(value: string): TanoshiContainerModel {
		this._customHeight = value;
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
