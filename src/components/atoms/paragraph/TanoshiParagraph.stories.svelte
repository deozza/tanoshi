<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import TanoshiParagraphModel from './TanoshiParagraphModel';
	import TanoshiParagraph from './TanoshiParagraph.svelte';

	const h1Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('3xl')
	const h2Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('2xl')
	const h3Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('xl')
	const h4Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('lg')
	const h5Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('base')
	const h6Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setdisplaySize('sm')

	const blackParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet")
	const whiteParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('white')
	const secondaryParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('secondary')
	const infoParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('info')
	const successParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('success')
	const warningParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('warning')
	const dangerParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('danger')

</script>

<Meta
	title="Atoms/Typography"
	component={TanoshiParagraph}
	argTypes={{
    TanoshiParagraphModel: {
			name: 'TanoshiParagraphModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the paragraph element',
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
<Story name="Paragraphs sizes">
	<div>
		<TanoshiParagraph tanoshiParagraphModel='{h1Paragraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{h2Paragraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{h3Paragraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{h4Paragraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{h5Paragraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{h6Paragraph}'  />
	</div>
</Story>

<Story name="Colored Paragraphs">
	<div>
		<TanoshiParagraph tanoshiParagraphModel='{blackParagraph}'  />
		<div class='bg-black'>
			<TanoshiParagraph tanoshiParagraphModel='{whiteParagraph}'  />
		</div>
		<TanoshiParagraph tanoshiParagraphModel='{secondaryParagraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{infoParagraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{successParagraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{warningParagraph}'  />
		<TanoshiParagraph tanoshiParagraphModel='{dangerParagraph}'  />
	</div>
</Story>

