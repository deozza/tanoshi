<script lang="ts">
	import TanoshiHeader from '$atoms/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/header/TanoshiHeaderModel';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

	const rowContainer = new TanoshiContainerModel('r');
	const columnContainer = new TanoshiContainerModel('c');

	const buttonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Buttons')
		.setDisplaySize('3xl')
		.setHtmlSize('h2');

	const standardButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Standard buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const defaultButton = new TanoshiButtonModel('Primary');
	const secondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary');
	const infoButton = new TanoshiButtonModel('Info').setTheme('info');
	const successButton = new TanoshiButtonModel('Success').setTheme('success');
	const warningButton = new TanoshiButtonModel('Warning').setTheme('warning');
	const dangerButton = new TanoshiButtonModel('Danger').setTheme('danger');

	const standardButtonsModels: Array<TanoshiButtonModel> = [
		defaultButton,
		secondaryButton,
		infoButton,
		successButton,
		warningButton,
		dangerButton
	];

	const disabledButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Outlined buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const disabledDefaultButton = new TanoshiButtonModel('Primary').setIsDisabled(true);
	const disabledSecondaryButton = new TanoshiButtonModel('Secondary')
		.setTheme('secondary')
		.setIsDisabled(true);
	const disabledInfoButton = new TanoshiButtonModel('Info').setTheme('info').setIsDisabled(true);
	const disabledsuccessButton = new TanoshiButtonModel('Success')
		.setTheme('success')
		.setIsDisabled(true);
	const disabledWarningButton = new TanoshiButtonModel('Warning')
		.setTheme('warning')
		.setIsDisabled(true);
	const disabledDangerButton = new TanoshiButtonModel('Danger')
		.setTheme('danger')
		.setIsDisabled(true);

	const disabledButtonsModels: Array<TanoshiButtonModel> = [
		disabledDefaultButton,
		disabledSecondaryButton,
		disabledInfoButton,
		disabledsuccessButton,
		disabledWarningButton,
		disabledDangerButton
	];

	const outlinedButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Outlined buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const outlinedDefaultButton = new TanoshiButtonModel('Primary').setIsOutlined(true);
	const outlinedSecondaryButton = new TanoshiButtonModel('Secondary')
		.setTheme('secondary')
		.setIsOutlined(true);
	const outlinedInfoButton = new TanoshiButtonModel('Info').setTheme('info').setIsOutlined(true);
	const outlinedsuccessButton = new TanoshiButtonModel('Success')
		.setTheme('success')
		.setIsOutlined(true);
	const outlinedWarningButton = new TanoshiButtonModel('Warning')
		.setTheme('warning')
		.setIsOutlined(true);
	const outlinedDangerButton = new TanoshiButtonModel('Danger')
		.setTheme('danger')
		.setIsOutlined(true);

	const outlinedButtonsModels: Array<TanoshiButtonModel> = [
		outlinedDefaultButton,
		outlinedSecondaryButton,
		outlinedInfoButton,
		outlinedsuccessButton,
		outlinedWarningButton,
		outlinedDangerButton
	];

	const sizeButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Button sizes')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const smallButton = new TanoshiButtonModel('Primary').setSize('sm');
	const mediumButton = new TanoshiButtonModel('Primary').setSize('md');
	const largeButton = new TanoshiButtonModel('Primary').setSize('lg');
	const blockButton = new TanoshiButtonModel('Primary').setSize('block');

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

				<TanoshiHeader tanoshiHeaderModel={standardButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each standardButtonsModels as standardButtonsModel}
						<TanoshiButton tanoshiButtonModel={standardButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={disabledButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each disabledButtonsModels as disabledButtonsModel}
						<TanoshiButton tanoshiButtonModel={disabledButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={sizeButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each sizeButtonsModels as sizeButtonsModel}
						<TanoshiButton tanoshiButtonModel={sizeButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={outlinedButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each outlinedButtonsModels as outlinedButtonsModel}
						<TanoshiButton tanoshiButtonModel={outlinedButtonsModel} />
					{/each}
				</TanoshiContainer>
			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>