<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSpinner } from '@fortawesome/free-solid-svg-icons/index.js';

	import './tanoshiButton.css';
	import type TanoshiButtonModel from './TanoshiButtonModel';

	export let tanoshiButtonModel: TanoshiButtonModel;
</script>

<button
	class="
	btn 
	btn-{tanoshiButtonModel.backgroundTheme}
	btn-text-{tanoshiButtonModel.textTheme}
	btn-border-{tanoshiButtonModel.borderTheme}
	btn-hover-{tanoshiButtonModel.backgroundHoverTheme}
	btn-text-hover-{tanoshiButtonModel.textHoverTheme}
	btn-border-hover-{tanoshiButtonModel.borderHoverTheme}
	btn-{tanoshiButtonModel.size}
	"
	class:disabled:opacity-50={tanoshiButtonModel.isDisabled === true}
	class:pointer-events-none={tanoshiButtonModel.isDisabled === true}
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	type={tanoshiButtonModel.type}
	label={tanoshiButtonModel.content}
>
	{#if tanoshiButtonModel.isLoading === true}
		<Fa icon={faSpinner} spin={true} size={'lg'}/>
	{/if}
	<slot />
	{tanoshiButtonModel.content}
	
</button>
