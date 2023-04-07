<script lang="ts">
	import TanoshiHeader from '$atoms/header/TanoshiHeader.svelte';
    import TanoshiHeaderModel from '$atoms/header/TanoshiHeaderModel';
    import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel'
    import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
	import type TanoshiInputModel from '$atoms/input/TanoshitInputModel';


	const columnContainer = new TanoshiContainerModel('c').setItemsAlignment('center').setDesktopSpacing('centered');
	const formContainer = new TanoshiContainerModel('c').setTheme('secondary').setSize('w-2/3').setDesktopSpacing('centered');

    const emailInput: TanoshiInputModel = new TanoshiTextInputModel('email').setType('email')
    const passwordInput: TanoshiInputModel = new TanoshiTextInputModel('password').setType('password')

    const loginButtonModel: TanoshiButtonModel = new TanoshiButtonModel('Send')

    function handleForm(){
        console.log('coucou')
    }

</script>
<main>
    <section id="button">
        <TanoshiContainer tanoshiContainerModel={columnContainer} customClasses={'min-h-screen'}>
                <TanoshiContainer tanoshiContainerModel={formContainer}>
                        <form class="min-w-full" on:submit|preventDefault={() => handleForm}>
                            <ul class="space-y-6">
                                <li class="">
                                    <div class="flex-container flex-r">
                                        <label class="flex-1" for='email'>Email</label>
                                        <div class="input-container">
                                            <input class="text-input" type="email" id='email' name="email">
                                        </div>

                                    </div>
                                </li>
                                <li class="">
                                    <div class="flex-container flex-r">
                                        <label class="flex-1" for='password'>Password</label>
                                        <div class="input-container">
                                            <input class="text-input" type="password" id='password' name="password">
                                        </div>

                                    </div>
                                </li>
                                <li class="">
                                    <div class="flex-container flex-r space-y-2 centered items-center">
                                        <button class="btn btn-primary btn-block" type="submit">Send</button>

                                    </div>
                                </li>
                            </ul>
                        </form>
                </TanoshiContainer>
        </TanoshiContainer >
    </section>
</main>
