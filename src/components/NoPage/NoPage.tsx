import React from 'react';

import { SvgIcon } from 'components';

import { useStyles } from './styles';


export const NoPage: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SvgIcon
        type="not-found"
        width={200}
        height={200}
        color="rgba(255,255,255,0.05)"
      />
      <div className={classes.title}>
        Not found
      </div>
      <div className={classes.text}>
        Sorry, there is no page you are looking for.
        <br /><br />
        But don&apos;t worry maybe this page is under heavy development as well.
      </div>
    </div>
  );
};
