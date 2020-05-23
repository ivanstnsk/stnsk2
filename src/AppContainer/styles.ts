import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { primary: { bg } } }) => {
  return {
    page: {
      display: 'flex',
      flex: 1,
      position: 'relative',
      backgroundColor: bg,
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
