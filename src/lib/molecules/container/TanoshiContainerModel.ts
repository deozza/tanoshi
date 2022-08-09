export default class TanoshiContainerModel {
	private _theme: string = 'transparent';
	private _size: string = 'w-full';
	private _backgroundImage: string | null = null;
	private _desktopOrientation!: string;
	private _mobileOrientation!: string;
	private _desktopSpacing: string = 'centered';
	private _mobileSpacing: string = 'centered';

	public constructor(desktopOrientation: string) {
		this.setDesktopOrientation(desktopOrientation);
		this.setMobileOrientation(desktopOrientation);
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiContainerModel {
		this._theme = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: string): TanoshiContainerModel {
		this._size = value;
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

	public setDesktopOrientation(value: string): TanoshiContainerModel {
		this._desktopOrientation = value;
		return this;
	}

	get mobileOrientation(): string {
		return this._mobileOrientation;
	}

	public setMobileOrientation(value: string): TanoshiContainerModel {
		this._mobileOrientation = value;
		return this;
	}

	get desktopSpacing(): string {
		return this._desktopSpacing;
	}

	public setDesktopSpacing(value: string): TanoshiContainerModel {
		this._desktopSpacing = value;
		return this;
	}

	get mobileSpacing(): string {
		return this._mobileSpacing;
	}

	public setMobileSpacing(value: string): TanoshiContainerModel {
		this._mobileSpacing = value;
		return this;
	}
}
