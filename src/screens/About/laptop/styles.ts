import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: {
      bgContent, greyUltralight,
    },
  },
  sizes: {
    content: { offsetHorizontal, offsetTop, offsetBottom },
  },
}) => {
  return {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: bgContent,
      overflow: 'hidden',
    },
    content: {
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
    colsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 70,
    },
    colText: {
      display: 'flex',
      flex: 1,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: greyUltralight,
    },
    colRight: {
      marginLeft: 60,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
