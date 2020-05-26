import React from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';

import { ProjectCard } from './components';
import { useStyles } from './styles';


export const Projects: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="Projects"
        subTitle="My commercial and not really projects"
      />
      <ScrollContent>
        <ContentContainer>
          <SectionTitle>Personal projects</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
          <SectionTitle>Commercial projects</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
