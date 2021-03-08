/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePage = state => state.homePage || initialState;

const makeSelectSocials = () =>
  createSelector(
    selectHomePage,
    homePage => homePage.socials,
  );

export { makeSelectSocials };
