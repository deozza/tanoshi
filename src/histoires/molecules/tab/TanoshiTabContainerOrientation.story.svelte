<script lang="ts">

    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiTabTitleModel from '$molecules/tab/tabTitle/TanoshiTabTitleModel';
	import TanoshiTabContainerMaterial from '$molecules/tab/tabContainer/TanoshiTabContainerMaterial.svelte';
	import TanoshiTabContainerModel from '$molecules/tab/tabContainer/TanoshiTabContainerModel';
	import { THEMES } from '$lib';
	import TanoshiTabContentMaterial from '$molecules/tab/tabContent/TanoshiTabContentMaterial.svelte';
    export let Hst: Hst;

    const defaultTabContainer : TanoshiTabContainerModel = new TanoshiTabContainerModel(THEMES.Secondary, THEMES.Primary)

    const tab1: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 1', defaultTabContainer);
    const tab2: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 2', defaultTabContainer);
    const tab3: TanoshiTabTitleModel = new TanoshiTabTitleModel('Tab 3', defaultTabContainer);

    defaultTabContainer.addTab(tab1);
    defaultTabContainer.addTab(tab2);
    defaultTabContainer.addTab(tab3);

    const sidebarTabContainer : TanoshiTabContainerModel = new TanoshiTabContainerModel(THEMES.Secondary, THEMES.Primary)
    .setIsSideBar(true)
    .addTab(tab1)
    .addTab(tab2)
    .addTab(tab3)
    let activeIndex: number = 0;

</script>
  
<Hst.Story title="molecules/tab/orientation" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="default">
        <TanoshiTabContainerMaterial tanoshiTabContainerModel={defaultTabContainer} bind:activeIndex={activeIndex}>
            <TanoshiTabContentMaterial index={0} {activeIndex}>
                <div>1</div>
            </TanoshiTabContentMaterial>
            <TanoshiTabContentMaterial index={1} {activeIndex}>
                <div>2</div>
            </TanoshiTabContentMaterial>
            <TanoshiTabContentMaterial index={2} {activeIndex}>
                <div>3</div>
            </TanoshiTabContentMaterial>
        </TanoshiTabContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="sidebar">
        <TanoshiTabContainerMaterial tanoshiTabContainerModel={sidebarTabContainer} bind:activeIndex={activeIndex}>
            <TanoshiTabContentMaterial index={0} {activeIndex}>
                <div>1</div>
            </TanoshiTabContentMaterial>
            <TanoshiTabContentMaterial index={1} {activeIndex}>
                <div>2</div>
            </TanoshiTabContentMaterial>
            <TanoshiTabContentMaterial index={2} {activeIndex}>
                <div>3</div>
            </TanoshiTabContentMaterial>
        </TanoshiTabContainerMaterial>
    </Hst.Variant>

</Hst.Story>