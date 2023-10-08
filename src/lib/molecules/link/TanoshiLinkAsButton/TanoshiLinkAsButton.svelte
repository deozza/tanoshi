<script lang="ts">
	import '../../../atoms/link/tanoshiLink.css';
	import '../../../main.css';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import type TanoshiLinkAsButtonModel from './TanoshiLinkAsButtonModel';
	import type { ComponentType } from 'svelte';

	export let tanoshiLinkModel: TanoshiLinkAsButtonModel;
	export let tanoshiButtonComponent: ComponentType = TanoshiButtonMaterial;

</script>

<a
	class="
	text-{tanoshiLinkModel.link.displaySize}
	a-{tanoshiLinkModel.link.theme}
	text-{tanoshiLinkModel.link.aligment}"
	href={tanoshiLinkModel.link.link}
	target={tanoshiLinkModel.link.isInternal}
>
	<svelte:component this={tanoshiLinkModel.tanoshiButtonComponent} tanoshiButtonModel={tanoshiLinkModel.button} />
</a>
