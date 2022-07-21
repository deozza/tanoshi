<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
    import TanoshiPill from './TanoshiPill.svelte';
	import TanoshiPillModel from './TanoshiPillModel';

	const defaultPill = new TanoshiPillModel('Primary')
	const secondaryPill = new TanoshiPillModel('Secondary').setTheme('secondary')
	const infoPill = new TanoshiPillModel('Info').setTheme('info')
	const successPill = new TanoshiPillModel('Success').setTheme('success')
	const warningPill = new TanoshiPillModel('Warning').setTheme('warning')
	const dangerPill = new TanoshiPillModel('Danger').setTheme('danger')

	const outlinedDefaultPill = new TanoshiPillModel('Primary').setIsOutlined(true)
	const outlinedSecondaryPill = new TanoshiPillModel('Secondary').setTheme('secondary').setIsOutlined(true)
	const outlinedInfoPill = new TanoshiPillModel('Info').setTheme('info').setIsOutlined(true)
	const outlinedSuccessPill = new TanoshiPillModel('Success').setTheme('success').setIsOutlined(true)
	const outlinedWarningPill = new TanoshiPillModel('Warning').setTheme('warning').setIsOutlined(true)
	const outlinedDangerPill = new TanoshiPillModel('Danger').setTheme('danger').setIsOutlined(true)

	const smallPill = new TanoshiPillModel('Small').setSize('sm')
	const regularPill = new TanoshiPillModel('Regular')
	const largePill = new TanoshiPillModel('Large').setSize('lg')
</script>

<Meta
	title="Atoms/Pill"
	component={TanoshiPill}
	argTypes={{
    tanoshiPillModel: {
			name: 'tanoshiPillModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the pill element',
			control: 'object',
    },
    content: {
			name: 'content',
			type: 'string',
			description: 'Text displayed by the pill',
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
    isOutlined: {
			name: 'isOutlined',
			type: 'boolean',
			description: 'Set if the visual background is solid or blank',
			control: false,
    },
  }}
/>
<Story name="Block">
	<div class='flex-r'>
		<TanoshiPill tanoshiPillModel='{defaultPill}'  />
		<TanoshiPill tanoshiPillModel='{secondaryPill}'  />
		<TanoshiPill tanoshiPillModel='{infoPill}'  />
		<TanoshiPill tanoshiPillModel='{successPill}'  />
		<TanoshiPill tanoshiPillModel='{warningPill}'  />
		<TanoshiPill tanoshiPillModel='{dangerPill}'  />
	</div>
</Story>

<Story name="Outlined">
	<div class='flex-r'>
		<TanoshiPill tanoshiPillModel='{outlinedDefaultPill}'  />
		<TanoshiPill tanoshiPillModel='{outlinedSecondaryPill}'  />
		<TanoshiPill tanoshiPillModel='{outlinedInfoPill}'  />
		<TanoshiPill tanoshiPillModel='{outlinedSuccessPill}'  />
		<TanoshiPill tanoshiPillModel='{outlinedWarningPill}'  />
		<TanoshiPill tanoshiPillModel='{outlinedDangerPill}'  />
	</div>
</Story>

<Story name="Sizing">
	<div class='flex-r'>
		<TanoshiPill tanoshiPillModel='{smallPill}'  />
		<TanoshiPill tanoshiPillModel='{regularPill}'  />
		<TanoshiPill tanoshiPillModel='{largePill}'  />
	</div>
</Story>
