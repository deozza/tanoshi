<script lang="ts">
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
span {
	margin: 0.5rem/* 8px */;
	border-width: 1px;
	border-radius: 9999px;
    backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}

span.pill-md {
	padding-left: 1.25rem/* 20px */;
	padding-right: 1.25rem/* 20px */;
    font-size: 1rem/* 16px */;
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
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--primary-bg-pill, var(--primary)), 0.3);
}

span.pill-text-primary {
    color: rgba(var(--primary-text-pill, var(--primary)));
}

span.pill-border-primary {
	border: 1px solid rgba(var(--primary-border-pill, var(--primary)), 0.5);
}

span.pill-secondary {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--secondary-bg-pill, var(--secondary)), 0.3);
}

span.pill-text-secondary {
    color: rgba(var(--secondary-text-pill, var(--secondary)));
}

span.pill-border-secondary {
	border: 1px solid rgba(var(--secondary-border-pill, var(--secondary)), 0.5);
}

span.pill-success {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--success-bg-pill, var(--success)), 0.3);
}

span.pill-text-success {
    color: rgba(var(--success-text-pill, var(--success)));
}

span.pill-border-success {
	border: 1px solid rgba(var(--success-border-pill, var(--success)), 0.5);
}

span.pill-warning {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--warning-bg-pill, var(--warning)), 0.3);
}

span.pill-text-warning {
    color: rgba(var(--warning-text-pill, var(--warning)));
}

span.pill-border-warning {
	border: 1px solid rgba(var(--warning-border-pill, var(--warning)), 0.5);
}

span.pill-danger {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--danger-bg-pill, var(--danger)), 0.3);
}

span.pill-text-danger {
    color: rgba(var(--danger-text-pill, var(--danger)));
}

span.pill-border-danger {
	border: 1px solid rgba(var(--danger-border-pill, var(--danger)), 0.5);
}

span.pill-info {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--info-bg-pill, var(--info)), 0.3);
}

span.pill-text-info {
    color: rgba(var(--info-text-pill, var(--info)));
}

span.pill-border-info {
	border: 1px solid rgba(var(--info-border-pill, var(--info)), 0.5);
}

span.pill-white {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--white-bg-pill, var(--white)), 0.3);
}

span.pill-text-white {
    color: rgba(var(--white-text-pill, var(--white)));
}

span.pill-border-white {
	border: 1px solid rgba(var(--white-border-pill, var(--white)), 0.5);
}

span.pill-black {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--black-bg-pill, var(--black)), 0.3);
}

span.pill-text-black {
    color: rgba(var(--black-text-pill, var(--black)));
}

span.pill-border-black {
	border: 1px solid rgba(var(--black-border-pill, var(--black)), 0.5);
}

</style>