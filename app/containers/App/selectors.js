import { createSelector } from 'reselect';

const selectRouter = state => state.router;
const selectApp = state => state.app;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectDrawerOpen = () =>
  createSelector(
    selectApp,
    appState => appState.drawerOpen,
  );

export { makeSelectLocation, makeSelectDrawerOpen };
