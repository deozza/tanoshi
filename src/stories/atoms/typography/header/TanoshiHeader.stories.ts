import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../../app.css";
import { TanoshiHeader, TanoshiHeaderModel } from '$atoms';
import { HEADER_TAGS, SIZES, THEMES } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Typography/Header',
  component: TanoshiHeader,
  argTypes: {
    tanoshiHeaderModel: {
      description: 'The model for the header',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Dark: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content')
  },
};

export const Primary: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Primary)
  },
};

export const Secondary: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Secondary)
  },
};

export const Success: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Success)
  },
};

export const Danger: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Danger)
  },
};

export const Warning: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Warning)
  },
};

export const Info: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme(THEMES.Info)
  },
};

export const Small: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES.Sm).setTag(HEADER_TAGS.H6)
  },
};

export const Base: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES.Md).setTag(HEADER_TAGS.H6)
  },
};

export const Large: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES.Lg).setTag(HEADER_TAGS.H6)
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES.Xl).setTag(HEADER_TAGS.H6)
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES['2Xl']).setTag(HEADER_TAGS.H5)
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES['3Xl']).setTag(HEADER_TAGS.H4)
  },
};

export const QuadrupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES['4Xl']).setTag(HEADER_TAGS.H3)
  },
};

export const QuintupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES['5Xl']).setTag(HEADER_TAGS.H2)
  },
};

export const SextupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setSize(SIZES['6Xl']).setTag(HEADER_TAGS.H1)
  },
};


