<script lang="ts">
	import './tanoshiContainer.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel;
	export let customClasses: string = '';
</script>

<div
	class="
		flex-container 
		{tanoshiContainerModel.theme} 
		rounded-{tanoshiContainerModel.borders} 
		flex-{tanoshiContainerModel.desktopOrientation} 
		{tanoshiContainerModel.desktopSpacing}
		items-{tanoshiContainerModel.itemsAlignment}
		{tanoshiContainerModel.size}
		{customClasses}
	"
>
	<slot />
</div>
