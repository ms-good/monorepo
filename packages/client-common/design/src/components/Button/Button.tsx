import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, ElementType, forwardRef, ReactNode } from 'react';
import { css, styled } from 'twin.macro';

import { colors, typography } from '@/constants/index.ts';

import { Spinner } from '../Spinner/Spinner.tsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  variant?: Variant;
  size?: Size;

  isFullWidth?: boolean;
  isLoading?: boolean;

  css?: SerializedStyles;
  as?: ElementType<any>;
  children: ReactNode;
}

type Color = 'red' | 'blue' | 'green' | 'gray';
type Variant = 'filled' | 'light' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

// https://mantine.dev/core/button/ 참고
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    color = 'gray',
    variant = 'filled',
    size = 'md',
    isFullWidth = false,
    isLoading = false,
    css,
    as,
    children,
    ...otherProps
  },
  ref,
) {
  return (
    <StyledButton
      {...otherProps}
      ref={ref}
      as={as}
      css={[getDetailStyle(color, variant), getCommonStyle(size, isFullWidth, isLoading), css]}>
      {isLoading ? <Spinner size="sm" /> : children}
    </StyledButton>
  );
});

const StyledButton = styled.button``;

const getDetailStyle = (color: Color, variant: Variant) => {
  switch (variant) {
    case 'filled':
      return getFilledStyle(color);
    case 'light':
      return getLightStyle(color);
    case 'outline':
      return getOutlineStyle(color);
    case 'ghost':
      return getGhostStyle(color);
  }

  function getFilledStyle(color: Color) {
    const [backgroundColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [colors.red['500'], colors.red['600']];
        case 'blue':
          return [colors.blue['500'], colors.blue['600']];
        case 'green':
          return [colors.green['500'], colors.green['600']];
        case 'gray':
          return [colors.gray['500'], colors.gray['600']];
      }
    })();
    return css`
      background-color: ${backgroundColor};
      color: ${colors.white};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }
  function getLightStyle(color: Color) {
    const [backgroundColor, textColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [colors.red['50'], colors.red['700'], colors.red['100']];
        case 'blue':
          return [colors.blue['50'], colors.blue['700'], colors.blue['100']];
        case 'green':
          return [colors.green['50'], colors.green['700'], colors.green['100']];
        case 'gray':
          return [colors.gray['50'], colors.gray['700'], colors.gray['100']];
      }
    })();
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }
  function getOutlineStyle(color: Color) {
    const [outlineColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [colors.red['700'], colors.red['50']];
        case 'blue':
          return [colors.blue['700'], colors.blue['50']];
        case 'green':
          return [colors.green['700'], colors.green['50']];
        case 'gray':
          return [colors.gray['700'], colors.gray['50']];
      }
    })();
    return css`
      border-color: ${outlineColor};
      color: ${outlineColor};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }
  function getGhostStyle(color: Color) {
    const [textColor, hoverBackgroundColor] = (() => {
      switch (color) {
        case 'red':
          return [colors.red['700'], colors.red['50']];
        case 'blue':
          return [colors.blue['700'], colors.blue['50']];
        case 'green':
          return [colors.green['700'], colors.green['50']];
        case 'gray':
          return [colors.gray['700'], colors.gray['50']];
      }
    })();
    return css`
      color: ${textColor};
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
    `;
  }
};

const getCommonStyle = (size: Size, isFullWidth: boolean, isLoading: boolean) => {
  const { typo, height, padding } = getSizeStyle(size);
  return css`
    display: flex;
    align-items: center;

    ${isFullWidth ? 'width:100%' : 'auto'};
    height: ${height};

    padding: ${padding};
    border: 1px solid transparent;
    border-radius: 32px;

    cursor: ${isLoading ? 'default' : 'pointer'};

    ${typo};
    font-weight: 600;

    transition: all 0.3s;

    &:active {
      transform: translateY(1px);
    }
    &:disabled {
      cursor: default;
      border-color: transparent;
      background-color: ${colors.gray['100']};
      color: ${colors.gray['500']};
      &:hover {
        background-color: ${colors.gray['100']};
      }
    }
  `;

  function getSizeStyle(size: Size) {
    switch (size) {
      case 'lg':
        return { typo: typography.bodyL, height: '48px', padding: '0 26px' };
      case 'md':
        return { typo: typography.bodyM, height: '40px', padding: '0 22px' };
      case 'sm':
        return { typo: typography.bodyM, height: '34px', padding: '0 18px' };
    }
  }
};
