import React, {useRef, useEffect} from 'react';

import {LAPTOP_MAIN_CIRCLE_BUTTON_SIZE} from 'constants/sizes';

import {MainCircleButton} from '../MainCircleButton';

import {useStyles} from './styles';


type TCircleButtonsLayoutProps = {
  showMode?: boolean;
  onButtonClick?: (buttonId: string) => void;
};

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
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.left = `${semiW + ANCHORS[anchor][0]}px`;
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.top = `${semiH + ANCHORS[anchor][1]}px`;
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.transition = 'all 0.6s ease';
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (buttonRef.current) {
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.left = `${semiW - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}px`;
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.top = `${semiH - LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}px`;
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.style.transition = 'all 0.6s ease';
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
