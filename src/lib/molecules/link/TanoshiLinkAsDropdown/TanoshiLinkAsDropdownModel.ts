
import type { TanoshiLinkModel } from "$atoms";
import { THEMES } from "$lib/enums";

export default class TanoshiLinkAsDropdownModel {
	private _links!: Array<TanoshiLinkModel>;
	private _theme!: string;

	constructor(links: Array<TanoshiLinkModel>) {
		this.setLinks(links);
		this.setTheme(THEMES.Black);
	}

	get links(): Array<TanoshiLinkModel> {
		return this._links;
	}

	public setLinks(value: Array<TanoshiLinkModel>): TanoshiLinkAsDropdownModel {
		this._links = value;
		return this;
	}

	get theme(): string {
		return this._theme;
	}

	public setTheme(value: THEMES): TanoshiLinkAsDropdownModel {
		this._theme = value;
		return this;
	}
}
