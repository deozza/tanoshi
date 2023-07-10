<script lang="ts">
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/typography/header/TanoshiHeaderModel';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

	const rowContainer = new TanoshiContainerModel('r');
	const columnContainer = new TanoshiContainerModel('c');

	const buttonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Buttons')
		.setDisplaySize('3xl')
		.setHtmlSize('h2');

	const coloredButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Buttons colors')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const primaryButton = new TanoshiButtonModel('Primary');
	const secondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary');
	const successButton = new TanoshiButtonModel('Success').setTheme('success');
	const dangerButton = new TanoshiButtonModel('Danger').setTheme('danger');
	const warningButton = new TanoshiButtonModel('Warning').setTheme('warning');
	const infoButton = new TanoshiButtonModel('Info').setTheme('info');

	const coloredButtonsModels: Array<TanoshiButtonModel> = [
		primaryButton,
		secondaryButton,
		successButton,
		dangerButton,
		warningButton,
		infoButton
	];
	
	const disabledButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Disabled buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const disabledPrimaryButton = new TanoshiButtonModel('Disabled').setIsDisabled(true);
	const disabledSecondaryButton = new TanoshiButtonModel('Disabled').setIsDisabled(true).setTheme('secondary');
	const disabledSuccessButton = new TanoshiButtonModel('Disabled').setIsDisabled(true).setTheme('success');
	const disabledDangerButton = new TanoshiButtonModel('Disabled').setIsDisabled(true).setTheme('danger');
	const disabledWarningButton = new TanoshiButtonModel('Disabled').setIsDisabled(true).setTheme('warning');
	const disabledInfoButton = new TanoshiButtonModel('Disabled').setIsDisabled(true).setTheme('info');

	const disabledButtonsModels: Array<TanoshiButtonModel> = [
		disabledPrimaryButton,
		disabledSecondaryButton,
		disabledSuccessButton,
		disabledDangerButton,
		disabledWarningButton,
		disabledInfoButton
	];

	const outlinedButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Outlined buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const outlinedPrimarytButton = new TanoshiButtonModel('Outlined').setIsOutlined(true);
	const outlinedSecondaryButton = new TanoshiButtonModel('Outlined').setIsOutlined(true).setTheme('secondary');
	const outlinedSuccessButton = new TanoshiButtonModel('Outlined').setIsOutlined(true).setTheme('success');
	const outlinedDangerButton = new TanoshiButtonModel('Outlined').setIsOutlined(true).setTheme('danger');
	const outlinedWarningButton = new TanoshiButtonModel('Outlined').setIsOutlined(true).setTheme('warning');
	const outlinedInfoButton = new TanoshiButtonModel('Outlined').setIsOutlined(true).setTheme('info');

	const outlinedButtonsModels: Array<TanoshiButtonModel> = [
		outlinedPrimarytButton,
		outlinedSecondaryButton,
		outlinedSuccessButton,
		outlinedDangerButton,
		outlinedWarningButton,
		outlinedInfoButton
	];

	const sizeButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Button sizes')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const smallButton = new TanoshiButtonModel('Small').setSize('sm');
	const mediumButton = new TanoshiButtonModel('Medium').setSize('md');
	const largeButton = new TanoshiButtonModel('Large').setSize('lg');
	const blockButton = new TanoshiButtonModel('Block').setSize('block');

	const sizeButtonsModels: Array<TanoshiButtonModel> = [
		smallButton,
		mediumButton,
		largeButton,
		blockButton
	];
</script>

<main>
	<section id="button">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={buttonHeader} />

				<TanoshiHeader tanoshiHeaderModel={coloredButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each coloredButtonsModels as coloredButtonsModel}
						<TanoshiButton tanoshiButtonModel={coloredButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={disabledButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each disabledButtonsModels as disabledButtonsModel}
						<TanoshiButton tanoshiButtonModel={disabledButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={outlinedButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each outlinedButtonsModels as outlinedButtonsModel}
						<TanoshiButton tanoshiButtonModel={outlinedButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={sizeButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each sizeButtonsModels as sizeButtonsModel}
						<TanoshiButton tanoshiButtonModel={sizeButtonsModel} />
					{/each}
				</TanoshiContainer>

				
			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>