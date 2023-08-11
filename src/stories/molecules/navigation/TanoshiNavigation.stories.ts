import { TanoshiLinkModel } from '$atoms';
import { TanoshiNavigation, TanoshiNavigationModel } from '$molecules';

import type { Meta, StoryObj } from '@storybook/svelte';
import "../../../app.css";
import { THEMES } from '$lib';


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
  new TanoshiLinkModel('Link 1').setTheme(THEMES.White),
  new TanoshiLinkModel('Link 2').setTheme(THEMES.White),
];


// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Dark: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Black)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Primary: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Primary)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Secondary: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Secondary)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Success: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Success)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Danger: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Danger)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Warning: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Warning)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const Info: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Info)
    .setItemsAtRight(navbarItemModels)
    .addItemAtLeft(new TanoshiLinkModel('Tanoshi').setTheme(THEMES.White).setLink('/'))
  },
};

export const ItemsAtLeft: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Black)
    .setItemsAtLeft(navbarItemModels)
  },
};

export const ItemsAtCenter: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Black)
    .setItemsAtCenter(navbarItemModels)
  },
};

export const ItemsAtRight: Story = {
  args: {
    tanoshiNavigationModel: new TanoshiNavigationModel()
    .setTheme(THEMES.Black)
    .setItemsAtRight(navbarItemModels)
  },
};