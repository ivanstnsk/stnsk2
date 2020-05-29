import React from 'react';

import { SvgIcon } from 'components';

import { useStyles } from './styles';


export const AccessDenied: React.FC<{}> = () => {
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
        it&apos;s under maintenance
      </div>
      <div className={classes.text}>
        Sorry, this page is in the stage of heavy development.
        <br /><br />
        Contact: <a href="https://t.me/ivanstnsk">@ivanstnsk</a>
      </div>
    </div>
  );
};
