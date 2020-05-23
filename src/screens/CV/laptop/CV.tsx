import React from 'react';

import {ContentHeader} from 'components';

import {useStyles} from './styles';


export const CV: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ContentHeader
          title="CV"
          subTitle="You can download my CV here"
        />
      </div>
    </div>
  );
};
