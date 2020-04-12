/**
 * Gets the deals from our back end
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_GIGS } from 'containers/App/constants';
import { gigsLoaded, gigsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors'; Change in future when we want to only load a certain percentage

/**
 * Gigs request/response handler
 */
export function* getGigs() {
  // Select username from store
  // const username = yield select(makeSelectUsername()); Change in future when we want to only select a certain number
  const requestURL = `https://api.github.com/users/markfoster314/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const gigs = yield call(request, requestURL);
    yield put(gigsLoaded(gigs));
  } catch (err) {
    yield put(gigsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* gigsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GIGS, getGigs);
}
