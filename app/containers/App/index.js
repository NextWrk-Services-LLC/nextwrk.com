/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DealsPage from 'containers/DealsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import GigsPage from 'containers/GigsPage/Loadable';
import FreelancePage from 'containers/FreelancePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  padding: 84px 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - NextWrk" defaultTitle="NextWrk">
        <meta
          name="NextWrk App"
          content="Connecting professionals to their best avenues for success in the gig economy"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/deals" component={DealsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gigs" component={GigsPage} />
        <Route path="/freelance" component={FreelancePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
