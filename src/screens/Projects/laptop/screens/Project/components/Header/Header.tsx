import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CategoryLabel, CloseButton } from 'components';
import { TContentSize } from 'types/sizes';
import { Routes } from 'types';

import { useStyles } from './styles';


interface HeaderProps {
  size?: TContentSize;
  title: string;
  subTitle: string;
  tags: string[];
}

export const Header: React.FC<HeaderProps> = ({
  size = 'normal',
  title,
  subTitle,
  tags,
}) => {
  const history = useHistory();
  const classes = useStyles({ size });

  const handleCloseClick = useCallback(() => {
    history.push(Routes.PROJECTS);
  }, [history]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.photo} />
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
