export default class TanoshiTabModel {
    private _title!: string;
    private _active!: boolean;

    constructor(title: string) {
        this.setTitle(title);
        this.setActive(false);
    }

    get title(): string {
        return this._title;
    }

    public setTitle(value: string): TanoshiTabModel {
        this._title = value;
        return this;
    }

    get active(): boolean {
        return this._active;
    }

    public setActive(value: boolean): TanoshiTabModel {
        this._active = value;
        return this;
    }
}