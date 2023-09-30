import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

import { Typo } from '@/constants/index.ts';

import { Px } from '../types.ts';

export function convertTypoCSS2Tailwind(
  typo: Typo,
): Record<string, [string, { fontWeight: number; lineHeight: Px; letterSpacing: Px }]> {
  return Object.entries(typo)
    .map(([key, value]) => {
      return { key, ...value };
    })
    .reduce(
      (acc, cur) => {
        acc[cur.key] = [
          cur.fontSize,
          { fontWeight: cur.fontWeight, lineHeight: cur.lineHeight, letterSpacing: cur.letterSpacing },
        ];
        return acc;
      },
      {} as Record<string, [string, { fontWeight: number; lineHeight: Px; letterSpacing: Px }]>,
    );
}

export function generatePixelValues(number = 1000): ResolvableTo<KeyValuePair> {
  return Array(number)
    .fill(null)
    .reduce((acc: Record<number, Px>, _cur, index) => {
      acc[index] = `${index}px`;
      return acc;
    }, {});
}
