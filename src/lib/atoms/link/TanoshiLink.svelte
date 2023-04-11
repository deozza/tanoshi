<script lang="ts">
	import './tanoshiLink.css';
	import type TanoshiLinkModel from './TanoshiLinkModel';

	export let tanoshiLinkModel: TanoshiLinkModel;
</script>

<a
	class="text-{tanoshiLinkModel.displaySize} a-{tanoshiLinkModel.theme} text-{tanoshiLinkModel.aligment}"
	href={tanoshiLinkModel.link}
	target={tanoshiLinkModel.isInternal}
>
	{tanoshiLinkModel.content}
</a>
