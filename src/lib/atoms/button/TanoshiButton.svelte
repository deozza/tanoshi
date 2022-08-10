<script lang="ts">
	import './tanoshiButton.css';
	import type TanoshiButtonModel from './TanoshiButtonModel';

	export let tanoshiButtonModel: TanoshiButtonModel;
</script>

<button
	class="btn btn-{tanoshiButtonModel.theme} btn-{tanoshiButtonModel.size}"
	class:btn-outlined={tanoshiButtonModel.isOutlined === true}
	class:disabled:opacity-50={tanoshiButtonModel.isDisabled === true}
	class:pointer-events-none={tanoshiButtonModel.isDisabled === true}
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	type={tanoshiButtonModel.type}
	label={tanoshiButtonModel.content}
>
	<slot />
	{tanoshiButtonModel.content}
</button>
