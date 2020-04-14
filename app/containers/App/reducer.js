/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_GIGS_SUCCESS, LOAD_GIGS, LOAD_GIGS_ERROR } from './constants';
import rlac from './img/rlac.png';
import rover from './img/rover.jpg';
import uber from './img/uber.png';
import neighbor from './img/neighbor.png';
import taskrabbit from './img/taskrabbit.png';
import thumbtack from './img/thumbtack.png';
import roadie from './img/roadie.png';
import instacart from './img/instacart.png';
import lyft from './img/lyft.png';
import amazon from './img/amazon.png';
import airbnb from './img/airbnb.png';
import graphite from './img/graphite.png';
import postmates from './img/postmates.png';
import doordash from './img/doordash.png';
import wag from './img/wag.png';
import ubereats from './img/ubereats.png';
import turo from './img/turo.png';
import getaround from './img/getaround.png';
import fiverr from './img/fiverr.png';
import handy from './img/handy.png';
// Services
import gridwise from './img/gridwise.png';
import mystro from './img/mystro.jpg';
import surge from './img/surge.png';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {
    gigs: [
      // Gigs
      {
        id: 'G0001',
        logo: uber,
        gig: 'Uber Driver',
        description:
          'The taxi of the 21st century. Drive around town, picking up and dropping off passengers.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promo:
          'Sign Up With Promo Code PRGREY and Get $20 When You Complete a Trip',
        gigsite: 'uber.com/drive/',
        featured: true,
        type: 'gig',
      },
      {
        id: 'G0002',
        logo: rlac,
        gig: 'Rent Like a Champion',
        description:
          'AirBnb for sporting events! Rent your home out to eager fans traveling for games in your hometown.',
        indeed: 'https://www.trustpilot.com/review/rentlikeachampion.com',
        promo:
          'Sign Up With Promo Code XXXXX and Get $20 After Your First Rental',
        gigsite: 'https://rentlikeachampion.com/',
        featured: true,
        type: 'gig',
      },
      {
        id: 'G0003',
        logo: rover,
        gig: 'Rover Walker',
        description:
          'Love animals? Get paid to watch dogs as a Sitter or walk dogs as a Walker through Rover!',
        indeed:
          'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
        promo: 'Sign Up Through the Link Below and Get $20!',
        gigsite: 'http://share.rover.com/SWhzJ',
        featured: true,
        type: 'gig',
      },
      {
        id: 'G0004',
        logo: neighbor,
        gig: 'Neighbor Storage',
        description:
          'Earn money by giving your empty storage space a job. Rent out your basement, garage and even closets!',
        indeed: 'https://www.trustpilot.com/review/neighbor.com',
        promo: 'Sign Up Through the Link Below and Get $50!',
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        featured: true,
        type: 'gig',
      },
      {
        id: 'G0005',
        logo: taskrabbit,
        gig: 'TaskRabbit Tasker',
        description:
          'TaskRabbit is a marketplace that matches freelance labor with local demand. Get paid to help with everyday tasks, like cleaning, moving, delivery and handyman work',
        indeed: 'https://www.indeed.com/cmp/Taskrabbit/reviews',
        promo: '',
        gigsite:
          'https://support.taskrabbit.com/hc/en-us/articles/360031918292-How-Do-I-Become-a-Tasker-',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0006',
        logo: thumbtack,
        gig: 'Thumbtack Pro',
        description:
          'Thumbtack matches customers with local professionals in categories such as home, wellness, events, and lessons.',
        indeed: 'https://www.indeed.com/cmp/Thumbtack/reviews',
        promo: '',
        gigsite:
          'https://help.thumbtack.com/article/signing-up-as-a-professional',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0007',
        logo: roadie,
        gig: 'Roadie Driver',
        description:
          'Going on a roadtrip soon? Roadie will pay you to fill your empty space and complete deliveries on the way',
        indeed: 'https://www.indeed.com/cmp/Roadie/reviews',
        promo: '',
        gigsite: 'https://my.roadie.com/drive/sign-up/basic-info',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0008',
        logo: instacart,
        gig: 'Instacart Shopper',
        description:
          'Shoppers are independent contractors that use the Instacart platform to shop and deliver orders for their customers.',
        indeed: 'https://www.indeed.com/cmp/Instacart/reviews',
        promo: '',
        gigsite: 'https://shoppers.instacart.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0009',
        logo: lyft,
        gig: 'Lyft Driver',
        description:
          'Lyft is a ridesharing app. Get paid to drive passengers around town',
        indeed: 'https://www.indeed.com/cmp/Lyft/reviews',
        promo: '',
        gigsite: 'https://www.lyft.com/drive-with-lyft',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0010',
        logo: amazon,
        gig: 'Amazon Flex Driver',
        description:
          'Perform the "last mile" of Amazon delivery, moving packages from regional centers to customers.',
        indeed: 'https://www.indeed.com/cmp/Amazon.com/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://flex.amazon.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0011',
        logo: graphite,
        gig: 'Graphite Freelancer',
        description:
          'Graphite is a freelance network of 5,200 independent experts, consultants, executives and boutique firms',
        indeed: '',
        promo: '',
        gigsite: 'https://www.graphite.com/professional/signup',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0012',
        logo: airbnb,
        gig: 'AirBnB Host',
        description:
          'Rent out your home and/or rooms to travelers. AirBnB gives you full control of your availability, prices and house rules.',
        indeed: 'https://www.indeed.com/cmp/Airbnb/reviews',
        promo: '',
        gigsite: 'https://www.airbnb.com/host/homes',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0013',
        logo: postmates,
        gig: 'Postmates Courier',
        description:
          'Postmates drivers earn a living by delivering food, convenience items, and small office goods to local consumers.',
        indeed: 'https://www.indeed.com/cmp/Postmates/reviews',
        promo: '',
        gigsite: 'https://fleet.postmates.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0014',
        logo: doordash,
        gig: 'DoorDash Dasher',
        description:
          'Doordash is a food delivery app that employs Dashers to Deliver goods.',
        indeed: 'https://www.indeed.com/cmp/Doordash/reviews',
        promo: '',
        gigsite: 'https://www.doordash.com/dasher/signup/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0015',
        logo: wag,
        gig: 'Wag Walker',
        description:
          'Wag! is the #1 dog walking app to book a dog walker on-demand, or at your convenience.',
        indeed: 'https://www.indeed.com/cmp/Wag!-1/reviews',
        promo: '',
        gigsite: 'https://wagwalking.com/dog-walker',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0016',
        logo: ubereats,
        gig: 'Uber Delivery Driver',
        description:
          'UberEats drivers pick up food from local restaurants and deliver the orders to customers.',
        indeed:
          'https://www.indeed.com/cmp/Uber-Partner-Drivers/reviews?fjobtitle=Delivery+Driver',
        promo: '',
        gigsite: 'https://www.uber.com/a/signup/drive/deliver/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0017',
        logo: turo,
        gig: 'Turo Car Rental',
        description:
          'Instead of leaving your car in the garage all day, rent it out! Turo is a car rental service that connects renters with car owners.',
        indeed: 'https://www.trustpilot.com/review/turo.com',
        promo: '',
        gigsite: 'https://turo.com/us/en/list-your-car',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0018',
        logo: getaround,
        gig: 'Getaround Car Rental',
        description:
          'Instead of leaving your car in the garage all day, rent it out! Getaround is a car rental service that connects renters with car owners.',
        indeed: 'https://www.yelp.com/biz/getaround-san-francisco',
        promo: '',
        gigsite: 'https://www.getaround.com/list',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0019',
        logo: fiverr,
        gig: 'Fiverr Freelancer',
        description:
          'Fiverr is one of the easiest ways to make money in the gig economy. No matter what skills you have, with a little creativity you sell your services to a platform of motivated buyers.',
        indeed: 'https://www.indeed.com/cmp/Fiverr/reviews',
        promo: '',
        gigsite: 'https://www.fiverr.com/start_selling',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0020',
        logo: handy,
        gig: 'Handy Worker',
        description:
          'Handy pays for being a home cleaner and handymen. It covers over 20 cities in North America, Canada, and the UK.',
        indeed: 'https://www.indeed.com/cmp/Handy/reviews',
        promo: '',
        gigsite: 'https://www.handy.com/apply',
        featured: false,
        type: 'gig',
      },

      // Services
      {
        id: 'S0001',
        logo: gridwise,
        gig: 'Gridwise',
        description:
          'Gridwise is an intelligence platform which provides information on ridesharing insights to customers, including both rideshare and taxi drivers, to help drivers improve efficiency and profits on the road.',
        indeed:
          'https://appgrooves.com/app/gridwise-earn-more-by-driving-smarter-by-swerv-technologies-llc/negative',
        promo: '',
        gigsite: 'https://gridwise.io/',
        featured: true,
        type: 'service',
      },
      {
        id: 'S0002',
        logo: mystro,
        gig: 'Mystro',
        description:
          'Mystro is an app that orchestrates incoming passenger requests between the Uber and Lyft rideshare apps, so you can stop clicking back and forth',
        indeed:
          'https://play.google.com/store/apps/details?id=partners.driver.mystro&hl=en_US',
        promo: '',
        gigsite: 'https://mystrodriver.com/download',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0003',
        logo: surge,
        gig: 'Surge 2x',
        description:
          'By using Surge you are able to only drive during surges. You will be able to out perform other top drivers in your city, drastically increasing your profit.',
        indeed: 'https://apps.apple.com/us/app/surge-2x/id986581500',
        promo: '',
        gigsite: 'http://www.surgeapp.org/',
        featured: true,
        type: 'service',
      },
    ],
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_GIGS:
        draft.loading = true;
        draft.error = false;
        draft.userData.gigs = false;
        break;

      case LOAD_GIGS_SUCCESS:
        draft.userData.gigs = action.gigs;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_GIGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
