<script lang='ts'>
	import TanoshiAlert from "$molecules/alert/TanoshiAlert.svelte";
	import type TanoshiAlertModel from "$molecules/alert/TanoshiAlertModel";

    export let tanoshiAlertModels: Array<TanoshiAlertModel> = [];
</script>


<div>
    {#each tanoshiAlertModels as tanoshiAlertModel}
        <TanoshiAlert {tanoshiAlertModel} />
    {/each}
</div>

<style>
div{
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
}

@media (max-width: 600px) {
  div {
    top: 90px;
  }
}
</style>