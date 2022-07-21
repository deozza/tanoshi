<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import TanoshiParagraphModel from './TanoshiParagraphModel';
	import TanoshiParagraph from './TanoshiParagraph.svelte';

	const h1Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('3xl')
	const h2Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('2xl')
	const h3Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('xl')
	const h4Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('lg')
	const h5Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('base')
	const h6Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('sm')

	const blackParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet")
	const whiteParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('white')
	const secondaryParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('secondary')
	const infoParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('info')
	const successParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('success')
	const warningParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('warning')
	const dangerParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('danger')

	const styledParagraph = new TanoshiParagraphModel("<span class='uppercase'>Lorem</span> <span class='underline'>ipsum</span> <span class='italic'>dolor</span> <span class='font-bold'>sit</span> <span class='line-through'>amet</span>")

</script>

<Meta
	title="Atoms/Typography/Paragraph"
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
		<!-- 	const h1Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('3xl')-->
		<TanoshiParagraph tanoshiParagraphModel='{h1Paragraph}'  />

		<!-- 	const h2Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('2xl') -->
		<TanoshiParagraph tanoshiParagraphModel='{h2Paragraph}'  />

		<!-- 	const h3Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('xl') -->
		<TanoshiParagraph tanoshiParagraphModel='{h3Paragraph}'  />

		<!-- 	const h4Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('lg') -->
		<TanoshiParagraph tanoshiParagraphModel='{h4Paragraph}'  />

		<!-- 	const h5Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('base') -->
		<TanoshiParagraph tanoshiParagraphModel='{h5Paragraph}'  />

		<!-- 	const h6Paragraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setDisplaySize('sm') -->
		<TanoshiParagraph tanoshiParagraphModel='{h6Paragraph}'  />
	</div>
</Story>

<Story name="Colored Paragraphs">
	<div>
		<!-- 	const blackParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet") -->
		<TanoshiParagraph tanoshiParagraphModel='{blackParagraph}'  />

		<div class='bg-black'>
			<!-- 	const whiteParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('white') -->
			<TanoshiParagraph tanoshiParagraphModel='{whiteParagraph}'  />
		</div>

		<!-- 	const secondaryParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('secondary') -->
		<TanoshiParagraph tanoshiParagraphModel='{secondaryParagraph}'  />

		<!-- 	const infoParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('info') -->
		<TanoshiParagraph tanoshiParagraphModel='{infoParagraph}'  />

		<!-- 	const successParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('success') -->
		<TanoshiParagraph tanoshiParagraphModel='{successParagraph}'  />

		<!-- 	const warningParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('warning') -->
		<TanoshiParagraph tanoshiParagraphModel='{warningParagraph}'  />

		<!-- 	const dangerParagraph = new TanoshiParagraphModel("Lorem ipsum dolor sit amet").setTheme('danger') -->
		<TanoshiParagraph tanoshiParagraphModel='{dangerParagraph}'  />
	</div>
</Story>

<Story name="Styled Paragraphs">
	<div>
		<!-- const styledParagraph = new TanoshiParagraphModel("<span class='uppercase'>Lorem</span> <span class='underline'>ipsum</span> <span class='italic'>dolor</span> <span class='font-bold'>sit</span> <span class='line-through'>amet</span>") -->
		<TanoshiParagraph tanoshiParagraphModel='{styledParagraph}'  />
	</div>
</Story>