import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

// eslint-disable-next-line
// @ts-ignore
// import photoRes from './img/photo.jpg';


const styles: AppStyles = ({
  colors: {
    primary: {
      greyUltralight,
    },
  },
  sizes: {
    content: { maxWidth: contentMaxWidth, offsetHorizontal },
    menu: { width: sidebarWidth },
  },
}) => {
  return {
    wrapper: {
      display: 'flex',
      height: 230,
      maxHeight: 230,
      boxSizing: 'border-box',
      paddingLeft: offsetHorizontal,
      paddingRight: offsetHorizontal,
    },
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      display: 'flex',
      flex: 1,
      width: '100%',
      maxWidth: contentMaxWidth,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    titleContainer: {
      display: 'flex',
      flex: 1,
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
    },
    subTitle: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: '22px',
      color: greyUltralight,
      marginTop: 20,
    },
    photo: {
      width: 160,
      height: 160,
      minHeight: 160,
      minWidth: 160,
      backgroundImage: 'url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: 10,
    },
    iconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 60,
    },
    rightContainer: {
      height: '100%',
      display: 'flex',
      width: sidebarWidth,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingTop: 40,
      boxSizing: 'border-box',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
