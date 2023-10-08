<script lang="ts">

    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiTabTitleModel from '$molecules/tab/tabTitle/TanoshiTabTitleModel';
	import TanoshiTabContainerMaterial from '$molecules/tab/tabContainer/TanoshiTabContainerMaterial.svelte';
	import TanoshiTabContainerModel from '$molecules/tab/tabContainer/TanoshiTabContainerModel';
	import { THEMES } from '$lib';
	import TanoshiTabContentMaterial from '$molecules/tab/tabContent/TanoshiTabContentMaterial.svelte';
	import TanoshiTabContainerNeumorphism from '$molecules/tab/tabContainer/TanoshiTabContainerNeumorphism.svelte';
	import TanoshiTabContentNeumorphism from '$molecules/tab/tabContent/TanoshiTabContentNeumorphism.svelte';
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

    <Hst.Variant title="material">
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

    <Hst.Variant title="neumorphism">
        <TanoshiTabContainerNeumorphism tanoshiTabContainerModel={defaultTabContainer} bind:activeIndex={activeIndex}>
            <TanoshiTabContentNeumorphism index={0} {activeIndex}>
                <div>
                    Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.

                    Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                </div>
            </TanoshiTabContentNeumorphism>
            <TanoshiTabContentNeumorphism index={1} {activeIndex}>
                <div>
                    Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.

                    Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                </div>
            </TanoshiTabContentNeumorphism>
            <TanoshiTabContentNeumorphism index={2} {activeIndex}>
                <div>
                    Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.

                    Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                </div>
            </TanoshiTabContentNeumorphism>
        </TanoshiTabContainerNeumorphism>

    </Hst.Variant>

</Hst.Story>