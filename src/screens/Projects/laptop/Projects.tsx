import React from 'react';

import { ContentHeader } from 'components';

import { useStyles } from './styles';


export const Projects: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ContentHeader
          title="Projects"
          subTitle="My commercial and not really projects"
        />
      </div>
    </div>
  );
};
