<script lang='ts'>
	import type TanoshiTabTitleModel from "./TanoshiTabTitleModel";

    export let tanoshiTabTitleModel: TanoshiTabTitleModel;
    export let activeIndex: number = 0
    export let index: number;
</script>

<div 
    class="header-item {tanoshiTabTitleModel.theme}"
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
div.header-item {
    cursor: pointer;
    padding: 1rem 1.25rem/* 20px */;
    margin-right: 2rem;
    margin-bottom: 2.5rem;
	border-radius: 0.375rem;
}

div.header-item:hover:not(.active) {
    cursor: pointer;
}

div.header-item.primary {
    background-color: rgba(var(--primary-bg-tab-title, var(--primary)));
    border: 1px solid rgba(var(--primary-border-tab-title, var(--primary)));
	box-shadow:  8px 8px 15px rgba(var(--primary-dark-bg-tab-title, var(--primary-dark))), -8px -8px 15px rgba(var(--primary-light-bg-tab-title, var(--primary-light)));
}

div.header-item.primary.active {
	box-shadow: inset 8px 8px 15px rgba(var(--primary-dark-bg-tab-title, var(--primary-dark))), inset -8px -8px 15px rgba(var(--primary-light-bg-tab-title, var(--primary-light)));
}

div.header-item.secondary {
    background-color: rgba(var(--secondary-bg-tab-title, var(--secondary)));
    border: 1px solid rgba(var(--secondary-border-tab-title, var(--secondary)));
    box-shadow:  8px 8px 15px rgba(var(--secondary-dark-bg-tab-title, var(--secondary-dark))), -8px -8px 15px rgba(var(--secondary-light-bg-tab-title, var(--secondary-light)));
}

div.header-item.secondary.active {
    box-shadow: inset 8px 8px 15px rgba(var(--secondary-dark-bg-tab-title, var(--secondary-dark))), inset -8px -8px 15px rgba(var(--secondary-light-bg-tab-title, var(--secondary-light)));
}

div.header-item.success {
    background-color: rgba(var(--success-bg-tab-title, var(--success)));
    border: 1px solid rgba(var(--success-border-tab-title, var(--success)));
    box-shadow:  8px 8px 15px rgba(var(--success-dark-bg-tab-title, var(--success-dark))), -8px -8px 15px rgba(var(--success-light-bg-tab-title, var(--success-light)));
}

div.header-item.success.active {
    box-shadow: inset 8px 8px 15px rgba(var(--success-dark-bg-tab-title, var(--success-dark))), inset -8px -8px 15px rgba(var(--success-light-bg-tab-title, var(--success-light)));
}

div.header-item.danger {
    background-color: rgba(var(--danger-bg-tab-title, var(--danger)));
    border: 1px solid rgba(var(--danger-border-tab-title, var(--danger)));
    box-shadow:  8px 8px 15px rgba(var(--danger-dark-bg-tab-title, var(--danger-dark))), -8px -8px 15px rgba(var(--danger-light-bg-tab-title, var(--danger-light)));
}

div.header-item.danger.active {
    box-shadow: inset 8px 8px 15px rgba(var(--danger-dark-bg-tab-title, var(--danger-dark))), inset -8px -8px 15px rgba(var(--danger-light-bg-tab-title, var(--danger-light)));
}

div.header-item.warning {
    background-color: rgba(var(--warning-bg-tab-title, var(--warning)));
    border: 1px solid rgba(var(--warning-border-tab-title, var(--warning)));
    box-shadow:  8px 8px 15px rgba(var(--warning-dark-bg-tab-title, var(--warning-dark))), -8px -8px 15px rgba(var(--warning-light-bg-tab-title, var(--warning-light)));
}

div.header-item.warning.active {
    box-shadow: inset 8px 8px 15px rgba(var(--warning-dark-bg-tab-title, var(--warning-dark))), inset -8px -8px 15px rgba(var(--warning-light-bg-tab-title, var(--warning-light)));
}

div.header-item.info {
    background-color: rgba(var(--info-bg-tab-title, var(--info)));
    border: 1px solid rgba(var(--info-border-tab-title, var(--info)));
    box-shadow:  8px 8px 15px rgba(var(--info-dark-bg-tab-title, var(--info-dark))), -8px -8px 15px rgba(var(--info-light-bg-tab-title, var(--info-light)));
}

div.header-item.info.active {
    box-shadow: inset 8px 8px 15px rgba(var(--info-dark-bg-tab-title, var(--info-dark))), inset -8px -8px 15px rgba(var(--info-light-bg-tab-title, var(--info-light)));
}

div.header-item.white {
    background-color: rgba(var(--white-bg-tab-title, var(--white)));
    border: 1px solid rgba(var(--white-border-tab-title, var(--white)));
    box-shadow:  8px 8px 15px rgba(var(--white-dark-bg-tab-title, var(--white-dark))), -8px -8px 15px rgba(var(--white-light-bg-tab-title, var(--white-light)));
}

div.header-item.white.active {
    box-shadow: inset 8px 8px 15px rgba(var(--white-dark-bg-tab-title, var(--white-dark))), inset -8px -8px 15px rgba(var(--white-light-bg-tab-title, var(--white-light)));
}

div.header-item.black {
    background-color: rgba(var(--black-bg-tab-title, var(--black)));
    border: 1px solid rgba(var(--black-border-tab-title, var(--black)));
    box-shadow:  8px 8px 15px rgba(var(--black-dark-bg-tab-title, var(--black-dark))), -8px -8px 15px rgba(var(--black-light-bg-tab-title, var(--black-light)));
}

div.header-item.black.active {
    box-shadow: inset 8px 8px 15px rgba(var(--black-dark-bg-tab-title, var(--black-dark))), inset -8px -8px 15px rgba(var(--black-light-bg-tab-title, var(--black-light)));
}
</style>