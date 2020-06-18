import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = ({
  colors: { primary: { bgContent, underline } },
}) => {
  return {
    wrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderWidth: 0,
      borderTopWidth: 1,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      borderColor: underline,
      backgroundColor: bgContent,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    container: {
      flexDirection: 'row !important',
      justifyContent: 'center !important',
      flexWrap: 'wrap',
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
