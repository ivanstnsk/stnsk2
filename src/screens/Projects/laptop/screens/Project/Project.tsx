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
                title={data.title}
                subTitle={data.subTitle}
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
                        from={['2019', 'October']}
                        to={['2019', 'October']}
                      />
                    )}
                  />
                  <SectionWithIcon
                    iconType="team"
                    title="Team"
                    ContentComponent={(
                      <RowTable
                        rows={[
                          ['Dev', '6'],
                          ['QA', '2'],
                          ['PM', '1'],
                          ['UI/UX', '1'],
                        ]}
                      />
                    )}
                  />
                  <SectionWithIcon
                    iconType="tech"
                    title="Technologies"
                    lines={[
                      'react-native, react, redux, redux-saga, styled-components, react-navigation, react-router-dom, react-native-fbsdk, react-native-google-login, react-native-twitter-sigin, react-native-maps, google maps, google directions API, react-native-compass, geolib, react-native-video, mapbox modules, ios in app purchase',
                    ]}
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
