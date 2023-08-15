<script lang="ts">
	import './../../../main.css';
	import './tanoshiParagraph.css';
	import type TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p
	class="text-{tanoshiParagraphModel.size} p-{tanoshiParagraphModel.theme} text-{tanoshiParagraphModel.alignment}"
	class:p-spacing={tanoshiParagraphModel.hasSpacing}
>
	{@html tanoshiParagraphModel.content}
	<slot />
</p>


<style>
	p{
    width: 100%;
}

p.p-spacing {
    margin-top: 1.5rem/* 24px */;
    margin-bottom: 1.5rem/* 24px */;
}

p.p-black {
	color: var(--black-text-header, var(--black-dark));
}

p.p-white {
    color: var(--white-text-header, var(--white-dark));
}

p.p-primary {
    color: var(--primary-text-header, var(--primary-dark));
}

p.p-secondary {
    color: var(--secondary-text-header, var(--secondary-dark));
}

p.p-success {
    color: var(--success-text-header, var(--success-dark));
}

p.p-warning {
    color: var(--warning-text-header, var(--warning-dark));
}

p.p-danger {
    color: var(--danger-text-header, var(--danger-dark));
}

p.p-info {
    color: var(--info-text-header, var(--info-dark));
}
</style>