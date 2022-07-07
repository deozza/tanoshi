<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import TanoshiImageModel from './TanoshiImageModel';
	import TanoshiImage from './TanoshiImage.svelte';

	const defaultImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder')
	const roundedImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder').setTheme('rounded')
	const circledImage = new TanoshiImageModel("https://via.placeholder.com/300", 'placeholder').setTheme('circled')

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
    }
  }}
/>
<Story name="Image">
	<div class='flex-c'>
		<TanoshiImage tanoshiImageModel='{defaultImage}'  />
		<TanoshiImage tanoshiImageModel='{roundedImage}'  />
		<TanoshiImage tanoshiImageModel='{circledImage}'  />
	</div>
</Story>


