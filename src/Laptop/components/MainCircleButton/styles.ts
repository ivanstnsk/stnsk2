import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';


const styles: AppStyles = ({colors: {primary}}) => {
  return {
    container: {
      backgroundColor: primary.bg,
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
