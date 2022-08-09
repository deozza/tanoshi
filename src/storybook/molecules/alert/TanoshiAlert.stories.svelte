<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import TanoshiAlertModel from '$lib/molecules/alert/TanoshiAlertModel';
	import TanoshiAlert from '$lib/molecules/alert/TanoshiAlert.svelte';

	import TanoshiContainer from '$lib/molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';

	const defaultColumnContainer = new TanoshiContainerModel('c');

	const defaultAlert = new TanoshiAlertModel('This is an alert', 'Hey you got a notification');
	const secondaryAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setTheme('secondary');
	const infoAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setTheme('info');
	const successAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setTheme('success');
	const warningAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setTheme('warning');
	const dangerAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setTheme('danger');

	const smallAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setSize('sm');
	const regularAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setSize('md');
	const largeAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setSize('lg');
	const blockAlert = new TanoshiAlertModel(
		'This is an alert',
		'Hey you got a notification'
	).setSize('block');
</script>

<Meta
	title="Molecules/Alert"
	component={TanoshiAlert}
	argTypes={{
		TanoshiAlertModel: {
			name: 'TanoshiAlertModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the alert element',
			control: 'object'
		},
		title: {
			name: 'title',
			type: 'string',
			description: 'Tile of the alert',
			control: false
		},
		content: {
			name: 'content',
			type: 'string',
			description: 'Details displayed in the alert',
			control: false
		},
		theme: {
			name: 'theme',
			type: 'string',
			control: false,
			description: 'Global visual theme'
		},
		size: {
			name: 'size',
			type: 'string',
			description: 'Size of the Alert',
			control: false
		}
	}}
/>
<Story name="Colors">
	<TanoshiContainer tanoshiContainerModel={defaultColumnContainer}>
		<TanoshiAlert tanoshiAlertModel={defaultAlert} />
		<TanoshiAlert tanoshiAlertModel={secondaryAlert} />
		<TanoshiAlert tanoshiAlertModel={successAlert} />
		<TanoshiAlert tanoshiAlertModel={warningAlert} />
		<TanoshiAlert tanoshiAlertModel={dangerAlert} />
		<TanoshiAlert tanoshiAlertModel={infoAlert} />
	</TanoshiContainer>
</Story>

<Story name="Sizing">
	<TanoshiContainer tanoshiContainerModel={defaultColumnContainer}>
		<TanoshiAlert tanoshiAlertModel={smallAlert} />
		<TanoshiAlert tanoshiAlertModel={regularAlert} />
		<TanoshiAlert tanoshiAlertModel={largeAlert} />
		<TanoshiAlert tanoshiAlertModel={blockAlert} />
	</TanoshiContainer>
</Story>
