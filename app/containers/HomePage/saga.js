/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_SOCIALS } from './constants';
import { socialsLoaded, socialsLoadingError } from './actions';

import request from '../../utils/request';

export function* getSocials() {
  const requestURL = 'cv/socials/';
  try {
    // Call our request helper (see 'utils/request')
    const socials = yield call(request, requestURL);
    yield put(socialsLoaded(socials));
  } catch (err) {
    yield put(socialsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* socialsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SOCIALS, getSocials);
}
