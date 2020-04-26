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
import styled from 'styled-components';
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

const Spacing = styled.div`
  margin: 15px;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 10px 20px;
  }
`;

const Title = styled.div`
  text-align: left;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 1px;
  text-align: left;
`;

const TdImg = styled.td`
  width: 20%;
`;

export function GigsListItem(props) {
  const { item } = props;

  const [show, toggleShow] = useState(false);
  const closePopup = useCallback(() => {
    toggleShow(false);
  }, [false]);

  const content = (
    <React.Fragment>
      {show ? <Popup close={closePopup} info={item} /> : ''}
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
          ) : (
            ''
          )}
        </Wrapper>
      </Spacing>
    </React.Fragment>
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
