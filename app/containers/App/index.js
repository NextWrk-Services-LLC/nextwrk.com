/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DealsPage from 'containers/DealsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import GigsPage from 'containers/GigsPage/Loadable';
import FreelancePage from 'containers/FreelancePage/Loadable';
import Privacy from 'containers/Privacy';
import Tos from 'containers/Tos';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  padding: 70px 16px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 5px 8px;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Discover the Best Gig Jobs, Services and Deals to Make Faster, Easier Money"
        defaultTitle="NextWrk"
      >
        <meta
          name="description"
          content="NextWrk connects professionals to their best avenues for success in the gig economy, be it through big names, like Uber, Lyft, DoorDash, Postmates and AirBnB, or lesser known gigs like Rent Like a Champion, HyreCar and SpotHero. We also expose our users to new Services and Deals to make the Gig Economy work for them!"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gigs" component={GigsPage} />
        <Route path="/deals" component={DealsPage} />
        <Route path="/freelance" component={FreelancePage} />
        <Route path="/terms-of-service" component={Tos} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
