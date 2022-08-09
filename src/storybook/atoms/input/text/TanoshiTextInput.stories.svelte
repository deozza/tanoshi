<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import TanoshiTextInput from '$lib/atoms/input/text/TanoshiTextInput.svelte';
	import TanoshiTextInputModel from '$lib/atoms/input/text/TanoshiTextInputModel';

	const defaultTextInput = new TanoshiTextInputModel('Default');
	const limitedLengthTextInput = new TanoshiTextInputModel('Limited length')
		.setMinLength(2)
		.setMaxLength(5);
	const errorTextInput = new TanoshiTextInputModel('Error')
		.setError(true)
		.setErrorMessage('An error happened');
</script>

<Meta
	title="Atoms/Input"
	component={TanoshiTextInput}
	argTypes={{
		tanoshiTextInputModel: {
			name: 'tanoshiTextInputModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the text input element',
			control: 'object'
		}
	}}
/>

<Story name="Text">
	<!-- const defaultTextInput = new TanoshiTextInputModel('Default') -->
	<TanoshiTextInput tanoshiTextInputModel={defaultTextInput} />

	<!-- const limitedLengthTextInput = new TanoshiTextInputModel('Limited length').setMinLength(2).setMaxLength(5) -->
	<TanoshiTextInput tanoshiTextInputModel={limitedLengthTextInput} />

	<!-- const errorTextInput = new TanoshiTextInputModel('Error').setError(true).setErrorMessage('An error happened') -->
	<TanoshiTextInput tanoshiTextInputModel={errorTextInput} />
</Story>
