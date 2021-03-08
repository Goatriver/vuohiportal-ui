/**
 *
 * LoadingLoading
 *
 */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

function LoadingLoading() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress className={classes.spinner} color="secondary" />
    </Box>
  );
}

export default LoadingLoading;
