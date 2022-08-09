<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";

	import TanoshiContainer from "$lib/molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "$lib/molecules/container/TanoshiContainerModel";

	const defaultRowContainer = new TanoshiContainerModel('r')
	const defaultColumnContainer = new TanoshiContainerModel('c')

	const startRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('start')
	const centeredRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('centered')
	const endRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('end')
	const betweenRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('between')
	const aroundRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('around')
	const evenlyRowContainer = new TanoshiContainerModel('r').setDesktopSpacing('evenly')

	const transparentRowContainer = new TanoshiContainerModel('r')
	const lightRowContainer = new TanoshiContainerModel('r').setTheme('light')
	const darkRowContainer = new TanoshiContainerModel('r').setTheme('dark')
	const primaryRowContainer = new TanoshiContainerModel('r').setTheme('primary')
	const secondaryRowContainer = new TanoshiContainerModel('r').setTheme('secondary')
	const successRowContainer = new TanoshiContainerModel('r').setTheme('success')
	const warningRowContainer = new TanoshiContainerModel('r').setTheme('warning')
	const dangerRowContainer = new TanoshiContainerModel('r').setTheme('danger')
	const infoRowContainer = new TanoshiContainerModel('r').setTheme('info')
</script>

<Meta
	title="Molecules/Container"
	component={TanoshiContainer}
	argTypes={{
    	TanoshiContainerModel: {
			name: 'TanoshiContainerModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the container',
			control: 'object',
    	},
    	theme: {
			name: 'theme',
			type: 'string',
			description: 'Configure the background color of the container',
			control: false,
		},
    	backgroundImage: {
			name: 'backgroundImage',
			type: 'string',
			description: 'Set an image as the background of the container',
			control: false,
		},
    	desktopOrientation: {
			name: 'desktopOrientation',
			type: 'string',
			description: 'Configure the orientation of the content on a desktop view',
			control: false,
		},
    	mobileOrientation: {
			name: 'mobileOrientation',
			type: 'string',
			description: 'Configure the orientation of the content on a mobile view',
			control: false,
		},
    	desktopSpacing: {
			name: 'desktopSpacing',
			type: 'string',
			description: 'Configure the spacing between the elements in a desktop view',
			control: false,
		},
    	mobileSpacing: {
			name: 'mobileSpacing',
			type: 'string',
			description: 'Configure the spacing between the elements in a mobile view',
			control: false,
		}
  }}
/>

<Story name="Container row orientation">
	<TanoshiContainer tanoshiContainerModel='{defaultRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">4</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">5</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">6</div>
	</TanoshiContainer>
</Story>

<Story name="Container column orientation">
	<TanoshiContainer tanoshiContainerModel='{defaultColumnContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">4</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">5</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">6</div>
	</TanoshiContainer>
</Story>

<Story name="Container start spacing">
	<TanoshiContainer tanoshiContainerModel='{startRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>
<Story name="Container centered spacing">
	<TanoshiContainer tanoshiContainerModel='{centeredRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>
<Story name="Container end spacing">
	<TanoshiContainer tanoshiContainerModel='{endRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>
<Story name="Container between spacing">
	<TanoshiContainer tanoshiContainerModel='{betweenRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>
<Story name="Container around spacing">
	<TanoshiContainer tanoshiContainerModel='{aroundRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>
<Story name="Container evenly spacing">
	<TanoshiContainer tanoshiContainerModel='{evenlyRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>


<Story name="Colored container">
	<TanoshiContainer tanoshiContainerModel='{transparentRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{lightRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{darkRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{primaryRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-white">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-white">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-white">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{secondaryRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{successRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{warningRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{dangerRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
	<TanoshiContainer tanoshiContainerModel='{infoRowContainer}'>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">1</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">2</div>
		<div class="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-primary">3</div>
	</TanoshiContainer>
</Story>