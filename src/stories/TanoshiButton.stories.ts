import { TanoshiButton, TanoshiButtonModel } from '$atoms';
import type { Meta, StoryObj } from '@storybook/svelte';
import "../app.css";
import { BUTTON_SIZES, THEMES } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Button',
  component: TanoshiButton,
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
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Secondary)
  },
};

export const Success: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Success)
  },
};

export const Danger: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Danger)
  },
};

export const Warning: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Warning)
  },
};

export const Info: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Info)
  },
};

export const Black: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.Black)
  },
};

export const White: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setBasicTheme(THEMES.White)
  },
};

export const DisabledPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setIsDisabled(true)
  },
};

export const SmallPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize(BUTTON_SIZES.Sm)
  },
};

export const LargePrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize(BUTTON_SIZES.Lg)
  },
};

export const BlockPrimary: Story = {
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setSize(BUTTON_SIZES.Block)
  },
};

export const Loading: Story = { 
  args: {
    tanoshiButtonModel: new TanoshiButtonModel('content').setLoaderOn()
  },
};