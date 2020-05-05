import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeTest state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeTest
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export { selectHomePageDomain };
