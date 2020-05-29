import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


type TStylesProps = {
  activeButtonPosition: number;
};

const styles: AppStyles = ({
  colors: {
    primary: { bg, greenMedium },
  },
  sizes: {
    menu: { width },
  },
}) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      width,
      minWidth: width,
      maxWidth: width,
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: bg,
    },
    header: {
      display: 'flex',
      flex: 1,
      width: '100%',
      minHeight: 100,
      maxHeight: 180,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 40,
    },
    buttons: {
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
    },
    buttonsInner: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    tick: ({ activeButtonPosition }: TStylesProps) => ({
      width: 5,
      height: 96,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: greenMedium,
      position: 'absolute',
      left: 0,
      top: activeButtonPosition * 110 + 6,
      transition: 'all 0.4s ease',
    }),
  };
};

export const useStyles = (props: TStylesProps): AppInnerStyles => useTStyles(styles, props);
