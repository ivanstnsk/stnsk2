import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: {bg, greyUltralight},
  },
  sizes: {
    buttons: {mainCircleButtonSize},
  },
}) => {
  return {
    '@keyframes dash': {
      from: {strokeDashoffset: 0},
      to: {strokeDashoffset: 24},
    },
    button: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: mainCircleButtonSize,
      height: mainCircleButtonSize,
      border: 'none',
      borderRadius: '50%',
      backgroundColor: bg,
      color: greyUltralight,
      filter: 'drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))',
      outline: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',

      '&:hover': {
        transform: 'scaleX(1.1) scaleY(1.1)',
        transition: 'transform 0.3s ease',
      },
    },
    svg: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      strokeDasharray: 4,

      '&:hover': {
        '& circle': {
          strokeWidth: 2.5,
        },
        animation: '$dash 1s linear infinite',
      },
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
