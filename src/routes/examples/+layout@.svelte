<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiNavigationModel from '$molecules/navigation/TanoshiNavigationModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';


	import '../../app.css';

	const navbarItemModels: Array<TanoshiLinkModel> = [
		new TanoshiLinkModel('Home').setTheme('white'),
		new TanoshiLinkModel('About').setTheme('white'),
		new TanoshiLinkModel('Products').setTheme('white'),
		new TanoshiLinkModel('Services').setTheme('white')
	];

	const navbarModel = new TanoshiNavigationModel().setTheme('dark').setItems(navbarItemModels);

	
</script>
<div>
	<TanoshiNavigation tanoshiNavigationModel={navbarModel} />
	<main class="relative">
		<slot />
	</main>
</div>
