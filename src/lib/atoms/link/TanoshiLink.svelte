<script lang="ts">
	import './tanoshiLink.css';
	import './../../main.css';
	import 'iconify-icon';

	import type TanoshiLinkModel from './TanoshiLinkModel';
	import TanoshiIcon from '$atoms/icon/TanoshiIcon.svelte';

	export let tanoshiLinkModel: TanoshiLinkModel;


</script>

<a
	class="text-{tanoshiLinkModel.displaySize} a-{tanoshiLinkModel.theme} a-hover-{tanoshiLinkModel.hoverTtheme} text-{tanoshiLinkModel.aligment}"
	href={tanoshiLinkModel.link}
	target={tanoshiLinkModel.isInternal}
>
	{#if tanoshiLinkModel.iconAtLeft !== null}
		<TanoshiIcon tanoshiIconModel={tanoshiLinkModel.iconAtLeft} />
	{/if}
	{tanoshiLinkModel.content}
	{#if tanoshiLinkModel.iconAtRight !== null}
		<TanoshiIcon tanoshiIconModel={tanoshiLinkModel.iconAtRight} />
	{/if}
</a>
