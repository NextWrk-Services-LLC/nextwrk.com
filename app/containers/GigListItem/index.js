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

import { selectGig } from 'containers/App/actions';

import ListItem from 'components/ListItem';
import H2 from 'components/H2';
import Ul from 'components/Ul';
import Li from 'components/Li';

import Deal from './Deal';
import P from './P';
import Img from './Img';
import Wrapper from './Wrapper';
import Spacing from './Spacing';
import Title from './Title';
import Table from './Table';
import TdImg from './TdImg';

export function GigsListItem(props) {
  const { item, dispatch } = props;

  const content = (
    <React.Fragment>
      <Spacing onClick={() => dispatch(selectGig(item.id))}>
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

GigsListItem.propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.any,
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
