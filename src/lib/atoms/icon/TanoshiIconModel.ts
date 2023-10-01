export default class TanoshiIconModel {
    private _icon!: string;
    private _height!: number;
    private _width!: number;
    private _color!: string;
    private _isSpinning: boolean = false;

    public constructor(icon: string) {
        this.setIcon(icon);
        this.setHeight(10);
        this.setWidth(10);
        this.setColor('#000000');
    }

    get icon(): string {
        return this._icon;
    }

    public setIcon(value: string): TanoshiIconModel {
        this._icon = value;
        return this;
    }

    get height(): number {
        return this._height;
    }

    public setHeight(value: number): TanoshiIconModel {
        this._height = value;
        return this;
    }

    get width(): number {
        return this._width;
    }

    public setWidth(value: number): TanoshiIconModel {
        this._width = value;
        return this;
    }

    get color(): string {
        return this._color;
    }

    public setColor(value: string): TanoshiIconModel {
        this._color = value;
        return this;
    }

    get isSpinning(): boolean {
        return this._isSpinning;
    }

    public setIsSpinning(value: boolean): TanoshiIconModel {
        this._isSpinning = value;
        return this;
    }
}
