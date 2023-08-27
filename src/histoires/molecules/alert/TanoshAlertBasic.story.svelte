<script lang="ts">
	import { TanoshiAlertModel } from '$molecules';
	import TanoshiAlert from '$molecules/alert/TanoshiAlert.svelte';
    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title');
</script>
  
<Hst.Story title="molecules/alert/basic">
    <Hst.Variant title="default">

     <TanoshiAlert tanoshiAlertModel={defaultAlert} />
    </Hst.Variant>

</Hst.Story>