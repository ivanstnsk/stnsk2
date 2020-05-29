import { AppStyles, AppInnerStyles } from 'types/style';
import { TContentSize } from 'types/sizes';
import { useTStyles } from 'hooks';


type TStyleProps = {
  transitionState: string;
  offsetSize: TContentSize;
};

const TRANSITION_TIME = '0.6s';
const TRANSFORM_HIDE = 'translateY(30px)';
const TRANSFORM_SHOW = 'translateY(0px)';

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

const styles: AppStyles = () => {
  return {
    wrapper: ({ offsetSize }: TStyleProps) => ({
      position: 'absolute',
      top: offsetSize === 'compact' ? '90px' : '158px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      width: '100%',
      display: 'flex',
      flex: 1,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    }),
    container: ({ transitionState }: TStyleProps) => ({
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      overflow: 'hidden',
      ...getContainerStyles(transitionState),
      transition: `all ${TRANSITION_TIME}`,
    }),
  };
};

export const useStyles = (props: TStyleProps): AppInnerStyles => useTStyles(styles, props);
