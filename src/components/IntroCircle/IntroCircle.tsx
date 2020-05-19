import React, {
  useRef, RefObject, useCallback, useEffect,
} from 'react';

import {useMouseMove} from 'hooks';
import {interpolate, getDistance} from 'utils';

import {MainButton} from '../MainButton';
import {useStyles} from './styles';
import {
  TIntroCircleProps,
  TStylesApplier,
} from './types';


let activated = false;

const FOLLOW_STYLES = [
  [
    (x: number, y: number, d: number) => `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`,
    () => 'transform 0.3s',
  ],
  [
    (x: number, y: number, d: number) => `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d / 2}deg)`,
    () => 'transform 0.3s',
  ],
];

const getFollowStylesApplier = (xm: number, ym: number): TStylesApplier => {
  if (!activated) {
    return;
  }
  const semiW = window.innerWidth / 2;
  const semiH = window.innerHeight / 2;
  const x = interpolate(xm - semiW, window.innerWidth, 100);
  const y = interpolate(ym - semiH, window.innerHeight, 100);

  let d = interpolate(getDistance(semiW, semiH, xm, ym), semiW, 30) - 10;
  if (d < 0) d = 0;

  // eslint-disable-next-line consistent-return
  return (nodeRef: React.RefObject<HTMLDivElement>, styleId: number): void => {
    const styles = FOLLOW_STYLES[styleId];

    if (styles) {
      if (nodeRef.current) {
        // eslint-disable-next-line no-param-reassign
        nodeRef.current.style.transform = styles[0](x, y, d);
        // eslint-disable-next-line no-param-reassign
        nodeRef.current.style.transition = styles[1](x, y, d);
      }
    }
  };
};

const applyContentStyles = (nodeRef: React.RefObject<HTMLDivElement>, showMode: boolean): void => {
  if (showMode) {
    if (nodeRef.current) {
      nodeRef.current.style.opacity = '1'; // eslint-disable-line no-param-reassign
      nodeRef.current.style.transition = 'all 1s'; // eslint-disable-line no-param-reassign
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (nodeRef.current) {
      nodeRef.current.style.opacity = '0'; // eslint-disable-line no-param-reassign
      nodeRef.current.style.transition = 'all 0.4s'; // eslint-disable-line no-param-reassign
    }
  }
};

const applyContainerStyles = (nodeRef: React.RefObject<HTMLDivElement>, showMode: boolean): void => {
  if (showMode) {
    if (nodeRef.current) {
      nodeRef.current.style.width = '568px'; // eslint-disable-line no-param-reassign
      nodeRef.current.style.height = '568px'; // eslint-disable-line no-param-reassign
      nodeRef.current.style.transition = 'all 0.4s'; // eslint-disable-line no-param-reassign
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (nodeRef.current) {
      const size = window.innerWidth * 1.5;
      nodeRef.current.style.width = `${size}px`; // eslint-disable-line no-param-reassign
      nodeRef.current.style.height = `${size}px`; // eslint-disable-line no-param-reassign
      nodeRef.current.style.transition = 'all 1s'; // eslint-disable-line no-param-reassign
    }
  }
};

export const IntroCircle: React.FC<TIntroCircleProps> = ({
  id,
  showMode = false,
}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((xm: number, ym: number) => {
    const applyFollowStyles = getFollowStylesApplier(xm, ym);

    if (applyFollowStyles) {
      applyFollowStyles(containerRef, 0);
      applyFollowStyles(contentRef, 1);
    }
  }, []);

  useMouseMove(id, handleMouseMove);

  useEffect(() => {
    setTimeout(() => {
      activated = true;
    }, 3000);
  }, []);

  useEffect(() => {
    applyContentStyles(contentRef, showMode);
    // setTimeout(
    //   () => applyContainerStyles(containerRef, showMode),
    //   showMode ? 0 : 1000,
    // );
  }, [showMode]);

  return (
    <div className={classes.container}>
      <div
        ref={containerRef}
        className={classes.circleBg}
      />
      <div
        className={classes.content}
        ref={contentRef}
      >
        <div className={classes.logo} />
        <div className={classes.text}>
          Hello, I’m Ivan Stinsky
          <div className={classes.bold}>
            JS Fullstack Developer
          </div>
          <div className={classes.small}>
            from Kharkiv, Ukraine
          </div>
        </div>
        <MainButton>Get in touch</MainButton>
      </div>
    </div>
  );
};
