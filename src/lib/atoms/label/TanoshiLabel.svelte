<script lang="ts">
	import type TanoshiLabelModel from './TanoshiLabelModel';

	export let tanoshiLabelModel: TanoshiLabelModel;
</script>

<label 
	class="flex items-center"
	class:flex-1={tanoshiLabelModel.spacing === true}
	for={tanoshiLabelModel.name}
>
	{tanoshiLabelModel.value}
</label>
