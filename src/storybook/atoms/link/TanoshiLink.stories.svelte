<script lang="ts">
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	
	import TanoshiLinkModel from '$lib/atoms/link/TanoshiLinkModel';
	import TanoshiLink from '$lib/atoms/link/TanoshiLink.svelte';

	import TanoshiContainer from "$lib/molecules/container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "$lib/molecules/container/TanoshiContainerModel";

	const rowContainer = new TanoshiContainerModel('r')

	const defaultLink = new TanoshiLinkModel("Default link")
	const internalLink = new TanoshiLinkModel("Open in current tab").setLink('https://github.com/deozza/tanoshi').setIsInternal(true)
	const externalLink = new TanoshiLinkModel("Open in new tab").setLink('https://github.com/deozza/tanoshi').setIsInternal(false)

</script>

<Meta
	title="Atoms/Link"
	component={TanoshiLink}
	argTypes={{
    TanoshiLinkModel: {
			name: 'TanoshiLinkModel',
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
			description: 'Text displayed by the link',
			control: false,
    },
    link: {
			name: 'link',
			type: 'string',
			control: false,
			description: 'URl the link leads to',
    },
    isInternal: {
			name: 'isInternal',
			type: 'boolean',
			control: false,
			description: 'Set if the link should be opened in a new tab or not',
    },
  }}
/>
<Story name="Link destinations">
	<TanoshiContainer tanoshiContainerModel='{rowContainer}'>
		<TanoshiLink tanoshiLinkModel='{defaultLink}'  />
		<TanoshiLink tanoshiLinkModel='{internalLink}'  />
		<TanoshiLink tanoshiLinkModel='{externalLink}'  />
	</TanoshiContainer>
</Story>


