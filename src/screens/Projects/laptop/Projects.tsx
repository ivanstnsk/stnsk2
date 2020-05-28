import React, { memo, useCallback, useState } from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';

import { Project } from './screens';
import { ProjectCard } from './components';
import { THeaderSize } from './types';
import { useStyles } from './styles';


const ProjectsComp: React.FC<{}> = () => {
  const [headerSize, setHeaderSize] = useState<THeaderSize>('normal');
  const classes = useStyles();

  const handleScrollReachTop = useCallback((reached: boolean) => {
    const nextHeaderType = reached ? 'normal' : 'compact';
    setHeaderSize(nextHeaderType);
  }, []);

  return (
    <>
      <ContentHeader
        title="Projects"
        subTitle="My commercial and not really projects"
        size={headerSize}
      />
      <ScrollContent onReachTop={handleScrollReachTop}>
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
