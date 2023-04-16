<script lang="ts">
	import { fade } from 'svelte/transition';

	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	class="{tanoshiImageModel.theme} {tanoshiImageModel.filter}"
	src={tanoshiImageModel.content}
	alt={tanoshiImageModel.alt}
	transition:fade={{duration:1000}}
/>
