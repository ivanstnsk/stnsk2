import {AppStyles} from 'types/style';
import {useTStyles} from 'hooks';
import logoRes from 'assets/icons/logo.svg';


const styles: AppStyles = ({colors: {primary: {bg}}}) => {
  return {
    container: {
      position: 'relative',
      width: 568,
      height: 568,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
      borderRadius: '50%',
      backgroundColor: bg,
    },
    circleBg: {
      position: 'absolute',
      width: 568,
      height: 568,
      borderRadius: '50%',
      backgroundColor: bg,
      filter: 'drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))',
    },
    content: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 100,
      fontWeight: 'bold',
      color: '#fff',
    },
    logo: {
      width: 64,
      height: 64,
      backgroundImage: `url(${logoRes})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    text: {
      fontStyle: 'normal',
      fontSize: 35,
      fontWeight: 'bold',
      color: '#f2f2f2',
      lineHeight: '44px',
      marginTop: 40,
    },
    bold: {
      fontWeight: 500,
      color: '#81AF65',
    },
  };
};

type TStyles = Record<string, any>;

export const useStyles = (): TStyles => useTStyles(styles);
