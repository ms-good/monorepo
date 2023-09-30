import { Px } from '@/utils/index.ts';

export type Typography = Record<string, { fontWeight: number; fontSize: Px; lineHeight: Px; letterSpacing: Px }>;

// https://m3.material.io/styles/typography/type-scale-tokens
export const typography: Typography = {
  displayL: { fontWeight: 400, fontSize: '57px', lineHeight: '64px', letterSpacing: '-0.25px' },
  displayM: { fontWeight: 400, fontSize: '45px', lineHeight: '52px', letterSpacing: '0px' },
  displayS: { fontWeight: 800, fontSize: '36px', lineHeight: '44px', letterSpacing: '0px' },
  headL: { fontWeight: 400, fontSize: '32px', lineHeight: '40px', letterSpacing: '0px' },
  headM: { fontWeight: 400, fontSize: '28px', lineHeight: '36px', letterSpacing: '0px' },
  headS: { fontWeight: 400, fontSize: '24px', lineHeight: '32px', letterSpacing: '0px' },
  titleL: { fontWeight: 400, fontSize: '22px', lineHeight: '28px', letterSpacing: '0px' },
  titleM: { fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.15px' },
  titleS: { fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.1px' },
  bodyL: { fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
  bodyM: { fontWeight: 400, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.25px' },
  bodyS: { fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.4px' },
  labelL: { fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.1px' },
  labelM: { fontWeight: 500, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.5px' },
  labelS: { fontWeight: 500, fontSize: '11px', lineHeight: '16px', letterSpacing: '0.5px' },
};
