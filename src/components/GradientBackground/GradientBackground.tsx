import React, {useCallback, useRef} from 'react';

import {useMouseMove} from 'hooks';
import {interpolate, getDistance} from 'utils';

import {useStyles} from './styles';


type TGradientBackgroundProps = {
  id: string;
  children: JSX.Element | JSX.Element[];
};

export const GradientBackground: React.FC<TGradientBackgroundProps> = ({
  id,
  children,
}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((xm: number, ym: number) => {
    const semiW = window.innerWidth / 2;
    const semiH = window.innerHeight / 2;
    const x = interpolate(xm - semiW, window.innerWidth, 100);
    const y = interpolate(ym - semiH, window.innerHeight, 100);

    let d = interpolate(getDistance(semiW, semiH, xm, 0), semiW, 25) - 20;
    if (d < 0) d = 0;

    if (containerRef && containerRef.current) {
      containerRef.current.style.transform = `perspective(600px) rotate3d(0, ${x - y}, 0, ${d}deg)`;
    }
  }, []);

  useMouseMove(id, handleMouseMove);

  return (
    <div className={classes.container}>
      <div
        className={classes.bg}
        ref={containerRef}
      />
      {children}
    </div>
  );
};
