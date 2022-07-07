<script lang="ts">
	import './tanoshiParagraph.css';
	import TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel
</script>

	<p
		class="text-{tanoshiParagraphModel.displaySize} p-{tanoshiParagraphModel.theme} my-6"
	>
		{tanoshiParagraphModel.content}
		<slot />
	</p>
