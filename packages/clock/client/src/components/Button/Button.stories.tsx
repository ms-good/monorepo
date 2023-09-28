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
