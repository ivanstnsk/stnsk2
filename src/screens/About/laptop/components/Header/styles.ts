import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

// eslint-disable-next-line
// @ts-ignore
import photoRes from './img/photo.jpg';


const styles: AppStyles = ({
  colors: {
    primary: {
      greyUltralight,
    },
  },
}) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: 50,
    },
    title: {
      fontSize: 34,
      fontWeight: 'normal',
      lineHeight: '42px',
      color: greyUltralight,
      fontFamily: 'Quicksand, sans-serif',
    },
    subTitle: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: '22px',
      color: greyUltralight,
      marginTop: 20,
      fontFamily: 'Quicksand, sans-serif',
    },
    photo: {
      width: 160,
      height: 160,
      minHeight: 160,
      minWidth: 160,
      backgroundImage: `url(${photoRes})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      borderRadius: 80,
    },
    iconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 40,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
