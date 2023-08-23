<script lang="ts">
	import { TanoshiButtonModel, TanoshiHeaderModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, HEADER_TAGS, SIZES, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import TanoshiModal from '$molecules/modal/TanoshiModal.svelte';
	import TanoshiModalModel from '$molecules/modal/TanoshiModalModel';
    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const buttonModal: TanoshiButtonModel = new TanoshiButtonModel('open')
    const headerModel: TanoshiHeaderModel = new TanoshiHeaderModel('Modal')
        .setTag(HEADER_TAGS.H6)
        .setSize(SIZES.Xl)
    const modalContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setWidth(WIDTHS.MaxW6)
        .setBackgroundTheme(THEMES.White)

    const defaultModal: TanoshiModalModel = new TanoshiModalModel(buttonModal, modalContainer)

    const modalWithHeader: TanoshiModalModel = new TanoshiModalModel(buttonModal, modalContainer)
        .setHeader(headerModel)

    const footerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
    const cancelButton: TanoshiButtonModel = new TanoshiButtonModel('cancel')
        .setBasicTheme(THEMES.Secondary)

    const modalWithFooter: TanoshiModalModel = new TanoshiModalModel(buttonModal, modalContainer)
        .setFooterContainerModel(footerContainer)
        .setHeader(headerModel)

    const requiredModal: TanoshiModalModel = new TanoshiModalModel(buttonModal, modalContainer)
        .setHeader(headerModel)
        .setFooterContainerModel(footerContainer)
        .setRequired(true);

    let showModal: boolean = false;

</script>
  
<Hst.Story title="molecules/modal/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">

    <TanoshiModal tanoshiModalModel={defaultModal} >
    
        <div slot="body">
            <ol class="definition-list">
                <li>of or relating to modality in logic</li>
                <li>
                    containing provisions as to the mode of procedure or the manner of taking effect —used of a
                    contract or legacy
                </li>
                <li>of or relating to a musical mode</li>
                <li>of or relating to structure as opposed to substance</li>
                <li>
                    of, relating to, or constituting a grammatical form or category characteristically indicating
                    predication
                </li>
                <li>of or relating to a statistical mode</li>
            </ol>
        
            <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
        </div>
    </TanoshiModal>
    </Hst.Variant>

    <Hst.Variant title="header">

        <TanoshiModal tanoshiModalModel={modalWithHeader}>
        
            <div slot="body">
                <ol class="definition-list">
                    <li>of or relating to modality in logic</li>
                    <li>
                        containing provisions as to the mode of procedure or the manner of taking effect —used of a
                        contract or legacy
                    </li>
                    <li>of or relating to a musical mode</li>
                    <li>of or relating to structure as opposed to substance</li>
                    <li>
                        of, relating to, or constituting a grammatical form or category characteristically indicating
                        predication
                    </li>
                    <li>of or relating to a statistical mode</li>
                </ol>
            
                <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
            </div>
        </TanoshiModal>
    </Hst.Variant>

    <Hst.Variant title="footer">

        <TanoshiModal tanoshiModalModel={modalWithFooter} bind:showModal>
        
            <div slot="body">
                <ol class="definition-list">
                    <li>of or relating to modality in logic</li>
                    <li>
                        containing provisions as to the mode of procedure or the manner of taking effect —used of a
                        contract or legacy
                    </li>
                    <li>of or relating to a musical mode</li>
                    <li>of or relating to structure as opposed to substance</li>
                    <li>
                        of, relating to, or constituting a grammatical form or category characteristically indicating
                        predication
                    </li>
                    <li>of or relating to a statistical mode</li>
                </ol>
            
                <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
            </div>

            <div slot="footer">
                <TanoshiButton tanoshiButtonModel={cancelButton} on:click={() => showModal = false}/>
            </div>
        </TanoshiModal>
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiModal tanoshiModalModel={requiredModal} bind:showModal>
    
            <div slot="body">
                <ol class="definition-list">
                    <li>of or relating to modality in logic</li>
                    <li>
                        containing provisions as to the mode of procedure or the manner of taking effect —used of a
                        contract or legacy
                    </li>
                    <li>of or relating to a musical mode</li>
                    <li>of or relating to structure as opposed to substance</li>
                    <li>
                        of, relating to, or constituting a grammatical form or category characteristically indicating
                        predication
                    </li>
                    <li>of or relating to a statistical mode</li>
                </ol>
            
                <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
            </div>

            <div slot="footer">
                <TanoshiButton tanoshiButtonModel={cancelButton} on:click={() => showModal = false}/>
            </div>
        </TanoshiModal>
    </Hst.Variant>

</Hst.Story>