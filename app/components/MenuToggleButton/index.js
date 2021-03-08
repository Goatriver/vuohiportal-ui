/**
 *
 * MenuToggleButton
 *
 */

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { toggleDrawer } from '../../containers/App/actions';
import useStyles from './styles';

function MenuToggleButton(props) {
  const { onToggleDrawer } = props;
  const classes = useStyles();
  return (
    <IconButton className={classes.root} onClick={onToggleDrawer}>
      <MenuIcon />
    </IconButton>
  );
}

MenuToggleButton.propTypes = {
  onToggleDrawer: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onToggleDrawer: () => dispatch(toggleDrawer()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(MenuToggleButton);
