/**
 *
 * PaperTransparent
 *
 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import useStyles from './styles';
// import styled from 'styled-components';

function PaperTransparent(props) {
  const { children } = props;
  const propsForward = { ...props };
  delete propsForward.children;
  const classes = useStyles();
  return (
    <Paper className={classes.root} {...propsForward}>
      {children}
    </Paper>
  );
}

PaperTransparent.propTypes = {
  children: PropTypes.node,
};

export default PaperTransparent;
