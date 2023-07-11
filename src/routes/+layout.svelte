<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiNavigationModel from '$molecules/navigation/TanoshiNavigationModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';


	import '../app.css';

	const navbarItemModels: Array<TanoshiLinkModel> = [
		new TanoshiLinkModel('Typography').setTheme('white').setLink('/typography'),
		new TanoshiLinkModel('Buttons').setTheme('white').setLink('/buttons'),
		new TanoshiLinkModel('Pills').setTheme('white').setLink('/pills'),
		new TanoshiLinkModel('Forms').setTheme('white').setLink('/forms'),
		new TanoshiLinkModel('Images').setTheme('white').setLink('/images'),
	];

	const navbarModel = new TanoshiNavigationModel()
		.setTheme('dark')
		.setItemsAtRight(navbarItemModels)
		.addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))

	
</script>
<div>
	<TanoshiNavigation tanoshiNavigationModel={navbarModel} />
	<main class="relative">
		<slot />
	</main>
</div>
