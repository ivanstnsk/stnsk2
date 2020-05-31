import React from 'react';

import { combineClasses } from 'utils/styles';
import { TSvgProjectIconType } from 'types/icons';

import {
  TicketSalingIcon,
  VirtualToursIcon,
  MedicalIcon,
  BankingIcon,
  ServicesIcon,
  SportFansIcon,
  ControlPanelIcon,
  OtherIcon,
} from './icons';
import { SvgProjectIconInnerProps } from './types';


interface SvgProjectIconProps extends SvgProjectIconInnerProps {
  className?: string;
  type: TSvgProjectIconType;
}

const getIcon = (type: TSvgProjectIconType): React.FC<SvgProjectIconInnerProps> => {
  switch (type) {
    case 'ticket-saling': return TicketSalingIcon;
    case 'virtual-tours': return VirtualToursIcon;
    case 'medical': return MedicalIcon;
    case 'banking': return BankingIcon;
    case 'services': return ServicesIcon;
    case 'sport-fans': return SportFansIcon;
    case 'control-panel': return ControlPanelIcon;
    default: return OtherIcon;
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
