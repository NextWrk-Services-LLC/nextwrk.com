/*
 *
 * GigsPage reducer
 *
 */
import produce from 'immer';
import { FILTER_GIGS } from './constants';

export const initialState = {
  showGigs: 'all',
};

/* eslint-disable default-case, no-param-reassign */
const gigsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FILTER_GIGS:
        draft.showGigs = action.filter;
        break;
    }
  });

export default gigsPageReducer;
