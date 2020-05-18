import {DefaultTheme} from 'react-jss';
import {EColors} from 'theme/colors';


export interface AppTheme extends DefaultTheme {
  colors: {
    primary: {
      bg: EColors;
      circleBg: EColors;
    };
  };
  gradients: {
    bg: string;
  };
}
