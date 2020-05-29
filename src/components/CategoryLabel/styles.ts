import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

import { TCategoryLabelColors } from 'types/colors';

import { TCategoryLabelSize, TCategoryLabelType } from './types';


type TStylesProps = {
  size: TCategoryLabelSize;
  type: TCategoryLabelType;
}

const getBgColor = (type: TCategoryLabelType, colors: TCategoryLabelColors): string => {
  if (!colors[type]) {
    return colors.other;
  }
  return colors[type];
};

const getSizeStyles = (size: TCategoryLabelSize): AppInnerStyles => {
  if (size === 'small') {
    return ({
      height: '18px',
      fontSize: '11px',
      paddingLeft: '8px',
      paddingRight: '8px',
      lineHeight: '14px',
      borderRadius: '10px',
    });
  }
  return ({
    height: '22px',
    fontSize: '14px',
    paddingLeft: '10px',
    paddingRight: '10px',
    lineHeight: '17px',
    borderRadius: '11px',
  });
};

const styles: AppStyles = ({
  colors: {
    typography: { title },
    categoryLabels,
  },
}) => {
  return {
    label: ({ type, size }: TStylesProps) => ({
      backgroundColor: getBgColor(type, categoryLabels),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'normal',
      color: title,
      margin: 3,
      ...getSizeStyles(size),
    }),
  };
};

export const useStyles = (props: TStylesProps): AppInnerStyles => useTStyles(styles, props);
