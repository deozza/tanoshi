<script lang="ts">
	import './tanoshiHeader.css';
	import type TanoshiHeaderModel from './TanoshiHeaderModel';

	export let tanoshiHeaderModel: TanoshiHeaderModel;
</script>

{#if tanoshiHeaderModel.htmlSize === 'h1'}
	<h1
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment} font-bold my-6"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h1>
{:else if tanoshiHeaderModel.htmlSize === 'h2'}
	<h2
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-5"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h2>
{:else if tanoshiHeaderModel.htmlSize === 'h3'}
	<h3
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-4"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h3>
{:else if tanoshiHeaderModel.htmlSize === 'h4'}
	<h4
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-3"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h4>
{:else if tanoshiHeaderModel.htmlSize === 'h5'}
	<h5
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-2"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h5>
{:else}
	<h6
		class="text-{tanoshiHeaderModel.displaySize} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-1"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h6>
{/if}
