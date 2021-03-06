export default class TanoshiButtonModel {
	private _content: string|null = null
	private _theme: string|null = null
	private _type: string|null = null
	private _size: string|null = null
	private _isDisabled: boolean = false
	private _isOutlined: boolean= false

	public constructor(content: string) {
		this.setContent(content)
		this.setTheme('primary')
		this.setType('button')
		this.setSize('md')
	}

	get content(): string {
		return this._content!;
	}

	public setContent(value: string): TanoshiButtonModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiButtonModel {
		this._theme = value;
		return this
	}

	get type(): string {
		return this._type!;
	}

	public setType(value: string): TanoshiButtonModel {
		this._type = value;
		return this
	}

	get size(): string {
		return this._size!;
	}

	public setSize(value: string): TanoshiButtonModel {
		this._size = value;
		return this
	}


	get isDisabled(): boolean {
		return this._isDisabled;
	}

	public setIsDisabled(value: boolean): TanoshiButtonModel {
		this._isDisabled = value;
		return this
	}

	get isOutlined(): boolean {
		return this._isOutlined;
	}

	public setIsOutlined(value: boolean): TanoshiButtonModel {
		this._isOutlined = value;
		return this
	}
}