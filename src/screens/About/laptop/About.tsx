import React from 'react';

import {ContentHeader} from 'components';

import {useStyles} from './styles';


export const About: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ContentHeader
          title="About me"
          subTitle="Everything about my skills"
        />
      </div>
    </div>
  );
};
