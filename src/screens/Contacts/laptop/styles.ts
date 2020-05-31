import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: {
      greyUltralight, greenMedium,
    },
  },
}) => {
  return {
    title: {
      color: greenMedium,
      fontSize: 50,
      fontWeight: 500,
      marginBottom: 16,
      fontFamily: 'Quicksand, sans-serif',
    },
    text: {
      color: greyUltralight,
      fontSize: 18,
      fontWeight: 300,
      fontStyle: 'normal',
      fontFamily: 'Quicksand, sans-serif',
    },
    innerContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 120,
      paddingBottom: 156,
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
