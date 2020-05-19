import React, {
  useRef, RefObject, useCallback, useEffect,
} from 'react';

import {useMouseMove} from 'hooks';
import {interpolate, getDistance} from 'utils';

import {MainButton} from '../MainButton';
import {useStyles} from './styles';


type TIntroCircleProps = {
  id: string;
  showMode?: boolean;
};

let activated = false;

const TRANSFORMATIONS = [
  [
    (x: number, y: number, d: number) => `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d}deg)`,
    () => 'transform 0.3s',
  ],
  [
    (x: number, y: number, d: number) => `perspective(600px) rotate3d(${-y}, ${x}, 0, ${d / 2}deg)`,
    () => 'transform 0.3s',
  ],
];

type TStylesCalculator =
  | ((nodeRef: React.RefObject<HTMLDivElement>, showMode: boolean, styleId: number) => void)
  | undefined;

const getStylesCalculator = (xm: number, ym: number): TStylesCalculator => {
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
  return (nodeRef: React.RefObject<HTMLDivElement>, showMode: boolean, styleId: number): void => {
    const styles = TRANSFORMATIONS[styleId];

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

export const IntroCircle: React.FC<TIntroCircleProps> = ({
  id,
  showMode = false,
}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((xm: number, ym: number) => {
    const applyStyles = getStylesCalculator(xm, ym);
    if (applyStyles) {
      applyStyles(containerRef, showMode, 0);
      applyStyles(contentRef, showMode, 1);
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
