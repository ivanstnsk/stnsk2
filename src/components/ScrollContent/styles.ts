import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


type TStylesProps = {
  showTopUnderline: boolean;
}

const styles: AppStyles = ({ colors: { primary: { underline } } }) => {
  return {
    wrapper: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    container: ({ showTopUnderline }: TStylesProps) => ({
      width: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      overflowY: 'scroll',
      borderTopWidth: showTopUnderline ? 1 : 0,
      borderWidth: 0,
      borderColor: underline,
      borderStyle: 'solid',
      paddingRight: 17,
      boxSizing: 'content-box',
    }),
  };
};

export const useStyles = (props: TStylesProps): AppInnerStyles => useTStyles(styles, props);
