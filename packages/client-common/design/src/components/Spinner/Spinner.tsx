/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { css } from '@emotion/react';
import { FC } from 'react';

import { color as _color } from '@/constants/color/index.ts';

type Size = 'sm' | 'md' | 'lg';
type Color = 'grey' | 'white';

interface Props {
  size?: Size;
  color?: Color;
}

// https://loading.io/css/
export const Spinner: FC<Props> = ({ size = 'md', color = 'white' }) => {
  const { wrapperSize, spinnerBorder, innerSize, borderColor } = getStyle(size, color);

  return (
    <div
      css={css`
        display: inline-block;
        position: relative;
        width: ${wrapperSize}px;
        height: ${wrapperSize}px;
        div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: ${innerSize}px;
          height: ${innerSize}px;
          margin: ${spinnerBorder}px;
          border: ${spinnerBorder}px solid ${borderColor};
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: ${borderColor} transparent transparent transparent;
        }
        div:nth-of-type(1) {
          animation-delay: -0.45s;
        }
        div:nth-of-type(2) {
          animation-delay: -0.3s;
        }
        div:nth-of-type(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

const getStyle = (size: Size, color: Color) => {
  const wrapperSize = (() => {
    switch (size) {
      case 'lg':
        return 60;
      case 'md':
        return 40;
      case 'sm':
      default:
        return 26;
    }
  })();

  const spinnerBorder = wrapperSize / 10;

  const innerSize = wrapperSize - 2 * spinnerBorder;

  const borderColor = (() => {
    switch (color) {
      case 'grey':
        return _color.gray['500'];
      case 'white':
      default:
        return _color.white;
    }
  })();

  return { wrapperSize, spinnerBorder, innerSize, borderColor };
};
