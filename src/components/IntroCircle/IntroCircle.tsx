import React, {useRef, useCallback, useEffect} from 'react';

import {useMouseMove} from 'hooks';
import {interpolate, getDistance} from 'utils';

import {MainButton} from '../MainButton';
import {useStyles} from './styles';


type TIntroCircleProps = {
  id: string;
};

let activated = false;

export const IntroCircle: React.FC<TIntroCircleProps> = ({id}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((xm: number, ym: number) => {
    if (!activated) {
      return;
    }
    const semiW = window.innerWidth / 2;
    const semiH = window.innerHeight / 2;
    const x = interpolate(xm - semiW, window.innerWidth, 100);
    const y = interpolate(ym - semiH, window.innerHeight, 100);

    let d = interpolate(getDistance(semiW, semiH, xm, ym), semiW, 30) - 10;
    if (d < 0) d = 0;

    if (containerRef && containerRef.current) {
      containerRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`;
      containerRef.current.style.transition = 'transform 0.3s';
    }
    if (contentRef && contentRef.current) {
      contentRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d / 2}deg)`;
      contentRef.current.style.transition = 'transform 0.3s';
    }
  }, []);

  useMouseMove(id, handleMouseMove);

  useEffect(() => {
    setTimeout(() => {
      activated = true;
    }, 3000);
  }, []);

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
