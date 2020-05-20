import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';

import cvIconRes from 'assets/icons/cv-icon.svg';
import projectsIconRes from 'assets/icons/projects-icon.svg';
import skillsIconRes from 'assets/icons/skills-icon.svg';
import contactsIconRes from 'assets/icons/contacts-icon.svg';

import {TButtonType} from './types';


type MainCircleButtonStylesProps = {
  type: TButtonType;
};

const getIcon = (type: TButtonType): string => {
  switch (type) {
    case 'cv':
      return cvIconRes;
    case 'projects':
      return projectsIconRes;
    case 'skills':
      return skillsIconRes;
    case 'contacts':
      return contactsIconRes;
    default:
      return cvIconRes;
  }
};

const getIconStyles = () => ({type}: MainCircleButtonStylesProps): TStyles => {
  const iconRes = getIcon(type);

  return {
    width: 54,
    height: 54,
    display: 'block',
    backgroundImage: `url(${iconRes})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };
};

const styles: AppStyles = ({
  colors: {
    primary: {bg, greyUltralight},
  },
  sizes: {
    buttons: {mainCircleButtonSize},
  },
}) => {
  return {
    '@keyframes dash': {
      from: {strokeDashoffset: 0},
      to: {strokeDashoffset: 24},
    },
    button: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: mainCircleButtonSize,
      height: mainCircleButtonSize,
      border: 'none',
      borderRadius: '50%',
      backgroundColor: bg,
      color: greyUltralight,
      filter: 'drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))',
      outline: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',

      '&:hover': {
        transform: 'scaleX(1.1) scaleY(1.1)',
        transition: 'transform 0.3s ease',
      },
      '&:hover $label': {
        opacity: 1,
        transition: 'opacity 0.3s ease',
      },
    },
    svg: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      strokeDasharray: 4,

      '&:hover': {
        '& circle': {
          strokeWidth: 2.5,
        },
        animation: '$dashIcon 2s linear infinite',
      },
    },
    icon: getIconStyles(),
    label: {
      position: 'absolute',
      left: 0,
      bottom: -30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: mainCircleButtonSize,
      height: 'auto',
      color: greyUltralight,
      fontSize: 18,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (props: MainCircleButtonStylesProps): TStyles => useTStyles(styles, props);
