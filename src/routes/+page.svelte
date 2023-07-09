<script lang="ts">
	import TanoshiHeader from "$atoms/typography/header/TanoshiHeader.svelte";
	import TanoshiHeaderModel from "$atoms/typography/header/TanoshiHeaderModel";
	import TanoshiParagraphModel from "$atoms/typography/paragraph/TanoshiParagraphModel";
	import TanoshiParagraph from "$atoms/typography/paragraph/TanoshiParagraph.svelte";
	import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
    import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
	import TanoshiLinkModel from "$atoms/link/TanoshiLinkModel";
	import TanoshiLink from "$atoms/link/TanoshiLink.svelte";
	import TanoshiButtonModel from "$atoms/button/TanoshiButtonModel";
	import TanoshiButton from "$atoms/button/TanoshiButton.svelte";
	import TanoshiImageModel from "$atoms/image/TanoshiImageModel";
	import TanoshiImage from "$atoms/image/TanoshiImage.svelte";

    const defaultColumnContainer: TanoshiContainerModel = new TanoshiContainerModel('c');
    const defaultRowContainer: TanoshiContainerModel = new TanoshiContainerModel('r');

    const heroBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
    .setTheme('primary')
    .setDesktopSpacing('centered');

    const heroContentContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
    .setDesktopSpacing('centered')
    .setItemsAlignment('center');

    const heroHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Tanoshi')
    .setDisplaySize('6xl')
    .setHtmlSize('h1')
    .setAligment('center');

    const heroParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel(
        'The UI toolkit for Svelte, using statically typed objects as HTML components'
    )
        .setDisplaySize('lg')
        .setHasSpacing(false)
        .setAlignment('center');


    const builtSectionAlignementModel = new TanoshiContainerModel('c')
		.setDesktopSpacing('centered')
		.setItemsAlignment('center');
	const builtSectionContentModel = new TanoshiContainerModel('c')
		.setDesktopSpacing('centered')
		.setItemsAlignment('center')
		.setSize('sm:w-8/12');
    const builtHeaderModel: TanoshiHeaderModel  = new TanoshiHeaderModel('Built on the shoulders of giants')
        .setDisplaySize('4xl')
        .setHtmlSize('h2')
        .setAligment('center');
    const cardListSectionModel = new TanoshiContainerModel('r').setDesktopSpacing('between');
	const cardSectionModel = new TanoshiContainerModel('c')
		.setDesktopSpacing('centered')
		.setItemsAlignment('center')
		.setSize('sm:w-1/3');
    
	const sveltekitCardParagraphModel = new TanoshiParagraphModel('Tanoshi has been built to be used with Sveltekit, for a lightweight and powerful app.')
		.setAlignment('center')
    const sveltekitImageSource =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350';
	const sveltekitCardImageModel = new TanoshiImageModel(sveltekitImageSource, 'sveltekit logo').setHeight('h-24')

	const tailwindCardParagraphModel = new TanoshiParagraphModel('Tailwind lets you add your personal touch to your visuals without loading tons of css.')
    .setAlignment('center')
    const tailwindImageSource =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333';
    const tailwindCardImageModel = new TanoshiImageModel(tailwindImageSource, 'tailwind logo').setHeight('h-24')

    const fontawesomeCardParagraphModel = new TanoshiParagraphModel('Uses Fontawesome large gallery of icons to style your app.').setAlignment('center')
    .setAlignment('center')
    const fontawesomeImageSource =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Font_Awesome_logomark_blue.svg/512px-Font_Awesome_logomark_blue.svg.png?20220809042108';
    const fontawesomeCardImageModel = new TanoshiImageModel(fontawesomeImageSource, 'fontawesome logo').setHeight('h-24')

    const downloadBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setTheme('primary')
        .setDesktopSpacing('centered')
        .setItemsAlignment('center');
    
    const downloadContnentContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setDesktopSpacing('centered')
        .setItemsAlignment('center');

    const downloadHeaderModel: TanoshiHeaderModel  = new TanoshiHeaderModel('Want to try out ?')
        .setDisplaySize('4xl')
        .setHtmlSize('h2')
        .setAligment('center');

    const downloadButtonModel: TanoshiButtonModel = new TanoshiButtonModel('').setTheme('success');
    
    const downloadLinkModel : TanoshiLinkModel = new TanoshiLinkModel('Download now')
        .setLink('https://www.npmjs.com/package/tanoshi')
        .setIsInternal(false)
        .setTheme('white');

</script>

<section id="hero">
    <TanoshiContainer tanoshiContainerModel={heroBackgroundContainer} customClasses={'h-screen'}>
        <TanoshiContainer tanoshiContainerModel={heroContentContainer}>
            <TanoshiHeader tanoshiHeaderModel={heroHeaderModel} />
            <TanoshiParagraph tanoshiParagraphModel={heroParagraphModel} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="built">
    <TanoshiContainer tanoshiContainerModel={builtSectionAlignementModel}>
		<TanoshiContainer tanoshiContainerModel={builtSectionContentModel}>
            <TanoshiHeader tanoshiHeaderModel={builtHeaderModel} />
			
			<TanoshiContainer tanoshiContainerModel={cardListSectionModel}>
				<TanoshiContainer tanoshiContainerModel={cardSectionModel}>
                    <TanoshiImage tanoshiImageModel={sveltekitCardImageModel} />
					<TanoshiParagraph tanoshiParagraphModel={sveltekitCardParagraphModel} />

				</TanoshiContainer>
				<TanoshiContainer tanoshiContainerModel={cardSectionModel}>
                    <TanoshiImage tanoshiImageModel={tailwindCardImageModel} />
					<TanoshiParagraph tanoshiParagraphModel={tailwindCardParagraphModel} />
				</TanoshiContainer>
				<TanoshiContainer tanoshiContainerModel={cardSectionModel}>
                    <TanoshiImage tanoshiImageModel={fontawesomeCardImageModel} />
					<TanoshiParagraph tanoshiParagraphModel={fontawesomeCardParagraphModel} />
				</TanoshiContainer>
			</TanoshiContainer>
		</TanoshiContainer>
	</TanoshiContainer>

</section>

<section id="download">
    <TanoshiContainer tanoshiContainerModel={downloadBackgroundContainer} >
        <TanoshiContainer tanoshiContainerModel={downloadContnentContainer} >
            <TanoshiHeader tanoshiHeaderModel={downloadHeaderModel} />
            <TanoshiButton tanoshiButtonModel={downloadButtonModel}>
                <TanoshiLink tanoshiLinkModel={downloadLinkModel} />
            </TanoshiButton>
        </TanoshiContainer>
    </TanoshiContainer>

</section>
