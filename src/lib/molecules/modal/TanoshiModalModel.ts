import type { TanoshiButtonModel } from "$atoms";
import ModalOpenButtonTypeError from "$lib/errors/ModalOpenButtonTypeError";

export default class TanoshiModalModel {
    private _openButton!: TanoshiButtonModel

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
}    