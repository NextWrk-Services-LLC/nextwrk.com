import PropTypes from 'prop-types';

function ListItem(props) {
  return props.item;
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
