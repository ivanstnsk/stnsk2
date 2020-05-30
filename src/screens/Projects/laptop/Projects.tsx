import React, { memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';
import { useContentSize } from 'hooks';
import { Routes } from 'types';
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
  const [lastProject, setLastProject] = useState<string | undefined>(undefined);
  const [headerSize, onScrollY] = useContentSize(SCROLL_RANGES);
  const history = useHistory();
  const classes = useStyles();

  const handleProjectClick = useCallback((projectId: string) => {
    setLastProject(projectId);
    history.push(`${Routes.PROJECTS}/${projectId}`);
  }, [setLastProject, history]);

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
                  onClick={handleProjectClick}
                />
              ))}
              <ProjectCard
                id="1254234"
                onClick={handleProjectClick}
              />
            </div>
          </div>
          <SectionTitle>Commercial projects under NDA</SectionTitle>
          <div className={classes.cardsWrapper}>
            <div className={classes.cardsContainer}>
              {commercial.map((data) => (
                <ProjectCard
                  key={data.id}
                  id={data.id}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
      <Project
        offsetSize={headerSize}
        lastProject={lastProject}
      />
    </>
  );
};

export const Projects = memo(ProjectsComp);
