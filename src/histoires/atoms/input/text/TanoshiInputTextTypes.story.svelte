<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';
	import { INPUT_TEXT_TYPES } from '$lib';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('default')

    const passwordTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('password')
        .setType(INPUT_TEXT_TYPES.Password)

    const emailTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('email')
        .setType(INPUT_TEXT_TYPES.Email)

    const telTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('tel')
        .setType(INPUT_TEXT_TYPES.Tel)

    const colorTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('color')
        .setType(INPUT_TEXT_TYPES.Color)

</script>
  
<Hst.Story title="atoms/input/text/types" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiTextInputMaterial tanoshiInputModel={defaultTextInput} />
    </Hst.Variant>

    <Hst.Variant title="password">
        <TanoshiTextInputMaterial tanoshiInputModel={passwordTextInput} />
    </Hst.Variant>

    <Hst.Variant title="email">
        <TanoshiTextInputMaterial tanoshiInputModel={emailTextInput} />
    </Hst.Variant>

    <Hst.Variant title="tel">
        <TanoshiTextInputMaterial tanoshiInputModel={telTextInput} />
    </Hst.Variant>

    <Hst.Variant title="color">
        <TanoshiTextInputMaterial tanoshiInputModel={colorTextInput} />
    </Hst.Variant>

</Hst.Story>