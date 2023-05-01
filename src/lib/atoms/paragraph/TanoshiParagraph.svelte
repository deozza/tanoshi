<script lang="ts">
	import './tanoshiParagraph.css';
	import type TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p
	class="text-{tanoshiParagraphModel.displaySize} p-{tanoshiParagraphModel.theme} text-{tanoshiParagraphModel.alignment}"
	class:my-6={tanoshiParagraphModel.hasSpacing}
>
	{@html tanoshiParagraphModel.content}
	<slot />
</p>
