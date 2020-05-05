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

const makeSelectGigById = () =>
  createSelector(
    selectGlobal,
    globalState =>
      globalState.componentData.gigs.filter(obj =>
        obj.id.includes(globalState.selectedGig),
      ),
  );

const makeSelectSelectedGig = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.selectedGig,
  );

export {
  selectGlobal,
  makeSelectDeals,
  makeSelectServices,
  makeSelectGigById,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectGigs,
  makeSelectLocation,
  makeSelectSelectedGig,
};
