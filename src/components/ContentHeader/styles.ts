import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({ colors: { typography: { title, subTitle } } }) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 50,
      fontWeight: 300,
      lineHeight: '62px',
      color: title,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: subTitle,
      marginTop: 5,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
