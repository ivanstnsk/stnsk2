import {AppTheme} from 'types/theme';
import {LAPTOP_MAIN_CIRCLE_BUTTON_SIZE} from 'constants/sizes';

import {EColors} from './colors';


export const theme: AppTheme = {
  colors: {
    primary: {
      bg: EColors.ULTRA_DARK_BLUE,
      bgContent: EColors.DARK_BLUE,
      circleBg: EColors.DARK_BLUE,
      greenMedium: '#81AF65',
      greyUltralight: 'rgba(255,255,255,0.6)',
      greyUltraDark: 'rgba(255,255,255,0.1)',
    },
    typography: {
      title: EColors.LIGHT_GREY,
      subTitle: EColors.LIGHT_GREY,
      text: EColors.LIGHT_GREY,
    },
  },
  gradients: {
    bg: 'radial-gradient(66.25% 131.01% at 50% 50%, #1F2124 0%, #1F2124 60.94%, #7BA661 100%)',
  },
  sizes: {
    buttons: {
      mainCircleButtonSize: LAPTOP_MAIN_CIRCLE_BUTTON_SIZE,
    },
  },
};
