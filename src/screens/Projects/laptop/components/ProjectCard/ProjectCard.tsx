import React, { useCallback } from 'react';

import { TProjectData } from 'types/data';
import { CategoryLabel, SvgProjectIcon } from 'components';

import { useStyles } from './styles';


interface ProjectCardProps {
  data: TProjectData;
  onClick: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  data,
  onClick,
}) => {
  const classes = useStyles();
  const { id, title, tags, iconType } = data;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [onClick, id]);

  return (
    <button
      className={classes.button}
      onClick={handleClick}
    >
      <div className={classes.imageContainer}>
        <SvgProjectIcon
          type={iconType}
          color="rgba(255,255,255,0.5)"
          width={80}
          height={80}
        />
      </div>
      <div className={classes.text}>{title}</div>
      <div className={classes.labelsContainer}>
        {tags.map((tag) => (
          <CategoryLabel
            key={`${id}${tag}`}
            type={tag}
            label={tag}
            size="small"
          />
        ))}
      </div>
      <svg
        className={classes.svg}
        width={266}
        height={268}
        viewBox={`0 0 ${266} ${268}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="0"
      >
        <rect x="2" y="2" width={266 - 4} height={268 - 4} rx="10" stroke="#81AF65" strokeWidth="2" />
      </svg>
    </button>
  );
};
