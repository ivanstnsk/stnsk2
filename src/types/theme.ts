import {DefaultTheme} from 'react-jss';
import {EColors} from 'theme/colors';


export interface AppTheme extends DefaultTheme {
  colors: {
    primary: {
      bg: EColors;
      circleBg: EColors;
      greenMedium: string;
      greyUltralight: string;
    };
  };
  gradients: {
    bg: string;
  };
  sizes: {
    buttons: {
      mainCircleButtonSize: number;
    };
  };
}
