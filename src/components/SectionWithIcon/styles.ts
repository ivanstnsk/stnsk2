import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    typography: { title, text },
  },
  sizes: {
    contentSection: { maxWidth, offsetTop, offsetBottom },
  },
}) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      maxWidth,
      marginTop: offsetTop,
      marginBottom: offsetBottom,
    },
    titleContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 70,
    },
    title: {
      fontSize: 28,
      fontWeight: 'normal',
      lineHeight: '42px',
      color: title,
      marginRight: 30,
    },
    text: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: '22px',
      color: text,
      marginTop: 30,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
