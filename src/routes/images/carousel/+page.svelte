<script lang="ts">
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/typography/header/TanoshiHeaderModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import TanoshiImageModel from '$atoms/image/TanoshiImageModel';
	import TanoshiCarousel from '$molecules/carousel/TanoshiCarousel.svelte';
	import TanoshiCarouselModel from '$molecules/carousel/TanoshiCarouselModel';
	
	const columnContainer = new TanoshiContainerModel('c');

	const pageHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Carousel')
		.setDisplaySize('3xl')
		.setHtmlSize('h1');

	const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

	const bluredImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('blur').setWidth('w-2/12');
	const grayscaledImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('grayscale').setWidth('w-2/12');
	const sepiaedImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('sepia').setWidth('w-2/12');
	const invertedImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('invert').setWidth('w-2/12');

	const carouselModel: TanoshiCarouselModel = new TanoshiCarouselModel()
		.addItem(bluredImageModel)
		.addItem(grayscaledImageModel)
		.addItem(sepiaedImageModel)
		.addItem(invertedImageModel)
		.setAutoplay(true)
		.setAutoplaySpeed(5000)
		.showControls(true)
		.setHeight('h-[700px]')
</script>

<div>
	<section id="title">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={pageHeader} />
			</TanoshiContainer>
		</TanoshiContainer>

	</section>
	<section id="carousel" class="{carouselModel.height}">
		<TanoshiCarousel tanoshiCarouselModel={carouselModel}/>
	</section>

	<section id="content" class="relative">
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
		<p>data</p>
	
	</section>
</div>


