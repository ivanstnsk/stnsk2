import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    typography: { title },
    primary: { greenMedium },
  },
}) => {
  return {
    button: {
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      marginBottom: 40,

      '&:hover': {
        transform: 'scaleX(1.05) scaleY(1.05)',
        transition: 'all 0.4s ease',
      },
      '&:hover $text': {
        color: greenMedium,
      },
    },
    text: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: '22px',
      color: title,
      marginLeft: 30,
      fontFamily: 'Quicksand, sans-serif',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
