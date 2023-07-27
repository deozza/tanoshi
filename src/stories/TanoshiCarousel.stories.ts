import { TanoshiImageModel } from '$atoms';
import { TanoshiCarousel, TanoshiCarouselModel } from '$molecules';

import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'molecules/Image/Carousel',
  component: TanoshiCarousel,
  tags: ['autodocs'],
  argTypes: {
    tanoshiImageModel: {
      description: 'The model for the carousel',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

const bluredImageModel = new TanoshiImageModel(catImageSource, 'blured image').setFilter('blur').setWidth('auto').setHeight('250px');
const grayscaledImageModel = new TanoshiImageModel(catImageSource, 'grayscaled image').setFilter('grayscale').setWidth('auto').setHeight('250px');
const sepiaedImageModel = new TanoshiImageModel(catImageSource, 'sepiaed image').setFilter('sepia').setWidth('auto').setHeight('250px');
const invertedImageModel = new TanoshiImageModel(catImageSource, 'inverted image').setFilter('invert').setWidth('auto').setHeight('250px');


// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Default: Story = {
  args: {
    tanoshiCarouselModel: new TanoshiCarouselModel()
      .addItem(bluredImageModel)
		  .addItem(grayscaledImageModel)
		  .addItem(sepiaedImageModel)
		  .addItem(invertedImageModel)
		  .setAutoplay(true)
		  .setAutoplaySpeed(5000)
		  .showControls(true)
      .setHeight('700px')
  },
};