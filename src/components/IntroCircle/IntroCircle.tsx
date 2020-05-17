import React, {useEffect, useState, useRef} from 'react';

import {interpolate, getDistance} from 'utils';

import {useStyles} from './styles';

type TMouseCoords = {
  x: number;
  y: number;
};


export const IntroCircle: React.FC<{}> = () => {
  // const [mouseCoords, setMouseCoords] = useState<TMouseCoords>({x: 0, y: 0});
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('mousemove', (event: MouseEvent): void => {
      const {pageX, pageY} = event;
      const semiW = window.innerWidth / 2;
      const semiH = window.innerHeight / 2;
      const x = interpolate(pageX - semiW, window.innerWidth, 100);
      const y = interpolate(pageY - semiH, window.innerHeight, 100);

      let d = interpolate(getDistance(semiW, semiH, pageX, pageY), semiW, 30) - 10;
      if (d < 0) d = 0;

      // setMouseCoords({x, y});
      if (containerRef && containerRef.current) {
        containerRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`;
        // containerRef.current.style.transform = `rotateY(${x}deg)`;
      }
      if (contentRef && contentRef.current) {
        contentRef.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`;
        // containerRef.current.style.transform = `rotateY(${x}deg)`;
      }
      if (content2Ref && content2Ref.current) {
        content2Ref.current.style.transform = `perspective(600px) rotate3d(${-y}, ${x}, 0, -${d}deg)`;
        // containerRef.current.style.transform = `rotateY(${x}deg)`;
      }
    });
  }, []);


  // console.log(deltaX);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        ref={containerRef}
        className={classes.circleBg}
      />
      {/* <div
        className={classes.content}
        ref={contentRef}
        style={{color: 'black'}}
      >
        <div className={classes.logoBack} />
        <div className={classes.text} style={{color: 'black'}}>
          Hello, I’m Ivan Stinsky
          <div className={classes.bold} style={{color: 'black'}}>
            JS Fullstack Developer
          </div>
          from Kharkiv, Ukraine
        </div>
      </div> */}
      <div
        className={classes.content}
        ref={content2Ref}
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
