import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  sizes: {
    content: { offsetHorizontal, offsetTop, offsetBottom },
  },
}) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      paddingTop: offsetTop,
      paddingBottom: offsetBottom,
      paddingLeft: offsetHorizontal,
      paddignRight: offsetHorizontal,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
