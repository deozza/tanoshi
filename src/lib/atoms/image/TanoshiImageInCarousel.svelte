<script lang="ts">

	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';
	import type TanoshiCarouselModel from '$molecules/carousel/TanoshiCarouselModel';

	export let tanoshiImageModel: TanoshiImageModel;
	export let tanoshiCarouselModel: TanoshiCarouselModel
</script>

<img
	class="{tanoshiImageModel.theme} {tanoshiImageModel.filter}"
	src={tanoshiImageModel.content}
	alt={tanoshiImageModel.alt}
/>
