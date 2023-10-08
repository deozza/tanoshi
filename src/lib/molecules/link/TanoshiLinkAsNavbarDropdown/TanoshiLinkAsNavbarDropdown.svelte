<script lang="ts">
	import type TanoshiLinkAsNavbarDropdownModel from './TanoshiLinkAsNavbarDropdownModel';
	import { TanoshiLink } from '$atoms';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, HEIGHTS, THEMES, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import { TanoshiContainerMaterial } from '$molecules';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import '../../../atoms/link/tanoshiLink.css';
	import '../../../main.css';

    export let tanoshiLinkModel: TanoshiLinkAsNavbarDropdownModel;
    tanoshiLinkModel.linkTitle.setIconAtRight('mdi:chevron-down')
    let theme: THEMES = getThemeEnumKeyByEnumValue(tanoshiLinkModel.backgroundTheme)

    const dropdownContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setHeight(HEIGHTS.HAUTO)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

</script>


<TanoshiContainerMaterial tanoshiContainerModel={dropdownContainer} customClasses={"dropdown"}>
    <TanoshiLink tanoshiLinkModel={tanoshiLinkModel.linkTitle} />
    <ul class="{theme}">
        {#each tanoshiLinkModel.links as link}
            <li><svelte:component this={link.component} tanoshiLinkModel={link.link} /></li>
        {/each}
    </ul>
</TanoshiContainerMaterial>


<style>
ul {
	display: none;
	position: absolute;
}

ul li {
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

ul.transparent {
	background-color: transparent;
	border: 1px solid var(--primary);
}

ul.white {
	background-color: var(--white-container, var(--white));
}

ul.black {
	background-color: var(--black-container, var(--black));
}

ul.primary {
	background-color: var(--primary-container, var(--primary));
}

ul.secondary {
	background-color: var(--secondary-container, var(--secondary));
}

ul.success {
	background-color: var(--success-container, var(--success));
}

ul.warning {
	background-color: var(--warning-container, var(--warning));
}

ul.danger {
	background-color: var(--danger-container, var(--danger));
}

ul.info {
	background-color: var(--info-container, var(--info));
}

@media (max-width: 639px) {
	ul {
		position: relative;
		padding-left: 8rem;
		background-color: transparent!important;
	}

	ul li {
		padding: 0;
	}
}
</style>