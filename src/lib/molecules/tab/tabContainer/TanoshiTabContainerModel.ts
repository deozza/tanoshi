import { THEMES } from "$lib/enums";
import type TanoshiTabModel from "../tabTitle/TanoshiTabTitleModel";
import ThemeError from "$lib/errors/ThemeError";

export default class TanoshiTabContainerModel {
    private _theme!: string;
    private _currentTabTheme!: string;
    private _tabs!: TanoshiTabModel[];
    private _isSideBar: boolean = false;

    constructor(theme: THEMES = THEMES.Transparent, currentTabTheme: THEMES = THEMES.Primary) {
        this.setTheme(theme);
        this.setCurrentTabTheme(currentTabTheme);
        this._tabs = [];
    }

    get theme(): string {
        return this._theme;
    }

    public setTheme(value: THEMES): TanoshiTabContainerModel {
        this._theme = value;
        return this;
    }

    get currentTabTheme(): string {
        return this._currentTabTheme;   
    }

    public setCurrentTabTheme(value: THEMES): TanoshiTabContainerModel {
        if(value === this._theme){
            throw new ThemeError('the currentTabTheme could not have the same value as theme');
        }
        this._currentTabTheme = value;
        return this;
    }

    get tabs(): Array<TanoshiTabModel> {
        return this._tabs;
    }

    public setTabs(value: Array<TanoshiTabModel>): TanoshiTabContainerModel {
        this._tabs = value;
        return this;
    }

    public addTab(value: TanoshiTabModel): TanoshiTabContainerModel {
        this._tabs.push(value);
        return this;
    }

    get isSideBar(): boolean {
        return this._isSideBar;
    }

    public setIsSideBar(value: boolean): TanoshiTabContainerModel {
        this._isSideBar = value;
        return this;
    }
}