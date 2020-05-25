import React from 'react';

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

export const TransitionScreenWrapper: React.FC<TransitionScreenWrapperProps> = ({
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
