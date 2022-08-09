<script lang="ts">
	import './tanoshiContainer.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel
	export let customClasses: string = ''
</script>

<div 
	class="
		flex-container 
		{tanoshiContainerModel.theme} 
		{tanoshiContainerModel.size} 
		flex-{tanoshiContainerModel.desktopOrientation} 
		{tanoshiContainerModel.desktopSpacing}
		{customClasses}
	"
	
>
	<slot></slot>
</div>