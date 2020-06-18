import React from 'react';

import { combineClasses } from 'utils/styles';

import { useStyles } from './styles';


interface ContentContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  innerClassName?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
  innerClassName,
}) => {
  const classes = useStyles();

  return (
    <div className={combineClasses(classes.wrapper, className)}>
      <div className={combineClasses(classes.container, innerClassName)}>
        {/* <div className={innerClassName || classes.container}> */}
        {children}
      </div>
    </div>
  );
};
