import React, {
  useRef, useCallback, useEffect,
} from 'react';

import { useMouseMove } from 'hooks';
import { interpolate, getDistance, SequenceAnimation } from 'utils';

import { SvgIcon } from '../SvgIcon';
import { MainButton } from '../MainButton';
import { useStyles } from './styles';
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

const applyContentStyles = (nodeRef: React.RefObject<HTMLDivElement>, show: boolean): void => {
  if (show) {
    if (nodeRef.current) {
      new SequenceAnimation<HTMLDivElement>(nodeRef)
        .delay(2000)
        .style('opacity', '1')
        .style('transition', 'all 0.4s')
        .apply();
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (nodeRef.current) {
      new SequenceAnimation<HTMLDivElement>(nodeRef)
        .style('opacity', '0')
        .style('transition', 'all 0.4s')
        .apply();
    }
  }
};

const applyContainerStyles = (nodeRef: React.RefObject<HTMLDivElement>, show: boolean): void => {
  if (show) {
    if (nodeRef.current) {
      new SequenceAnimation<HTMLDivElement>(nodeRef)
        .delay(600)
        .style('width', '568px')
        .style('height', '568px')
        .style('transition', 'all 1s ease')
        .apply();
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (nodeRef.current) {
      const size = 100;
      new SequenceAnimation<HTMLDivElement>(nodeRef)
        .delay(500)
        .style('width', `${size}px`)
        .style('height', `${size}px`)
        .style('transition', 'all 1s')
        .apply();
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
    if (showMode) {
      const applyFollowStyles = getFollowStylesApplier(xm, ym);

      if (applyFollowStyles) {
        applyFollowStyles(containerRef, 0);
        applyFollowStyles(contentRef, 1);
      }
    }
  }, [showMode]);

  useMouseMove(id, handleMouseMove);

  useEffect(() => {
    setTimeout(() => {
      activated = true;
    }, 3000);
  }, []);

  useEffect(() => {
    applyContentStyles(contentRef, showMode);
    applyContainerStyles(containerRef, showMode);
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
        <SvgIcon
          type="logo"
          color="rgba(255,255,255,0.6)"
          width={64}
          height={64}
        />
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
