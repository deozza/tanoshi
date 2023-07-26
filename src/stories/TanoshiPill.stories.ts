import { TanoshiPill, TanoshiPillModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Pill',
  component: TanoshiPill,
  tags: ['autodocs'],
  argTypes: {
    tanoshiPillModel: {
      description: 'The model for the pill',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiPill>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content')
  },
};

export const Secondary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setTheme('secondary')
  },
};

export const Success: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setTheme('success')
  },
};

export const Danger: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setTheme('danger')
  },
};

export const Warning: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setTheme('warning')
  },
};

export const Info: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setTheme('info')
  },
};

export const OutlinedPrimary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setIsOutlined(true)
  },
};

export const SmallPrimary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setSize('sm')
  },
};

export const LargePrimary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setSize('lg')
  },
};