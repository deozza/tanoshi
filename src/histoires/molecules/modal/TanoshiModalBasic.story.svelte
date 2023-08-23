<script lang="ts">
	import { TanoshiButtonModel } from '$atoms';
    import TanoshiModal from '$molecules/modal/TanoshiModal.svelte';
	import TanoshiModalModel from '$molecules/modal/TanoshiModalModel';
    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const buttonModal: TanoshiButtonModel = new TanoshiButtonModel('open')
    const defaultModal: TanoshiModalModel = new TanoshiModalModel(buttonModal);
</script>
  
<Hst.Story title="molecules/modal/basic" layout={{ type: 'grid', width: 600 }}>

    <TanoshiModal tanoshiModalModel={defaultModal}>
        <h2 slot="header">
            modal
            <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
        </h2>
    
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
</Hst.Story>