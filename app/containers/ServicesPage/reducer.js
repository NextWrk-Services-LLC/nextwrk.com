/*
 *
 * ServicesPage reducer
 *
 */
import produce from 'immer';
import { FILTER_SERVICES } from './constants';

export const initialState = {
  showServices: 'all',
};

/* eslint-disable default-case, no-param-reassign */
const servicesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FILTER_SERVICES:
        draft.showServices = action.filter;
        break;
    }
  });

export default servicesPageReducer;
