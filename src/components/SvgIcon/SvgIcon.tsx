import React from 'react';

import {
  CVIcon,
  ProjectsIcon,
  AboutIcon,
  ContactsIcon,
  LogoIcon,
} from './icons';
import { TSvgIconType, SvgIconInnerProps } from './types';


interface SvgIconProps extends SvgIconInnerProps {
  type: TSvgIconType;
}

const getIcon = (type: TSvgIconType): React.FC<SvgIconInnerProps> => {
  switch (type) {
    case 'cv': return CVIcon;
    case 'projects': return ProjectsIcon;
    case 'about': return AboutIcon;
    case 'contacts': return ContactsIcon;
    case 'logo': return LogoIcon;
    default: return CVIcon;
  }
};

export const SvgIcon: React.FC<SvgIconProps> = ({ type, color, width, height }) => {
  const Icon = getIcon(type);

  return (
    <Icon
      color={color}
      width={width}
      height={height}
    />
  );
};
