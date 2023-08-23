import type { TanoshiButtonModel, TanoshiHeaderModel } from "$atoms";
import ModalOpenButtonTypeError from "$lib/errors/ModalOpenButtonTypeError";

export default class TanoshiModalModel {
    private _openButton!: TanoshiButtonModel
    private _headerModel: TanoshiHeaderModel | null = null

    constructor(openButton: TanoshiButtonModel) {
        this.setButton(openButton) 
    }

    get openButton(): TanoshiButtonModel {
        return this._openButton
    }

    public setButton(openButton: TanoshiButtonModel): TanoshiModalModel {
        if(openButton.type !== "button") {
            throw new ModalOpenButtonTypeError("openButton must be button type")
        }
        
        this._openButton = openButton
        return this
    }

    get headerModel(): TanoshiHeaderModel | null {
        return this._headerModel
    }

    public setHeader(headerModel: TanoshiHeaderModel): TanoshiModalModel {
        this._headerModel = headerModel
        return this
    }
}    