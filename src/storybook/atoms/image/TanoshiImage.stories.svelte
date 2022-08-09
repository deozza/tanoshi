<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import TanoshiImageModel from './TanoshiImageModel';
	import TanoshiImage from './TanoshiImage.svelte';
	
	import TanoshiContainer from "../../molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "../../molecules/container/TanoshiContainerModel";

	const columnContainer = new TanoshiContainerModel('c')


	const defaultImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder')
	const roundedImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder').setTheme('rounded')
	const circledImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder').setTheme('circled')

	const defaultFilterImage = new TanoshiImageModel("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80", 'placeholder')
	const bluredImage = new TanoshiImageModel("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80", 'placeholder').setFilter('blur')
	const grayscaledImage = new TanoshiImageModel("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80", 'placeholder').setFilter('grayscale')
	const sepiaImage = new TanoshiImageModel("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80", 'placeholder').setFilter('sepia')
	const invertedImage = new TanoshiImageModel("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80", 'placeholder').setFilter('invert')


</script>

<Meta
	title="Atoms/Image"
	component={TanoshiImage}
	argTypes={{
    TanoshiImageModel: {
			name: 'TanoshiImageModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the link element',
			control: 'object',
    },
    content: {
			name: 'content',
			type: 'string',
			description: 'Url of the image',
			control: false,
    },
    alt: {
			name: 'alt',
			type: 'string',
			control: false,
			description: 'Text used for loading time and accessibility tools',
    },
    theme: {
			name: 'theme',
			type: 'string',
			control: false,
			description: 'Additional styling',
    },
    filter: {
			name: 'filter',
			type: 'string',
			control: false,
			description: 'Filter to apply on the image',
    }
  }}
/>
<Story name="Image form">
	<TanoshiContainer tanoshiContainerModel='{columnContainer}'>
		<TanoshiImage tanoshiImageModel='{defaultImage}' />
		<TanoshiImage tanoshiImageModel='{roundedImage}' />
		<TanoshiImage tanoshiImageModel='{circledImage}' />
	</TanoshiContainer>
</Story>

<Story name="Image filter">
	<TanoshiContainer tanoshiContainerModel='{columnContainer}'>
		<TanoshiImage tanoshiImageModel='{defaultFilterImage}' />
		<TanoshiImage tanoshiImageModel='{bluredImage}' />
		<TanoshiImage tanoshiImageModel='{grayscaledImage}' />
		<TanoshiImage tanoshiImageModel='{sepiaImage}' />
		<TanoshiImage tanoshiImageModel='{invertedImage}' />
	</TanoshiContainer>
</Story>


