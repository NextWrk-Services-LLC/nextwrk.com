/**
 *
 * GigListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import CenterText from 'components/CenterText';
import A from 'components/A';
import H3 from 'components/H3';
import P from './P';
import Img from './Img';
import Wrapper from './Wrapper';

export function GigsListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <Img src={item.logo} alt="Company - Logo" />
      <H3>{item.gig}</H3>
      <P>{item.description}</P>
      <CenterText>
        <A
          href={'https://www.indeed.com/cmp/'.concat(item.indeed, '/reviews')}
          target="_blank"
          rel="noopener noreferrer"
        >
          See what others have to say
        </A>
        <p>
          {'Sign Up With Promo Code '.concat(
            item.promocode,
            ' and Get ',
            item.promo,
          )}
        </p>
        <A
          href={'https://www.'.concat(item.gigsite)}
          target="_blank"
          rel="noopener noreferrer"
        >
          TRY IT OUT
        </A>
      </CenterText>
    </Wrapper>
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
