<script lang="ts">
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import type TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import type TanoshiLabelAndInputModel from './TanoshiLabelAndInputModel';

	export let inputContainerModel: TanoshiContainerModel;
	
	export let tanoshiLabelAndInputModel: TanoshiLabelAndInputModel;
</script>

<TanoshiContainer tanoshiContainerModel={inputContainerModel}>
	<TanoshiLabel tanoshiLabelModel={tanoshiLabelAndInputModel.label} />
	<svelte:component this={tanoshiLabelAndInputModel.component} tanoshiInputModel={tanoshiLabelAndInputModel.input} />
</TanoshiContainer>