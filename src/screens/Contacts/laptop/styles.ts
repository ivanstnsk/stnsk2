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
      position: 'absolute',
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
    innerContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',

      '& > *': {
        marginLeft: 150,
      },
      '& *:first-child': {
        marginLeft: 0,
      },
    },
    contentCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    contentColRight: {
      marginLeft: 150,
    },
    socialContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      '& > *': {
        marginLeft: 40,
        marginBottom: 40,
      },
      '& *:first-child': {
        marginLeft: 0,
      },
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
