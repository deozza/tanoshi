<script lang="ts">

    import '../../../app.css';

	import { TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
    
    export let Hst: Hst;


    const targetInternalLink: TanoshiLinkModel = new TanoshiLinkModel('internal')

    const targetExternalLink: TanoshiLinkModel = new TanoshiLinkModel('www.github.com/deozza/tanoshi')
        .setIsInternal(false)
        .setLink('https://www.github.com/deozza/tanoshi')


</script>
  
<Hst.Story title="atoms/link/targets" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="_self">
        <TanoshiLink tanoshiLinkModel={targetInternalLink} />
    </Hst.Variant>

    <Hst.Variant title="_blank">
        <TanoshiLink tanoshiLinkModel={targetExternalLink} />
    </Hst.Variant>
</Hst.Story>