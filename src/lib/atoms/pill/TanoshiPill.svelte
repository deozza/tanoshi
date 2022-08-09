<script lang="ts">
	import './tanoshiPill.css';
	import type TanoshiPillModel from './TanoshiPillModel';
	
	export let tanoshiPillModel: TanoshiPillModel;
</script>

<span
	class="pill pill-{tanoshiPillModel.style} pill-{tanoshiPillModel.size}"
	class:pill-outlined={tanoshiPillModel.isOutlined === true}
>
	{tanoshiPillModel.content}
</span>