<script lang="ts">
	import { TanoshiButtonModel, TanoshiHeaderModel, TanoshiLabelModel, TanoshiLinkModel, TanoshiTextInputModel, TanoshiTextareaInput, TanoshiTextareaInputModel } from '$atoms';
	import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import { BUTTON_TYPES, CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, HEADER_TAGS, HEIGHTS, INPUT_TEXT_TYPES, SIZES, THEMES, TanoshiContainerModel, TanoshiFormModel, TanoshiLabelAndInputModel, TanoshiLinkAsNavbarDropdownModel, TanoshiNavigationModel, WIDTHS } from '$lib';
	import type { TanoshiNavigationLinkModel } from '$lib/types/Types';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiForm from '$molecules/form/TanoshiForm.svelte';
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiNavigation from '$molecules/navigation/TanoshiNavigation.svelte';

    import '../../app.css';

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

    const contactContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setBorderTheme(THEMES.White)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.MinW10)
        .setHeight(HEIGHTS.MINH100VH)

    const contactFormHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Contact form')
        .setTag(HEADER_TAGS.H1)
        .setSize(SIZES['3Xl'])

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setPlaceholder('email')
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(emailInput)
        .setValue('Email')

    const objectInput: TanoshiTextInputModel = new TanoshiTextInputModel('object')
        .setPlaceholder('object')
        .setRequired(true)
    const objectInputLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(objectInput)
        .setValue('Object')

    const messageInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('message')
        .setPlaceholder('message')
        .setRequired(true)
    const messageInputLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(messageInput)
        .setValue('Message')

    const submitButton: TanoshiButtonModel = new TanoshiButtonModel('Send')
        .setBasicTheme(THEMES.Primary)
        .setType(BUTTON_TYPES.Submit)

    const contactForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(objectInputLabel, objectInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(messageInputLabel, messageInput, TanoshiTextareaInput))
    
    contactForm.container
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Md)
</script>
  
<Hst.Story title="examples/contact page">
    <TanoshiNavigation tanoshiDesktopNavigationModel={primaryDesktopNavigationModel} tanoshiMobileNavigationModel={primaryDesktopNavigationModel} />

    <main>
        <TanoshiContainer tanoshiContainerModel={contactContainer}>
            <TanoshiHeader tanoshiHeaderModel={contactFormHeader} />
            <TanoshiForm tanoshiFormModel={contactForm} />
        </TanoshiContainer>    
    </main>
</Hst.Story>

<style>
    @media (min-width: 768px) {
        main {
            padding-top: 64px;
        }
    }
</style>