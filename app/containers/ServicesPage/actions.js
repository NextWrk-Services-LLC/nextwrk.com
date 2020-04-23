/*
 *
 * ServicesPage actions
 *
 */

import { FILTER_SERVICES } from './constants';

export function changeFilter(filter) {
  return {
    type: FILTER_SERVICES,
    filter,
  };
}
