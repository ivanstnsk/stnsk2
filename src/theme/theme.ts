import { AppTheme } from 'types/theme';

import { EColors } from './colors';
import { sizes } from './sizes';


export const theme: AppTheme = {
  colors: {
    primary: {
      bg: EColors.ULTRA_DARK_BLUE,
      bgContent: EColors.DARK_BLUE,
      bgInfo: EColors.LIGHT_GREY,
      circleBg: EColors.DARK_BLUE,
      underline: EColors.DARK_GREY,
      greenMedium: '#81AF65',
      greyUltralight: 'rgba(255,255,255,0.6)',
      greyUltraDark: 'rgba(255,255,255,0.1)',
    },
    typography: {
      title: EColors.GREY,
      subTitle: EColors.GREY,
      text: EColors.GREY,
    },
  },
  gradients: {
    bg: 'radial-gradient(66.25% 131.01% at 50% 50%, #1F2124 0%, #1F2124 60.94%, #7BA661 100%)',
  },
  sizes,
};
