<script lang="ts">
	import { fade } from 'svelte/transition';
	import './tanoshiAlert.css'
	import 'iconify-icon';

	import type TanoshiAlertModel from './TanoshiAlertModel';
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '$atoms/typography/paragraph/TanoshiParagraphModel';
	import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, WIDTHS, getSizeEnumKeyByEnumValue, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
	import TanoshiIcon from '$atoms/icon/TanoshiIcon.svelte';

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

	function close() {
		tanoshiAlertModel.setVisible(false);
		tanoshiAlertModel = tanoshiAlertModel;
	}
</script>

{#if visible === true}
	<div class={tanoshiAlertModel.containerSize} out:fade in:fade>
		<TanoshiContainerMaterial tanoshiContainerModel={tanoshiTitleContainerModel} customClasses="alert">
			<TanoshiParagraph tanoshiParagraphModel={tanoshiTitleModel} />
			<span on:click={() => close()}>
				<TanoshiIcon tanoshiIconModel={closeIcon} />
			</span>
		</TanoshiContainerMaterial>
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