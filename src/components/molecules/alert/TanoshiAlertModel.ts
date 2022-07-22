export default class TanoshiAlertModel {

	private _title: string|null = null
	private _content: string|null = null
	private _theme: string|null = null
	private _size: string|null = null
	private _visible: boolean = true

	public constructor(content: string, title: string) {
		this.setTitle(title)
		this.setContent(content)
		this.setTheme('primary')
		this.setSize('w-full')
	}

	get title(): string {
		return this._title!;
	}

	public setTitle(value: string): TanoshiAlertModel {
		this._title = value;
		return this
	}

	get content(): string {
		return this._content!;
	}

	public setContent(value: string): TanoshiAlertModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme!;
	}

	public setTheme(value: string): TanoshiAlertModel {
		this._theme = value;
		return this
	}


	get size(): string {
		return this._size!;
	}

	public setSize(value: string): TanoshiAlertModel {
		this._size = value;
		return this
	}

	get visible(): boolean {
		return this._visible;
	}

	public setVisible(value: boolean): TanoshiAlertModel {
		this._visible = value;
		return this
	}
}