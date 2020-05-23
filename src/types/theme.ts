import { DefaultTheme } from 'react-jss';
import { EColors } from 'theme/colors';


export interface AppTheme extends DefaultTheme {
  colors: {
    primary: {
      bg: EColors;
      bgContent: EColors;
      bgInfo: EColors;
      circleBg: EColors;
      greenMedium: string;
      greyUltralight: string;
      greyUltraDark: string;
    };
    typography: {
      title: EColors;
      subTitle: EColors;
      text: EColors;
    };
  };
  gradients: {
    bg: string;
  };
  sizes: {
    buttons: {
      mainCircleButtonSize: number;
    };
    menu: {
      buttonSize: number;
      buttonIconSize: number;
      buttonOffset: number;
    };
  };
}
