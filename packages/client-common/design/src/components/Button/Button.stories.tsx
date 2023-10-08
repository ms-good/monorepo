import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: '버튼',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    color: 'red',
    children: '버튼',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
    children: '버튼',
  },
};
export const Blue: Story = {
  args: {
    color: 'blue',
    children: '버튼',
  },
};
export const Green: Story = {
  args: {
    color: 'green',
    children: '버튼',
  },
};
export const Gray: Story = {
  args: {
    color: 'gray',
    children: '버튼',
  },
};
