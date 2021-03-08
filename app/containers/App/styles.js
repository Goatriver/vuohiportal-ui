import { makeStyles } from '@material-ui/core';
import BgImage from '../../images/bg_alt.jpg';
// eslint-disable-next-line no-unused-vars
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    position: 'absolute',
    display: 'flex',
    minHeight: '100%',
    width: '100%',
    overflowX: 'hidden',
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default useStyles;
