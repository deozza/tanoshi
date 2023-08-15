<script lang="ts">
	import type TanoshiLinkAsDropdownModel from './TanoshiLinkAsDropdownModel';
	import { TanoshiLink } from '$atoms';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, HEIGHTS, THEMES, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import { TanoshiContainer } from '$molecules';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import './../../../atoms/link/tanoshiLink.css';
	import './../../../main.css';
    import './tanoshiLinkAsDropdown.css'
	import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

    export let tanoshiLinkModel: TanoshiLinkAsDropdownModel;
    tanoshiLinkModel.linkTitle.setIconAtRight(faCaretDown)
    let theme: THEMES = getThemeEnumKeyByEnumValue(tanoshiLinkModel.backgroundTheme)

    const dropdownContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setHeight(HEIGHTS.HAUTO)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

</script>


<TanoshiContainer tanoshiContainerModel={dropdownContainer} customClasses={"dropdown"}>
    <TanoshiLink tanoshiLinkModel={tanoshiLinkModel.linkTitle} />
    <ul class="{theme}">
        {#each tanoshiLinkModel.links as link}
            <li><svelte:component this={link.component} tanoshiLinkModel={link.link} /></li>
        {/each}
    </ul>
</TanoshiContainer>


<style>
ul {
	display: none;
	position: absolute;
}

ul li {
	display: flex;
	flex-direction: column;
	padding-right: 2em;

}


ul.transparent {
	background-color: transparent;
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
	}
}
</style>