<script lang="ts">
	import { TanoshiButtonModel, TanoshiHeaderModel, TanoshiImageModel, TanoshiLinkModel, TanoshiParagraphModel } from '$atoms';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import { BUTTON_SIZES, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, HEADER_TAGS,  SIZES, THEMES, TanoshiContainerModel, TanoshiLinkAsNavbarDropdownModel, TanoshiNavigationModel, WIDTHS } from '$lib';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
	import TanoshiNavigationGlass from '$molecules/navigation/glass/TanoshiNavigationGlass.svelte';
	import TanoshiButtonGlass from '$atoms/button/TanoshiButtonGlass.svelte';

    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

	const dropdownTitle: TanoshiLinkModel = new TanoshiLinkModel('Dropdown').setTheme(THEMES.White);
	const linkPrimary: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.White);
	const linkSecondary: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.White);
	const linkSuccess: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.White);

	const dropdownItems: Array<TanoshiNavigationLinkModel> = [
		{
			link: linkPrimary,
			component: TanoshiLink
		},
		{
			link: linkSecondary,
			component: TanoshiLink
		},
		{
			link: linkSuccess,
			component: TanoshiLink
		}
	];


	const dropdownLink : TanoshiLinkAsNavbarDropdownModel = new TanoshiLinkAsNavbarDropdownModel(dropdownTitle)
		.setLinks(dropdownItems)
		.setBackgroundTheme(THEMES.Secondary)

	const navbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: dropdownLink,
			component: TanoshiLinkAsNavbarDropdown
		},
		{
			link: new TanoshiLinkModel('Typography').setTheme(THEMES.White).setLink('/typography'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Buttons').setTheme(THEMES.White).setLink('/buttons'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Pills').setTheme(THEMES.White).setLink('/pills'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Forms').setTheme(THEMES.White).setLink('/forms'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Images').setTheme(THEMES.White).setLink('/images'),
			component: TanoshiLink

		},
		{
			link: new TanoshiLinkModel('Links').setTheme(THEMES.White).setLink('/links'),
			component: TanoshiLink
		}
	];

	const logoNavbarModel: Array<TanoshiNavigationLinkModel> = [
		{
			link: new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'),
			component: TanoshiLink
		}
	]

    const primaryDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

	const presentationSectionContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.W12)
		.setBackgroundTheme(THEMES.Black)

	const productImage: TanoshiImageModel = new TanoshiImageModel('https://picsum.photos/800/1000', 'img')
	const productPresentationContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setWidth(WIDTHS.W6)
		.setBackgroundTheme(THEMES.Black)
	const productHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Product title')
		.setTheme(THEMES.White)
		.setTag(HEADER_TAGS.H1)
		.setSize(SIZES['4Xl'])
	const productDescriptionParagraph: TanoshiParagraphModel = new TanoshiParagraphModel(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, nec aliquam ni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, nec aliquam ni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, nec aliquam ni. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, nec aliquam ni.'
		)
		.setTheme(THEMES.White)
	
	const productPrice: TanoshiParagraphModel = new TanoshiParagraphModel('100$')
		.setTheme(THEMES.White)
		.setSize(SIZES['2Xl'])
		.setHasSpacing(false)
	const productAvailability: TanoshiParagraphModel = new TanoshiParagraphModel('In stock')
		.setTheme(THEMES.Success)
		.setHasSpacing(true)
	const addToCartButton: TanoshiButtonModel = new TanoshiButtonModel('Add to cart')
		.setBasicTheme(THEMES.Success)
		.setSize(BUTTON_SIZES.Block)
		.setIconAtRight('mdi-cart')

</script>
  
<Hst.Story title="examples/glass/product page">
    <TanoshiNavigationGlass tanoshiDesktopNavigationModel={primaryDesktopNavigationModel} tanoshiMobileNavigationModel={primaryDesktopNavigationModel} />

    <main>
		<section>
			<TanoshiContainerMaterial tanoshiContainerModel={presentationSectionContainerModel} >
				<TanoshiImage tanoshiImageModel={productImage} />
				<TanoshiContainerMaterial tanoshiContainerModel={productPresentationContainerModel} >
					<TanoshiHeader tanoshiHeaderModel={productHeader} />
					<TanoshiParagraph tanoshiParagraphModel={productDescriptionParagraph} />
					<TanoshiParagraph tanoshiParagraphModel={productPrice} />
					<TanoshiParagraph tanoshiParagraphModel={productAvailability} />
					<TanoshiButtonGlass tanoshiButtonModel={addToCartButton} />
				</TanoshiContainerMaterial>
			</TanoshiContainerMaterial>
		</section>
    </main>
</Hst.Story>

<style>
    @media (min-width: 640) {
        main {
            padding-top: 64px;
        }
    }
</style>