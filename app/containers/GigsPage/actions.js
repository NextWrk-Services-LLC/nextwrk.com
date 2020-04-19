/*
 *
 * GigsPage actions
 *
 */

import { FILTER_GIGS } from './constants';

export function changeFilter(filter) {
  return {
    type: FILTER_GIGS,
    filter,
  };
}
