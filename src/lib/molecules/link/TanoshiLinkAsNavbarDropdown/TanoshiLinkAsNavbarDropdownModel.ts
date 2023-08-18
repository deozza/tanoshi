
import type { TanoshiLinkModel } from "$atoms";
import { THEMES } from "$lib/enums";
import type { TanoshiNavigationLinkModel } from "$lib/types/Types";

export default class TanoshiLinkAsNavbarDropdownModel {
	private _linkTitle!: TanoshiLinkModel;
	private _links: Array<TanoshiNavigationLinkModel> = [];
	private _linksTheme!: string;
	private _backgroundTheme!: string;

	constructor(linkTitle: TanoshiLinkModel) {
		this.setLinkTitle(linkTitle);
		this.setLinks([]);
		this.setLinksTheme(THEMES.Black);
		this.setBackgroundTheme(THEMES.Transparent);
	}

	get linkTitle(): TanoshiLinkModel {
		return this._linkTitle;
	}

	public setLinkTitle(value: TanoshiLinkModel): TanoshiLinkAsNavbarDropdownModel {
		this._linkTitle = value;
		return this;
	}


	get links(): Array<TanoshiNavigationLinkModel> {
		return this._links;
	}

	public setLinks(value: Array<TanoshiNavigationLinkModel>): TanoshiLinkAsNavbarDropdownModel {
		this._links = value;
		return this;
	}

	public addLink(value: TanoshiNavigationLinkModel): TanoshiLinkAsNavbarDropdownModel {
		this._links = [...this._links, value];
		return this;
	}

	get linksTheme(): string {
		return this._linksTheme;
	}

	public setLinksTheme(value: THEMES): TanoshiLinkAsNavbarDropdownModel {
		this._linksTheme = value;
		return this;
	}

	get backgroundTheme(): string {
		return this._backgroundTheme;
	}
	
	public setBackgroundTheme(value: THEMES): TanoshiLinkAsNavbarDropdownModel {
		this._backgroundTheme = value;
		return this;
	}
}
