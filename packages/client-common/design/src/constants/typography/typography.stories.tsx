import { Meta, StoryObj } from '@storybook/react';

import { typography } from './typography.ts';

const Mock = () => <div />;

const meta: Meta<typeof Mock> = {
  title: 'Typography',
  component: Mock,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllTypo: Story = {
  args: {},
  decorators: [
    () => (
      <div tw="flex flex-col gap-10">
        {Object.entries(typography).map(([key, value]) => (
          <div key={key} tw="flex itemtsStart" css={value}>
            {key}
          </div>
        ))}
      </div>
    ),
  ],
};
