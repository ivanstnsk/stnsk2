import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    primary: {
      bg, bgContent, greyUltralight, greenMedium,
    },
  },
  sizes: {
    content: { offsetHorizontal, offsetTop },
  },
}) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flex: 1,
      backgroundColor: bg,
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: bgContent,
      margin: 0,
      paddingTop: offsetTop,
      paddingLeft: offsetHorizontal,
      paddignRight: offsetHorizontal,
    },
    title: {
      color: greenMedium,
      fontSize: 50,
      fontWeight: 500,
      marginBottom: 16,
    },
    text: {
      color: greyUltralight,
      fontSize: 18,
      fontWeight: 300,
      fontStyle: 'normal',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
