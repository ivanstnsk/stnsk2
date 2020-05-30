import React, { memo } from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';
import { useContentSize } from 'hooks';
import { TProjectData } from 'types/data';

import { Project } from './screens';
import { ProjectCard } from './components';
import { useStyles } from './styles';


interface ProjectsProps {
  commercial: TProjectData[];
  personal: TProjectData[];
}

const SCROLL_RANGES = {
  compact: [
    [40, Infinity],
  ],
};

const ProjectsComp: React.FC<ProjectsProps> = ({
  commercial,
  personal,
}) => {
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
              {personal.map((data) => (
                <ProjectCard
                  key={data.id}
                  id={data.id}
                />
              ))}
            </div>
          </div>
          <SectionTitle>Commercial projects under NDA</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              {commercial.map((data) => (
                <ProjectCard
                  key={data.id}
                  id={data.id}
                />
              ))}
            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
      <Project offsetSize={headerSize} />
    </>
  );
};

export const Projects = memo(ProjectsComp);
