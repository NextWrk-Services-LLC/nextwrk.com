/*
 * App Actions
 *
 * Actions change things in your application
 * Since react boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way NextWrk.com interacts with
 * its application state. This guarantees that the state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_GIGS,
  LOAD_GIGS_SUCCESS,
  LOAD_GIGS_ERROR,
  LOAD_SERVICES,
  LOAD_SERVICES_SUCCESS,
  LOAD_SERVICES_ERROR,
  LOAD_DEALS,
  LOAD_DEALS_SUCCESS,
  LOAD_DEALS_ERROR,
  SELECTED_GIG,
} from './constants';

/**
 * Load the gigs, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GIGS
 */
export function loadGigs() {
  return {
    type: LOAD_GIGS,
  };
}

/**
 * Dispatched when the gigs are loaded by the request saga
 *
 * @param  {array} gigs The gig data
 *
 * @return {object}      An action object with a type of LOAD_GIGS_SUCCESS passing the gigs
 */
export function gigsLoaded(gigs) {
  return {
    type: LOAD_GIGS_SUCCESS,
    gigs,
  };
}

/**
 * Dispatched when loading the gigs fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_GIGS_ERROR passing the error
 */
export function gigsLoadingError(error) {
  return {
    type: LOAD_GIGS_ERROR,
    error,
  };
}

/**
 * Load the gigs, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GIGS
 */
export function loadServices() {
  return {
    type: LOAD_SERVICES,
  };
}

/**
 * Dispatched when the gigs are loaded by the request saga
 *
 * @param  {array} services The services data
 *
 * @return {object}      An action object with a type of LOAD_GIGS_SUCCESS passing the gigs
 */
export function servicesLoaded(services) {
  return {
    type: LOAD_SERVICES_SUCCESS,
    services,
  };
}

/**
 * Dispatched when loading the services fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_GIGS_ERROR passing the error
 */
export function servicesLoadingError(error) {
  return {
    type: LOAD_SERVICES_ERROR,
    error,
  };
}

/**
 * Load the gigs, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GIGS
 */
export function loadDeals() {
  return {
    type: LOAD_DEALS,
  };
}

/**
 * Dispatched when the deals are loaded by the request saga
 *
 * @param  {array} deals The deals data
 *
 * @return {object}      An action object with a type of LOAD_GIGS_SUCCESS passing the gigs
 */
export function dealsLoaded(deals) {
  return {
    type: LOAD_DEALS_SUCCESS,
    deals,
  };
}

/**
 * Dispatched when loading the gigs fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_GIGS_ERROR passing the error
 */
export function dealsLoadingError(error) {
  return {
    type: LOAD_DEALS_ERROR,
    error,
  };
}

/**
 * Dispatched when changing gig to view in the full page
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_GIGS_ERROR passing the error
 */
export function selectGig(id) {
  return {
    type: SELECTED_GIG,
    id,
  };
}
