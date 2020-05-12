/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectPathname = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location.pathname.substring(6),
  );

const makeSelectGigs = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.componentData.gigs,
  );

const makeSelectServices = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.componentData.services,
  );

const makeSelectDeals = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.componentData.deals,
  );

const makeSelectGigByRouter = searchId =>
  createSelector(
    selectGlobal,
    globalState =>
      globalState.componentData.gigs.filter(obj => obj.id.includes(searchId)),
  );

const makeSelectSelectedGig = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.selectedGig,
  );

const makeSelectFeatured = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.componentData.gigs.slice(0, 4),
  );

export {
  selectGlobal,
  makeSelectDeals,
  makeSelectServices,
  makeSelectGigByRouter,
  makeSelectPathname,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectGigs,
  makeSelectLocation,
  makeSelectSelectedGig,
  makeSelectFeatured,
};
