import React, { memo } from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';
import { useContentSize } from 'hooks';

import { Project } from './screens';
import { ProjectCard } from './components';
import { useStyles } from './styles';


const SCROLL_RANGES = {
  compact: [
    [40, Infinity],
  ],
};

const ProjectsComp: React.FC<{}> = () => {
  const [headerSize, onScrollY] = useContentSize(SCROLL_RANGES);
  const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="Projects"
        subTitle="My commercial and not really projects"
        size={headerSize}
      />
      <ScrollContent onScroll={onScrollY}>
        <ContentContainer>
          <SectionTitle>Personal projects</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
            </div>
          </div>
          <SectionTitle>Commercial projects under NDA</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
              <ProjectCard id="virtual-tours" />
            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
      <Project offsetSize={headerSize} />
    </>
  );
};

export const Projects = memo(ProjectsComp);
