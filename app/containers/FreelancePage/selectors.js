import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the freelancePage state domain
 */

const selectFreelancePageDomain = state => state.freelancePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FreelancePage
 */

const makeSelectFreelancePage = () =>
  createSelector(
    selectFreelancePageDomain,
    substate => substate,
  );

export default makeSelectFreelancePage;
export { selectFreelancePageDomain };
