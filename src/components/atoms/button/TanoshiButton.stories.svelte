<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
    import TanoshiButton from './TanoshiButton.svelte';
	import TanoshiButtonModel from './TanoshiButtonModel';

	const defaultButton = new TanoshiButtonModel('Primary')
	const secondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary')
	const infoButton = new TanoshiButtonModel('Info').setTheme('info')
	const successButton = new TanoshiButtonModel('Success').setTheme('success')
	const warningButton = new TanoshiButtonModel('Warning').setTheme('warning')
	const dangerButton = new TanoshiButtonModel('Danger').setTheme('danger')

	const outlinedDefaultButton = new TanoshiButtonModel('Primary').setIsOutlined(true)
	const outlinedSecondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary').setIsOutlined(true)
	const outlinedInfoButton = new TanoshiButtonModel('Info').setTheme('info').setIsOutlined(true)
	const outlinedSuccessButton = new TanoshiButtonModel('Success').setTheme('success').setIsOutlined(true)
	const outlinedWarningButton = new TanoshiButtonModel('Warning').setTheme('warning').setIsOutlined(true)
	const outlinedDangerButton = new TanoshiButtonModel('Danger').setTheme('danger').setIsOutlined(true)

	const disabledDefaultButton = new TanoshiButtonModel('Primary').setIsDisabled(true)
	const disabledSecondaryButton = new TanoshiButtonModel('Secondary').setTheme('secondary').setIsDisabled(true)
	const disabledInfoButton = new TanoshiButtonModel('Info').setTheme('info').setIsDisabled(true)
	const disabledSuccessButton = new TanoshiButtonModel('Success').setTheme('success').setIsDisabled(true)
	const disabledWarningButton = new TanoshiButtonModel('Warning').setTheme('warning').setIsDisabled(true)
	const disabledDangerButton = new TanoshiButtonModel('Danger').setTheme('danger').setIsDisabled(true)

	const smallButton = new TanoshiButtonModel('Small').setSize('sm')
	const regularButton = new TanoshiButtonModel('Regular')
	const largeButton = new TanoshiButtonModel('Large').setSize('lg')
	const blockButton = new TanoshiButtonModel('Block').setSize('block')
</script>

<Meta
	title="Atoms/Button"
	component={TanoshiButton}
	argTypes={{
    tanoshiButtonModel: {
			name: 'tanoshiButtonModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the button element',
			control: 'object',
    },
    content: {
			name: 'content',
			type: 'string',
			description: 'Text displayed by the button',
			control: false,
    },
    theme: {
			name: 'theme',
			type: 'string',
			control: false,
			description: 'Global visual theme',
    },
    size: {
			name: 'size',
			type: 'string',
			description: 'Size of the button',
			control: false,
    },
    type: {
			name: 'type',
			type: 'string',
			control: false,
			description: 'Configure the type html option tag',
    },
    isOutlined: {
			name: 'isOutlined',
			type: 'boolean',
			description: 'Set if the visual background is solid or blank',
			control: false,
    },
    isDisabled: {
			name: 'isDisabled',
			type: 'boolean',
			description: 'Enable user interaction',
			control: false,
    },
  }}
/>
<Story name="Block">
	<div class='flex-r'>
		<TanoshiButton tanoshiButtonModel='{defaultButton}'  />
		<TanoshiButton tanoshiButtonModel='{secondaryButton}'  />
		<TanoshiButton tanoshiButtonModel='{infoButton}'  />
		<TanoshiButton tanoshiButtonModel='{successButton}'  />
		<TanoshiButton tanoshiButtonModel='{warningButton}'  />
		<TanoshiButton tanoshiButtonModel='{dangerButton}'  />
	</div>
</Story>

<Story name="Outlined">
	<div class='flex-r'>
		<TanoshiButton tanoshiButtonModel='{outlinedDefaultButton}'  />
		<TanoshiButton tanoshiButtonModel='{outlinedSecondaryButton}'  />
		<TanoshiButton tanoshiButtonModel='{outlinedInfoButton}'  />
		<TanoshiButton tanoshiButtonModel='{outlinedSuccessButton}'  />
		<TanoshiButton tanoshiButtonModel='{outlinedWarningButton}'  />
		<TanoshiButton tanoshiButtonModel='{outlinedDangerButton}'  />
	</div>
</Story>

<Story name="Disabled">
	<div class='flex-r'>
		<TanoshiButton tanoshiButtonModel='{disabledDefaultButton}'  />
		<TanoshiButton tanoshiButtonModel='{disabledSecondaryButton}'  />
		<TanoshiButton tanoshiButtonModel='{disabledInfoButton}'  />
		<TanoshiButton tanoshiButtonModel='{disabledSuccessButton}'  />
		<TanoshiButton tanoshiButtonModel='{disabledWarningButton}'  />
		<TanoshiButton tanoshiButtonModel='{disabledDangerButton}'  />
	</div>
</Story>

<Story name="Sizing">
	<div class='flex-r'>
		<TanoshiButton tanoshiButtonModel='{smallButton}'  />
		<TanoshiButton tanoshiButtonModel='{regularButton}'  />
		<TanoshiButton tanoshiButtonModel='{largeButton}'  />
		<TanoshiButton tanoshiButtonModel='{blockButton}'  />
	</div>
</Story>
