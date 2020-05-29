import React from 'react';

import { SvgIconInnerProps } from '../types';


export const CloseIcon: React.FC<SvgIconInnerProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M19.999 27.8293L1.9343 9.76467C1.49002 9.32039 0.777493 9.32039 0.333211 9.76467C-0.11107 10.209 -0.11107 10.9215 0.333211 11.3658L19.2026 30.2351C19.6469 30.6794 20.3594 30.6794 20.8037 30.2351L39.6647 11.3658C39.8826 11.1478 40 10.8544 40 10.5694C40 10.2844 39.891 9.991 39.6647 9.77305C39.2204 9.32877 38.5079 9.32877 38.0636 9.77305L19.999 27.8293Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect y="40" width="40" height="40" transform="rotate(-90 0 40)" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
