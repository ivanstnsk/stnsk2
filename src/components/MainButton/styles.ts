import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ colors: { primary: { greenMedium } } }) => {
  return {
    '@keyframes dash': {
      from: { strokeDashoffset: 0 },
      to: { strokeDashoffset: 24 },
    },
    '@keyframes push': {
      from: {
        transform: 'scaleX(1.1) scaleY(1.1)',
      },
      '50%': {
        transform: 'scaleX(1.05) scaleY(1.05)',
      },
      to: {
        transform: 'scaleX(1.1) scaleY(1.1)',
      },
    },
    button: {
      position: 'relative',
      background: 'transparent',
      width: 200,
      minHeight: 50,
      height: 50,
      border: 'none',
      // borderWidth: 2.5,
      // borderStyle: 'solid',
      // borderColor: greenMedium,
      borderRadius: 25,
      padding: 0,
      color: greenMedium,
      cursor: 'pointer',
      fontSize: 23,
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '34px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'transform 0.3s',

      '&:hover': {
        transform: 'scaleX(1.1) scaleY(1.1)',
        transition: 'transform 0.3s',
      },
      '&:active': {
        animation: '$push 0.1s ease',
      },
    },
    svg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      strokeDasharray: 4,

      '&:hover': {

        animation: '$dash 1s linear infinite',
      },
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
