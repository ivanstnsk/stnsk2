import React, { memo } from 'react';

import { TContentSize } from 'types/sizes';

import { useStyles } from './styles';


type TTransitionType =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'unmounted';

interface TransitionInnerScreenWrapperProps {
  transitionState: TTransitionType;
  children: JSX.Element | JSX.Element[];
  offsetSize?: TContentSize;
}

const TransitionInnerScreenWrapperComp: React.FC<TransitionInnerScreenWrapperProps> = ({
  transitionState,
  children,
  offsetSize = 'normal',
}) => {
  const classes = useStyles({ transitionState, offsetSize });

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};

export const TransitionInnerScreenWrapper = memo(
  TransitionInnerScreenWrapperComp,
  (prevProps, nextProps) => {
    return prevProps.transitionState === nextProps.transitionState;
  },
);
