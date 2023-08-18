<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiNavigationModel from '$molecules/navigation/TanoshiNavigationModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';

	import '../app.css';
	import { THEMES } from '$lib';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiLinkAsNavbarDropdownModel from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';

	let positionY: number;
	let divHeight: number;

	const dropdownTitle: TanoshiLinkModel = new TanoshiLinkModel('Dropdown').setTheme(THEMES.Danger);
	const linkPrimary: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.Danger);
	const linkSecondary: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.Danger);
	const linkSuccess: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.Danger);


	const dropdownItems: Array<TanoshiNavigationLinkModel> = [
		{
			link: linkPrimary,
			component: TanoshiLink
		},
		{
			link: linkSecondary,
			component: TanoshiLink
		},
		{
			link: linkSuccess,
			component: TanoshiLink
		}
	];

	const dropdownLink : TanoshiLinkAsNavbarDropdownModel = new TanoshiLinkAsNavbarDropdownModel(dropdownTitle)
		.setLinks(dropdownItems)
		.setBackgroundTheme(THEMES.Secondary)

	const navbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: dropdownLink,
			component: TanoshiLinkAsNavbarDropdown
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

	const logoNavbarModel: Array<TanoshiNavigationLinkModel> = [
		{
			link: new TanoshiLinkModel('Tanoshi').setTheme(THEMES.Danger).setLink('/'),
			component: TanoshiLink
		}
	]



	$: tanoshiDesktopNavigationModel = new TanoshiNavigationModel()
		.setTheme(positionY > (divHeight - 192) ? THEMES.Black : THEMES.Transparent)
		.setItemsAtRight(navbarRightItemModels)
		.setItemsAtCenter(logoNavbarModel)

	const tanoshiMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtLeft(logoNavbarModel)
		.setItemsAtCenter(navbarRightItemModels);

</script>

<svelte:window bind:scrollY={positionY} />

<div class="hero-background" bind:clientHeight={divHeight}>
	<TanoshiNavigation bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} {tanoshiMobileNavigationModel} />
</div>

<main class="relative">
	<slot />
</main>

<style style="css">
 div.hero-background {
	 background-image: url('https://wallpapers.com/images/featured/kawaii-cat-7va4ri70il24d2u7.jpg');
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 100vh;
	 top: 0;
	 left: 0;
 }

</style>
