import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { typography: { title } } }) => {
  return {
    title: {
      fontSize: 34,
      fontWeight: 'normal',
      lineHeight: '42px',
      color: title,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
