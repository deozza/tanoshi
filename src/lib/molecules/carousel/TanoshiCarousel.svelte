<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons/index.js';
	import { fade } from 'svelte/transition';

  import TanoshiImageInCarousel from '$atoms/image/TanoshiImageInCarousel.svelte';
  import TanoshiContainer from "$molecules/container/TanoshiContainer.svelte";
  import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
  import { onDestroy, onMount } from 'svelte';
	import type TanoshiCarouselModel from './TanoshiCarouselModel';

  export let tanoshiCarouselModel: TanoshiCarouselModel
  let interval: any;
  let startTouchXAxis: number = 0;

  const paginatorContainer: TanoshiContainerModel = new TanoshiContainerModel('r').setItemsAlignment('center').setDesktopSpacing('centered')
  const carouselContainer: TanoshiContainerModel = new TanoshiContainerModel('c-reverse').setItemsAlignment('center')

  let currentImageIndex: number = 0;
  $: currentImage = tanoshiCarouselModel.items[currentImageIndex].setHeight(tanoshiCarouselModel.height);

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

  function onPointerMove(e: TouchEvent & { currentTarget: EventTarget & HTMLDivElement; }){
    if(e.changedTouches[0].clientX > startTouchXAxis) {
      moveCarouselBackward(true)
      return
    }

    moveCarouselForward(true)
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

<TanoshiContainer tanoshiContainerModel={carouselContainer} customClasses={tanoshiCarouselModel.height}>

    {#key currentImageIndex}
      <div class="absolute"
        transition:fade={{duration:tanoshiCarouselModel.transitionDuration}} 
        on:touchstart={(e) => startTouchXAxis = e.changedTouches[0].clientX} 
        on:touchend={(e) => onPointerMove(e)}
        >
        <TanoshiImageInCarousel tanoshiImageModel={currentImage}/>
      </div>
    {/key}

    <TanoshiContainer tanoshiContainerModel={paginatorContainer} customClasses={'z-10 '}>
      {#if tanoshiCarouselModel.showArrows === true}
        <button type="button" class="mx-5"  on:click={() => moveCarouselBackward(true)}> <Fa icon={faAngleLeft} /> </button>
      {/if}

      {#if tanoshiCarouselModel.showDots === true}
        {#each tanoshiCarouselModel.items as _,index}
          <button type="button" class="my-1 mx-5 w-5 h-5 opacity-50 bg-white-dark rounded-full" class:bg-white="{index !== currentImageIndex}" on:click={() => updateCurrentImage(index)}></button>
        {/each}
      {/if}

      {#if tanoshiCarouselModel.showArrows === true}
        <button type="button" class="mx-5"  on:click={() => moveCarouselForward(true)}> <Fa icon={faAngleRight} /> </button>
      {/if}

    </TanoshiContainer>  

</TanoshiContainer>
