<script lang="ts">
	import { fade } from 'svelte/transition';
	import './tanoshiAlert.css'
	import 'iconify-icon';

	import type TanoshiAlertModel from './TanoshiAlertModel';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '$atoms/typography/paragraph/TanoshiParagraphModel';
	import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, WIDTHS, getSizeEnumKeyByEnumValue, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
	import TanoshiIcon from '$atoms/icon/TanoshiIcon.svelte';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import { TanoshiButtonModel } from '$atoms';

	export let tanoshiAlertModel: TanoshiAlertModel;

	let backgroundTheme: THEMES = getThemeEnumKeyByEnumValue(tanoshiAlertModel.backgroundTheme)
	let textTheme: THEMES = getThemeEnumKeyByEnumValue(tanoshiAlertModel.titleTheme)

	const tanoshiTitleContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setBackgroundTheme(backgroundTheme)
		.setWidth(WIDTHS.W12)
		.setBorderShape(CONTAINER_BORDERS.Md)

	const tanoshiTitleModel: TanoshiParagraphModel = new TanoshiParagraphModel(tanoshiAlertModel.title)
		.setSize(getSizeEnumKeyByEnumValue(tanoshiAlertModel.titleSize))
		.setHasSpacing(false)
		.setTheme(textTheme)
		.setWidthAuto(true)

	$: visible = tanoshiAlertModel.visible;

	const closeIcon: TanoshiIconModel = new TanoshiIconModel('mdi:close')
		.setColor(getThemeEnumKeyByEnumValue(textTheme))
		.setHeight(16)
		.setWidth(16);

	const closeButton: TanoshiButtonModel = new TanoshiButtonModel('')
		.setBasicTheme(THEMES.Transparent)
		.setIconAtLeft(closeIcon)
		.setShape(CONTAINER_BORDERS.Full)

	function close() {
		tanoshiAlertModel.setVisible(false);
		tanoshiAlertModel = tanoshiAlertModel;
	}
</script>

{#if visible === true}
	<div class={tanoshiAlertModel.containerSize} out:fade in:fade>
		<TanoshiContainerGlass tanoshiContainerModel={tanoshiTitleContainerModel} customClasses="alert">
			<TanoshiParagraph tanoshiParagraphModel={tanoshiTitleModel} />
			<TanoshiButtonMaterial tanoshiButtonModel={closeButton} on:click={() => close()}/>
		</TanoshiContainerGlass>
	</div>
{/if}

<style>
	div{
		padding-bottom: 24px;
		padding-top: 24px;
	}

	:global(span > iconify-icon:hover) {
		cursor: pointer;
	}
</style>