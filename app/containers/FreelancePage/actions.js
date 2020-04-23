/*
 *
 * FreelancePage actions
 *
 */

import { FILTER_FREELANCE } from './constants';

export function changeFreelance(filter) {
  return {
    type: FILTER_FREELANCE,
    filter,
  };
}
