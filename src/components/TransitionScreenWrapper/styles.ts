import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


type TStyleProps = {
  transitionState: string;
};

const TRANSITION_TIME = '0.6s';
const TRANSFORM_HIDE = 'scaleX(1) scaleY(1)';
const TRANSFORM_SHOW = 'scaleX(1) scaleY(1)';

const getContainerStyles = (transitionState: string): AppInnerStyles => {
  switch (transitionState) {
    case 'exiting':
      return {
        zIndex: '100',
        opacity: '0',
        transform: TRANSFORM_HIDE,
      };
    case 'exited':
      return {
        opacity: '0',
        transform: TRANSFORM_HIDE,
      };
    case 'entering':
      return {
        zIndex: '101',
        opacity: '0',
        transform: TRANSFORM_HIDE,
      };
    case 'entered':
      return {
        opacity: '1',
        transform: TRANSFORM_SHOW,
      };
    default:
      return {
        opacity: '1',
      };
  }
};

const styles: AppStyles = ({ colors: { primary: { bg } } }) => {
  return {
    container: ({ transitionState }: TStyleProps) => ({
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
      backgroundColor: bg,
      ...getContainerStyles(transitionState),
      transition: `all ${TRANSITION_TIME}`,
    }),
  };
};

export const useStyles = (props: TStyleProps): AppInnerStyles => useTStyles(styles, props);
