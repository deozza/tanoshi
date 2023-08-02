import { WIDTHS } from "$lib/enums";
import { HEIGHTS, IMAGE_FILTERS, IMAGE_SHAPES } from "../../enums/Themes";

export default class TanoshiImageModel {
	private _content!: string;
	private _alt!: string;
	private _filter: string = '';
	private _shape: string = '';
	private _width: string = WIDTHS.WAuto;
	private _height: string = HEIGHTS.H100PRCT;

	constructor(content: string, alt: string) {
		this.setContent(content);
		this.setAlt(alt);
	}

	get content(): string {
		return this._content;
	}

	public setContent(value: string): TanoshiImageModel {
		if (value.length <= 0) {
			throw new Error();
		}

		this._content = value;
		return this;
	}

	get alt(): string {
		return this._alt;
	}

	public setAlt(value: string): TanoshiImageModel {
		if (value.length <= 0) {
			throw new Error();
		}

		this._alt = value;
		return this;
	}


	get filter(): string {
		return this._filter!;
	}

	public setFilter(value: IMAGE_FILTERS): TanoshiImageModel {
		this._filter = value;
		return this;
	}

	get shape(): string {
		return this._shape!;
	}

	public setShape(value: IMAGE_SHAPES): TanoshiImageModel {
		this._shape = value;
		return this;
	}

	get width(): string {
		return this._width!;
	}

	public setWidth(value: WIDTHS): TanoshiImageModel {
		this._width = value;
		return this;
	}

	public setCustomWidth(value: string): TanoshiImageModel {
		console.warn('Custom width is not recommended. Use setWidth() instead. If you continue, make sure the value you set exists as a css class in your styles.');
		this._width = value;
		return this;
	}

	get height(): string {
		return this._height!;
	}

	public setHeight(value: HEIGHTS): TanoshiImageModel {
		this._height = value;
		return this;
	}

	public setCustomHeight(value: string): TanoshiImageModel {
		console.warn('Custom height is not recommended. Use setHeight() instead. If you continue, make sure the value you set exists as a css class in your styles.');
		this._height = value;
		return this;
	}

	public setCircle(value: string): TanoshiImageModel {
		this.setShape(IMAGE_SHAPE.Circled);
		this.setCustomWidth(value);
		this.setCustomHeight(value);
		return this;
	}
}
