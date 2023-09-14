import { getThemeEnumKeyByEnumValue, type THEMES } from "$lib/enums";
import type TanoshiTabContainerModel from "../tabContainer/TanoshiTabContainerModel";

export default class TanoshiTabTitleModel {
    private _content!: string;
    private _theme!: string;
    private _activeTheme!: string;

    constructor(content: string, tabContainerModel: TanoshiTabContainerModel) {
        this.setContent(content);
        this.setTheme(getThemeEnumKeyByEnumValue(tabContainerModel.theme));
        this.setActiveTheme(getThemeEnumKeyByEnumValue(tabContainerModel.currentTabTheme));
    }

    get content(): string {
        return this._content;
    }

    public setContent(value: string): TanoshiTabTitleModel {
        this._content = value;
        return this;
    }

    get theme(): string {
        return this._theme;
    }

    public setTheme(value: THEMES): TanoshiTabTitleModel {
        this._theme = value;
        return this;
    }

    get activeTheme(): string {
        return this._activeTheme;
    }

    public setActiveTheme(value: THEMES): TanoshiTabTitleModel {
        this._activeTheme = value;
        return this;
    }

}