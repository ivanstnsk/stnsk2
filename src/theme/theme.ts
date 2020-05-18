import {AppTheme} from 'types/theme';

import {EColors} from './colors';


export const theme: AppTheme = {
  colors: {
    primary: {
      bg: EColors.ULTRA_DARK_BLUE,
      circleBg: EColors.DARK_BLUE,
      greenMedium: '#81AF65',
      greyUltralight: '#F2F2F2',
    },
  },
  gradients: {
    bg: 'radial-gradient(66.25% 131.01% at 50% 50%, #1F2124 0%, #1F2124 60.94%, #7BA661 100%)',
  },
};
