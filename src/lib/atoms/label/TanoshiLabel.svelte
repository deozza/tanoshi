<script lang="ts">
	import type TanoshiLabelModel from './TanoshiLabelModel';

	export let tanoshiLabelModel: TanoshiLabelModel;
</script>

<label class="flex items-center flex-1" for={tanoshiLabelModel.name}>{tanoshiLabelModel.value}</label>
