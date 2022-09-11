<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import TanoshiHeaderModel from '$lib/atoms/header/TanoshiHeaderModel';
	import TanoshiHeader from '$lib/atoms/header/TanoshiHeader.svelte';

	const h1Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet');
	const h2Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet')
		.setDisplaySize('2xl')
		.setHtmlSize('h2');
	const h3Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet')
		.setDisplaySize('xl')
		.setHtmlSize('h3');
	const h4Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet')
		.setDisplaySize('lg')
		.setHtmlSize('h4');
	const h5Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet')
		.setDisplaySize('base')
		.setHtmlSize('h5');
	const h6Header = new TanoshiHeaderModel('Lorem ipsum dolor sit amet')
		.setDisplaySize('sm')
		.setHtmlSize('h6');

	const blackHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet');
	const whiteHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme('white');
	const secondaryHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme(
		'secondary'
	);
	const infoHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme('info');
	const successHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme('success');
	const warningHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme('warning');
	const dangerHeader = new TanoshiHeaderModel('Lorem ipsum dolor sit amet').setTheme('danger');
</script>

<Meta
	title="Atoms/Typography/Header"
	component={TanoshiHeader}
	argTypes={{
		tanoshiHeaderModel: {
			name: 'tanoshiHeaderModel',
			type: {
				name: 'object',
				required: true
			},
			description: 'Object used to configure the header element',
			control: 'object'
		},
		content: {
			name: 'content',
			type: 'string',
			description: 'Text displayed by the header',
			control: false
		},
		theme: {
			name: 'theme',
			type: 'string',
			control: false,
			description: 'Global visual theme'
		},
		htmlSize: {
			name: 'htmlSize',
			type: 'string',
			control: false,
			description: 'Which html tag should be used'
		},
		displaySize: {
			name: 'displaySize',
			type: 'string',
			control: false,
			description: 'Which size the header should be rendered'
		}
	}}
/>
<Story name="Headers sizes">
	<div>
		<TanoshiHeader tanoshiHeaderModel={h1Header} />
		<TanoshiHeader tanoshiHeaderModel={h2Header} />
		<TanoshiHeader tanoshiHeaderModel={h3Header} />
		<TanoshiHeader tanoshiHeaderModel={h4Header} />
		<TanoshiHeader tanoshiHeaderModel={h5Header} />
		<TanoshiHeader tanoshiHeaderModel={h6Header} />
	</div>
</Story>

<Story name="Colored Headers">
	<div>
		<TanoshiHeader tanoshiHeaderModel={blackHeader} />
		<TanoshiHeader tanoshiHeaderModel={whiteHeader} />
		<TanoshiHeader tanoshiHeaderModel={secondaryHeader} />
		<TanoshiHeader tanoshiHeaderModel={infoHeader} />
		<TanoshiHeader tanoshiHeaderModel={successHeader} />
		<TanoshiHeader tanoshiHeaderModel={warningHeader} />
		<TanoshiHeader tanoshiHeaderModel={dangerHeader} />
	</div>
</Story>
