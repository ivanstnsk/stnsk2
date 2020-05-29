import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


type TStyleProps = {
  hovered: boolean;
};

const styles: AppStyles = () => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      transition: 'all 0.4s ease',
    },
    button: {
      marginTop: 30,
    },
    icon: ({ hovered }: TStyleProps) => ({
      transform: hovered
        ? 'scaleX(1.1) scaleY(1.1)'
        : 'scaleX(1) scaleY(1)',
      transition: 'all 0.4s ease',
    }),
  };
};

export const useStyles = (props: TStyleProps): AppInnerStyles => useTStyles(styles, props);
