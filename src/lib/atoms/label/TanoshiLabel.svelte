<script lang="ts">
	import './tanoshiLabel.css';
	import type TanoshiLabelModel from './TanoshiLabelModel';

	export let tanoshiLabelModel: TanoshiLabelModel;

</script>

<label class="flex-1" for='{tanoshiLabelModel.name}'>{tanoshiLabelModel.value}</label>
