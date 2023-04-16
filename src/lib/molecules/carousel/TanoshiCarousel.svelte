<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons/index.js';

  import TanoshiImageInCarousel from '$atoms/image/TanoshiImageInCarousel.svelte';
  import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
  import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
  import { onDestroy } from 'svelte';
	import type TanoshiCarouselModel from './TanoshiCarouselModel';

  export let tanoshiCarouselModel: TanoshiCarouselModel
  let interval: any;

  const paginatorContainer: TanoshiContainerModel = new TanoshiContainerModel('r').setItemsAlignment('center').setDesktopSpacing('centered')
  const carouselContainer: TanoshiContainerModel = new TanoshiContainerModel('c').setItemsAlignment('center')



  let currentImageIndex: number = 0;
  $: currentImage = tanoshiCarouselModel.items[currentImageIndex];

  function moveCarouselForward(manually: boolean = false){
    if(currentImageIndex === tanoshiCarouselModel.items.length - 1){
      currentImageIndex = 0;
    }else{
      currentImageIndex++;
    }

    if(manually === true){
      stopAutoPlay()
    }
    return
  }

  function moveCarouselBackward(manually: boolean = false){
    if(currentImageIndex === 0){
      currentImageIndex = tanoshiCarouselModel.items.length - 1;
    }else{
      currentImageIndex--;
    }

    if(manually === true){
      stopAutoPlay()
    }

    return
  }

  function updateCurrentImage(index: number){
    currentImageIndex = index;
    stopAutoPlay()
  }

  function startAutoPlay() {
    if(tanoshiCarouselModel.autoplay){
      interval = setInterval(moveCarouselForward, tanoshiCarouselModel.autoplaySpeed)
    }
  }
  
  function stopAutoPlay() {
    clearInterval(interval)
  }

  if(tanoshiCarouselModel.autoplay){
    startAutoPlay()
  }

  onDestroy(()=>{stopAutoPlay()})

</script>

<TanoshiContainer tanoshiContainerModel={carouselContainer} customClasses={'relative'}>
  <TanoshiImageInCarousel tanoshiImageModel={currentImage} />
  <TanoshiContainer tanoshiContainerModel={paginatorContainer} customClasses={'absolute bottom-10'}>
    <button type="button" class="mx-5"  on:click={() => moveCarouselBackward(true)}> <Fa icon={faAngleLeft} /> </button>

    {#each tanoshiCarouselModel.items as _,index}
      <button type="button" class="mx-5 w-5 h-5 opacity-50 bg-white-dark rounded-full" class:bg-white="{index !== currentImageIndex}" on:click={() => updateCurrentImage(index)}></button>
    {/each}

    <button type="button" class="mx-5"  on:click={() => moveCarouselForward(true)}> <Fa icon={faAngleRight} /> </button>
  </TanoshiContainer>
</TanoshiContainer>
