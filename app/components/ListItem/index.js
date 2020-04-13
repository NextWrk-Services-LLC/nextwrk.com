/**
 *
 * ListItem.js
 *
 * Renders item displaying gig information for our list
 */

import PropTypes from 'prop-types';

function ListItem(props) {
  return props.item;
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
