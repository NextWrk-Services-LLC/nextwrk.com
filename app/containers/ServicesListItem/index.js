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
import Popup from 'components/Popup';

import Deal from 'containers/GigListItem/Deal';
import P from './P';
import Img from './Img';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
import Title from './Title';
import Table from './Table';

export function ServicesListItem(props) {
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
                <td>
                  <Img src={item.logo} alt="Company - Logo" />
                </td>
                <td>
                  <Title>
                    <H2>{item.gig}</H2>
                    <div style={{ marginTop: '-15px' }}>
                      <P>{item.description}</P>
                    </div>
                  </Title>
                </td>
              </tr>
            </tbody>
          </Table>
          {item.promo ? (
            <div style={{ textAlign: 'center' }}>
              <hr /> <Deal>{item.promo}</Deal>
            </div>
          ) : null}
        </Wrapper>
      </Spacing>
    </React.Fragment>
  );

  // Render the content into a list item
  return <ListItem key={`gig-list-item-${item.id}`} item={content} />;
}

ServicesListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(ServicesListItem);
