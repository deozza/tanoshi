<script lang="ts">
    import TanoshiButton from '$lib/atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$lib/atoms/button/TanoshiButtonModel';

    const defaultButton = new TanoshiButtonModel('Primary');
	const secondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary');
	const infoButton = new TanoshiButtonModel('Info').setTheme('info');
	const successButton = new TanoshiButtonModel('Success').setTheme('success');
	const warningButton = new TanoshiButtonModel('Warning').setTheme('warning');
	const dangerButton = new TanoshiButtonModel('Danger').setTheme('danger');
</script>

<section>
    <TanoshiButton tanoshiButtonModel={defaultButton} />
    <TanoshiButton tanoshiButtonModel={secondaryButton} />
    <TanoshiButton tanoshiButtonModel={infoButton} />
    <TanoshiButton tanoshiButtonModel={successButton} />
    <TanoshiButton tanoshiButtonModel={warningButton} />
    <TanoshiButton tanoshiButtonModel={dangerButton} />
</section>