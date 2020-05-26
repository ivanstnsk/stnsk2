import { AppStyles, AppInnerStyles } from 'types/style';
import { useTStyles } from 'hooks';


const styles: AppStyles = () => {
  return {
    cardsWrapper: {
      width: '100%',
      overflow: 'visible',
      marginBottom: 70,
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      margin: -15,
    },
  };
};

export const useStyles = (): AppInnerStyles => useTStyles(styles);
