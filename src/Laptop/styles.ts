import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';


// type LaptopStylesProps = {
//   color: string;
//   width: number;
// };

const styles: AppStyles = ({colors: {primary}}) => {
  return {
    // container: ({color, width}: LaptopStylesProps) => {
    container: () => {
      return {
        backgroundColor: primary.bg,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      };
    },
  };
};

type TStyles = Record<string, any>;

// export const useStyles = (props: LaptopStylesProps): TStyles => useTStyles(styles, props);
export const useStyles = (): TStyles => useTStyles(styles);
