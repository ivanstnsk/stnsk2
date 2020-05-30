import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    primary: { bg, underline },
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
      transition: 'all 0.4s ease',

      '&:hover': {
        backgroundColor: bg,
        transition: 'all 0.4s ease',
      },
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
    icon: {
      marginLeft: 40,
      marginRight: 40,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
