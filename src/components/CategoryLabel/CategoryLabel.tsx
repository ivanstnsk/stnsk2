import React from 'react';

import { TCategoryLabelSize, TCategoryLabelType } from './types';
import { useStyles } from './styles';


interface CategoryLabelProps {
  label: string;
  size?: TCategoryLabelSize;
  type: string;
}

export const CategoryLabel: React.FC<CategoryLabelProps> = ({
  label,
  size = 'normal',
  type,
}) => {
  const classes = useStyles({ size, type: type as TCategoryLabelType });

  return (
    <div className={classes.label}>
      {label}
    </div>
  );
};
