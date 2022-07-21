<script lang="ts">
	import './tanoshiAlert.css';
	import { fade } from 'svelte/transition';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTimes } from '@fortawesome/free-solid-svg-icons/index.es'

	import type TanoshiAlertModel from './TanoshiAlertModel';

	import TanoshiHeader from '../../atoms/header/TanoshiHeader.svelte';
	import TanoshiHeaderModel from '../../atoms/header/TanoshiHeaderModel';
	
	import TanoshiParagraph from '../../atoms/paragraph/TanoshiParagraph.svelte';
	import TanoshiParagraphModel from '../../atoms/paragraph/TanoshiParagraphModel';

	export let tanoshiAlertModel: TanoshiAlertModel

	let tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel(tanoshiAlertModel.title)
	let tanoshiParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel(tanoshiAlertModel.content)

	$: visible = tanoshiAlertModel.visible

	function close() {
		tanoshiAlertModel.setVisible(false)
		tanoshiAlertModel = tanoshiAlertModel
	}

</script>

{#if visible === true}
	<div class="alert alert-{tanoshiAlertModel.theme} alert-{tanoshiAlertModel.size}" out:fade>
		<div class="flex-r w-full justify-end">
			<button  on:click={()=>close()}>
				<Fa icon={faTimes} />
			</button>
		</div>
		<TanoshiHeader tanoshiHeaderModel={tanoshiHeaderModel} />

		<TanoshiParagraph tanoshiParagraphModel={tanoshiParagraphModel} />
	</div>
{/if}