<script lang="ts">

	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	class="{tanoshiImageModel.theme} {tanoshiImageModel.filter} carousel {tanoshiImageModel.height}"
	style="height: {tanoshiImageModel.height};width: {tanoshiImageModel.width};"
	src={tanoshiImageModel.content}
	height="{tanoshiImageModel.height}"
	width="{tanoshiImageModel.width}"
	alt={tanoshiImageModel.alt}
	
/>
