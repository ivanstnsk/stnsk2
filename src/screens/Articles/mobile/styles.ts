import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { primary: { bg, greyUltralight, greenMedium } } }) => {
  return {
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bg,
      paddingLeft: 16,
      paddingRight: 16,
    },
    title: {
      color: greenMedium,
      fontSize: 24,
      fontWeight: 500,
      marginBottom: 16,
    },
    text: {
      color: greyUltralight,
      fontSize: 14,
      fontWeight: 300,
      fontStyle: 'normal',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
