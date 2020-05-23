import { AppStyles } from 'types/style';
import { useTStyles } from 'hooks';


type MainSkillIconStylesProps = {
  active: boolean;
};

const styles: AppStyles = (
  {
    colors: {
      primary: { bgInfo },
      typography: { text },
    },
  },
) => {
  return {
    container: ({ active }: MainSkillIconStylesProps) => ({
      marginLeft: 40,
      position: 'relative',
      transform: `translateY(${active ? -10 : 0}px)`,
      transition: 'transform 0.4s ease',
    }),
    tooltip: ({ active }: MainSkillIconStylesProps) => ({
      position: 'absolute',
      left: -30,
      top: 80,
      width: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 8,
      backgroundColor: bgInfo,
      color: text,
      opacity: active ? 1 : 0,
      zIndex: 20,
      transition: 'opacity 0.4s ease',

      '&:before': {
        position: 'absolute',
        top: -5,
        content: '""',
        display: 'block',
        width: 10,
        height: 10,
        backgroundColor: bgInfo,
        transform: 'rotateZ(45deg)',
        zIndex: 18,
      },
    }),
  };
};

type TStyles = Record<string, any>;

export const useStyles = (props: MainSkillIconStylesProps): TStyles => useTStyles(styles, props);
