<script lang="ts">
	import './tanoshiImage.css';
	import TanoshiImageModel from './TanoshiImageModel';

	export let tanoshiImageModel: TanoshiImageModel
</script>

<img
	class='{tanoshiImageModel.theme}'
	src='{tanoshiImageModel.content}'
	alt='{tanoshiImageModel.alt}'
>