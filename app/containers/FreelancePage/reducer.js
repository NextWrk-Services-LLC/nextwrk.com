/*
 *
 * FreelancePage reducer
 *
 */
import produce from 'immer';
import { FILTER_FREELANCE } from './constants';

export const initialState = {
  showFreelance: 'all',
};

/* eslint-disable default-case, no-param-reassign */
const freelancePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FILTER_FREELANCE:
        draft.showFreelance = action.filter;
        break;
    }
  });

export default freelancePageReducer;
