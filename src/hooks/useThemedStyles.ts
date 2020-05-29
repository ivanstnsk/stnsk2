import { createUseStyles, useTheme } from 'react-jss';

import { AppTheme } from 'types/theme';
import { AppStyles, AppStylesProps } from 'types/style';


type TStyleHook = Record<string, string>;

export const useTStyles = <T extends AppStylesProps>(styles: AppStyles, props?: T): TStyleHook => {
  const theme = useTheme() as AppTheme;
  const useJSSStyles = createUseStyles(styles(theme));
  const classes = useJSSStyles({ ...props, theme });

  return classes;
};
