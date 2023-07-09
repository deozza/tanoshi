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

	const standardButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Standard buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const defaultButton = new TanoshiButtonModel('Default');

	const disabledButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Disabled buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const disabledDefaultButton = new TanoshiButtonModel('Disabled').setIsDisabled(true);

	const outlinedButtonHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Outlined buttons')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const outlinedDefaultButton = new TanoshiButtonModel('Outlined').setIsOutlined(true);

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

				<TanoshiHeader tanoshiHeaderModel={standardButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					<TanoshiButton tanoshiButtonModel={defaultButton} />
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={disabledButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					<TanoshiButton tanoshiButtonModel={disabledDefaultButton} />
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={sizeButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each sizeButtonsModels as sizeButtonsModel}
						<TanoshiButton tanoshiButtonModel={sizeButtonsModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={outlinedButtonHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					<TanoshiButton tanoshiButtonModel={outlinedDefaultButton} />
				</TanoshiContainer>
			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>