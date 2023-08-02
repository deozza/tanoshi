import { TanoshiPill, TanoshiPillModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../app.css";
import { BUTTON_SIZES, THEMES } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Pill',
  component: TanoshiPill,
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
    tanoshiPillModel: new TanoshiPillModel('content').setBasicTheme(THEMES.Secondary)
  },
};

export const Success: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setBasicTheme(THEMES.Success)
  },
};

export const Danger: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setBasicTheme(THEMES.Danger)
  },
};

export const Warning: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setBasicTheme(THEMES.Warning)
  },
};

export const Info: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setBasicTheme(THEMES.Info)
  },
};

export const SmallPrimary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setSize(BUTTON_SIZES.Sm)
  },
};

export const LargePrimary: Story = {
  args: {
    tanoshiPillModel: new TanoshiPillModel('content').setSize(BUTTON_SIZES.Lg)
  },
};