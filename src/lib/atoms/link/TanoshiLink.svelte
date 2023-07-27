<script lang="ts">
	import './tanoshiLink.css';
	import './../../main.css';
	import type TanoshiLinkModel from './TanoshiLinkModel';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
	import TanoshiImageModel from '$atoms/image/TanoshiImageModel';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';


	export let tanoshiLinkModel: TanoshiLinkModel;


</script>




<a
	class="text-{tanoshiLinkModel.displaySize} a-{tanoshiLinkModel.theme} text-{tanoshiLinkModel.aligment}"
	href={tanoshiLinkModel.link}
	target={tanoshiLinkModel.isInternal}
>
	{#if tanoshiLinkModel.contentAsImage !== null}
		<TanoshiImage
			tanoshiImageModel={tanoshiLinkModel.contentAsImage}
		/>
	{:else if tanoshiLinkModel.contentAsButton !== null}
		<TanoshiButton
			tanoshiButtonModel={tanoshiLinkModel.contentAsButton}
		/>
	{:else}
		{tanoshiLinkModel.content}
		<slot />
	{/if}
</a>
