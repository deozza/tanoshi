<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
    import TanoshiLinkModel from "../../atoms/link/TanoshiLinkModel";
	import TanoshiNavigation from "./TanoshiNavigation.svelte";
	import TanoshiNavigationModel from "./TanoshiNavigationModel";

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

	const defaultThemeNav = new TanoshiNavigationModel()
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const secondaryThemeNav = new TanoshiNavigationModel()
		.setTheme('secondary')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const whiteThemeNav = new TanoshiNavigationModel()
		.setTheme('white')	
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const blackThemeNav = new TanoshiNavigationModel()
		.setTheme('dark')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const successThemeNav = new TanoshiNavigationModel()
		.setTheme('success')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const warningThemeNav = new TanoshiNavigationModel()
		.setTheme('warning')
		.addItem(link1)
		.addItem(link2)
		.addItem(link3)
	const dangerThemeNav = new TanoshiNavigationModel()
		.setTheme('danger')
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
	<TanoshiNavigation tanoshiNavigationModel="{defaultThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{secondaryThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{whiteThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{blackThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{successThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{warningThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{dangerThemeNav}" />	
	<TanoshiNavigation tanoshiNavigationModel="{infoThemeNav}" />	
</Story>