import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { primary } }) => {
  return {
    container: () => {
      return {
        backgroundColor: primary.bg,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      };
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
