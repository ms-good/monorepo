import { Meta, StoryObj } from '@storybook/react';
import tw, { css } from 'twin.macro';

import { colors } from './index.ts';

const Mock = () => <div />;

const meta: Meta<typeof Mock> = {
  title: 'Colors',
  component: Mock,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    () => (
      <div tw="flex flex-col gap-30">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key} tw="flex">
            <div tw="text-headS w-130 shrink-0">{key}</div>
            {typeof value === 'string' ? (
              <ColorPalette value={value} />
            ) : (
              Object.entries(value).map(([miniKey, value]) => (
                <div key={miniKey}>
                  <div tw="text-labelL">{miniKey}</div>
                  <ColorPalette value={value} />
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    ),
  ],
};

const ColorPalette = ({ value }: { value: string }) => {
  return (
    <div tw="flex flex-col items-center gap-10">
      <div
        css={css`
          ${tw`w-70 h-70`}
          background-color: ${value};
        `}
      />
      <div
        tw="text-labelM"
        css={css`
          color: ${colors.gray[500]};
        `}>
        {value}
      </div>
    </div>
  );
};
