<script lang="ts">
	import './../../../main.css';
	import type TanoshiParagraphModel from './TanoshiParagraphModel';

	export let tanoshiParagraphModel: TanoshiParagraphModel;
</script>

<p
	class="text-{tanoshiParagraphModel.size} p-{tanoshiParagraphModel.theme} text-{tanoshiParagraphModel.alignment}"
	class:p-spacing={tanoshiParagraphModel.hasSpacing}
    class:width-auto={tanoshiParagraphModel.widthAuto}
>
	{@html tanoshiParagraphModel.content}
	<slot />
</p>


<style>
p{
    width: 100%;
}

p.width-auto{
    width: auto;
}

p.p-spacing {
    margin-top: 1.5rem/* 24px */;
    margin-bottom: 1.5rem/* 24px */;
}

p.p-black {
	color: rgba(var(--black-text-header, var(--black)));
}

p.p-white {
    color: rgba(var(--white-text-header, var(--white)));
}

p.p-primary {
    color: rgba(var(--primary-text-header, var(--primary-dark)));
}

p.p-secondary {
    color: rgba(var(--secondary-text-header, var(--secondary-dark)));
}

p.p-success {
    color: rgba(var(--success-text-header, var(--success-dark)));
}

p.p-warning {
    color: rgba(var(--warning-text-header, var(--warning-dark)));
}

p.p-danger {
    color: rgba(var(--danger-text-header, var(--danger-dark)));
}

p.p-info {
    color: rgba(var(--info-text-header, var(--info-dark)));
}
</style>