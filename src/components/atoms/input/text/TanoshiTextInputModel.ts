import TanoshiInputModel from "../TanoshitInputModel";

export default class TanoshiTextInputModel extends TanoshiInputModel {
    private _minLength: number | null = null
    private _maxLength: number | null = null
    private _placeholder: string | null = null

    constructor(name: string) {
        super(name)
        this.setType('text')
    }

    get minLength(): number | null {
        return this._minLength
    }

    setMinLength(value: number): TanoshiTextInputModel {
        this._minLength = value;
        return this;
    }

    get maxLength(): number | null {
        return this._maxLength
    }

    setMaxLength(value: number): TanoshiTextInputModel {
        this._maxLength = value;
        return this;
    }

    get placeholder(): string | null {
        return this._placeholder
    }

    setPlaceholder(value: string): TanoshiTextInputModel {
        this._placeholder = value;
        return this;
    }
}