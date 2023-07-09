<script lang="ts">
	import './../typography.css';
	import './tanoshiParagraph.css';
	import type TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p
	class="text-{tanoshiParagraphModel.displaySize} p-{tanoshiParagraphModel.theme} text-{tanoshiParagraphModel.alignment}"
	class:p-spacing={tanoshiParagraphModel.hasSpacing}
>
	{@html tanoshiParagraphModel.content}
	<slot />
</p>
