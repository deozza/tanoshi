<script lang="ts">
	import type TanoshiLabelModel from './TanoshiLabelModel';

	export let tanoshiLabelModel: TanoshiLabelModel;
</script>

<label 
	class="flex items-center {tanoshiLabelModel.theme}"
	class:flex-1={tanoshiLabelModel.spacing === true}
	for={tanoshiLabelModel.name}
>
	{tanoshiLabelModel.value}
</label>


<style>
label.black {
	color: rgba(var(--black-text-header, var(--black-dark)));
}

label.white {
    color: rgba(var(--white-text-header, var(--white)));
}

label.primary {
    color: rgba(var(--primary-text-header, var(--primary-dark)));
}

label.secondary {
    color: rgba(var(--secondary-text-header, var(--secondary-dark)));
}

label.success {
    color: rgba(var(--success-text-header, var(--success-dark)));
}

label.warning {
    color: rgba(var(--warning-text-header, var(--warning-dark)));
}

label.danger {
    color: rgba(var(--danger-text-header, var(--danger-dark)));
}

label.info {
    color: rgba(var(--info-text-header, var(--info-dark)));
}
</style>