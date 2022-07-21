<script lang="ts">
	import './tanoshiParagraph.css';
	import type TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel
</script>

	<p
		class="text-{tanoshiParagraphModel.displaySize} p-{tanoshiParagraphModel.theme} my-6"
	>
		{@html tanoshiParagraphModel.content}
		<slot />
	</p>
