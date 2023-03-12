export default class TanoshiButtonModel {
	private _content!: string;
	private _theme!: string;
	private _type!: string;
	private _size!: string;
	private _isDisabled: boolean = false;
	private _isOutlined: boolean = false;

	readonly EXPECTED_THEMES: object = {
		primary: 'primary',
		secondary: 'secondary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
		info: 'info',
		dark: 'dark',
		light: 'light'
	};

	readonly EXPECTED_SIZES: object = {
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		block: 'block'
	};

	readonly EXPECTED_TYPES: object = {
		button: 'button',
		submit: 'submit',
		reset: 'reset'
	};

	public constructor(content: string) {
		this.setContent(content);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.primary);

		// @ts-ignore
		this.setType(this.EXPECTED_TYPES.button);

		// @ts-ignore
		this.setSize(this.EXPECTED_SIZES.md);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiButtonModel {
		this._content = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiButtonModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get type(): string {
		return this._type;
	}

	public setType(value: string): TanoshiButtonModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_TYPES, value) === false) {
			throw new Error();
		}
		this._type = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: string): TanoshiButtonModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_SIZES, value) === false) {
			throw new Error();
		}
		this._size = value;
		return this;
	}

	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(value: boolean): TanoshiButtonModel {
		this._isDisabled = value;
		return this;
	}

	get isOutlined(): boolean {
		return this._isOutlined;
	}

	public setIsOutlined(value: boolean): TanoshiButtonModel {
		this._isOutlined = value;
		return this;
	}
}
