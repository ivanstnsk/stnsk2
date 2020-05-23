import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ colors: { primary: { bg } } }) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      width: 120,
      minWidth: 120,
      maxWidth: 120,
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: bg,
    },
    header: {
      display: 'flex',
      flex: 1,
      width: '100%',
      minHeight: 100,
      maxHeight: 180,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 40,
    },
    buttons: {
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
