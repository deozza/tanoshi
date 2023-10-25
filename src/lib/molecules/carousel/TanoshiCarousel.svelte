<script lang="ts">
	import { fade } from 'svelte/transition';
	import 'iconify-icon';

  import TanoshiImageInCarousel from '$atoms/image/TanoshiImageInCarousel.svelte';
  import TanoshiContainer from "$molecules/container/TanoshiContainerMaterial.svelte";
  import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
  import { onDestroy } from 'svelte';
	import type TanoshiCarouselModel from './TanoshiCarouselModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS } from '$lib/enums';

  export let tanoshiCarouselModel: TanoshiCarouselModel
  let interval: any;
  let startTouchXAxis: number = 0;

  const paginatorContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
    .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
    .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
    .setCustomHeight('5px')
  const carouselContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.CReverse)
    .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
    .setCustomHeight(tanoshiCarouselModel.height)

  let currentImageIndex: number = 0;
  $: currentImage = tanoshiCarouselModel
    .items[currentImageIndex]
    .setCustomHeight(tanoshiCarouselModel.height);

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

<TanoshiContainer tanoshiContainerModel={carouselContainer} >

    {#key currentImageIndex}
      <div class="absolute"
        transition:fade={{duration:tanoshiCarouselModel.transitionDuration}} 
        on:touchstart={(e) => startTouchXAxis = e.changedTouches[0].clientX} 
        on:touchend={(e) => onPointerMove(e)}
        >
        <TanoshiImageInCarousel tanoshiImageModel={currentImage}/>
      </div>
    {/key}

    <TanoshiContainer tanoshiContainerModel={paginatorContainer} customClasses={'carousel-commands'}>
      {#if tanoshiCarouselModel.showArrows === true}
        <button type="button" class="btn arrow"  on:click={() => moveCarouselBackward(true)}> 
          <iconify-icon icon='mdi:chevron-left' />
        </button>
      {/if}

      {#if tanoshiCarouselModel.showDots === true}
        {#each tanoshiCarouselModel.items as _,index}
          <button type="button" class="btn dot" class:bg-white="{index !== currentImageIndex}" on:click={() => updateCurrentImage(index)}></button>
        {/each}
      {/if}

      {#if tanoshiCarouselModel.showArrows === true}
        <button type="button" class="btn arrow"  on:click={() => moveCarouselForward(true)}> 
          <iconify-icon icon='mdi:chevron-right' />
        </button>
      {/if}

    </TanoshiContainer>  

</TanoshiContainer>


<style>
button.arrow{
    margin-left: 1.25rem/* 20px */;
    margin-right: 1.25rem/* 20px */;
    background-color: transparent;
    border: none;
}

button.dot{
    margin-left: 1.25rem/* 20px */;
    margin-right: 1.25rem/* 20px */;
    margin-top: 0.25rem/* 4px */;
    margin-bottom: 0.25rem/* 4px */;
    width: 1.25rem/* 20px */;
    height: 1.25rem/* 20px */;
    opacity: 0.5;
    --tw-bg-opacity: 1;
    background-color: rgb(100 116 139 / var(--tw-bg-opacity));
    border-radius: 9999px;
    border: none;

}

button.dot.bg-white{
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    opacity: 1;
}


</style>