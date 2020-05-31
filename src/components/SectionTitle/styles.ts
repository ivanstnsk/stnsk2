import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { typography: { title } } }) => {
  return {
    title: {
      fontSize: 34,
      fontWeight: 300,
      fontFamily: 'Quicksand, sans-serif',
      lineHeight: '42px',
      color: title,
      marginBottom: 50,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
