import React from 'react';

import { combineClasses } from 'utils/styles';

import { useStyles } from './styles';


interface ContentContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={combineClasses(classes.wrapper, className)}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};
