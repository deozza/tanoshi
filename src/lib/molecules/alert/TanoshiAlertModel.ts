import { BUTTON_SIZES, SIZES, THEMES, WIDTHS } from "$lib/enums";

export default class TanoshiAlertModel {
	private _title!: string;
	private _titleSize!: string;
	private _backroundTheme!: string;
	private _titleTheme!: string;
	private _visible: boolean = true;
	private _containerSize!: string;


	public constructor(title: string) {
		this.setTitle(title);
		this.setBackgroundTheme(THEMES.Primary);
		this.setTitleTheme(THEMES.Black);
		this.setTitleSize(SIZES.Xl);
		this.setContainerSize(WIDTHS.W12);
	}

	get title(): string {
		return this._title;
	}

	public setTitle(value: string): TanoshiAlertModel {
		this._title = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backroundTheme;
	}

	public setBackgroundTheme(value: THEMES): TanoshiAlertModel {
		this._backroundTheme = value;
		return this;
	}

	get titleTheme(): string {
		return this._titleTheme;
	}

	public setTitleTheme(value: THEMES): TanoshiAlertModel {
		this._titleTheme = value;
		return this;
	}

	get titleSize(): string {
		return this._titleSize;
	}

	public setTitleSize(value: SIZES): TanoshiAlertModel {
		this._titleSize = value;
		return this;
	}

	get containerSize(): string {
		return this._containerSize;
	}

	public setContainerSize(value: WIDTHS): TanoshiAlertModel {
		this._containerSize = value;
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
