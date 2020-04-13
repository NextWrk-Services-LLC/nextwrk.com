/**
 *
 * GigsList
 *
 * Creates list of item previews
 */

import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import GigListItem from 'containers/GigListItem';

function GigsList({ loading, error, gigs }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please reload the page!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (gigs !== false) {
    return <List items={gigs} component={GigListItem} />;
  }

  return null;
}

GigsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  gigs: PropTypes.any,
};

export default GigsList;
