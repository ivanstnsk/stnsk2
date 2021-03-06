import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: { bg, greenMedium, greyUltralight },
  },
}) => {
  return {
    container: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
      borderRadius: '50%',
      backgroundColor: bg,
      transition: 'transform 1s ease',
    },
    circleBg: {
      position: 'absolute',
      width: 100,
      height: 100,
      borderRadius: '50%',
      backgroundColor: bg,
      filter: 'drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))',
      animationFillMode: 'forwards',
      transition: 'width 1.6s height 1.6s ease',
      opacity: 1,
    },
    content: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      opacity: 0,
    },
    text: {
      width: 400,
      fontStyle: 'normal',
      fontSize: 35,
      fontWeight: 'bold',
      color: greyUltralight,
      lineHeight: '44px',
      marginTop: 40,
      marginBottom: 75,
    },
    bold: {
      fontWeight: 500,
      color: greenMedium,
    },
    small: {
      fontSize: 25,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
