<script lang="ts">
	import './tanoshiLink.css';
	import './../../main.css';
	import type TanoshiLinkModel from './TanoshiLinkModel';
	import Fa from 'svelte-fa/src/index.js';

	export let tanoshiLinkModel: TanoshiLinkModel;


</script>

<a
	class="text-{tanoshiLinkModel.displaySize} a-{tanoshiLinkModel.theme} text-{tanoshiLinkModel.aligment}"
	href={tanoshiLinkModel.link}
	target={tanoshiLinkModel.isInternal}
>
	{#if tanoshiLinkModel.iconAtLeft !== null}
		<Fa icon={tanoshiLinkModel.iconAtLeft} />
	{/if}
	{tanoshiLinkModel.content}
	{#if tanoshiLinkModel.iconAtRight !== null}
		<Fa icon={tanoshiLinkModel.iconAtRight} />
	{/if}
</a>
