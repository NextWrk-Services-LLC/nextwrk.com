/**
 *
 * GigListItem.js
 *
 * This container renders our gig list items, displaying the company icon,
 * gig type, description, promo code and links to review websites and the
 * sign up website
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import Popup from 'components/PopupDeal';

import P from './P';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
import Header from './Header';
import Promo from './Promo';

export function DealsListItem(props) {
  const { item } = props;
  const images = require.context('../../images/Logos', true);
  let logo = images(`./nw.png`);
  try {
    logo = images(`./${item.id}.png`);
  } catch {
    logo = images(`./nw.png`);
  }
  const [show, toggleShow] = useState(false);
  const closePopup = useCallback(() => {
    toggleShow(false);
  }, [false]);

  const content = (
    <React.Fragment>
      {show ? (
        <Popup key={`popup-${item.id}`} close={closePopup} info={item} />
      ) : null}
      <Spacing onClick={() => toggleShow(!show)}>
        <Wrapper>
          <Header image={logo} name={item.gig} />
          <P>{item.description}</P>
          {item.promo ? <Promo promo={item.promo} /> : null}
        </Wrapper>
      </Spacing>
    </React.Fragment>
  );

  // Render the content into a list item
  return <ListItem key={`gig-list-item-${item.id}`} item={content} />;
}

DealsListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(DealsListItem);
