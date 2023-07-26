import { TanoshiImage, TanoshiImageModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Image',
  component: TanoshiImage,
  tags: ['autodocs'],
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
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setTheme('rounded')
  },
};

export const Circle: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setCircle('48rem')
  },
};

export const Blur: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter('blur')
  },
};

export const Grayscale: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter('grayscale')
  },
};

export const Sepia: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter('sepia')
  },
};

export const Invert: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setFilter('invert')
  },
};

export const Width: Story = {
  args: {
    tanoshiImageModel: new TanoshiImageModel(catImageSource, 'alt text').setWidth('25%')
  },
};
