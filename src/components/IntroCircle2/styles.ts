import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';

type IntroCircleStylesProps = {
  x: number;
  y: number;
};

const styles: AppStyles = () => {
  return {
    container: ({x, y}: IntroCircleStylesProps) => {
      return {
        width: 568,
        height: 568,
        backgroundColor: `rgba(${x},${y},255,1)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      };
    },
    svg: {
      width: 500,
      height: 500,
      borderRadius: 250,
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (props: IntroCircleStylesProps): TStyles => useTStyles(styles, props);
