import type { TanoshiButtonModel, TanoshiHeaderModel } from "$atoms";
import ModalOpenButtonTypeError from "$lib/errors/ModalOpenButtonTypeError";
import type TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";

export default class TanoshiModalModel {
    private _openButton!: TanoshiButtonModel
    private _containerModel!: TanoshiContainerModel
    private _headerModel: TanoshiHeaderModel | null = null
    private _footerContainerModel: TanoshiContainerModel | null = null
    private _required: boolean = false

    constructor(openButton: TanoshiButtonModel, containerModel: TanoshiContainerModel) {
        this.setButton(openButton) 
        this.setContainer(containerModel)
    }

    get openButton(): TanoshiButtonModel {
        return this._openButton
    }

    public setButton(value: TanoshiButtonModel): TanoshiModalModel {
        if(value.type !== "button") {
            throw new ModalOpenButtonTypeError("openButton must be button type")
        }
        
        this._openButton = value
        return this
    }

    get containerModel(): TanoshiContainerModel {
        return this._containerModel
    }

    public setContainer(value: TanoshiContainerModel): TanoshiModalModel {
        this._containerModel = value
        return this
    }

    get headerModel(): TanoshiHeaderModel | null {
        return this._headerModel
    }

    public setHeader(headerModel: TanoshiHeaderModel): TanoshiModalModel {
        this._headerModel = headerModel
        return this
    }

    get footerContainerModel(): TanoshiContainerModel | null {
        return this._footerContainerModel
    }

    public setFooterContainerModel(value: TanoshiContainerModel): TanoshiModalModel {
        this._footerContainerModel = value
        return this
    }

    get required(): boolean {
        return this._required
    }

    public setRequired(value: boolean): TanoshiModalModel {
        this._required = value
        return this
    }
}    