<script lang="ts">
	import './tanoshiContainer.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel
</script>

<div class="flex-container {tanoshiContainerModel.theme} flex-{tanoshiContainerModel.desktopOrientation} {tanoshiContainerModel.desktopSpacing}">
	<slot></slot>
</div>