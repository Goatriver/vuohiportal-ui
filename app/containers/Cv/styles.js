import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '5vh',
  },
  paper: {
    padding: theme.spacing(3),
  },
  header: {
    paddingBottom: theme.spacing(3),
  },
  descriptionArea: {
    // padding: theme.spacing(3),
  },
  personal: {
    padding: theme.spacing(1),
    backgroundColor: fade(theme.palette.primary.light, 0.25),
  },
  descText: {
    whiteSpace: 'pre-line',
  },
}));

export default useStyles;
