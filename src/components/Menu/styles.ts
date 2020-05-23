import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';

const styles: AppStyles = ({colors: {primary: {bg}}}) => {
  return {
    container: {
      display: 'flex',
      width: 120,
      minWidth: 120,
      height: '100%',
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: bg,
      paddingTop: 180,
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
