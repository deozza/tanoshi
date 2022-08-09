<script lang="ts">
	import { fade } from 'svelte/transition';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTimes } from '@fortawesome/free-solid-svg-icons/index.es';

	import type TanoshiAlertModel from './TanoshiAlertModel';
	import './tanoshiAlert.css';

	import TanoshiContainer from '$lib/molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';

	import TanoshiParagraph from '$lib/atoms/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '$lib/atoms/paragraph/TanoshiParagraphModel';

	export let tanoshiAlertModel: TanoshiAlertModel;

	const SIZE_MATCH: object = {
		sm: {
			container: 'px-4',
			title: 'base',
			paragraph: 'sm'
		},
		md: {
			container: 'w-6/12 px-5',
			title: 'lg',
			paragraph: 'base'
		},
		lg: {
			container: 'w-9/12 px-6',
			title: 'xl',
			paragraph: 'base'
		},
		block: {
			container: 'w-full px-6',
			title: '2xl',
			paragraph: 'base'
		}
	};

	const tanoshiMainContainerModel: TanoshiContainerModel = new TanoshiContainerModel('c')
		.setTheme(tanoshiAlertModel.theme)
		.setSize('w-full');

	const tanoshiCloseContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
		'r'
	).setDesktopSpacing('end');
	const tanoshiTitleContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
		'r'
	).setDesktopSpacing('start');
	const tanoshiTextContainerModel: TanoshiContainerModel = new TanoshiContainerModel(
		'r'
	).setDesktopSpacing('start');

	const tanoshiTitleModel: TanoshiParagraphModel = new TanoshiParagraphModel(
		tanoshiAlertModel.title
	)
		.setDisplaySize(SIZE_MATCH[tanoshiAlertModel.size]['title'])
		.setHasSpacing(false);
	const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel(
		tanoshiAlertModel.content
	)
		.setDisplaySize(SIZE_MATCH[tanoshiAlertModel.size]['paragraph'])
		.setHasSpacing(false);

	$: visible = tanoshiAlertModel.visible;

	function close() {
		tanoshiAlertModel.setVisible(false);
		tanoshiAlertModel = tanoshiAlertModel;
	}
</script>

{#if visible === true}
	<div class={SIZE_MATCH[tanoshiAlertModel.size]['container']} out:fade>
		<TanoshiContainer tanoshiContainerModel={tanoshiMainContainerModel} customClasses="alert">
			<TanoshiContainer tanoshiContainerModel={tanoshiCloseContainerModel}>
				<button on:click={() => close()}>
					<Fa icon={faTimes} />
				</button>
			</TanoshiContainer>
			<TanoshiContainer tanoshiContainerModel={tanoshiTitleContainerModel}>
				<TanoshiParagraph tanoshiParagraphModel={tanoshiTitleModel} />
			</TanoshiContainer>

			<TanoshiContainer tanoshiContainerModel={tanoshiTextContainerModel}>
				<TanoshiParagraph {tanoshiParagraphModel} />
			</TanoshiContainer>
		</TanoshiContainer>
	</div>
{/if}
