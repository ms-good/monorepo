import { Meta, StoryObj } from '@storybook/react';

import { StopWatch } from './StopWatch.tsx';

const meta: Meta<typeof StopWatch> = {
  title: 'StopWatch',
  component: StopWatch,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
