import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    width: '100%',
    height: '100%',
  },
});

export default useStyles;
