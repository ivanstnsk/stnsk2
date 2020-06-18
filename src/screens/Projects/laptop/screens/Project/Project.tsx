import React from 'react';
import { useParams } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import {
  ScrollContent,
  ContentContainer,
  TransitionInnerScreenWrapper,
  RowTable,
  DateRange,
  NoPage,
} from 'components';
import { TContentSize } from 'types/sizes';
import { useContentSize } from 'hooks';

import { useState } from './redux';
import { Header, EmptyHeader, CardText } from './components';
import { useStyles } from './styles';


interface ProjectProps {
  offsetSize?: TContentSize;
  lastProject?: string;
}

const SCROLL_RANGES = {
  compact: [
    [40, Infinity],
  ],
};

export const Project: React.FC<ProjectProps> = ({
  offsetSize,
  lastProject,
}) => {
  const [headerSize, onScrollY] = useContentSize(SCROLL_RANGES);
  const { projectId } = useParams();
  const { data } = useState(projectId || lastProject);
  const classes = useStyles();
  const isVisible = !!projectId;

  if (!data) {
    return (
      <Transition
        in={isVisible}
        timeout={300}
        unmountOnExit
      >
        {(state) => (
          <TransitionInnerScreenWrapper
            transitionState={state}
            offsetSize={offsetSize}
          >
            <div className={classes.wrapper}>
              <EmptyHeader />
              <NoPage />
            </div>
          </TransitionInnerScreenWrapper>
        )}
      </Transition>
    );
  }

  const {
    title,
    subTitle,
    iconType,
    tags,
    team,
    dates,
    technologies,
    workResults,
    achievements,
  } = data;

  return (
    <Transition
      in={isVisible}
      timeout={300}
      unmountOnExit
    >
      {(state) => (
        <TransitionInnerScreenWrapper
          transitionState={state}
          offsetSize={offsetSize}
        >
          <div className={classes.wrapper}>
            {!data ? (
              <>
                <EmptyHeader />
                <NoPage />
              </>
            ) : (<>
              <Header
                size={headerSize}
                title={title}
                subTitle={subTitle}
                tags={tags}
                iconType={iconType}
              />
              <ScrollContent onScroll={onScrollY}>
                <ContentContainer innerClassName={classes.container}>
                  <CardText
                    iconType="schedule"
                    title="Project schedule"
                    ContentComponent={(
                      <DateRange
                        from={dates.from}
                        to={dates.to}
                      />
                    )}
                  />
                  <CardText
                    iconType="team"
                    title="Team"
                    ContentComponent={(
                      <RowTable rows={team} />
                    )}
                  />
                  <CardText
                    iconType="tech"
                    title="Technologies"
                    lines={technologies}
                  />
                  <CardText
                    iconType="work-result"
                    title="Work results"
                    lines={workResults}
                  />
                  <CardText
                    iconType="achievements"
                    title="Achievements"
                    lines={achievements}
                  />
                </ContentContainer>
              </ScrollContent>
            </>)}
          </div>
        </TransitionInnerScreenWrapper>
      )}
    </Transition>
  );
};
