import { TanoshiButton, TanoshiButtonModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Button',
  component: TanoshiButton,
  tags: ['autodocs'],
  argTypes: {
    tanoshiButtonModel: {
      description: 'The model for the button',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content')
  },
};

export const Secondary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setTheme('secondary')
  },
};

export const Success: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setTheme('success')
  },
};

export const Danger: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setTheme('danger')
  },
};

export const Warning: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setTheme('warning')
  },
};

export const Info: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setTheme('info')
  },
};

export const OutlinedPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setIsOutlined(true)
  },
};

export const DisabledPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setIsDisabled(true)
  },
};

export const SmallPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize('sm')
  },
};

export const LargePrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize('lg')
  },
};

export const BlockPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize('block')
  },
};