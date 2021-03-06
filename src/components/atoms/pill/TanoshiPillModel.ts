export default class TanoshiPillModel {

	private _content: string|null = null;
	private _theme: string|null = null;
	private _isOutlined: boolean = false
	private _size: string|null = null

	constructor(content: string) {
		this.setContent(content);
		this.setTheme('primary');
		this.setSize('md')
	}

	get content(): string {
		return this._content!;
	}

	public setContent(value: string): TanoshiPillModel {
		this._content = value;
		return this
	}

	get style(): string {
		return this._theme!;
	}

	public setTheme(theme: string): TanoshiPillModel {

		this._theme = theme;
		return this;
	}

	get isOutlined(): boolean {
		return this._isOutlined;
	}

	public setIsOutlined(value: boolean): TanoshiPillModel {
		this._isOutlined = value;
		return this
	}

	get size(): string {
		return this._size!;
	}

	public setSize(value: string): TanoshiPillModel {
		this._size = value;
		return this
	}
}