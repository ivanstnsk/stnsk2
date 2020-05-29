import React, { memo } from 'react';

import { useStyles } from './styles';


type TTransitionType =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'unmounted';

interface TransitionScreenWrapperProps {
  transitionState: TTransitionType;
  children: JSX.Element | JSX.Element[];
}

const TransitionScreenWrapperComp: React.FC<TransitionScreenWrapperProps> = ({
  transitionState,
  children,
}) => {
  const classes = useStyles({ transitionState });

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};

export const TransitionScreenWrapper = memo(
  TransitionScreenWrapperComp,
  (prevProps, nextProps) => {
    return prevProps.transitionState === nextProps.transitionState;
  },
);
