import { AppStyles, AppInnerStyles } from 'types/style';
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

export const useStyles = (): AppInnerStyles => useTStyles(styles);
