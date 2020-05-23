import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ colors: { primary: { bg } } }) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: bg,
      overflow: 'hidden',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
