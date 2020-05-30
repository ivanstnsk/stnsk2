import React from 'react';

import { TSvgIconType } from 'types/icons';
import { combineClasses } from 'utils/styles';

import {
  CVIcon,
  ProjectsIcon,
  AboutIcon,
  ContactsIcon,
  ArticlesIcon,
  LogoIcon,
  WebIcon,
  MobileIcon,
  DesignIcon,
  BackendIcon,
  MailIcon,
  SkypeIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  TelescopeIcon,
  CloseIcon,
  MaintenanceIcon,
  ProjectCalendarIcon,
  WorkResultIcon,
  AchievementsIcon,
  TeamIcon,
  DirectionArrowIcon,
} from './icons';
import { SvgIconInnerProps } from './types';


interface SvgIconProps extends SvgIconInnerProps {
  className?: string;
  type: TSvgIconType;
}

const getIcon = (type: TSvgIconType): React.FC<SvgIconInnerProps> => {
  switch (type) {
    case 'cv': return CVIcon;
    case 'projects': return ProjectsIcon;
    case 'about': return AboutIcon;
    case 'contacts': return ContactsIcon;
    case 'articles': return ArticlesIcon;
    case 'logo': return LogoIcon;
    case 'web': return WebIcon;
    case 'mobile': return MobileIcon;
    case 'design': return DesignIcon;
    case 'backend': return BackendIcon;
    case 'mail': return MailIcon;
    case 'skype': return SkypeIcon;
    case 'github': return GithubIcon;
    case 'linkedin': return LinkedInIcon;
    case 'instagram': return InstagramIcon;
    case 'not-found': return TelescopeIcon;
    case 'close': return CloseIcon;
    case 'maintenance': return MaintenanceIcon;
    case 'schedule': return ProjectCalendarIcon;
    case 'work-result': return WorkResultIcon;
    case 'achievements': return AchievementsIcon;
    case 'team': return TeamIcon;
    case 'direction-arrow': return DirectionArrowIcon;
    default: return CVIcon;
  }
};

const renderIcon: React.FC<SvgIconProps> = ({ type, color, width, height }) => {
  const Icon = getIcon(type);

  return (
    <Icon
      color={color}
      width={width}
      height={height}
    />
  );
};

export const SvgIcon: React.FC<SvgIconProps> = ({ className, ...otherProps }) => {
  if (className) {
    return (
      <div className={combineClasses(className)}>
        {renderIcon(otherProps)}
      </div>
    );
  }
  return renderIcon(otherProps);
};
