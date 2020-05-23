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

const getIconStyles = (size: number) => ({type}: MainCircleButtonStylesProps): TStyles => {
  const iconRes = getIcon(type);

  return {
    width: size,
    height: size,
    display: 'block',
    backgroundImage: `url(${iconRes})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };
};

const styles: AppStyles = ({
  colors: {
    primary: {bgContent, greyUltralight},
  },
  sizes: {
    menu: {
      buttonSize, buttonOffset, buttonIconSize,
    },
  },
}) => {
  return {
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: buttonSize,
      height: buttonSize,
      border: 'none',
      borderRadius: '50%',
      backgroundColor: bgContent,
      color: greyUltralight,
      filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
      outline: 'none',
      cursor: 'pointer',
      marginTop: buttonOffset,
      marginBottom: buttonOffset,
      transition: 'transform 0.3s ease',

      '&:hover': {
        transform: 'scaleX(1.2) scaleY(1.2)',
        transition: 'transform 0.3s ease',
      },
    },
    icon: getIconStyles(buttonIconSize),
  };
};

type TStyles = Record<string, any>;

export const useStyles = (props: MainCircleButtonStylesProps): TStyles => useTStyles(styles, props);
