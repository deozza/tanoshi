<script lang="ts">

    import '../../../app.css';

	import {  THEMES, TanoshiLinkModel, TanoshiNavigationModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiLinkAsNavbarDropdownModel from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdownModel';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';
    export let Hst: Hst;
	const dropdownTitle: TanoshiLinkModel = new TanoshiLinkModel('Dropdown').setTheme(THEMES.White);
	const linkPrimary: TanoshiLinkModel = new TanoshiLinkModel('Primary').setTheme(THEMES.White);
	const linkSecondary: TanoshiLinkModel = new TanoshiLinkModel('Secondary').setTheme(THEMES.White);
	const linkSuccess: TanoshiLinkModel = new TanoshiLinkModel('Success').setTheme(THEMES.White);

    const dropdownTitleBlack: TanoshiLinkModel = new TanoshiLinkModel('Dropdown').setTheme(THEMES.Black);
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

    const primaryDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const primaryMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Primary)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const secondaryDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Secondary)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const secondaryMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Secondary)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const blackDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtRight(navbarRightItemModels)
		.setItemsAtCenter(logoNavbarModel)

	const blackMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
		.setTheme(THEMES.Black)
		.setItemsAtLeft(logoNavbarModel)
		.setItemsAtCenter(navbarRightItemModels);

    const whiteDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.White)
        .setItemsAtRight(navbarRightItemModelsBlack)
        .setItemsAtCenter(logoNavbarModelBlack)

    const whiteMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.White)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const successDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Success)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const successMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Success)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const dangerDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Danger)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const dangerMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Danger)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const warningDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Warning)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const warningMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Warning)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

    const infoDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Info)
        .setItemsAtRight(navbarRightItemModels)
        .setItemsAtCenter(logoNavbarModel)

    const infoMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Info)
        .setItemsAtLeft(logoNavbarModel)
        .setItemsAtCenter(navbarRightItemModels);

</script>
  
<Hst.Story title="molecules/navigation/basic">
    <Hst.Variant title="primary">
        <TanoshiNavigation tanoshiDesktopNavigationModel={primaryDesktopNavigationModel}  tanoshiMobileNavigationModel={primaryMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiNavigation tanoshiDesktopNavigationModel={secondaryDesktopNavigationModel}  tanoshiMobileNavigationModel={secondaryMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiNavigation tanoshiDesktopNavigationModel={blackDesktopNavigationModel}  tanoshiMobileNavigationModel={blackMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiNavigation tanoshiDesktopNavigationModel={whiteDesktopNavigationModel}  tanoshiMobileNavigationModel={whiteMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiNavigation tanoshiDesktopNavigationModel={successDesktopNavigationModel}  tanoshiMobileNavigationModel={successMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiNavigation tanoshiDesktopNavigationModel={dangerDesktopNavigationModel}  tanoshiMobileNavigationModel={dangerMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiNavigation tanoshiDesktopNavigationModel={warningDesktopNavigationModel}  tanoshiMobileNavigationModel={warningMobileNavigationModel} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiNavigation tanoshiDesktopNavigationModel={infoDesktopNavigationModel}  tanoshiMobileNavigationModel={infoMobileNavigationModel} />
    </Hst.Variant>
  
</Hst.Story>