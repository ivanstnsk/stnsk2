import React from 'react';
import { useParams } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import {
  ScrollContent,
  ContentContainer,
  TransitionInnerScreenWrapper,
  SectionWithIcon,
  RowTable,
  DateRange,
  NoPage,
} from 'components';
import { TContentSize } from 'types/sizes';
import { useContentSize } from 'hooks';

import { useState } from './redux';
import { Header, EmptyHeader } from './components';
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
    tags,
    team,
    dates,
    technologies,
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
              />
              <ScrollContent onScroll={onScrollY}>
                <ContentContainer>
                  <SectionWithIcon
                    iconType="work-result"
                    title="Work results"
                    lines={[
                      'Reviwed the work of the other React Native developer',
                      'Created iOS and Android dev & production builds',
                      'Configured Apple AppStore & Testflight and Google Play Market',
                    ]}
                  />
                  <SectionWithIcon
                    iconType="achievements"
                    title="Achievements"
                    lines={[
                      'Reviwed the work of the other React Native developer',
                      'Created iOS and Android dev & production builds',
                      'Configured Apple AppStore & Testflight and Google Play Market',
                    ]}
                  />
                  <SectionWithIcon
                    iconType="schedule"
                    title="Project schedule"
                    ContentComponent={(
                      <DateRange
                        from={dates.from}
                        to={dates.to}
                      />
                    )}
                  />
                  <SectionWithIcon
                    iconType="team"
                    title="Team"
                    ContentComponent={(
                      <RowTable rows={team} />
                    )}
                  />
                  <SectionWithIcon
                    iconType="tech"
                    title="Technologies"
                    lines={[technologies]}
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
