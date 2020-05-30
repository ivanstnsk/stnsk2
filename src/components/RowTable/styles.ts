import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    primary: { underline },
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
      minWidth: 120,
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
    },
    cellTitle: {
      width: '100%',
      fontSize: 28,
      fontWeight: 300,
      lineHeight: '35px',
      color: title,
      textAlign: 'center',
    },
    cellText: {
      width: '100%',
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: text,
      textAlign: 'center',
      marginTop: 4,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
