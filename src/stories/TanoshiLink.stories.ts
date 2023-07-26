import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";
import { TanoshiLink, TanoshiLinkModel } from '$atoms';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Link',
  component: TanoshiLink,
  tags: ['autodocs'],
  argTypes: {
    tanoshiLinkModel: {
      description: 'The model for the link',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Dark: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content')
  },
};

export const Primary: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('primary')
  },
};

export const Secondary: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('secondary')
  },
};

export const Success: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('success')
  },
};

export const Danger: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('danger')
  },
};

export const Warning: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('warning')
  },
};

export const Info: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme('info')
  },
};

export const Small: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('sm')
  },
};

export const Base: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('base')
  },
};

export const Large: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('lg')
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('xl')
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('2xl')
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize('3xl')
  },
};

