import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    typography: { title, text },
  },
}) => {
  return {
    container: {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    cell: {
      display: 'table-cell',
      justifyContent: 'center',
      boxSizing: 'border-box',
      transition: 'all 0.4s ease',

      '&:hover': {
        transform: 'scaleX(1.05) scaleY(1.05)',
        transition: 'all 0.4s ease',
      },
    },
    cellTitle: {
      width: '100%',
      fontSize: 30,
      fontWeight: 300,
      lineHeight: '37px',
      color: title,
      textAlign: 'center',
      fontFamily: 'Quicksand, sans-serif',
    },
    cellText: {
      width: '100%',
      fontSize: 14,
      fontWeight: 300,
      lineHeight: '17px',
      color: text,
      textAlign: 'center',
      marginTop: 8,
      fontFamily: 'Quicksand, sans-serif',
    },
    icon: {
      marginLeft: 24,
      marginRight: 24,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
