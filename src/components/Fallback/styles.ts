import { AppStyles, AppInnerStyles } from 'types/style';
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

export const useStyles = (): AppInnerStyles => useTStyles(styles);
