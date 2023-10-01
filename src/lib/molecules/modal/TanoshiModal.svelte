<script lang="ts">
	import { TanoshiButtonModel } from "$atoms";
	import TanoshiButtonMaterial from "$atoms/button/TanoshiButtonMaterial.svelte";
	import TanoshiHeader from "$atoms/typography/header/TanoshiHeader.svelte";
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES } from "$lib/enums";
	import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
    import type TanoshiModalModel from "./TanoshiModalModel";
	import 'iconify-icon';

    export let tanoshiModalModel: TanoshiModalModel;
    export let showModal: boolean = false;
    let dialog: HTMLDialogElement;

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
    $: if (dialog && !showModal) dialog.close();

</script>

<TanoshiButtonMaterial tanoshiButtonModel={tanoshiModalModel.openButton} on:click={() => (showModal = true)}/>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => {if(tanoshiModalModel.required === false) {dialog.close()}}}
	class="
	{tanoshiModalModel.containerModel.backgroundTheme}
	border-{tanoshiModalModel.containerModel.borderTheme}
	rounded-{tanoshiModalModel.containerModel.borderShape} 
	
	"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
		
		<TanoshiContainer tanoshiContainerModel={headerContainer}>
			{#if tanoshiModalModel.headerModel}
				<TanoshiHeader tanoshiHeaderModel={tanoshiModalModel.headerModel} />
			{/if}
			{#if tanoshiModalModel.required === false}
				<TanoshiButtonMaterial tanoshiButtonModel={closingModalButton} on:click={() => dialog.close()}>
					<span class="sr-only">Close modal</span>
					<iconify-icon icon='mdi:close' />
				</TanoshiButtonMaterial>
			{/if}
		</TanoshiContainer>
		<hr />

        <slot name="body" />
		{showModal}
		{#if tanoshiModalModel.footerContainerModel}
		<hr />

			<TanoshiContainer tanoshiContainerModel={tanoshiModalModel.footerContainerModel}>
				<slot name="footer" />
			</TanoshiContainer>
		{/if}
</dialog>

<style>

	dialog.transparent {
		background-color: transparent;
	}

	dialog.border-transparent {
		border-color: transparent;
	}

	dialog.white {
		background-color: var(--white-background-container, var(--white));
	}

	dialog.border-white {
		border: 1px solid var(--white-border-container, var(--white));
	}

	dialog.black {
		background-color: var(--black-background-container, var(--black));
	}

	dialog.border-black {
		border: 1px solid var(--black-border-container, var(--black));
	}

	dialog.primary {
		background-color: var(--primary-background-container, var(--primary));
	}

	dialog.border-primary {
		border: 1px solid var(--primary-border-container, var(--primary));
	}

	dialog.secondary {
		background-color: var(--secondary-background-container, var(--secondary));
	}

	dialog.border-secondary {
		border: 1px solid var(--secondary-border-container, var(--secondary));
	}

	dialog.success {
		background-color: var(--success-background-container, var(--success));
	}

	dialog.border-success {
		border: 1px solid var(--success-border-container, var(--success));
	}

	dialog.warning {
		background-color: var(--warning-background-container, var(--warning));
	}

	dialog.border-warning {
		border: 1px solid var(--warning-border-container, var(--warning));
	}

	dialog.danger {
		background-color: var(--danger-background-container, var(--danger));
	}

	dialog.border-danger {
		border: 1px solid var(--danger-border-container, var(--danger));
	}

	dialog.info {
		background-color: var(--info-background-container, var(--info));
	}

	dialog.border-info {
		border: 1px solid var(--info-border-container, var(--info));
	}
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