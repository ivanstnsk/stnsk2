import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CategoryLabel, CloseButton, SvgProjectIcon } from 'components';
import { TSvgProjectIconType } from 'types/icons';
import { TContentSize } from 'types/sizes';
import { Routes } from 'types';

import { useStyles } from './styles';


interface HeaderProps {
  size?: TContentSize;
  title: string;
  subTitle: string;
  tags: string[];
  iconType: TSvgProjectIconType;
}

export const Header: React.FC<HeaderProps> = ({
  size = 'normal',
  title,
  subTitle,
  tags,
  iconType,
}) => {
  const history = useHistory();
  const classes = useStyles({ size });
  const iconSize = size === 'normal' ? 160 : 60;

  const handleCloseClick = useCallback(() => {
    history.push(Routes.PROJECTS);
  }, [history]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <SvgProjectIcon
            type={iconType}
            color="rgba(255,255,255,0.5)"
            width={iconSize}
            height={iconSize}
            className={classes.photo}
          />
          <div className={classes.midContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.title}>{title}</div>
              {tags.map((tag) => (
                <CategoryLabel
                  key={tag}
                  type={tag}
                  label={tag}
                />
              ))}
            </div>
            <div className={classes.subTitle}>{subTitle}</div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <CloseButton
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
};
