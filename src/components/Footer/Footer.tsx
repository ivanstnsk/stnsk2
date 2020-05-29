import React from 'react';

import metadata from 'metadata.json';

import { useStyles } from './styles';


export const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  const buildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;

  return (
    <div className={classes.container}>
      <div className={classes.version}>
        Built with Travis CI ♥
        <br />
        Deploy version: {buildNumber}
      </div>
    </div>
  );
};
