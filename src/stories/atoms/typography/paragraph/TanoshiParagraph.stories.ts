import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../../app.css";
import { TanoshiParagraph, TanoshiParagraphModel } from '$atoms';
import { SIZES, THEMES } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Typography/Paragraph',
  component: TanoshiParagraph,
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
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Primary)
  },
};

export const Secondary: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Secondary)
  },
};

export const Success: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Success)
  },
};

export const Danger: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Danger)
  },
};

export const Warning: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Warning)
  },
};

export const Info: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setTheme(THEMES.Info)
  },
};

export const Small: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES.Sm)
  },
};

export const Base: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES.Md)
  },
};

export const Large: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES.Lg)
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES.Xl)
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES['2Xl'])
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiParagraphModel: new TanoshiParagraphModel('content').setSize(SIZES['3Xl'])
  },
};

