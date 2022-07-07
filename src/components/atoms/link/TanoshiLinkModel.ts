export default class TanoshiLinkModel {
	private _content: string;
	private _link: string;
	private _isInternal: string;

	constructor(content: string) {
		this.setContent(content);
		this.setLink('#');
		this.setIsInternal(true);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiLinkModel {
		this._content = value;
		return this
	}

	get link(): string {
		return this._link;
	}

	public setLink(value: string): TanoshiLinkModel {
		this._link = value;
		return this
	}


	get isInternal(): string {
		return this._isInternal;
	}

	public setIsInternal(value: boolean): TanoshiLinkModel {
		if(true === value) {
			this._isInternal = '_self'
		} else {
			this._isInternal = '_blank';
		}

		return this
	}
}