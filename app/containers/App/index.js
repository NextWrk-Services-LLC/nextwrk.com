/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DealsPage from 'containers/DealsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import GigsPage from 'containers/GigsPage/Loadable';
import Privacy from 'containers/Privacy/Loadable';
import Tos from 'containers/Tos/Loadable';
import FullGigPage from 'containers/FullGigPage/Loadable';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

import AppWrapper from './AppWrapper';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Start Working on Your Own Terms"
          defaultTitle="NextWrk"
        >
          <meta
            name="description"
            content="NextWrk connects individuals to their best avenues for success in the gig economy: be it working for big names, like Uber, Lyft, DoorDash, Postmates and AirBnB, or lesser known businesses like Rent Like a Champion, HyreCar and SpotHero. Additionally, we connect our users to new services and deals to ensure they're earning as much as possible as easily as possible!"
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route exact path="/gigs" component={GigsPage} />
          <Route path="/gigs/:id" component={FullGigPage} />
          <Route path="/deals" component={DealsPage} />
          <Route path="/terms-of-service" component={Tos} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </div>
  );
}
