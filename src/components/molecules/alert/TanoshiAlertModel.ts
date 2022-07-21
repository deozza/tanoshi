export default class TanoshiAlertModel {

	private _title: string
	private _content: string
	private _theme: string
	private _size: string
	private _visible: boolean

	public constructor(content: string, title: string) {
		this._title = title
		this._content = content
		this._theme = 'primary'
		this._size = 'block'
		this._visible = true
	}

	get title(): string {
		return this._title;
	}

	public setTitle(value: string): TanoshiAlertModel {
		this._title = value;
		return this
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiAlertModel {
		this._content = value;
		return this
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: string): TanoshiAlertModel {
		this._theme = value;
		return this
	}


	get size(): string {
		return this._size;
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