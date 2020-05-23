import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ colors: { primary: { greyUltraDark } } }) => {
  return {
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    version: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 16,
      color: greyUltraDark,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
