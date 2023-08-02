<script lang="ts">
	import '../../main.css';
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
		{tanoshiContainerModel.width}
		{tanoshiContainerModel.height}
		{customClasses}
	"
>
	<slot />
</div>
