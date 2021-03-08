/**
 *
 * NavAppBar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { toggleDrawer } from '../../containers/App/actions';

function NavAppBar(props) {
  const classes = useStyles();
  const { children, onToggleDrawer } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={onToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>
          <Button className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavAppBar.propTypes = {
  children: PropTypes.node.isRequired,
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

export default compose(
  withConnect,
  memo,
)(NavAppBar);
