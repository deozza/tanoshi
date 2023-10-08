<script lang="ts">
	import 'iconify-icon';
	import type TanoshiIconModel from './TanoshiIconModel';

    export let tanoshiIconModel: TanoshiIconModel;

</script>

<iconify-icon 
    icon="{tanoshiIconModel.icon}" 
    height="{tanoshiIconModel.height}px"
    width="{tanoshiIconModel.width}px"
    style="color: {tanoshiIconModel.color};"
    class:spin-icon={tanoshiIconModel.isSpinning === true}
/>

<style>
iconify-icon.spin-icon {
	animation: spin 2s linear infinite;
}
</style>