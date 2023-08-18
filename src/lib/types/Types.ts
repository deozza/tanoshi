import type { TanoshiLinkModel } from "$atoms";
import type TanoshiLinkAsButtonModel from "$molecules/link/TanoshiLinkAsButon/TanoshiLinkAsButtonModel";
import type TanoshiLinkAsImageModel from "$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImageModel";
import type { ComponentType } from "svelte";
import type TanoshiLinkAsNavbarDropdownModel from "../molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel";

export type TanoshiGlobalLinkModel = TanoshiLinkModel | TanoshiLinkAsButtonModel | TanoshiLinkAsImageModel | TanoshiLinkAsNavbarDropdownModel;

export type TanoshiNavigationLinkModel = {
    link: TanoshiGlobalLinkModel,
    component: ComponentType,
}