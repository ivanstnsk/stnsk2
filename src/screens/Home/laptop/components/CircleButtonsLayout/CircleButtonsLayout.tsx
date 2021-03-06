import React, { useRef, useEffect } from 'react';

import { SequenceAnimation } from 'utils';

import { MainCircleButton } from '../MainCircleButton';

import { useStyles } from './styles';


type TCircleButtonsLayoutProps = {
  showMode?: boolean;
  onButtonClick?: (buttonId: string) => void;
};

const LAPTOP_MAIN_CIRCLE_BUTTON_SIZE = 134;

const ANCHORS = [
  [420, -LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2],
  [-420 - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE, -LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2],
  [378, LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2 + 73],
  [-378 - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE, LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2 + 73],
];

const setButtonStyles = (
  buttonRef: React.RefObject<HTMLButtonElement>,
  anchor: number,
  showMode: boolean,
): void => {
  const semiW = window.innerWidth / 2;
  const semiH = window.innerHeight / 2;

  if (showMode) {
    if (buttonRef.current) {
      new SequenceAnimation<HTMLButtonElement>(buttonRef)
        .delay(1000)
        .style('display', 'visible')
        .style('left', `${semiW + ANCHORS[anchor][0]}px`)
        .style('top', `${semiH + ANCHORS[anchor][1]}px`)
        .style('opacity', '1')
        .style('transition', 'all 0.6s ease')
        .apply();
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (buttonRef.current) {
      new SequenceAnimation<HTMLButtonElement>(buttonRef)
        .style('left', `${semiW - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}px`)
        .style('top', `${semiH - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}px`)
        .style('opacity', '0')
        .style('transition', 'all 0.6s ease')
        .apply();
    }
  }
};

export const CircleButtonsLayout: React.FC<TCircleButtonsLayoutProps> = ({
  showMode = false,
  onButtonClick,
}) => {
  const classes = useStyles();
  const projectsRef = useRef<HTMLButtonElement>(null);
  const cvRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const settingsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setButtonStyles(projectsRef, 0, showMode);
    setButtonStyles(cvRef, 1, showMode);
    setButtonStyles(settingsRef, 2, showMode);
    setButtonStyles(aboutRef, 3, showMode);
  }, [showMode]);

  return (
    <div className={classes.container}>
      <MainCircleButton
        type="projects"
        label="Projects"
        innerRef={projectsRef}
        onClick={onButtonClick}
      />
      <MainCircleButton
        type="cv"
        label="Curriculum vitae"
        innerRef={cvRef}
        onClick={onButtonClick}
      />
      <MainCircleButton
        type="skills"
        label="My skills"
        innerRef={settingsRef}
        onClick={onButtonClick}
      />
      <MainCircleButton
        type="contacts"
        label="Contacts"
        innerRef={aboutRef}
        onClick={onButtonClick}
      />
    </div>
  );
};
