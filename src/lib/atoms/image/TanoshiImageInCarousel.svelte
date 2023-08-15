<script lang="ts">

	import './tanoshiImage.css';
	import type TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel;
</script>

<img
	class="{tanoshiImageModel.shape} {tanoshiImageModel.filter} carousel {tanoshiImageModel.height}"
	style="height: {tanoshiImageModel.height};width: {tanoshiImageModel.width};"
	src={tanoshiImageModel.content}
	height="{tanoshiImageModel.height}"
	width="{tanoshiImageModel.width}"
	alt={tanoshiImageModel.alt}
	
/>


<style>
img {
	margin: 0.5rem
}

img.rounded {
	border-radius: 0.375rem
}

img.circled {
	border-radius: 9999px;
}

img.object-cover {
    object-fit: cover;
}

img.carousel {
    margin: 0px;
}

img.blur {
    --tw-blur: blur(8px);
    filter: blur(8px);
}

img.grayscale {
    --tw-grayscale: grayscale(100%);
    filter: grayscale(100%);
}

img.invert {
	--tw-invert: invert(100%);
	filter: invert(100%);}

img.sepia {
	--tw-sepia: sepia(100%);
	filter: sepia(100%);
}
</style>