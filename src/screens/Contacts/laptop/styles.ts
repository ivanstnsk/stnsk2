import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';

const styles: AppStyles = ({
  colors: {
    primary: {
      bg, bgContent, greyUltralight, greenMedium,
    },
  },
}) => {
  return {
    '@keyframes show': {
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
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
      paddingLeft: 16,
      paddingRight: 16,
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
      paddingLeft: 60,
      paddignRight: 60,
      animation: '$show 0.4s linear',
    },
    title: {
      color: greenMedium,
      fontSize: 50,
      fontWeight: 500,
      marginBottom: 16,
    },
    text: {
      color: greyUltralight,
      fontSize: 18,
      fontWeight: 300,
      fontStyle: 'normal',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
