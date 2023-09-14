<script lang="ts">
	import TanoshiSelectOption from "$atoms/input/select/option/TanoshiSelectOption.svelte";
	import type TanoshiSelectOptionModel from "$atoms/input/select/option/TanoshiSelectOptionModel";
	import { createEventDispatcher } from "svelte";
	import type TanoshiSelectInputModel from "./TanoshiSelectInputModel";
	export let tanoshiInputModel: TanoshiSelectInputModel;

	$: handleInput(tanoshiInputModel.selected)
	const dispatch = createEventDispatcher();
	function handleInput(selected: TanoshiSelectOptionModel | Array<TanoshiSelectOptionModel>) {
		if(Array.isArray(selected)) {
			let values: Array<string> = [];
			selected.forEach((option: TanoshiSelectOptionModel) => {
				values.push(option.value);
			})
			dispatch("input", { value: values, id: tanoshiInputModel.id });
			return;
		}

		dispatch('input', {value: selected.value, id: tanoshiInputModel.id});

	}
</script>

<div>

	{#if tanoshiInputModel.multiple === true}
		<select
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:change
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			bind:value={tanoshiInputModel.selected}
			multiple
		>
			{#each tanoshiInputModel.options as tanoshiSelectOptionModel}
				<TanoshiSelectOption {tanoshiSelectOptionModel} />
			{/each}
		</select>
	{:else}
		<select
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:change
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			bind:value={tanoshiInputModel.selected}
		>
			{#each tanoshiInputModel.options as tanoshiSelectOptionModel}
				<TanoshiSelectOption {tanoshiSelectOptionModel} />
			{/each}
		</select>
	{/if}

	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>
div {
	margin: 0.5rem/* 8px */;
    flex: 2;
}
select {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	border-width: 1px;
	border-radius: 0.375rem/* 6px */;
	color: var(--black-text-input, var(--black))
}

select.readonly:hover {
	cursor: not-allowed;
}

@media (max-width: 639px) {
	select {
		width: 90%;
	}
}
</style>