import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../../app.css";
import { TanoshiHeader, TanoshiHeaderModel } from '$atoms';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'atoms/Typography/Header',
  component: TanoshiHeader,
  tags: ['autodocs'],
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
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('primary')
  },
};

export const Secondary: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('secondary')
  },
};

export const Success: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('success')
  },
};

export const Danger: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('danger')
  },
};

export const Warning: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('warning')
  },
};

export const Info: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setTheme('info')
  },
};

export const Small: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('sm').setHtmlSize('h6')
  },
};

export const Base: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('base').setHtmlSize('h6')
  },
};

export const Large: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('lg').setHtmlSize('h6')
  },
};

export const ExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('xl').setHtmlSize('h6')
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('2xl').setHtmlSize('h5')
  },
};

export const TripleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('3xl').setHtmlSize('h4')
  },
};

export const QuadrupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('4xl').setHtmlSize('h3')
  },
};

export const QuintupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('5xl').setHtmlSize('h2')
  },
};

export const SextupleExtraLarge: Story = {
  args: {
    tanoshiHeaderModel: new TanoshiHeaderModel('content').setDisplaySize('6xl').setHtmlSize('h1')
  },
};


