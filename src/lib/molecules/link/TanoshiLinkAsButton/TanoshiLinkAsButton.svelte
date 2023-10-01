<script lang="ts">
	import '../../../atoms/link/tanoshiLink.css';
	import '../../../main.css';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import type TanoshiLinkAsButtonModel from './TanoshiLinkAsButtonModel';

	export let tanoshiLinkModel: TanoshiLinkAsButtonModel;
</script>

<a
	class="
	text-{tanoshiLinkModel.link.displaySize}
	a-{tanoshiLinkModel.link.theme}
	text-{tanoshiLinkModel.link.aligment}"
	href={tanoshiLinkModel.link.link}
	target={tanoshiLinkModel.link.isInternal}
>
	<TanoshiButtonMaterial
		tanoshiButtonModel={tanoshiLinkModel.button}
	/>
</a>
