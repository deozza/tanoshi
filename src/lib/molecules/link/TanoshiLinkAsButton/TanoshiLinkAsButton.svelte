<script lang="ts">
	import '../../../atoms/link/tanoshiLink.css';
	import '../../../main.css';
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
	<svelte:component this={tanoshiLinkModel.tanoshiButtonComponent} tanoshiButtonModel={tanoshiLinkModel.button} />
</a>
