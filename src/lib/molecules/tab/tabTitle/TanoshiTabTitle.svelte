<script lang='ts'>
	import type TanoshiTabTitleModel from "./TanoshiTabTitleModel";

    export let tanoshiTabTitleModel: TanoshiTabTitleModel;
    export let activeIndex: number = 0
    export let index: number;
</script>

<div 
    class="header-item {tanoshiTabTitleModel.theme} active-{tanoshiTabTitleModel.activeTheme}"
    class:active={activeIndex === index}
    role="tab"
    tabindex="{index}"
    on:click={() => activeIndex = index}
    on:keydown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            activeIndex = index           
        }
    }}
    >
    <span>{tanoshiTabTitleModel.content}</span>
</div>

<style>

    
div.header-item.transparent, div.header-item.active.active-transparent {
	background-color: transparent;
}

div.header-item.white, div.header-item.active.active-white {
	background-color: var(--white-background-container, var(--white));
}


div.header-item.black, div.header-item.active.active-black {
	background-color: var(--black-background-container, var(--black));
}

div.header-item.primary, div.header-item.active.active-primary {
	background-color: var(--primary-background-container, var(--primary));
}

div.header-item.secondary, div.header-item.active.active-secondary {
	background-color: var(--secondary-background-container, var(--secondary));
}

div.header-item.success, div.header-item.active.active-success {
	background-color: var(--success-background-container, var(--success));
}

div.header-item.warning, div.header-item.active.active-warning {
	background-color: var(--warning-background-container, var(--warning));
}

div.header-item.danger, div.header-item.active.active-danger {
	background-color: var(--danger-background-container, var(--danger));
}

div.header-item.info, div.header-item.active.active-info {
	background-color: var(--info-background-container, var(--info));
}

div.header-item {
    cursor: pointer;
	padding: 1rem 1.25rem/* 20px */;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-duration: 300ms;	
}

</style>