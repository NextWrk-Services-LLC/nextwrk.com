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
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import CenterText from 'components/CenterText';
import ListItem from 'components/ListItem';
import A from 'components/A';
import P from './P';
import Img from './Img';
import Wrapper from './Wrapper';

const Spacing = styled.div`
  padding: 15px;
`;

export function GigsListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Spacing>
      <Wrapper>
        <Img src={item.logo} alt="Company - Logo" />
        <CenterText>
          <h2 style={{ fontWeight: 'normal', marginTop: '5px' }}>{item.gig}</h2>
        </CenterText>
        <P>{item.description}</P>
        <hr />
        <CenterText>
          {item.indeed ? (
            <A href={item.indeed}>See what others have to say</A>
          ) : (
            ''
          )}
          {item.promo ? <p>{item.promo}</p> : <p />}
          <A href={item.gigsite}>TRY IT OUT</A>
        </CenterText>
      </Wrapper>
    </Spacing>
  );

  // Render the content into a list item
  return <ListItem key={`gig-list-item-${item.id}`} item={content} />;
}

GigsListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(GigsListItem);
