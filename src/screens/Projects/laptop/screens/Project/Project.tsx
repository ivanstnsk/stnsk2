import React from 'react';
import { useParams } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import {
  ScrollContent,
  ContentContainer,
  SectionTitle,
  TransitionInnerScreenWrapper,
} from 'components';
import { TContentSize } from 'types/sizes';

import { Header } from './components';
import { useStyles } from './styles';


interface ProjectProps {
  offsetSize?: TContentSize;
}

export const Project: React.FC<ProjectProps> = ({
  offsetSize,
}) => {
  const { projectId } = useParams();
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
            <Header />
            <ScrollContent>
              <ContentContainer>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
                <SectionTitle>Content here</SectionTitle>
              </ContentContainer>
            </ScrollContent>
          </div>
        </TransitionInnerScreenWrapper>
      )}
    </Transition>
  );
};
