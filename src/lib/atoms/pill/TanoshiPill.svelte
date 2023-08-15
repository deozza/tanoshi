<script lang="ts">
	import './tanoshiPill.css';
	import type TanoshiPillModel from './TanoshiPillModel';

	export let tanoshiPillModel: TanoshiPillModel;
</script>

<span
	class=" 
	pill-{tanoshiPillModel.backgroundTheme}
	pill-border-{tanoshiPillModel.borderTheme}
	pill-text-{tanoshiPillModel.textTheme}
	pill-{tanoshiPillModel.size}"
>
	{tanoshiPillModel.content}
</span>


<style>
.pill {
	margin: 0.5rem/* 8px */;
	border-width: 1px;
	border-radius: 9999px;
}

span.pill-md {
	padding-left: 1.25rem/* 20px */;
	padding-right: 1.25rem/* 20px */;
}

span.pill-sm {
	padding-left: 1rem/* 16px */;
	padding-right: 1rem/* 16px */;
	font-size: 0.875rem/* 14px */;
	line-height: 1.25rem/* 20px */;
}

span.pill-lg {
	padding-left: 1.5rem/* 24px */;
	padding-right: 1.5rem/* 24px */;
	font-size: 1.125rem/* 18px */;
	line-height: 1.75rem/* 28px */;
}

span.pill-primary {
    background-color: var(--primary-bg-pill, var(--primary));
}

span.pill-text-primary {
    color: var(--primary-text-pill, var(--primary));
}

span.pill-border-primary {
    border: 1px solid var(--primary-border-pill, var(--primary));
}


span.pill-secondary {
    background-color: var(--secondary-bg-pill, var(--secondary));
}

span.pill-text-secondary {
    color: var(--secondary-text-pill, var(--secondary));
}

span.pill-border-secondary {
    border: 1px solid var(--secondary-border-pill, var(--secondary));
}

span.pill-success {
    background-color: var(--success-bg-pill, var(--success));
}

span.pill-text-success {
    color: var(--success-text-pill, var(--success));
}

span.pill-border-success {
    border: 1px solid var(--success-border-pill, var(--success));
}


span.pill-warning {
    background-color: var(--warning-bg-pill, var(--warning));
}

span.pill-text-warning {
    color: var(--warning-text-pill, var(--warning));
}

span.pill-border-warning {
    border: 1px solid var(--warning-border-pill, var(--warning));
}


span.pill-danger {
    background-color: var(--danger-bg-pill, var(--danger));
}

span.pill-text-danger {
    color: var(--danger-text-pill, var(--danger));
}

span.pill-border-danger {
    border: 1px solid var(--danger-border-pill, var(--danger));
}

span.pill-info {
    background-color: var(--info-bg-pill, var(--info));
}

span.pill-text-info {
    color: var(--info-text-pill, var(--info));
}

span.pill-border-info {
    border: 1px solid var(--info-border-pill, var(--info));
}

span.pill-white {
    background-color: var(--white-bg-pill, var(--white));
}

span.pill-text-white {
    color: var(--white-text-pill, var(--white));
}

span.pill-border-white {
    border: 1px solid var(--white-border-pill, var(--white));
}

span.pill-black {
    background-color: var(--black-bg-pill, var(--black));
}

span.pill-text-black {
    color: var(--black-text-pill, var(--black));
}

span.pill-border-black {
    border: 1px solid var(--black-border-pill, var(--black));
}

</style>