/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet/es/Helmet';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

import mainTheme from './mainTheme';
import useStyles from './styles';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Cv from '../Cv/Loadable';
import { makeSelectDrawerOpen, makeSelectLocation } from './selectors';
import MenuToggleButton from '../../components/MenuToggleButton';
import MenuDrawer from '../../components/MenuDrawer';

function App(props) {
  const { route, drawerOpen } = props;
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Helmet titleTemplate="%s - goatriver.fi" defaultTitle="goatriver.fi">
        <meta name="description" content="Personal homepage & portfolio" />
      </Helmet>
      <MenuToggleButton />
      <MenuDrawer drawerOpen={drawerOpen} route={route.pathname} />
      <div className={classes.content}>
        <Container fluid="true">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cv" component={Cv} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  route: makeSelectLocation(),
  drawerOpen: makeSelectDrawerOpen(),
});

App.propTypes = {
  drawerOpen: PropTypes.bool,
  route: PropTypes.object,
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
