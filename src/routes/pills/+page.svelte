<script lang="ts">
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/typography/header/TanoshiHeaderModel';
	import TanoshiPill from '$atoms/pill/TanoshiPill.svelte';
	import TanoshiPillModel from '$atoms/pill/TanoshiPillModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

	const rowContainer = new TanoshiContainerModel('r');
	const columnContainer = new TanoshiContainerModel('c');

	const pillHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Pills')
		.setDisplaySize('3xl')
		.setHtmlSize('h2');

	const standardPillHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Standard pills')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const defaultPill = new TanoshiPillModel('Primary');
	const secondaryPill = new TanoshiPillModel('Secondary').setTheme('secondary');
	const infoPill = new TanoshiPillModel('Info').setTheme('info');
	const successPill = new TanoshiPillModel('Success').setTheme('success');
	const warningPill = new TanoshiPillModel('Warning').setTheme('warning');
	const dangerPill = new TanoshiPillModel('Danger').setTheme('danger');

	const standardPillModels: Array<TanoshiPillModel> = [
		defaultPill,
		secondaryPill,
		infoPill,
		successPill,
		warningPill,
		dangerPill
	];

	const outlinedPillHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Outlined pills')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const outlinedDefaultPill = new TanoshiPillModel('Primary').setIsOutlined(true);
	const outlinedSecondaryPill = new TanoshiPillModel('Secondary').setIsOutlined(true).setTheme('secondary');
	const outlinedInfoPill = new TanoshiPillModel('Info').setIsOutlined(true).setTheme('info');
	const outlinedSuccessPill = new TanoshiPillModel('Success').setIsOutlined(true).setTheme('success');
	const outlinedWarningPill = new TanoshiPillModel('Warning').setIsOutlined(true).setTheme('warning');
	const outlinedDangerPill = new TanoshiPillModel('Danger').setIsOutlined(true).setTheme('danger');

	const outlinedPillModels: Array<TanoshiPillModel> = [
		outlinedDefaultPill,
		outlinedSecondaryPill,
		outlinedInfoPill,
		outlinedSuccessPill,
		outlinedWarningPill,
		outlinedDangerPill
	];

	const sizedPillHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Sizing pills')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const sizeDefaultPill = new TanoshiPillModel('Primary');	
	const sizeSmallPill = new TanoshiPillModel('Primary').setSize('sm');
	const sizeLargePill = new TanoshiPillModel('Primary').setSize('lg');

	const sizedPillModels: Array<TanoshiPillModel> = [
		sizeSmallPill,
		sizeDefaultPill,
		sizeLargePill,
	];

</script>

<main>
	<section id="button">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={pillHeader} />

				<TanoshiHeader tanoshiHeaderModel={standardPillHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each standardPillModels as standardPillModel}
						<TanoshiPill tanoshiPillModel={standardPillModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={outlinedPillHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each outlinedPillModels as outlinedPillModel}
						<TanoshiPill tanoshiPillModel={outlinedPillModel} />
					{/each}
				</TanoshiContainer>

				<TanoshiHeader tanoshiHeaderModel={sizedPillHeader} />
				<TanoshiContainer tanoshiContainerModel={rowContainer}>
					{#each sizedPillModels as sizedPillModel}
						<TanoshiPill tanoshiPillModel={sizedPillModel} />
					{/each}
				</TanoshiContainer>

			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>