import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';


const styles: AppStyles = () => {
  return {
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      border: '1px solid red',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      boxSizing: 'border-box',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
