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
 * Dispatched when loading the gigs fails
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
