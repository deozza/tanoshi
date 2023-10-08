<script lang="ts">

    import '../../../../app.css';

	import {  THEMES, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiLinkAsNavbarDropdownModel from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel';
	import TanoshiNavigationMaterial from '$molecules/navigation/material/TanoshiNavigationMaterial.svelte';
	import TanoshiDesktopNavigationModel from '$molecules/navigation/TanoshiMobileNavigationModel';
	import TanoshiMobileNavigationModel from '$molecules/navigation/TanoshiDesktopNavigationModel';
    
	export let Hst: Hst;
	
	const dropdownTitle: TanoshiLinkModel = new TanoshiLinkModel('Dropdown').setTheme(THEMES.White);
	const linkPrimary: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.White);
	const linkSecondary: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.White);
	const linkSuccess: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.White);

	const linkPrimaryBlack: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.Black);
	const linkSecondaryBlack: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.Black);
	const linkSuccessBlack: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.Black);


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

    	const dropdownItemsBlack: Array<TanoshiNavigationLinkModel> = [
		{
			link: linkPrimaryBlack,
			component: TanoshiLink
		},
		{
			link: linkSecondaryBlack,
			component: TanoshiLink
		},
		{
			link: linkSuccessBlack,
			component: TanoshiLink
		}
	];

	const dropdownLink : TanoshiLinkAsNavbarDropdownModel = new TanoshiLinkAsNavbarDropdownModel(dropdownTitle)
		.setLinks(dropdownItems)
		.setBackgroundTheme(THEMES.Secondary)

    const dropdownLinkBlack : TanoshiLinkAsNavbarDropdownModel = new TanoshiLinkAsNavbarDropdownModel(dropdownTitle)
		.setLinks(dropdownItemsBlack)
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

	const navbarRightItemModelsBlack: Array<TanoshiNavigationLinkModel> = [
		{
			link: dropdownLinkBlack,
			component: TanoshiLinkAsNavbarDropdown
		},
		{
			link: new TanoshiLinkModel('Typography').setTheme(THEMES.Black).setLink('/typography'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Buttons').setTheme(THEMES.Black).setLink('/buttons'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Pills').setTheme(THEMES.Black).setLink('/pills'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Forms').setTheme(THEMES.Black).setLink('/forms'),
			component: TanoshiLink
		},
		{
			link: new TanoshiLinkModel('Images').setTheme(THEMES.Black).setLink('/images'),
			component: TanoshiLink

		},
		{
			link: new TanoshiLinkModel('Links').setTheme(THEMES.Black).setLink('/links'),
			component: TanoshiLink
		}
	];


	const logoNavbarModel: Array<TanoshiNavigationLinkModel> = [
		{
			link: new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'),
			component: TanoshiLink
		}
	]

    const logoNavbarModelBlack: Array<TanoshiNavigationLinkModel> = [
		{
			link: new TanoshiLinkModel('Tanoshi').setTheme(THEMES.Black).setLink('/'),
			component: TanoshiLink
		}
	]

    const primaryDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const primaryMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const secondaryDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Secondary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const secondaryMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Secondary)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const blackDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtRight(navbarRightItemModels)
		.setItemsAtCenter(logoNavbarModel)

	const blackMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsWhenClosed(logoNavbarModel)
		.setItemsWhenOpened(navbarRightItemModels);

    const whiteDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.White)
        .setItemsAtRight(navbarRightItemModelsBlack)
        .setItemsAtCenter(logoNavbarModelBlack)

    const whiteMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.White)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const successDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Success)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const successMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Success)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const dangerDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Danger)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const dangerMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Danger)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const warningDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Warning)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const warningMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Warning)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

    const infoDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Info)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const infoMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Info)
        .setItemsWhenClosed(logoNavbarModel)
        .setItemsWhenOpened(navbarRightItemModels);

	const transparentDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
		.setTheme(THEMES.Transparent)
		.setItemsAtRight(navbarRightItemModels)
		.setItemsAtCenter(logoNavbarModel)

	const transparentMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
		.setTheme(THEMES.Transparent)
		.setItemsWhenClosed(logoNavbarModel)
		.setItemsWhenOpened(navbarRightItemModels);

</script>
  
<Hst.Story title="molecules/navigation/material/basic">
    <Hst.Variant title="primary">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={primaryDesktopNavigationModel}  tanoshiMobileNavigationModel={primaryMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={secondaryDesktopNavigationModel}  tanoshiMobileNavigationModel={secondaryMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={blackDesktopNavigationModel}  tanoshiMobileNavigationModel={blackMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={whiteDesktopNavigationModel}  tanoshiMobileNavigationModel={whiteMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={successDesktopNavigationModel}  tanoshiMobileNavigationModel={successMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={dangerDesktopNavigationModel}  tanoshiMobileNavigationModel={dangerMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={warningDesktopNavigationModel}  tanoshiMobileNavigationModel={warningMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiNavigationMaterial tanoshiDesktopNavigationModel={infoDesktopNavigationModel}  tanoshiMobileNavigationModel={infoMobileNavigationModel} />
    </Hst.Variant>

	<Hst.Variant title="transparent">
		<TanoshiNavigationMaterial tanoshiDesktopNavigationModel={transparentDesktopNavigationModel}  tanoshiMobileNavigationModel={transparentMobileNavigationModel} />
	</Hst.Variant>
  
</Hst.Story>