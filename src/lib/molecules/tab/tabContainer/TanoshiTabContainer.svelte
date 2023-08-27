<script lang='ts'>
	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue } from "$lib/enums";
	import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
	import type TanoshiTabContainerModel from "./TanoshiTabContainerModel";

    export let tanoshiTabContainerModel: TanoshiTabContainerModel;

    const containerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)

    let active: number = 0
</script>

<TanoshiContainer tanoshiContainerModel={containerModel}>
    {#each tanoshiTabContainerModel.tabs as tab, index}
        <div 
        class="header-item {tanoshiTabContainerModel.theme}"
        class:active={active === index}
        role="tab"
        tabindex="{index}"
        on:click={() => active = index}
        on:keydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                active = index           
            }
        }}
        >
            <span>{tab.title}</span>
        </div>
    {/each}
</TanoshiContainer>
<TanoshiContainer tanoshiContainerModel={containerModel}>
    <slot name="tick" />
    <slot name="tack" />
    <slot name="toe" />
</TanoshiContainer>


<style>

div.white {
	background-color: var(--white-background-container, var(--white));
}

div.black {
	background-color: var(--black-background-container, var(--black));
}

div.primary {
	background-color: var(--primary-background-container, var(--primary));
}

div.secondary {
	background-color: var(--secondary-background-container, var(--secondary));
}

div.success {
	background-color: var(--success-background-container, var(--success));
}

div.warning {
	background-color: var(--warning-background-container, var(--warning));
}

div.danger {
	background-color: var(--danger-background-container, var(--danger));
}

div.info {
	background-color: var(--info-background-container, var(--info));
}

div.header-item {
    cursor: pointer;
	padding: 1rem 1.25rem/* 20px */;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-duration: 300ms;	
}
div.header-item.active {
    background-color: #e0e0e0;
}
</style>