<script lang="ts">
    export let index: number;
    export let activeIndex: number;
</script>

{#if index === activeIndex}
    <slot />
{/if}