import React from 'react';

import { CategoryLabel, SvgProjectIcon } from 'components';

import { useStyles } from './styles';


export const ProjectCard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <button className={classes.button}>
      <div className={classes.imageContainer}>
        <SvgProjectIcon
          type="virtual-tours"
          color="rgba(255,255,255,0.5)"
          width={80}
          height={80}
        />
      </div>
      <div className={classes.text}>
        Virtual Tours App
      </div>
      <div className={classes.labelsContainer}>
        <CategoryLabel
          type="mobile"
          label="Mobile"
          size="small"
        />
      </div>
      <svg
        className={classes.svg}
        width={266}
        height={268}
        viewBox={`0 0 ${266} ${268}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="0"
      >
        <rect x="2" y="2" width={266 - 4} height={268 - 4} rx="10" stroke="#81AF65" strokeWidth="2" />
      </svg>
    </button>
  );
};
