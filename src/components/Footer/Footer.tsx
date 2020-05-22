import React from 'react';

import metadata from 'metadata.json';

import {useStyles} from './styles';


export const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  const buildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;

  return (
    <div className={classes.container}>
      <div className={classes.version}>
        DEV ENV
        <br />
        Build version: {buildNumber}
      </div>
    </div>
  );
};
