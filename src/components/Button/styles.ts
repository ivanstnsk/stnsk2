import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


type TButtonStyleProps = {
  width: number;
}

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
    button: ({ width }: TButtonStyleProps) => ({
      position: 'relative',
      background: 'transparent',
      width: `${width}px`,
      minHeight: '37px',
      height: '37px',
      border: 'none',
      borderRadius: '25px',
      padding: '0px',
      color: greenMedium,
      fontFamily: 'Quicksand, sans-serif',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: '28px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'transform 0.3s',

      // '&:hover': {
      //   transform: 'scaleX(1.1) scaleY(1.1)',
      //   transition: 'transform 0.3s',
      // },
      '&:active': {
        animation: '$push 0.1s ease',
      },
    }),
    svg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,

      '&:hover': {
        strokeDasharray: 4,
        animation: '$dash 1s linear infinite',
      },
    },
  };
};

export const useStyles = (props: TButtonStyleProps): AppInnerStyles => useTStyles(styles, props);
