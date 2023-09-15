<script lang="ts">
	import './tanoshiLink.css';
	import './../../main.css';
	import 'iconify-icon';

	import type TanoshiLinkModel from './TanoshiLinkModel';

	export let tanoshiLinkModel: TanoshiLinkModel;


</script>

<a
	class="text-{tanoshiLinkModel.displaySize} a-{tanoshiLinkModel.theme} text-{tanoshiLinkModel.aligment}"
	href={tanoshiLinkModel.link}
	target={tanoshiLinkModel.isInternal}
>
	{#if tanoshiLinkModel.iconAtLeft !== null}
	<iconify-icon icon={tanoshiLinkModel.iconAtLeft} />
	{/if}
	{tanoshiLinkModel.content}
	{#if tanoshiLinkModel.iconAtRight !== null}
	<iconify-icon icon={tanoshiLinkModel.iconAtRight} />
	{/if}
</a>
