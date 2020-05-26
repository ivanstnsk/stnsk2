import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: {
      bgContent, greyUltralight,
    },
  },
}) => {
  return {
    '@keyframes dash': {
      from: { strokeDashoffset: 0 },
      to: { strokeDashoffset: 28 },
    },
    button: {
      position: 'relative',
      backgroundColor: bgContent,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: 266,
      height: 268,
      border: 'none',
      borderRadius: 10,
      boxSizing: 'border-box',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
      outline: 'none',
      cursor: 'pointer',
      margin: 15,
      padding: 0,
      transition: 'transform 0.4s ease',

      '&:hover': {
        transform: 'scaleX(1.05) scaleY(1.05)',
        transition: 'transform 0.4s ease',
      },
    },
    imageContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,

    },
    text: {
      width: '100%',
      height: 70,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: greyUltralight,
    },
    label: {
      height: 15,
      fontSize: 10,
      fontWeight: 'normal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: greyUltralight,
      backgroundColor: '#5F28A4',
      paddingLeft: 5,
      paddingRight: 5,
      position: 'absolute',
      right: 6,
      top: 6,
      borderRadius: 8,
    },
    svg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0,

      '&:hover': {
        strokeDasharray: 7,
        animation: '$dash 1s linear infinite',
        opacity: 1,
      },
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
