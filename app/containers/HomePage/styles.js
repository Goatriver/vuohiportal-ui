import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.2rem',
    },
  },
  desc: {
    [theme.breakpoints.down('xs')]: {
      whiteSpace: 'pre-line',
    },
  },
}));

export default useStyles;
