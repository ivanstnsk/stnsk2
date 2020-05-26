import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  sizes: {
    content: { maxWidth: contentMaxWidth, offsetHorizontal, offsetTop, offsetBottom },
    menu: { width: sidebarWidth },
  },
}) => {
  return {
    wrapper: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: offsetTop,
      paddingBottom: offsetBottom,
      paddingLeft: offsetHorizontal,
      paddingRight: offsetHorizontal,
      marginRight: sidebarWidth,
    },
    container: {
      display: 'flex',
      flex: 1,
      maxWidth: contentMaxWidth,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      boxSizing: 'border-box',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
