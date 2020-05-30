import React from 'react';

import { SvgIconInnerProps } from '../types';


export const DirectionArrowIcon: React.FC<SvgIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.833437 13.167L37.155 13.167L26.0775 2.08951C25.752 1.76396 25.752 1.23662 26.0775 0.911152C26.403 0.585606 26.9304 0.585605 27.2559 0.911152L39.7559 13.4111C40.0814 13.7367 40.0814 14.264 39.7559 14.5895L27.2559 27.0895C27.0931 27.2522 26.8798 27.3336 26.6666 27.3336C26.4534 27.3336 26.2402 27.2522 26.0774 27.0895C25.7519 26.764 25.7519 26.2366 26.0774 25.9111L37.155 14.8337L0.833359 14.8337C0.372734 14.8337 4.02691e-08 14.461 0 14.0004C-4.02691e-08 13.5397 0.372812 13.167 0.833437 13.167Z" fill={color} />
    </svg>
  );
};
