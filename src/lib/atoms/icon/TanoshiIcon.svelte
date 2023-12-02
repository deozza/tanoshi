<script lang="ts">
	import 'iconify-icon';
	import type TanoshiIconModel from './TanoshiIconModel';

    export let tanoshiIconModel: TanoshiIconModel;

</script>

<iconify-icon 
    icon="{tanoshiIconModel.icon}" 
    height="{tanoshiIconModel.height}px"
    width="{tanoshiIconModel.width}px"
    style="color: {tanoshiIconModel.color}; {tanoshiIconModel.customStyle}"
    class:spin-icon={tanoshiIconModel.isSpinning === true}
/>

<style>

iconify-icon {
    display: inline-block;
    margin: 6px;
}

iconify-icon.spin-icon {
	animation: spin 2s linear infinite;
}
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>