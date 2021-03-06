import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';
import { TContentSize } from 'types/sizes';


type TStyleProps = {
  size: TContentSize;
}

const getWrapperStyles = (size: TContentSize): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      height: '80px',
      maxHeight: '80px',
    });
  }
  return ({
    height: '230px',
    maxHeight: '230px',
  });
};

const getPhotoStyles = (size: TContentSize): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      height: '60px',
      width: '60px',
      minHeight: '60px',
      minWidth: '60px',
    });
  }
  return ({
    height: '160px',
    width: '160px',
    minHeight: '160px',
    minWidth: '160px',
  });
};

const getRightContainerStyles = (size: TContentSize): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      alignItems: 'center',
      paddingTop: '0px',
    });
  }
  return ({
    alignItems: 'flex-start',
    paddingTop: '40px',
  });
};

const getSubtitleStyles = (size: TContentSize): AppInnerStyles => {
  if (size === 'compact') {
    return ({
      opacity: '0',
      height: '0px',
      marginTop: '0px',
    });
  }
  return ({
    opacity: '1',
    height: 'auto',
    marginTop: '20px',
  });
};


const styles: AppStyles = ({
  colors: {
    primary: {
      greyUltralight,
    },
  },
  sizes: {
    content: { maxWidth: contentMaxWidth, offsetHorizontal },
    menu: { width: sidebarWidth },
  },
}) => {
  return {
    wrapper: ({ size }: TStyleProps) => ({
      display: 'flex',
      boxSizing: 'border-box',
      paddingLeft: offsetHorizontal,
      paddingRight: offsetHorizontal,
      ...getWrapperStyles(size),
      transition: 'all 0.4s ease',
    }),
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      display: 'flex',
      flex: 1,
      width: '100%',
      maxWidth: contentMaxWidth,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    midContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 50,
    },
    titleContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title: {
      fontSize: 34,
      fontWeight: 300,
      lineHeight: '42px',
      color: greyUltralight,
      fontFamily: 'Quicksand, sans-serif',
      marginRight: 30,
    },
    subTitle: ({ size }: TStyleProps) => ({
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px',
      color: greyUltralight,
      fontFamily: 'Quicksand, sans-serif',
      ...getSubtitleStyles(size),
      transition: 'all 0.2s ease',
    }),
    photo: ({ size }: TStyleProps) => ({
      ...getPhotoStyles(size),
      transition: 'all 0.4s ease',
    }),
    iconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 60,
    },
    rightContainer: ({ size }: TStyleProps) => ({
      height: '100%',
      display: 'flex',
      width: sidebarWidth,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      ...getRightContainerStyles(size),
      transition: 'all 0.4s ease',
    }),
  };
};

export const useStyles = (props: TStyleProps): AppInnerStyles => useTStyles(styles, props);
