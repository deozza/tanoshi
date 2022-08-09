<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";

	import TanoshiLinkModel from "$lib/atoms/link/TanoshiLinkModel";

	import TanoshiNavigation from "$lib/molecules/navigation/TanoshiNavigation.svelte";
	import TanoshiNavigationModel from "$lib/molecules/navigation/TanoshiNavigationModel";

	const link1 = new TanoshiLinkModel('link 1')
	const link2 = new TanoshiLinkModel('link 2')
	const link3 = new TanoshiLinkModel('link 3')

	const horizontalNav = new TanoshiNavigationModel()
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const verticalNav = new TanoshiNavigationModel()
		.setOrientation('vertical')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)

	const infoThemeNav = new TanoshiNavigationModel()
		.setTheme('info')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)

	
</script>

<Meta
	title="Molecules/Navigation"
	component={TanoshiNavigation}
	argTypes={{
    TanoshiNavigationModel: {
			name: 'TanoshiNavigationModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the navigation element',
			control: 'object',
    },
    content: {
			name: 'content',
			type: 'string',
			description: 'Text displayed by the header',
			control: false,
    },
    theme: {
			name: 'theme',
			type: 'string',
			control: false,
			description: 'Global visual theme',
    },
    displaySize: {
			name: 'displaySize',
			type: 'string',
			control: false,
			description: 'Which size the paragraph should be rendered',
    },
  }}
/>
<Story name="Horizontal">
	<TanoshiNavigation tanoshiNavigationModel="{horizontalNav}" />	
</Story>

<Story name="Vertical">
	<TanoshiNavigation tanoshiNavigationModel="{verticalNav}" />	
</Story>

<Story name="Theme">
	<TanoshiNavigation tanoshiNavigationModel="{infoThemeNav}" />	
</Story>