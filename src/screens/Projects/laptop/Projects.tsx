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
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
            </div>
          </div>
          <SectionTitle>Commercial projects under NDA</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>

            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
