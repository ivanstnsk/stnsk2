import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({ colors: { typography: { title, text } } }) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 156,
    },
    title: {
      fontSize: 34,
      fontWeight: 'normal',
      lineHeight: '42px',
      height: 'auto',
      color: title,
      marginTop: 70,
    },
    text: {
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: text,
      textAlign: 'center',
      marginTop: 40,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
