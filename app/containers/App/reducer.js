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

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {
    gigs: [
      {
        id: '0001',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0002',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0003',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0004',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0005',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0006',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0007',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
      },
      {
        id: '0008',
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACHUlEQVRoQ+2b246CMBCG24eR6IUBo77/vRpOMSb6MmxKBCpZl84J3Dpeeehhvvl/ClPEGu/VNE3jf47lvbXWdiz9m1hhe9AndAvcwXqJiEXclqMzrlPaxg7bKddDK3BUZh5gVOFYFyw9hnXR0kUrjgwsskofj0dzOp1eMui+u1wu4lmdDRhaj0idLUSBt9utqeuapNp+vzd5npPGGFWC7Uf2a2moolNEXIqLKMwN65V2U3mZ/J0VeLPZmNvtNjkppcF6vTb3+x09BCuwlLJjOoq92YDngqXamwV4blgKNBk4yzJTFAX6mKJ0TNMUfNojAy+lLlZlBYasgEuri1GZpDAUODSZUuO+bNViNgCkApMalwSMWZ2lFHaxVFUVtOCTLB00A6IRVOG2+hluG/05owKHZgohXHAXVTggVaFCoS3tLuvKsgwIZWgCDSp0cMh+GBrYX+JDA5MCDh2XdFpS4FCZBdrNpjBGZW5eCCzZ0l8JvNvtWPeNIQ5w+97X6xXSZfifB6Z46GbCXCiAonzTGGpnFksvBY2BZQWe83jGwrIDr1Yr83g8ONz6doyP2oiXtjdF2XFsejONw5dJkpDuA7kY/s3t0nHCoKcuDvv+JhqpWsK64HA4mPP5/NLdXcBAy03M/IsAYwLl6qPAUscOl0LUcVRhVZjqoQ/rr5ZWS3+YJanh9JZ+1ortA1qxqtzD+k9sfdWDWl7NGP2jeD9/hTOD+R2rtgAAAABJRU5ErkJggg==',
        gig: 'Uber Driver',
        description:
          'Drive around town, transporting customers to their requested destinations.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promocode: 'PRGREY',
        promo: '$20',
        gigsite: 'uber.com/drive/',
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
