import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ gradients: { bg } }) => {
  return {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    bg: {
      position: 'absolute',
      left: -350,
      right: -350,
      top: -200,
      bottom: -200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
      border: '1px solid red',
      background: bg,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
