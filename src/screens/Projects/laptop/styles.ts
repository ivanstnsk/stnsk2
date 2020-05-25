import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = () => {
  return {
    container: {
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
