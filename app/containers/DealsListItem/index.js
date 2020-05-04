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
import H2 from 'components/H2';
import Ul from 'components/Ul';
import Li from 'components/Li';
import Popup from 'components/Popup';

import P from './P';
import Img from './Img';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
import Title from './Title';
import Table from './Table';
import TdImg from './TdImg';

export function DealsListItem(props) {
  const { item } = props;

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
          <Table>
            <tbody>
              <tr>
                <TdImg>
                  <Img src={item.logo} alt="Company - Logo" />
                </TdImg>
                <td>
                  <Title>
                    <H2>{item.gig}</H2>
                  </Title>
                </td>
              </tr>
            </tbody>
          </Table>
          <Ul>
            <Li>
              <P>{item.description}</P>
            </Li>
          </Ul>
          {item.promo ? (
            <div style={{ textAlign: 'center' }}>
              <hr /> <P>{item.promo}</P>
            </div>
          ) : null}
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
