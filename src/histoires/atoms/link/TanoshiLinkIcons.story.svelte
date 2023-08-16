<script lang="ts">

    import '../../../app.css';

	import { THEMES, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
    import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
    
    export let Hst: Hst;


    const noIconLink: TanoshiLinkModel = new TanoshiLinkModel('link')

    const iconAtLeftLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setIconAtLeft(faAppleAlt)

    const iconAtRightLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setIconAtRight(faAppleAlt)

    const onlyIconLink: TanoshiLinkModel = new TanoshiLinkModel('')
        .setIconAtLeft(faAppleAlt)



</script>
  
<Hst.Story title="atoms/link/icons" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="No icon">
        <TanoshiLink tanoshiLinkModel={noIconLink} />
    </Hst.Variant>

    <Hst.Variant title="Icon at left">
        <TanoshiLink tanoshiLinkModel={iconAtLeftLink} />
    </Hst.Variant>

    <Hst.Variant title="Icon at right">
        <TanoshiLink tanoshiLinkModel={iconAtRightLink} />
    </Hst.Variant>

    <Hst.Variant title="Only icon">
        <TanoshiLink tanoshiLinkModel={onlyIconLink} />
    </Hst.Variant>

</Hst.Story>