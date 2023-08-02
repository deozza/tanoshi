import { TanoshiImage, TanoshiImageModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../app.css";
import { HEIGHTS, IMAGE_FILTERS, IMAGE_SHAPES, WIDTHS } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Image',
  component: TanoshiImage,
  argTypes: {
    tanoshiImageModel: {
      description: 'The model for the image',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'


// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Default: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text')
  },
};

export const Rounded: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setShape(IMAGE_SHAPES.Rounded)
  },
};

export const Circle: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setCircle('circledSize')
  },
};

export const Blur: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter(IMAGE_FILTERS.Blur)
  },
};

export const Grayscale: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter(IMAGE_FILTERS.Grayscale)
  },
};

export const Sepia: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter(IMAGE_FILTERS.Sepia)
  },
};

export const Invert: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter(IMAGE_FILTERS.Invert)
  },
};

export const Sizes: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setWidth(WIDTHS.W6).setHeight(HEIGHTS.H25PRCT)
  },
};
