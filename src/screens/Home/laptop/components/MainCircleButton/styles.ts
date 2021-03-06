import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

// eslint-disable-next-line
// @ts-ignore
import cvIconRes from 'assets/icons/cv-icon.svg';
// eslint-disable-next-line
// @ts-ignore
import projectsIconRes from 'assets/icons/projects-icon.svg';
// eslint-disable-next-line
// @ts-ignore
import skillsIconRes from 'assets/icons/skills-icon.svg';
// eslint-disable-next-line
// @ts-ignore
import contactsIconRes from 'assets/icons/contacts-icon.svg';

import { TButtonType } from './types';


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

const getIconStyles = () => ({ type }: MainCircleButtonStylesProps): AppInnerStyles => {
  const iconRes = getIcon(type);

  return {
    width: '54px',
    height: '54px',
    display: 'block',
    backgroundImage: `url(${iconRes})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };
};

const styles: AppStyles = ({
  colors: {
    primary: { bg, greyUltralight },
  },
  sizes: {
    buttons: { mainCircleButtonSize },
  },
}) => {
  return {
    '@keyframes dash': {
      from: { strokeDashoffset: 0 },
      to: { strokeDashoffset: 24 },
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
      opacity: 0,

      '&:hover': {
        transform: 'scaleX(1.1) scaleY(1.1)',
        transition: 'transform 0.3s ease',
      },
      '&:hover $label': {
        opacity: 1,
        transition: 'opacity 0.3s ease',
      },
      '&:hover $svg': {
        '& circle': {
          strokeWidth: 2.5,
        },
        animation: '$dash 2s linear infinite',
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

export const useStyles = (props: MainCircleButtonStylesProps): AppInnerStyles => {
  return useTStyles(styles, props);
};
