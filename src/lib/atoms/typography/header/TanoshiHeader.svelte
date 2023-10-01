<script lang="ts">
	import './../../../main.css';
	import type TanoshiHeaderModel from './TanoshiHeaderModel';

	export let tanoshiHeaderModel: TanoshiHeaderModel;
</script>

{#if tanoshiHeaderModel.tag === 'h1'}
	<h1
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment} font-bold my-6"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h1>
{:else if tanoshiHeaderModel.tag === 'h2'}
	<h2
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-5"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h2>
{:else if tanoshiHeaderModel.tag === 'h3'}
	<h3
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-4"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h3>
{:else if tanoshiHeaderModel.tag === 'h4'}
	<h4
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-3"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h4>
{:else if tanoshiHeaderModel.tag === 'h5'}
	<h5
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-2"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h5>
{:else}
	<h6
		class="text-{tanoshiHeaderModel.size} h-{tanoshiHeaderModel.theme} text-{tanoshiHeaderModel.aligment}  font-bold my-1"
	>
		{tanoshiHeaderModel.content}
		<slot />
	</h6>
{/if}


<style>
	.h{
	font-weight: 700;
}

h1{
	margin-top: 1.5rem/* 24px */;
    margin-bottom: 1.5rem/* 24px */;
}

h2{
	margin-top: 1.25rem/* 20px */;
    margin-bottom: 1.25rem/* 20px */;
}

h3{
	margin-top: 1rem/* 16px */;
	margin-bottom: 1rem/* 16px */;
}

h4{
	margin-top: 0.875rem/* 14px */;
	margin-bottom: 0.875rem/* 14px */;
}

h5{
	margin-top: 0.75rem/* 12px */;
	margin-bottom: 0.75rem/* 12px */;
}

h6{
	margin-top: 0.625rem/* 10px */;
	margin-bottom: 0.625rem/* 10px */;
}

.h-black {
	color: rgba(var(--black-text-header, var(--black-dark)));
}

.h-white {
	color: rgba(var(--white-text-header, var(--white-dark)));
}

.h-primary {
	color: rgba(var(--primary-text-header, var(--primary-dark)));
}

.h-secondary {
	color: rgba(var(--secondary-text-header, var(--secondary-dark)));
}

.h-success {
	color: rgba(var(--success-text-header, var(--success-dark)));
}

.h-warning {
	color: rgba(var(--warning-text-header, var(--warning-dark)));
}

.h-danger {
	color: rgba(var(--danger-text-header, var(--danger-dark)));
}

.h-info {
	color: rgba(var(--info-text-header, var(--info-dark)));
}
</style>