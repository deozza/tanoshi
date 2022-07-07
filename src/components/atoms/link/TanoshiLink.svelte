<script lang="ts">
	import './tanoshiLink.css';
	import TanoshiLinkModel from './TanoshiLinkModel';

	export let tanoshiLinkModel: TanoshiLinkModel
</script>

<a
	href='{tanoshiLinkModel.link}'
	target='{tanoshiLinkModel.isInternal}'
>
	{tanoshiLinkModel.content}
</a>