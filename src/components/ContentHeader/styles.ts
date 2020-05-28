import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';

import { TPageHeaderSizes, TContentSize } from 'types/sizes';


type TStyleProps = {
  size: TContentSize;
}

const getContainerStyles = (size: TContentSize, sizes: TPageHeaderSizes): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      marginTop: `${sizes.offsetTopCompact}px`,
      marginBottom: `${sizes.offsetBottomCompact}px`,
    });
  }
  return ({
    marginTop: `${sizes.offsetTop}px`,
    marginBottom: `${sizes.offsetBottom}px`,
  });
};

const getTitleStyles = (size: TContentSize): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      fontSize: '36px',
      lineHeight: '45px',
    });
  }
  return ({
    fontSize: '50px',
    lineHeight: '62px',
  });
};

const styles: AppStyles = ({
  colors: {
    typography: { title, subTitle },
  },
  sizes: {
    content: { offsetHorizontal },
    page: { header: headerSizes },
  },
}) => {
  return {
    container: ({ size }: TStyleProps) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: offsetHorizontal,
      marginRight: offsetHorizontal,
      ...getContainerStyles(size, headerSizes),
      transition: 'all 0.4s ease',
    }),
    title: ({ size }: TStyleProps) => ({
      fontWeight: '300',
      color: title,
      ...getTitleStyles(size),
      transition: 'all 0.4s ease',
    }),
    subTitle: ({ size }: TStyleProps) => ({
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: subTitle,
      marginTop: 5,
      opacity: size === 'compact' ? 0 : 1,
      height: size === 'compact' ? '0px' : 'auto',
      transition: 'opacity 0.2s ease',
    }),
  };
};

export const useStyles = (props: TStyleProps): AppInnerStyles => useTStyles(styles, props);
