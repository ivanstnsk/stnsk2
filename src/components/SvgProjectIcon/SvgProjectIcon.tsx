import React from 'react';

import { combineClasses } from 'utils/styles';
import { TSvgProjectIconType } from 'types/icons';

import {
  TicketSaling,
  VirtualTours,
  Other,
  MedicalIcon,
} from './icons';
import { SvgProjectIconInnerProps } from './types';


interface SvgProjectIconProps extends SvgProjectIconInnerProps {
  className?: string;
  type: TSvgProjectIconType;
}

const getIcon = (type: TSvgProjectIconType): React.FC<SvgProjectIconInnerProps> => {
  switch (type) {
    case 'ticket-saling': return TicketSaling;
    case 'virtual-tours': return VirtualTours;
    case 'medical': return MedicalIcon;
    default: return Other;
  }
};

const renderIcon: React.FC<SvgProjectIconProps> = ({ type, color, width, height }) => {
  const Icon = getIcon(type);

  return (
    <Icon
      color={color}
      width={width}
      height={height}
    />
  );
};

export const SvgProjectIcon: React.FC<SvgProjectIconProps> = ({ className, ...otherProps }) => {
  if (className) {
    return (
      <div className={combineClasses(className)}>
        {renderIcon(otherProps)}
      </div>
    );
  }
  return renderIcon(otherProps);
};
