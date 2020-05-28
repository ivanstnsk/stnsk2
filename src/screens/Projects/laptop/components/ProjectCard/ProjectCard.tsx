import React from 'react';

import { CategoryLabel } from 'components';

import { useStyles } from './styles';


export const ProjectCard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <button className={classes.button}>
      <div className={classes.imageContainer}>

      </div>
      <div className={classes.text}>
        Project title
      </div>
      <div className={classes.labelsContainer}>
        <CategoryLabel
          type="web"
          label="Web"
          size="small"
        />
        <CategoryLabel
          type="mobile"
          label="Mobile"
          size="small"
        />
        <CategoryLabel
          type="bot"
          label="Bot"
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
