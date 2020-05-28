import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = () => {
  return {
    button: {
      width: 80,
      height: 80,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      cursor: 'pointer',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
