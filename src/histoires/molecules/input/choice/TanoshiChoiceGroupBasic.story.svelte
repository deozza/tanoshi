<script lang="ts">
	import TanoshiForm from '$molecules/form/TanoshiForm.svelte';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiChoiceInputModel from '$atoms/input/choice/TanoshiChoiceInputModel';
	import TanoshiChoiceGroupModel from '$molecules/input/choiceGroup/TanoshiChoiceGroupModel';
	import TanoshiChoiceGroup from '$molecules/input/choiceGroup/TanoshiChoiceGroup.svelte';
    export let Hst: Hst;


    const radioChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 1')
    const radioChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 2')
    const radioChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 3')
    const radioChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 1').setSpacing(false)
    const radioChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 2').setSpacing(false)
    const radioChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 3').setSpacing(false)

    const tanoshiChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('radio')
        .addChoice({label: radioChoice1InputLabel, input: radioChoice1Input})
        .addChoice({label: radioChoice2InputLabel, input: radioChoice2Input})
        .addChoice({label: radioChoice3InputLabel, input: radioChoice3Input})

</script>
  
<Hst.Story title="molecules/input/choice/choice group" layout={{ type: 'grid', width: 600 }}>
        <TanoshiChoiceGroup tanoshiInputModel={tanoshiChoiceGroupModel} />
</Hst.Story>