<script lang="ts">
	import './tanoshiPill.css';
	import type TanoshiPillModel from './TanoshiPillModel';

	export let tanoshiPillModel: TanoshiPillModel;
</script>

<span
	class="pill 
	pill-{tanoshiPillModel.backgroundTheme}
	pill-border-{tanoshiPillModel.borderTheme}
	pill-text-{tanoshiPillModel.textTheme}
	pill-{tanoshiPillModel.size}"
>
	{tanoshiPillModel.content}
</span>
