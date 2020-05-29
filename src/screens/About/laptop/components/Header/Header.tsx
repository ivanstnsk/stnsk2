import React from 'react';

import { MainSkillIcon } from './components';
import { useStyles } from './styles';


export const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.photo} />
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          Ivan Stinsky
        </div>
        <div className={classes.subTitle}>
          Software Engineer<br />
          with focus on JavaScript
        </div>
      </div>
      <div className={classes.iconsContainer}>
        <MainSkillIcon
          type="web"
          tooltip="Web development"
        />
        <MainSkillIcon
          type="mobile"
          tooltip="Mobile development"
        />
        <MainSkillIcon
          type="design"
          tooltip="UI design"
        />
        <MainSkillIcon
          type="backend"
          tooltip="Experience in backend"
        />
      </div>
    </div>
  );
};
