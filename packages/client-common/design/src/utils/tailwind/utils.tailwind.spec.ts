import { typo } from '@/constants/index.ts';

import { convertTypoCSS2Tailwind, generatePixelValues } from './index.ts';

it('convertTypoCSS2Tailwind', () => {
  expect(convertTypoCSS2Tailwind(typo)).toEqual({
    bodyL: ['16px', { fontWeight: 400, letterSpacing: '0.5px', lineHeight: '24px' }],
    bodyM: ['14px', { fontWeight: 400, letterSpacing: '0.25px', lineHeight: '20px' }],
    bodyS: ['12px', { fontWeight: 400, letterSpacing: '0.4px', lineHeight: '16px' }],
    displayL: ['57px', { fontWeight: 400, letterSpacing: '-0.25px', lineHeight: '64px' }],
    displayM: ['45px', { fontWeight: 400, letterSpacing: '0px', lineHeight: '52px' }],
    displayS: ['36px', { fontWeight: 800, letterSpacing: '0px', lineHeight: '44px' }],
    headL: ['32px', { fontWeight: 400, letterSpacing: '0px', lineHeight: '40px' }],
    headM: ['28px', { fontWeight: 400, letterSpacing: '0px', lineHeight: '36px' }],
    headS: ['24px', { fontWeight: 400, letterSpacing: '0px', lineHeight: '32px' }],
    labelL: ['14px', { fontWeight: 500, letterSpacing: '0.1px', lineHeight: '20px' }],
    labelM: ['12px', { fontWeight: 500, letterSpacing: '0.5px', lineHeight: '16px' }],
    labelS: ['11px', { fontWeight: 500, letterSpacing: '0.5px', lineHeight: '16px' }],
    titleL: ['22px', { fontWeight: 400, letterSpacing: '0px', lineHeight: '28px' }],
    titleM: ['16px', { fontWeight: 500, letterSpacing: '0.15px', lineHeight: '24px' }],
    titleS: ['14px', { fontWeight: 500, letterSpacing: '0.1px', lineHeight: '20px' }],
  });
});

it('generatePixelValues', () => {
  expect(generatePixelValues(10)).toEqual({
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '5': '5px',
    '6': '6px',
    '7': '7px',
    '8': '8px',
    '9': '9px',
  });
});
