import React from 'react';

import { ContentHeader, ScrollContent } from 'components';

import {
  Header,
} from './components';
import { useStyles } from './styles';


export const About: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ContentHeader
        title="About me"
        subTitle="Everything about my skills"
      />
      <ScrollContent>
        <div className={classes.content}>
          <Header />
          <div className={classes.colsContainer}>
            <div className={classes.colText}>
              My name is Ivan and currently I live in Ukraine.
              I am a Software Engineer with the overall experience in 3.5 years.
            <br /><br />
            I have a strong technical skillset with range UI/UX experience and
            focusing on providing the best experience of using UI for users.
            I pay attention to details and aim to achieve both
            speed & performance in applications.
          </div>
            <div className={`${classes.colText} ${classes.colRight}`}>
              I coordinate with team members and different streams within
              a project account to have a wide understanding of software development processes.
            <br /><br />
            To continue growing as a Software Developer
            I work on many pet projects in my free time and take internal & external courses.
            <br /><br />
            Also interested in backend and game development & gamification.
          </div>
          </div>
        </div>
      </ScrollContent>
    </div>
  );
};
