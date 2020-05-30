import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  sizes: {
    content: { offsetHorizontal },
  },
}) => {
  return {
    wrapper: {
      display: 'flex',
      boxSizing: 'border-box',
      paddingLeft: offsetHorizontal,
      paddingRight: offsetHorizontal,
    },
    rightContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      paddingTop: 40,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
