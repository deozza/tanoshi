import { TanoshiLinkModel } from '$atoms';
import { TanoshiNavigation, TanoshiNavigationModel } from '$molecules';

import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../app.css";


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'molecules/Navigation',
  component: TanoshiNavigation,
  tags: ['autodocs'],
  argTypes: {
    tanoshiNavigationModel: {
      description: 'The model for the navigation container',
      control: 'object',
      
    }
  },
} satisfies Meta<TanoshiNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const navbarItemModels: Array<TanoshiLinkModel> = [
  new TanoshiLinkModel('Link 1').setTheme('white'),
  new TanoshiLinkModel('Link 2').setTheme('white'),
];


// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Dark: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('dark')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Primary: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('primary')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Secondary: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('secondary')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Success: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('success')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Danger: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('danger')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Warning: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('warning')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const Info: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('info')
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme('white').setLink('/'))
  },
};

export const ItemsAtLeft: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('dark')
    .setItemsAtLeft(navbarItemModels)
  },
};

export const ItemsAtCenter: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('dark')
    .setItemsAtCenter(navbarItemModels)
  },
};

export const ItemsAtRight: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme('dark')
    .setItemsAtRight(navbarItemModels)
  },
};