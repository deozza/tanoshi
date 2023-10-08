<script lang="ts">
	import { TanoshiHeaderModel, TanoshiImageModel, TanoshiLinkModel, TanoshiParagraphModel } from '$atoms';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, HEADER_TAGS, HEIGHTS, SIZES, THEMES, TanoshiContainerModel, TanoshiDesktopNavigationModel, TanoshiLinkAsNavbarDropdownModel, TanoshiMobileNavigationModel, WIDTHS } from '$lib';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiNavigationGlass from '$molecules/navigation/glass/TanoshiNavigationGlass.svelte';

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

    const primaryDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

	const primaryMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsWhenOpened(navbarRightItemModels)
        .setItemsWhenClosed(logoNavbarModel)

    const itemsListContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Transparent)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W12)
        .setHeight(HEIGHTS.MINH100VH)

    const itemsListHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Our products')
        .setTag(HEADER_TAGS.H1)
        .setSize(SIZES['3Xl'])

	const itemsContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setWidth(WIDTHS.W10)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)

	const itemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setBorderTheme(THEMES.Black)
		.setBorderShape(CONTAINER_BORDERS.Md)
		.setWidth(WIDTHS.WAuto)
	
	let itemsListModels = [
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 1').setMargin(false),
			title: new TanoshiParagraphModel('Item 1').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 2').setMargin(false),
			title: new TanoshiParagraphModel('Item 2').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 3').setMargin(false),
			title: new TanoshiParagraphModel('Item 3').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Out of stock').setTheme(THEMES.Danger).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 4').setMargin(false),
			title: new TanoshiParagraphModel('Item 4').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 5').setMargin(false),
			title: new TanoshiParagraphModel('Item 5').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available in 2 weeks').setTheme(THEMES.Warning).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 6').setMargin(false),
			title: new TanoshiParagraphModel('Item 6').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 1').setMargin(false),
			title: new TanoshiParagraphModel('Item 1').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 2').setMargin(false),
			title: new TanoshiParagraphModel('Item 2').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 3').setMargin(false),
			title: new TanoshiParagraphModel('Item 3').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Out of stock').setTheme(THEMES.Danger).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 4').setMargin(false),
			title: new TanoshiParagraphModel('Item 4').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 5').setMargin(false),
			title: new TanoshiParagraphModel('Item 5').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available in 2 weeks').setTheme(THEMES.Warning).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 6').setMargin(false),
			title: new TanoshiParagraphModel('Item 6').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 1').setMargin(false),
			title: new TanoshiParagraphModel('Item 1').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 2').setMargin(false),
			title: new TanoshiParagraphModel('Item 2').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 3').setMargin(false),
			title: new TanoshiParagraphModel('Item 3').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Out of stock').setTheme(THEMES.Danger).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 4').setMargin(false),
			title: new TanoshiParagraphModel('Item 4').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 5').setMargin(false),
			title: new TanoshiParagraphModel('Item 5').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available in 2 weeks').setTheme(THEMES.Warning).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		},
		{
			image: new TanoshiImageModel('https://picsum.photos/200/300', 'Item 6').setMargin(false),
			title: new TanoshiParagraphModel('Item 6').setSize(SIZES.Xl).setTheme(THEMES.Black).setHasSpacing(false),
			availability: new TanoshiParagraphModel('Available').setTheme(THEMES.Success).setHasSpacing(false),
			price: new TanoshiParagraphModel('100$').setSize(SIZES['2Xl']).setTheme(THEMES.Black),
		}
	]   
</script>
  
<Hst.Story title="examples/glass/items list">
    <TanoshiNavigationGlass tanoshiDesktopNavigationModel={primaryDesktopNavigationModel} tanoshiMobileNavigationModel={primaryMobileNavigationModel} />

    <main>
        <TanoshiContainerMaterial tanoshiContainerModel={itemsListContainer} customClasses={'bg-gradient'}>
            <TanoshiHeader tanoshiHeaderModel={itemsListHeader} />
			<TanoshiContainerMaterial tanoshiContainerModel={itemsContainer}>
				{#each itemsListModels as itemModel}
					<TanoshiContainerGlass tanoshiContainerModel={itemContainer} customClasses={'item-margin'}>
						<TanoshiImage tanoshiImageModel={itemModel.image} />
						<TanoshiParagraph tanoshiParagraphModel={itemModel.title} />
						<TanoshiParagraph tanoshiParagraphModel={itemModel.availability} />
						<TanoshiParagraph tanoshiParagraphModel={itemModel.price} />
					</TanoshiContainerGlass>
				{/each}
			</TanoshiContainerMaterial>    
        </TanoshiContainerMaterial>    
    </main>
</Hst.Story>

<style>
    @media (min-width: 640) {
        main {
			position: absolute;
            padding-top: 64px;
        }
    }
</style>