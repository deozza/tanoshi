<script lang="ts">
	import type TanoshiLinkAsDropdownModel from './TanoshiLinkAsDropdownModel';
	import { TanoshiButtonModel, TanoshiLink } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { BUTTON_TYPES, CONTAINER_ORIENTATIONS, THEMES, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import { TanoshiContainer } from '$molecules';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import './../../../atoms/link/tanoshiLink.css';
	import './../../../main.css';
    import './tanoshiLinkAsDropdown.css'
	import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

    export let tanoshiLinkModel: TanoshiLinkAsDropdownModel;
    let theme: THEMES = getThemeEnumKeyByEnumValue(tanoshiLinkModel.theme)

    const tanoshiButtonModel: TanoshiButtonModel = new TanoshiButtonModel('Dropdown')
        .setType(BUTTON_TYPES.Button)
        .setBackgroundTheme(THEMES.Transparent)
        .setBorderTheme(THEMES.Transparent)
        .setTextTheme(theme)
        .setBackgroundHoverTheme(THEMES.Transparent)
        .setBorderHoverTheme(THEMES.Transparent)
        .setTextHoverTheme(theme)
        .setIconAtRight(faCaretDown)

    const dropdownContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)

</script>

<li class="dropdown">
    <TanoshiButton {tanoshiButtonModel} />
    <TanoshiContainer tanoshiContainerModel={dropdownContainer} customClasses={'dropdown-content'}>
        {#each tanoshiLinkModel.links as singleTanoshiLinkModel}
            <TanoshiLink tanoshiLinkModel={singleTanoshiLinkModel} />
        {/each}
    </TanoshiContainer>
</li>