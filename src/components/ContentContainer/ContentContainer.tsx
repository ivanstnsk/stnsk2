import React from 'react';

import { useStyles } from './styles';


interface ContentContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  );
};
