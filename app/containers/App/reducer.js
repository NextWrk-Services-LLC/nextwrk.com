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

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {
    gigs: [
      // Gigs
      {
        id: '0001',
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
        id: '0002',
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
        id: '0003',
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
        id: '0004',
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
        id: '0005',
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
        id: '0006',
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
        id: '0007',
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
        id: '0008',
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
        id: '0009',
        logo: rover,
        gig: 'Rover Walker',
        description:
          'Love animals? Get paid to watch dogs as a Sitter or walk dogs as a Walker through Rover!',
        indeed:
          'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
        promo: 'Sign Up Through the Link Below and Get $20!',
        gigsite: 'http://share.rover.com/SWhzJ',
        featured: false,
        type: 'gig',
      },
      {
        id: '0010',
        logo: neighbor,
        gig: 'Neighbor Storage',
        description:
          'Earn money by giving your empty storage space a job. Rent out your basement, garage and even closets!',
        indeed: 'https://www.trustpilot.com/review/neighbor.com',
        promo: 'Sign Up Through the Link Below and Get $50!',
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        featured: false,
        type: 'gig',
      },
      {
        id: '0011',
        logo: uber,
        gig: 'Uber Driver',
        description:
          'The taxi of the 21st century. Drive around town, picking up and dropping off passengers.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promo:
          'Sign Up With Promo Code PRGREY and Get $20 When You Complete a Trip',
        gigsite: 'uber.com/drive/',
        featured: false,
        type: 'gig',
      },
      {
        id: '0012',
        logo: rlac,
        gig: 'Rent Like a Champion',
        description:
          'AirBnb for sporting events! Rent your home out to eager fans traveling for games in your hometown.',
        indeed: 'https://www.trustpilot.com/review/rentlikeachampion.com',
        promo:
          'Sign Up With Promo Code XXXXX and Get $20 After Your First Rental',
        gigsite: 'https://rentlikeachampion.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: '0013',
        logo: rover,
        gig: 'Rover Walker',
        description:
          'Love animals? Get paid to watch dogs as a Sitter or walk dogs as a Walker through Rover!',
        indeed:
          'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
        promo: 'Sign Up Through the Link Below and Get $20!',
        gigsite: 'http://share.rover.com/SWhzJ',
        featured: false,
        type: 'gig',
      },
      {
        id: '0014',
        logo: neighbor,
        gig: 'Neighbor Storage',
        description:
          'Earn money by giving your empty storage space a job. Rent out your basement, garage and even closets!',
        indeed: 'https://www.trustpilot.com/review/neighbor.com',
        promo: 'Sign Up Through the Link Below and Get $50!',
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        featured: false,
        type: 'gig',
      },
      {
        id: '0015',
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
        id: '0016',
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
        id: '0017',
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
        id: '0018',
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
        id: '0019',
        logo: rover,
        gig: 'Rover Walker',
        description:
          'Love animals? Get paid to watch dogs as a Sitter or walk dogs as a Walker through Rover!',
        indeed:
          'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
        promo: 'Sign Up Through the Link Below and Get $20!',
        gigsite: 'http://share.rover.com/SWhzJ',
        featured: false,
        type: 'gig',
      },
      {
        id: '0020',
        logo: neighbor,
        gig: 'Neighbor Storage',
        description:
          'Earn money by giving your empty storage space a job. Rent out your basement, garage and even closets!',
        indeed: 'https://www.trustpilot.com/review/neighbor.com',
        promo: 'Sign Up Through the Link Below and Get $50!',
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        featured: false,
        type: 'gig',
      },

      // Services
      {
        id: '000001',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: '',
        promo: 'Sign Up With Promo Code PRGREY and Get $20',
        gigsite: 'uber.com/drive/',
        featured: true,
        type: 'service',
      },
      {
        id: '00002',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promo: 'Sign Up With Promo Code PRGREY and Get $20',
        gigsite: 'uber.com/drive/',
        featured: true,
        type: 'service',
      },
      {
        id: '00003',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promo: 'Sign Up With Promo Code PRGREY and Get $20',
        gigsite: 'uber.com/drive/',
        featured: false,
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
