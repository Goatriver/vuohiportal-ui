/**
 *
 * MenuDrawer
 *
 */

import React, { memo } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import MenuDrawerInner from '../MenuDrawerInner';
import { toggleDrawer } from '../../containers/App/actions';
import useStyles from './styles';

function MenuDrawer(props) {
  const classes = useStyles();
  const { drawerOpen, onToggleDrawer, route } = props;
  return (
    <div>
      <Hidden smUp implementation="css">
        <Drawer
          open={drawerOpen}
          onClose={onToggleDrawer}
          variant="temporary"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <MenuDrawerInner route={route} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
        >
          <MenuDrawerInner route={route} />
        </Drawer>
      </Hidden>
    </div>
  );
}

MenuDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
  onToggleDrawer: PropTypes.func,
  route: PropTypes.string.isRequired,
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
)(MenuDrawer);
