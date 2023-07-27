<script lang="ts">
	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	class="object-cover {tanoshiImageModel.theme} {tanoshiImageModel.filter}"
	style="height: {tanoshiImageModel.height};width: {tanoshiImageModel.width};"
	height="{tanoshiImageModel.height}"
	width="{tanoshiImageModel.width}"
	src={tanoshiImageModel.content}
	alt={tanoshiImageModel.alt}
/>
