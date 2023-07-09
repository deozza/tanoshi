<script lang="ts">
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/typography/header/TanoshiHeaderModel';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '$atoms/typography/paragraph/TanoshiParagraphModel';
    import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

	const rowContainer = new TanoshiContainerModel('r');
	const columnContainer = new TanoshiContainerModel('c');

	const typographyHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Typography')
		.setDisplaySize('3xl')
		.setHtmlSize('h1');

	const standardHeadersHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Standard headers')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const h1Header = new TanoshiHeaderModel('<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>').setDisplaySize('4xl').setHtmlSize('h1');
	const h2Header = new TanoshiHeaderModel('<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>').setDisplaySize('3xl').setHtmlSize('h2');
	const h3Header = new TanoshiHeaderModel('<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>').setDisplaySize('2xl').setHtmlSize('h3');
	const h4Header = new TanoshiHeaderModel('<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>').setDisplaySize('xl').setHtmlSize('h4');
	const h5Header = new TanoshiHeaderModel('<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>').setDisplaySize('base').setHtmlSize('h5');
	const h6Header = new TanoshiHeaderModel('<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>').setDisplaySize('sm').setHtmlSize('h6');

	const standardHeadersModels: Array<TanoshiHeaderModel> = [
		h1Header,
		h2Header,
		h3Header,
		h4Header,
		h5Header,
		h6Header,
	];

	const alignementParagraphsHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Paragraph alignement')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const leftParagraph = new TanoshiParagraphModel('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
	const centerParagraph = new TanoshiParagraphModel('Lorem ipsum dolor sit amet, consectetur adipiscing elit').setAlignment('center');
	const rightParagraph = new TanoshiParagraphModel('Lorem ipsum dolor sit amet, consectetur adipiscing elit').setAlignment('right');
	const justifiedParagraph = new TanoshiParagraphModel('Lorem ipsum dolor sit amet, consectetur adipiscing elit').setAlignment('justify');
	
    const alignementParagraphsModels: Array<TanoshiParagraphModel> = [
		leftParagraph,
		centerParagraph,
		rightParagraph,
		justifiedParagraph
	];


</script>

<main>
	<section id="button">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={typographyHeader} />

				<TanoshiHeader tanoshiHeaderModel={standardHeadersHeader} />
				<TanoshiContainer tanoshiContainerModel={columnContainer}>
					{#each standardHeadersModels as standardHeadersModel}
                    <TanoshiHeader tanoshiHeaderModel={standardHeadersModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={alignementParagraphsHeader} />
				<TanoshiContainer tanoshiContainerModel={columnContainer}>
					{#each alignementParagraphsModels as alignementParagraphsModel}
                    <TanoshiParagraph tanoshiParagraphModel={alignementParagraphsModel} />
					{/each}
				</TanoshiContainer>

			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>