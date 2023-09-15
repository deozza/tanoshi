<script lang="ts">

    import '../../../../app.css';

	import { THEMES, TanoshiButtonModel, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLinkAsButton from '$molecules/link/TanoshiLinkAsButton/TanoshiLinkAsButton.svelte';
	import TanoshiLinkAsButtonModel from '$molecules/link/TanoshiLinkAsButton/TanoshiLinkAsButtonModel';
    export let Hst: Hst;

    const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('My github')
        .setBasicTheme(THEMES.Primary)
        .setIconAtLeft('mdi:github')

    const defaultLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Primary)
        .setIsInternal(false)
        .setLink('https://github.com/deozza')


    const defaultLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(defaultLink, defaultButton)

</script>
  
<Hst.Story title="molecules/link/link as button/basic" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="default">
        <TanoshiLinkAsButton tanoshiLinkModel={defaultLinkAsButton} />
    </Hst.Variant>
</Hst.Story>