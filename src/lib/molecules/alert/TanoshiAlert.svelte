<script lang="ts">
	import { fade } from 'svelte/transition';
	import { faTimes } from '@fortawesome/free-solid-svg-icons/index.js';
	import './tanoshiAlert.css'

	import type TanoshiAlertModel from './TanoshiAlertModel';
	import TanoshiContainer from '$lib/molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '$atoms/typography/paragraph/TanoshiParagraphModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, getSizeEnumKeyByEnumValue, getThemeEnumKeyByEnumValue, getWidthEnumKeyByEnumValue } from '$lib/enums';
	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { text } from '@sveltejs/kit';

	export let tanoshiAlertModel: TanoshiAlertModel;

	let backgroundTheme: THEMES = getThemeEnumKeyByEnumValue(tanoshiAlertModel.backgroundTheme)
	let textTheme: THEMES = getThemeEnumKeyByEnumValue(tanoshiAlertModel.titleTheme)

	const tanoshiTitleContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setBackgroundTheme(backgroundTheme)
		.setWidth(getWidthEnumKeyByEnumValue(tanoshiAlertModel.containerSize))

	const tanoshiTitleModel: TanoshiParagraphModel = new TanoshiParagraphModel(tanoshiAlertModel.title)
		.setSize(getSizeEnumKeyByEnumValue(tanoshiAlertModel.titleSize))
		.setHasSpacing(false)
		.setTheme(textTheme)
		.setWidthAuto(true)

	const closeButton: TanoshiButtonModel = new TanoshiButtonModel('')
    	.setBasicTheme(backgroundTheme)
		.setTextTheme(textTheme)
		.setIconAtLeft(faTimes);

	$: visible = tanoshiAlertModel.visible;

	function close() {
		tanoshiAlertModel.setVisible(false);
		tanoshiAlertModel = tanoshiAlertModel;
	}
</script>

{#if visible === true}
	<div class={tanoshiAlertModel.containerSize} out:fade>
		<TanoshiContainer tanoshiContainerModel={tanoshiTitleContainerModel} customClasses="alert">
			<TanoshiParagraph tanoshiParagraphModel={tanoshiTitleModel} />

			<TanoshiButton tanoshiButtonModel={closeButton} on:click={() => close()} />
		</TanoshiContainer>
	</div>
{/if}

<style>

</style>