import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    typography: { title, text },
    primary: { underline },
  },
}) => {
  return {
    container: {
      maxWidth: 350,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      boxSizing: 'border-box',
      border: `1px solid ${underline}`,
      padding: 40,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 40,

      transition: 'all 0.4s ease',

      '&:hover': {
        transform: 'scaleX(1.05) scaleY(1.05)',
        boxShadow: '0px 3px 14px 3px rgba(0,0,0,0.31)',
        transition: 'all 0.4s ease',
      },
    },
    title: {
      fontSize: 30,
      fontWeight: 300,
      lineHeight: '37px',
      color: title,
      marginTop: 30,
      fontFamily: 'Quicksand, sans-serif',
    },
    text: {
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: text,
      marginTop: 40,
      fontFamily: 'Quicksand, sans-serif',
    },
    content: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
