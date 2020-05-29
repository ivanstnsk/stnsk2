import { DefaultTheme } from 'react-jss';
import { EColors } from 'theme/colors';

import { TSizes } from './sizes';
import { TCategoryLabelColors } from './colors';


export interface AppTheme extends DefaultTheme {
  colors: {
    primary: {
      bg: EColors;
      bgContent: EColors;
      bgInfo: EColors;
      circleBg: EColors;
      underline: EColors;
      greenMedium: string;
      greyUltralight: string;
      greyUltraDark: string;
    };
    typography: {
      title: EColors;
      subTitle: EColors;
      text: EColors;
    };
    categoryLabels: TCategoryLabelColors;
  };
  gradients: {
    bg: string;
  };
  sizes: TSizes;
}
