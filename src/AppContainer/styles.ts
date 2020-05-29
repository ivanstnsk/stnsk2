import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { primary: { bg } } }) => {
  return {
    page: {
      display: 'flex',
      flex: 1,
      position: 'relative',
      backgroundColor: bg,
    },
    devLabel: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      color: '#fff',
      backgroundColor: 'red',
      zIndex: 999,
      '& a': {
        color: '#fff',
        marginLeft: 10,
      },
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
