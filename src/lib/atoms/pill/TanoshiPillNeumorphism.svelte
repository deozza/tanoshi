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
    class:no-padding={tanoshiPillModel.hasPadding === false}
>
	{tanoshiPillModel.content}
</span>


<style>
span {
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
    background-color: rgba(var(--primary-bg-pill, var(--primary)));
	box-shadow:  8px 8px 15px rgba(var(--primary-dark-bg-pill, var(--primary-dark))), -8px -8px 15px rgba(var(--primary-light-bg-pill, var(--primary-light)));
}

span.pill-text-primary {
    color: rgba(var(--primary-text-pill, var(--primary)));
}

span.pill-border-primary {
    border: 1px solid rgba(var(--primary-border-pill, var(--primary)));
}

span.pill-secondary {
    background-color: rgba(var(--secondary-bg-pill, var(--secondary)));
	box-shadow:  8px 8px 15px rgba(var(--secondary-dark-bg-pill, var(--secondary-dark))), -8px -8px 15px rgba(var(--secondary-light-bg-pill, var(--secondary-light)));
}

span.pill-text-secondary {
    color: rgba(var(--secondary-text-pill, var(--secondary)));
}

span.pill-border-secondary {
    border: 1px solid rgba(var(--secondary-border-pill, var(--secondary)));
}

span.pill-success {
    background-color: rgba(var(--success-bg-pill, var(--success)));
	box-shadow:  8px 8px 15px rgba(var(--success-dark-bg-pill, var(--success-dark))), -8px -8px 15px rgba(var(--success-light-bg-pill, var(--success-light)));
}

span.pill-text-success {
    color: rgba(var(--success-text-pill, var(--success)));
}

span.pill-border-success {
    border: 1px solid rgba(var(--success-border-pill, var(--success)));
}

span.pill-warning {
    background-color: rgba(var(--warning-bg-pill, var(--warning)));
	box-shadow:  8px 8px 15px rgba(var(--warning-dark-bg-pill, var(--warning-dark))), -8px -8px 15px rgba(var(--warning-light-bg-pill, var(--warning-light)));
}

span.pill-text-warning {
    color: rgba(var(--warning-text-pill, var(--warning)));
}

span.pill-border-warning {
    border: 1px solid rgba(var(--warning-border-pill, var(--warning)));
}

span.pill-danger {
    background-color: rgba(var(--danger-bg-pill, var(--danger)));
	box-shadow:  8px 8px 15px rgba(var(--danger-dark-bg-pill, var(--danger-dark))), -8px -8px 15px rgba(var(--danger-light-bg-pill, var(--danger-light)));
}

span.pill-text-danger {
    color: rgba(var(--danger-text-pill, var(--danger)));
}

span.pill-border-danger {
    border: 1px solid rgba(var(--danger-border-pill, var(--danger)));
}

span.pill-info {
    background-color: rgba(var(--info-bg-pill, var(--info)));
	box-shadow:  8px 8px 15px rgba(var(--info-dark-bg-pill, var(--info-dark))), -8px -8px 15px rgba(var(--info-light-bg-pill, var(--info-light)));
}

span.pill-text-info {
    color: rgba(var(--info-text-pill, var(--info)));
}

span.pill-border-info {
    border: 1px solid rgba(var(--info-border-pill, var(--info)));
}

span.pill-white {
    background-color: rgba(var(--white-bg-pill, var(--white)));
	box-shadow:  8px 8px 15px rgba(var(--white-dark-bg-pill, var(--white-dark))), -8px -8px 15px rgba(var(--white-light-bg-pill, var(--white-light)));
}

span.pill-text-white {
    color: rgba(var(--white-text-pill, var(--white)));
}

span.pill-border-white {
    border: 1px solid rgba(var(--white-border-pill, var(--white)));
}

span.pill-black {
    background-color: rgba(var(--black-bg-pill, var(--black)));
	box-shadow:  8px 8px 15px rgba(var(--black-dark-bg-pill, var(--black-dark))), -8px -8px 15px rgba(var(--black-light-bg-pill, var(--black-light)));
}

span.pill-text-black {
    color: rgba(var(--black-text-pill, var(--black)));
}

span.pill-border-black {
    border: 1px solid rgba(var(--black-border-pill, var(--black)));
}

</style>