import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gigsPage state domain
 */

const selectGigsPageDomain = state => state.gigsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GigsPage
 */

const makeSelectGigsPage = () =>
  createSelector(
    selectGigsPageDomain,
    gigsPageState => gigsPageState.showGigs,
  );

export default makeSelectGigsPage;
export { selectGigsPageDomain };
