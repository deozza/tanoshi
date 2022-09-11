export default class TanoshiPillModel {
	private _content!: string;
	private _theme!: string;
	private _isOutlined: boolean = false;
	private _size!: string;

	readonly EXPECTED_THEMES: object = {
		primary: 'primary',
		secondary: 'secondary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
		info: 'info'
	};

	readonly EXPECTED_SIZES: object = {
		sm: 'sm',
		md: 'md',
		lg: 'lg'
	};

	constructor(content: string) {
		this.setContent(content);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.primary);

		// @ts-ignore
		this.setSize(this.EXPECTED_SIZES.md);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiPillModel {
		this._content = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiPillModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get isOutlined(): boolean {
		return this._isOutlined;
	}

	public setIsOutlined(value: boolean): TanoshiPillModel {
		this._isOutlined = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: string): TanoshiPillModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_SIZES, value) === false) {
			throw new Error();
		}

		this._size = value;
		return this;
	}
}
