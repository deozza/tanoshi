import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../../app.css";
import { TanoshiParagraph, TanoshiParagraphModel } from '$atoms';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Typography/Paragraph',
  component: TanoshiParagraph,
  tags: ['autodocs'],
  argTypes: {
    tanoshiParagraphModel: {
      description: 'The model for the paragraph',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Dark: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content')
  },
};

export const Primary: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('primary')
  },
};

export const Secondary: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('secondary')
  },
};

export const Success: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('success')
  },
};

export const Danger: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('danger')
  },
};

export const Warning: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('warning')
  },
};

export const Info: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme('info')
  },
};

export const Small: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('sm')
  },
};

export const Base: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('base')
  },
};

export const Large: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('lg')
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('xl')
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('2xl')
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setDisplaySize('3xl')
  },
};

