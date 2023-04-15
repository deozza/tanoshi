<script lang="ts">
	import TanoshiHeader from '$atoms/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/header/TanoshiHeaderModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import TanoshiImageModel from '$atoms/image/TanoshiImageModel';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
	
	const rowContainer = new TanoshiContainerModel('r').setDesktopSpacing('evenly');
	const columnContainer = new TanoshiContainerModel('c');

	const pageHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Images')
		.setDisplaySize('3xl')
		.setHtmlSize('h1');

	const standardHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Standard')
		.setDisplaySize('2xl')
		.setHtmlSize('h2');
	const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

	const squareImageModel = new TanoshiImageModel(catImageSource, 'square image');

	const themeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Changing the shape')
		.setDisplaySize('2xl')
		.setHtmlSize('h2');

	const roundedImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setTheme('rounded');
	const circledImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setTheme('circled');
	const fullCircledImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setCircle('48');

	const sizeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Sizes')
		.setDisplaySize('2xl')
		.setHtmlSize('h2');

	const quarterImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setWidth('w-3/12');
	const halfImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setWidth('w-1/2');
	const thirdImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setWidth('w-9/12');
	const fullImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setWidth('w-full');

	const filterHeader: TanoshiHeaderModel = new TanoshiHeaderModel('With filters')
		.setDisplaySize('2xl')
		.setHtmlSize('h2');

	const bluredImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('blur').setWidth('w-2/12');
	const grayscaledImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('grayscale').setWidth('w-2/12');
	const sepiaedImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('sepia').setWidth('w-2/12');
	const invertedImageModel = new TanoshiImageModel(catImageSource, 'rounded image').setFilter('invert').setWidth('w-2/12');
	
</script>

<main>
	<section id="button">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={pageHeader} />

				<TanoshiHeader tanoshiHeaderModel={standardHeader} />

				<TanoshiImage tanoshiImageModel={squareImageModel} />

				<TanoshiHeader tanoshiHeaderModel={themeHeader} />

				<TanoshiImage tanoshiImageModel={roundedImageModel} />
				<TanoshiImage tanoshiImageModel={circledImageModel} />
				<TanoshiImage tanoshiImageModel={fullCircledImageModel} />
				
				<TanoshiHeader tanoshiHeaderModel={sizeHeader} />
				
				<TanoshiImage tanoshiImageModel={quarterImageModel} />
				<TanoshiImage tanoshiImageModel={halfImageModel} />
				<TanoshiImage tanoshiImageModel={thirdImageModel} />
				<TanoshiImage tanoshiImageModel={fullImageModel} />

				<TanoshiHeader tanoshiHeaderModel={filterHeader} />

				<TanoshiContainer tanoshiContainerModel={rowContainer}>

					<TanoshiImage tanoshiImageModel={bluredImageModel} />
					<TanoshiImage tanoshiImageModel={grayscaledImageModel} />
					<TanoshiImage tanoshiImageModel={sepiaedImageModel} />
					<TanoshiImage tanoshiImageModel={invertedImageModel} />
				</TanoshiContainer>
					
			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>
