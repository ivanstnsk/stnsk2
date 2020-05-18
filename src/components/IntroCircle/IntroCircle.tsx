import React, {useRef, useCallback} from 'react';

import {useMouseMove} from 'hooks';
import {interpolate, getDistance} from 'utils';

import {useStyles} from './styles';


type TIntroCircleProps = {
  id: string;
};

export const IntroCircle: React.FC<TIntroCircleProps> = ({id}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((xm: number, ym: number) => {
    const semiW = window.innerWidth / 2;
    const semiH = window.innerHeight / 2;
    const x = interpolate(xm - semiW, window.innerWidth, 100);
    const y = interpolate(ym - semiH, window.innerHeight, 100);

    let d = interpolate(getDistance(semiW, semiH, xm, ym), semiW, 30) - 10;
    if (d < 0) d = 0;

    if (containerRef && containerRef.current) {
      containerRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`;
    }
    if (contentRef && contentRef.current) {
      contentRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, -${d / 2}deg)`;
    }
  }, []);

  useMouseMove(id, handleMouseMove);

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
          from Kharkiv, Ukraine
        </div>
      </div>
    </div>
  );
};
