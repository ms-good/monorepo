import { colors, typo } from './src/constants/index.ts';
import { convertTypoCSS2Tailwind, generatePixelValues } from './src/utils/index.ts';

import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    extend: {
      spacing: generatePixelValues(),
    },

    colors,

    fontSize: convertTypoCSS2Tailwind(typo),

    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [],
} satisfies Config;
