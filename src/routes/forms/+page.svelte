<script lang="ts">
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
	import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
	import TanoshiForm from '$molecules/form/TanoshiForm.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';

	const columnContainer = new TanoshiContainerModel('c')
		.setItemsAlignment('center')
		.setDesktopSpacing('centered');
	const formContainer = new TanoshiContainerModel('c')
		.setTheme('secondary')
		.setSize('w-1/3')
		.setDesktopSpacing('centered');

	const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('Email').setType('email');
	const emailLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput);

	const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('Password').setType('password').setError(true).setErrorMessage('You must enter a password');
	const passwordLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput);

	const loginButtonModel: TanoshiButtonModel = new TanoshiButtonModel('Send')
		.setSize('block')
		.setType('submit');
	const loginFormModel: TanoshiFormModel = new TanoshiFormModel(loginButtonModel)
		.addLabelAndInput(emailLabel, emailInput)
		.addLabelAndInput(passwordLabel, passwordInput);


	function handleForm(){
		console.log(emailInput)
	}
</script>

<main>
	<section id="form">
		<TanoshiContainer tanoshiContainerModel={columnContainer} customClasses={'min-h-screen'}>
			<TanoshiContainer tanoshiContainerModel={formContainer}>
				<TanoshiForm tanoshiFormModel={loginFormModel} on:submit={handleForm}/>
			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>
