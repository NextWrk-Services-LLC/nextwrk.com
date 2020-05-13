/**
 *
 * GigListItem.js
 *
 * This container renders our gig list items, displaying the company icon,
 * gig type, description, promo code and links to review websites and the
 * sign up website
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from 'components/ListItem';

import P from './P';
import A from './A';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
import Header from './Header';
import Promo from './Promo';

export function GigsListItem(props) {
  const { item } = props;
  const images = require.context('../../images/Logos', true);
  let logo = images(`./nw.png`);
  try {
    logo = images(`./${item.id}.png`);
  } catch {
    logo = images(`./nw.png`);
  }

  const content = (
    <React.Fragment>
      <A href={`/gigs/${item.id}`}>
        <Spacing>
          <Wrapper>
            <Header image={logo} name={item.gig} />
            <P>{item.description}</P>
            {item.apppromo || item.jobpromo ? <Promo item={item} /> : null}
          </Wrapper>
        </Spacing>
      </A>
    </React.Fragment>
  );

  // Render the content into a list item
  return <ListItem key={`gig-list-item-${item.id}`} item={content} />;
}

GigsListItem.propTypes = {
  item: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(GigsListItem);
