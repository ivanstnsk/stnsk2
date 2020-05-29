import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

import { TButtonType } from './types';


type TStylesProps = {
  type: TButtonType;
  active: boolean;
};

const styles: AppStyles = ({
  colors: {
    primary: { bgContent, greyUltralight },
  },
  sizes: {
    menu: {
      buttonSize, buttonOffset,
    },
  },
}) => {
  return {
    button: ({ active }: TStylesProps) => {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: buttonSize,
        height: buttonSize,
        border: 'none',
        borderRadius: '50%',
        backgroundColor: bgContent,
        color: greyUltralight,
        filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
        outline: 'none',
        cursor: 'pointer',
        marginTop: buttonOffset,
        marginBottom: buttonOffset,
        transition: 'transform 0.3s ease',
        transform: active
          ? 'scaleX(1.2) scaleY(1.2)'
          : 'scaleX(1) scaleY(1)',

        '&:hover': {
          transform: 'scaleX(1.2) scaleY(1.2)',
          transition: 'transform 0.3s ease',
        },
      };
    },
  };
};

export const useStyles = (props: TStylesProps): AppInnerStyles => useTStyles(styles, props);
