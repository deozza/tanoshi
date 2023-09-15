<script lang="ts">
	import '../../../atoms/link/tanoshiLink.css';
	import '../../../main.css';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
	import type TanoshiLinkAsImageModel from './TanoshiLinkAsImageModel';

	export let tanoshiLinkModel: TanoshiLinkAsImageModel;
</script>

<a
	class="
	text-{tanoshiLinkModel.link.displaySize}
	a-{tanoshiLinkModel.link.theme}
	text-{tanoshiLinkModel.link.aligment}"
	href={tanoshiLinkModel.link.link}
	target={tanoshiLinkModel.link.isInternal}
>
	<TanoshiImage
		tanoshiImageModel={tanoshiLinkModel.image}
	/>
</a>
