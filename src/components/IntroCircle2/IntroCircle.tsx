import React, {useEffect, useState} from 'react';

import {interpolate, getDistance} from 'utils';

import {useStyles} from './styles';

type TMouseCoords = {
  x: number;
  y: number;
};

const generatePath = (mouseX: number, mouseY: number): string => {
  let path = '';
  const centerX = 250;
  const centerY = 250;
  const radius = 200;
  const steps = 10;

  for (let i = 0; i < steps; i += 1) {
    const x = (centerX + radius * Math.cos(((2 * Math.PI) * i) / steps));
    const y = (centerY + radius * Math.sin(((2 * Math.PI) * i) / steps));
    const d = interpolate(getDistance(x, y, mouseX, mouseY), window.innerWidth, 2000);
    const delta = isNaN(d) ? 0 : d;
    // console.log(delta);
    path += `${i === 0 ? 'M' : 'L'} ${x + delta} ${y} `;
  }

  return path;
};

const renderDots = (pathD: string): JSX.Element[] => {
  const dots: JSX.Element[] = [];
  const radius = 2;

  const arr: string[] = pathD.split(' ');
  for (let i = 0; i < arr.length; i += 3) {
    if (i + 2 < arr.length) {
      const x = parseFloat(arr[i + 1]);
      const y = parseFloat(arr[i + 2]);
      dots.push(
        <circle
          key={`dot${i}`}
          cx={x}
          cy={y}
          r={radius}
          fill="black"
        />,
      );
    }
  }

  return dots;
};

export const IntroCircle: React.FC<{}> = () => {
  const [mouseCoords, setMouseCoords] = useState<TMouseCoords>({x: 0, y: 0});
  const classes = useStyles(mouseCoords);

  useEffect(() => {
    window.addEventListener('mousemove', (event: MouseEvent): void => {
      const {pageX, pageY} = event;
      const x = interpolate(pageX, window.innerWidth, 255);
      const y = interpolate(pageY, window.innerHeight, 255);

      setMouseCoords({x, y});
    });
  }, [setMouseCoords]);

  const pathD = generatePath(mouseCoords.x, mouseCoords.y);

  return (
    <div className={classes.container}>
      <svg className={classes.svg} viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d={pathD}
          stroke="black"
        />
        {/* {renderDots(pathD)} */}
      </svg>
    </div>
  );
};
