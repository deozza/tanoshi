import type { TanoshiLinkModel } from "$atoms";
import type TanoshiLinkAsButtonModel from "$molecules/link/TanoshiLinkAsButon/TanoshiLinkAsButtonModel";
import type TanoshiLinkAsImageModel from "$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImageModel";
import type { ComponentType } from "svelte";
import type TanoshiLinkAsDropdownModel from "../molecules/link/TanoshiLinkAsDropdown/TanoshiLinkAsDropdownModel";

export type TanoshiGlobalLinkModel = TanoshiLinkModel | TanoshiLinkAsButtonModel | TanoshiLinkAsImageModel | TanoshiLinkAsDropdownModel;

export type TanoshiNavigationLinkModel = {
    link: TanoshiGlobalLinkModel,
    component: ComponentType,
}