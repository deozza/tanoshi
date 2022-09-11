export default class TanoshiAlertModel {
	private _title!: string;
	private _content!: string;
	private _theme!: string;
	private _size!: string;
	private _visible: boolean = true;

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
		lg: 'lg',
		block: 'block'
	};

	public constructor(title: string, content: string) {
		this.setTitle(title);
		this.setContent(content);

		// @ts-ignore
		this.setTheme(this.EXPECTED_THEMES.primary);

		// @ts-ignore
		this.setSize(this.EXPECTED_SIZES.block);
	}

	get title(): string {
		return this._title;
	}

	public setTitle(value: string): TanoshiAlertModel {
		this._title = value;
		return this;
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiAlertModel {
		this._content = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiAlertModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_THEMES, value) === false) {
			throw new Error();
		}

		this._theme = value;
		return this;
	}

	get size(): string {
		return this._size;
	}

	public setSize(value: string): TanoshiAlertModel {
		if (Object.prototype.hasOwnProperty.call(this.EXPECTED_SIZES, value) === false) {
			throw new Error();
		}
		this._size = value;
		return this;
	}

	get visible(): boolean {
		return this._visible;
	}

	public setVisible(value: boolean): TanoshiAlertModel {
		this._visible = value;
		return this;
	}
}
