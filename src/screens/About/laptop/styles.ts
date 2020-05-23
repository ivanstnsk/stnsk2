import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: {
    primary: {
      bg, bgContent, greyUltralight,
    },
  },
  sizes: {
    content: { offset },
  },
}) => {
  return {
    '@keyframes show': {
      from: {
        opacity: 0,
        transform: 'translateY(50px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    },
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flex: 1,
      backgroundColor: bg,
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: bgContent,
      margin: 0,
      paddingTop: 40,
      paddingLeft: offset,
      paddingRight: offset,
      animation: '$show 1s ease',
    },
    colsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 70,
    },
    colText: {
      display: 'flex',
      flex: 1,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: greyUltralight,
    },
    colRight: {
      marginLeft: 60,
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
