import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../app.css";
import { TanoshiButtonModel, TanoshiImageModel, TanoshiLink, TanoshiLinkModel } from '$atoms';
import { SIZES, THEMES } from '$lib';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Link',
  component: TanoshiLink,
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
export const Default: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content')
  },
};

export const Primary: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Primary)
  },
};

export const Secondary: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Secondary)
  },
};

export const Success: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Success)
  },
};

export const Danger: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Danger)
  },
};

export const Warning: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Warning)
  },
};

export const Info: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setTheme(THEMES.Info)
  },
};

export const Small: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES.Sm)
  },
};

export const Base: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES.Md)
  },
};

export const Large: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES.Lg)
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES.Xl)
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES['2Xl'])
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setDisplaySize(SIZES['3Xl'])
  },
};

export const TargetExternal: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content').setIsInternal(false).setLink('https://www.github.com/deozza/tanoshi')
  },
};


export const ContentAsButton: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content')
      .setIsInternal(false)
      .setLink('www.github.com/deozza/tanoshi')
      .setContentAsButton(new TanoshiButtonModel('My github page'))
  },
};

export const ContentAsImage: Story = {
  args: {
    tanoshiLinkModel: new TanoshiLinkModel('content')
      .setIsInternal(false)
      .setLink('www.github.com/deozza/tanoshi')
      .setContentAsImage(new TanoshiImageModel('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 'github page'))
  },
};
