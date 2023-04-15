<script lang="ts">
	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	class="object-cover {tanoshiImageModel.theme} {tanoshiImageModel.filter} {tanoshiImageModel.width} {tanoshiImageModel.height}"
	src={tanoshiImageModel.content}
	alt={tanoshiImageModel.alt}
/>
