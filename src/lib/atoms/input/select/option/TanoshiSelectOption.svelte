<script lang="ts">
	import type TanoshiSelectOptionModel from "./TanoshiSelectOptionModel";

	export let tanoshiSelectOptionModel: TanoshiSelectOptionModel;

</script>

<option 
	value={tanoshiSelectOptionModel.value}
 	selected={tanoshiSelectOptionModel.selected}
 	disabled={tanoshiSelectOptionModel.disabled}
>
 	{tanoshiSelectOptionModel.name}
</option>