<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiNavigationModel from '$molecules/navigation/TanoshiNavigationModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';

	import '../app.css';
	import { THEMES } from '$lib';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiLinkAsDropdownModel from '$molecules/link/TanoshiLinkAsDropdown/TanoshiLinkAsDropdownModel';
	import TanoshiLinkAsDropdown from '$molecules/link/TanoshiLinkAsDropdown/TanoshiLinkAsDropdown.svelte';

	const linkPrimary: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.Danger);
	const linkSecondary: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.Danger);
	const linkSuccess: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.Danger);

	const links: Array<TanoshiLinkModel> = [
		linkPrimary, linkSecondary, linkSuccess
	];

	const dropdownLinkModel: TanoshiLinkAsDropdownModel = new TanoshiLinkAsDropdownModel(links).setTheme(THEMES.Danger);

	const navbarItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: dropdownLinkModel,
			component: TanoshiLinkAsDropdown
		},
		{
			link: new TanoshiLinkModel('Typography').setTheme(THEMES.Danger).setLink('/typography'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Buttons').setTheme(THEMES.Danger).setLink('/buttons'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Pills').setTheme(THEMES.Danger).setLink('/pills'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Forms').setTheme(THEMES.Danger).setLink('/forms'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Images').setTheme(THEMES.Danger).setLink('/images'),
			component: TanoshiLink

		},
		{
			link: new TanoshiLinkModel('Links').setTheme(THEMES.Danger).setLink('/links'),
			component: TanoshiLink
		}
	];

	const logoNavbarModel: TanoshiNavigationLinkModel = {
		link: new TanoshiLinkModel('Tanoshi').setTheme(THEMES.Danger).setLink('/'),
		component: TanoshiLink
	};

	let positionY: number;
	let divHeight: number;

	$: tanoshiDesktopNavigationModel = new TanoshiNavigationModel()
		.setTheme(positionY > divHeight ? THEMES.Black : THEMES.Transparent)
		.setItemsAtRight(navbarItemModels)
		.addItemAtLeft(logoNavbarModel)

	const tanoshiMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtLeft([logoNavbarModel])
		.setItemsAtCenter(navbarItemModels);

</script>

<svelte:window bind:scrollY={positionY} />

<div class="hero-background" bind:clientHeight={divHeight}>
	<TanoshiNavigation bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} {tanoshiMobileNavigationModel}/>
</div>

<main class="relative">
	<slot />
</main>

<style>
 div.hero-background {
	 background-image: url('https://wallpapers.com/images/featured/kawaii-cat-7va4ri70il24d2u7.jpg');
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 100vh;
	 width: 100vw;
	 top: 0;
	 left: 0;
 }

</style>
