import React from 'react';

import {useStyles} from './styles';


type TFooterProps = {
  version: string;
};

export const Footer: React.FC<TFooterProps> = ({
  version,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.version}>
        Build version: {version}
      </div>
    </div>
  );
};
