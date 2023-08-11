<script lang="ts">
	import './../../atoms/link/tanoshiLink.css';
	import './../../main.css';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
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
	<TanoshiButton
		tanoshiButtonModel={tanoshiLinkModel.button}
	/>
</a>
