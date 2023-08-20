import type { ComponentType } from "svelte";
import type { TanoshiLabelModel, TanoshiLinkModel, TanoshiTextInputModel, TanoshiNumberInputModel } from "$atoms";
import type TanoshiLinkAsNavbarDropdownModel from "../molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel";
import type TanoshiLinkAsButtonModel from "$molecules/link/TanoshiLinkAsButton/TanoshiLinkAsButtonModel";
import type TanoshiLinkAsImageModel from "$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImageModel";

export type TanoshiGlobalLinkModel = TanoshiLinkModel | TanoshiLinkAsButtonModel | TanoshiLinkAsImageModel | TanoshiLinkAsNavbarDropdownModel;

export type TanoshiNavigationLinkModel = {
    link: TanoshiGlobalLinkModel,
    component: ComponentType,
}

export type TanoshiInputModel = TanoshiTextInputModel | TanoshiNumberInputModel