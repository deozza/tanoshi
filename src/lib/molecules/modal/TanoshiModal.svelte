<script lang="ts">
	import { TanoshiButtonModel } from "$atoms";
	import TanoshiButton from "$atoms/button/TanoshiButton.svelte";
	import TanoshiHeader from "$atoms/typography/header/TanoshiHeader.svelte";
	import { CONTAINER_BORDERS, CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, WIDTHS } from "$lib/enums";
	import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
    import type TanoshiModalModel from "./TanoshiModalModel";
	import { faTimes } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let tanoshiModalModel: TanoshiModalModel;
    export let showModal: boolean = false;
    let dialog: HTMLDialogElement;

	const modalContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setWidth(WIDTHS.MaxW6)
		.setBorderShape(CONTAINER_BORDERS.Md)
		.setBackgroundTheme(THEMES.Primary)

	const headerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

	if(tanoshiModalModel.headerModel) {
		headerContainer.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
	}

	const closingModalButton: TanoshiButtonModel = new TanoshiButtonModel('')
    	.setBasicTheme(THEMES.Transparent)
		.setTextTheme(THEMES.Black)
		.setTextHoverTheme(THEMES.Black)

    $: if (dialog && showModal) dialog.showModal();
</script>

<TanoshiButton tanoshiButtonModel={tanoshiModalModel.openButton} on:click={() => (showModal = true)}/>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
		
		<TanoshiContainer tanoshiContainerModel={headerContainer}>
			{#if tanoshiModalModel.headerModel}
				<TanoshiHeader tanoshiHeaderModel={tanoshiModalModel.headerModel} />
			{/if}
			<TanoshiButton tanoshiButtonModel={closingModalButton} on:click={() => dialog.close()}>
				<span class="sr-only">Close modal</span>
				<Fa icon={faTimes} />
			</TanoshiButton>
		</TanoshiContainer>
		<hr />

        <slot name="body" />

        <hr />
        <slot name="footer" />

</dialog>

<style>
	
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	hr {
		display: block;
		unicode-bidi: isolate;
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
		margin-inline-start: auto;
		margin-inline-end: auto;
		overflow: hidden;
		border-style: inset;
		border-width: 1px;
	}
</style>