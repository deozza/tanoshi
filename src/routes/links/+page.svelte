<script lang="ts">
	import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '$atoms/typography/header/TanoshiHeaderModel';
    import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
	import TanoshiImageModel from '$atoms/image/TanoshiImageModel';
    import TanoshiImage from '$atoms/image/TanoshiImage.svelte';

	const columnContainer = new TanoshiContainerModel('c');

	const linkHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Link')
		.setDisplaySize('3xl')
		.setHtmlSize('h1');


	const coloredLinksHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Link colors')
		.setDisplaySize('2xl')
		.setHtmlSize('h3');

	const blackLink = new TanoshiLinkModel('Black').setTheme('black');
    const primaryLink = new TanoshiLinkModel('White').setTheme('primary');
    const secondaryLink = new TanoshiLinkModel('Secondary').setTheme('secondary');
    const successLink = new TanoshiLinkModel('Success').setTheme('success');
    const dangerLink = new TanoshiLinkModel('Danger').setTheme('danger');
    const warningLink = new TanoshiLinkModel('Warning').setTheme('warning');
    const infoLink = new TanoshiLinkModel('Info').setTheme('info');

    const coloredLinksModels: Array<TanoshiLinkModel> = [
        blackLink,
        primaryLink,
        secondaryLink,
        successLink,
        dangerLink,
        warningLink,
        infoLink,
    ];

    const alternateContentLinkHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Alternate content')
        .setDisplaySize('2xl')
        .setHtmlSize('h3');

    const alternateContentLink = new TanoshiLinkModel('').setLink('https://via.placeholder.com/150');

    const buttonModel = new TanoshiButtonModel('Button as a link')
        .setTheme('primary')
    
    const imageModel = new TanoshiImageModel('https://via.placeholder.com/150', 'Placeholder image')


</script>

<main>
	<section id="button">
		<TanoshiContainer tanoshiContainerModel={columnContainer}>
			<TanoshiContainer tanoshiContainerModel={columnContainer}>
				<TanoshiHeader tanoshiHeaderModel={linkHeader} />

				<TanoshiHeader tanoshiHeaderModel={coloredLinksHeader} />
				<TanoshiContainer tanoshiContainerModel={columnContainer}>
					{#each coloredLinksModels as coloredLinksModel}
                    <TanoshiLink tanoshiLinkModel={coloredLinksModel} />
					{/each}
				</TanoshiContainer>

                <TanoshiHeader tanoshiHeaderModel={alternateContentLinkHeader} />
                <TanoshiLink tanoshiLinkModel={alternateContentLink}>
                    <TanoshiImage tanoshiImageModel={imageModel} />
                </TanoshiLink>
                <TanoshiLink tanoshiLinkModel={alternateContentLink}>
                    <TanoshiButton tanoshiButtonModel={buttonModel} />
                </TanoshiLink>

			</TanoshiContainer>
		</TanoshiContainer>
	</section>
</main>