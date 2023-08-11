<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiNavigationModel from '$molecules/navigation/TanoshiNavigationModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';

	import '../app.css';
	import { SIZES, THEMES } from '$lib';

	const navbarItemModels: Array<TanoshiLinkModel> = [
		new TanoshiLinkModel('Typography').setTheme(THEMES.Danger).setLink('/typography'),
		new TanoshiLinkModel('Buttons').setTheme(THEMES.Danger).setLink('/buttons'),
		new TanoshiLinkModel('Pills').setTheme(THEMES.Danger).setLink('/pills'),
		new TanoshiLinkModel('Forms').setTheme(THEMES.Danger).setLink('/forms'),
		new TanoshiLinkModel('Images').setTheme(THEMES.Danger).setLink('/images'),
		new TanoshiLinkModel('Links').setTheme(THEMES.Danger).setLink('/links'),
	];

	let positionY: number;
	let divHeight: number;

	$: tanoshiDesktopNavigationModel = new TanoshiNavigationModel()
		.setTheme(positionY > divHeight ? THEMES.Black : THEMES.Transparent)
		.setItemsAtRight(navbarItemModels)
		.addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.Danger).setLink('/'))

	const tanoshiMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtLeft([new TanoshiLinkModel('Tanoshi').setTheme(THEMES.Danger).setLink('/').setDisplaySize(SIZES['2Xl'])])
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
