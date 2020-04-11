import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dealsPage state domain
 */

const selectDealsPageDomain = state => state.dealsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DealsPage
 */

const makeSelectDealsPage = () =>
  createSelector(
    selectDealsPageDomain,
    substate => substate,
  );

export default makeSelectDealsPage;
export { selectDealsPageDomain };
