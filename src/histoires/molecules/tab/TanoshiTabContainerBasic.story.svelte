<script lang="ts">

    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiTabTitleModel from '$molecules/tab/tabTitle/TanoshiTabTitleModel';
	import TanoshiTabContainer from '$molecules/tab/tabContainer/TanoshiTabContainer.svelte';
	import TanoshiTabContainerModel from '$molecules/tab/tabContainer/TanoshiTabContainerModel';
	import { THEMES } from '$lib';
	import TanoshiTabContent from '$molecules/tab/tabContent/TanoshiTabContent.svelte';
    export let Hst: Hst;

    const defaultTabContainer : TanoshiTabContainerModel = new TanoshiTabContainerModel(THEMES.Secondary, THEMES.Primary)

    const tab1: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 1', defaultTabContainer);
    const tab2: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 2', defaultTabContainer);
    const tab3: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 3', defaultTabContainer);

    defaultTabContainer.addTab(tab1);
    defaultTabContainer.addTab(tab2);
    defaultTabContainer.addTab(tab3);

    let activeIndex: number = 0;
</script>
  
<Hst.Story title="molecules/tab/default" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="default">
        <TanoshiTabContainer tanoshiTabContainerModel={defaultTabContainer} bind:activeIndex={activeIndex}>
            <TanoshiTabContent index={0} {activeIndex}>
                <div>1</div>
            </TanoshiTabContent>
            <TanoshiTabContent index={1} {activeIndex}>
                <div>2</div>
            </TanoshiTabContent>
            <TanoshiTabContent index={2} {activeIndex}>
                <div>3</div>
            </TanoshiTabContent>
        </TanoshiTabContainer>

    </Hst.Variant>

</Hst.Story>