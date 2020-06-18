import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    primary: { bg, underline },
    typography: { title, text },
  },
}) => {
  return {
    table: {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      borderCollapse: 'collapse',
    },
    cell: {
      minWidth: 60,
      borderColor: underline,
      borderWidth: 1,
      borderStyle: 'solid',
      display: 'table-cell',
      justifyContent: 'center',
      boxSizing: 'border-box',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 12,
      transition: 'all 0.4s ease',

      '&:hover': {
        backgroundColor: bg,
        transition: 'all 0.4s ease',
      },
    },
    cellTitle: {
      width: '100%',
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: title,
      textAlign: 'center',
      fontFamily: 'Quicksand, sans-serif',
    },
    cellText: {
      width: '100%',
      fontSize: 14,
      fontWeight: 300,
      lineHeight: '27px',
      color: text,
      textAlign: 'center',
      fontFamily: 'Quicksand, sans-serif',
      marginTop: 4,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
