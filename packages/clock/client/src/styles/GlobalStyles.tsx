import { Global } from '@emotion/react';
import React from 'react';
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro';

const customStyles = css({
  body: {
    ...tw`antialiased`,
  },
});

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global
      styles={css`
        ${customStyles}
      `}
    />
  </>
);
