/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'nextwrk/Component' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'nextwrk/Container/ACTION_CONSTANT';
 */

export const LOAD_GIGS = 'nextwrk/App/LOAD_GIGS';
export const LOAD_GIGS_SUCCESS = 'nextwrk/App/LOAD_GIGS_SUCCESS';
export const LOAD_GIGS_ERROR = 'nextwrk/App/LOAD_GIGS_ERROR';
export const LOAD_SERVICES = 'nextwrk/App/LOAD_SERVICES';
export const LOAD_SERVICES_SUCCESS = 'nextwrk/App/LOAD_SERVICES_SUCCESS';
export const LOAD_SERVICES_ERROR = 'nextwrk/App/LOAD_SERVICES_ERROR';
export const LOAD_DEALS = 'nextwrk/App/LOAD_DEALS';
export const LOAD_DEALS_SUCCESS = 'nextwrk/App/LOAD_DEALS_SUCCESS';
export const LOAD_DEALS_ERROR = 'nextwrk/App/LOAD_DEALS_ERROR';
export const SELECTED_GIG = 'nextwrk/App/SELECTED_GIG';
