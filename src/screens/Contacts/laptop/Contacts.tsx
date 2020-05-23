import React from 'react';

import { ContentHeader } from 'components';

import { useStyles } from './styles';


export const Contacts: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ContentHeader
          title="Contacts"
          subTitle="In case you want to get in touch with me"
        />
      </div>
    </div>
  );
};
