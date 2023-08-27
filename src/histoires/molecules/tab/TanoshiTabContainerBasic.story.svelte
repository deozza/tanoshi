<script lang="ts">

    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiTabModel from '$molecules/tab/TanoshiTabModel';
	import TanoshiTabContainer from '$molecules/tab/tabContainer/TanoshiTabContainer.svelte';
	import TanoshiTabContainerModel from '$molecules/tab/tabContainer/TanoshiTabContainerModel';
	import { THEMES } from '$lib';
    export let Hst: Hst;

    const tab1: TanoshiTabModel = new TanoshiTabModel('Tab 1');
    const tab2: TanoshiTabModel = new TanoshiTabModel('Tab 2');
    const tab3: TanoshiTabModel = new TanoshiTabModel('Tab 3');

    const defaultTabContainer : TanoshiTabContainerModel = new TanoshiTabContainerModel(THEMES.Secondary, THEMES.Primary)
        .addTab(tab1)
        .addTab(tab2)
        .addTab(tab3)

</script>
  
<Hst.Story title="molecules/tab/default" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="default">
        <TanoshiTabContainer tanoshiTabContainerModel={defaultTabContainer} >
            <div slot="tick">1</div>
            <div slot="tack">2</div>
            <div slot="toe">3</div>
        </TanoshiTabContainer>

    </Hst.Variant>

</Hst.Story>