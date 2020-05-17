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

import CenterText from 'components/CenterText';
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
import PSpacing from './PSpacing';

export function ServicesListItem(props) {
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
          <Table>
            <tbody>
              <tr>
                <td>
                  <Img src={logo} alt={`${item.gig} Logo Png`} />
                </td>
                <td>
                  <Title>
                    <H2>{item.gig}</H2>
                    <PSpacing>
                      <P>{item.description}</P>
                    </PSpacing>
                  </Title>
                </td>
              </tr>
            </tbody>
          </Table>
          {item.promo ? (
            <CenterText>
              <hr /> <Deal>{item.promo}</Deal>
            </CenterText>
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
