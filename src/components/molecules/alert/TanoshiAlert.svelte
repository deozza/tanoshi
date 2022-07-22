<script lang="ts">
	import './tanoshiAlert.css';
	import { fade } from 'svelte/transition';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTimes } from '@fortawesome/free-solid-svg-icons/index.es'

	import TanoshiContainer from "../container/TanoshiContainer.svelte";
	import TanoshiContainerModel from "../container/TanoshiContainerModel";

	import TanoshiHeader from '../../atoms/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '../../atoms/header/TanoshiHeaderModel';
	
	import TanoshiParagraph from '../../atoms/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '../../atoms/paragraph/TanoshiParagraphModel';

	import type TanoshiAlertModel from './TanoshiAlertModel';

	export let tanoshiAlertModel: TanoshiAlertModel

	const tanoshiMainContainerModel: TanoshiContainerModel = new TanoshiContainerModel('c').setTheme(tanoshiAlertModel.theme).setSize(tanoshiAlertModel.size)
	const tanoshiTextContainerModel: TanoshiContainerModel = new TanoshiContainerModel('c').setDesktopSpacing('start')
	const tanoshiCloseContainerModel: TanoshiContainerModel = new TanoshiContainerModel('c').setDesktopSpacing('end')

	const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel(tanoshiAlertModel.title)
	const tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel(tanoshiAlertModel.content)

	$: visible = tanoshiAlertModel.visible

	function close() {
		tanoshiAlertModel.setVisible(false)
		tanoshiAlertModel = tanoshiAlertModel
	}

</script>

{#if visible === true}
	<div class="{tanoshiMainContainerModel.size}" out:fade>
		<TanoshiContainer tanoshiContainerModel={tanoshiMainContainerModel} customClasses="alert">
			<TanoshiContainer tanoshiContainerModel={tanoshiCloseContainerModel} >
				<button  on:click={()=>close()}>
					<Fa icon={faTimes} />
				</button>
			</TanoshiContainer>

			<TanoshiContainer tanoshiContainerModel={tanoshiTextContainerModel} >
				<TanoshiHeader tanoshiHeaderModel={tanoshiHeaderModel} />
				<TanoshiParagraph tanoshiParagraphModel={tanoshiParagraphModel} />
			</TanoshiContainer>
		</TanoshiContainer>
	</div>
{/if}