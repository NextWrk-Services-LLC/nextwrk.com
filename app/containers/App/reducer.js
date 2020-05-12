/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_GIGS_SUCCESS,
  LOAD_GIGS,
  LOAD_GIGS_ERROR,
  LOAD_SERVICES,
  LOAD_SERVICES_SUCCESS,
  LOAD_SERVICES_ERROR,
  LOAD_DEALS,
  LOAD_DEALS_SUCCESS,
  LOAD_DEALS_ERROR,
  SELECTED_GIG,
} from './constants';

// The initial state of the App
export const initialState = {
  selectedGig: 'G0001',
  loading: false,
  error: false,
  componentData: {
    gigs: [
      {
        id: 'G0004',
        gig: 'Neighbor',
        app:
          'Storage units and parking at half the cost of traditional storage providers. A bold, new take on storage, Neighbor connects people who have unused storage spaces with people in the area looking for a place to keep their things.',
        description:
          'Neighbor renters earn money renting out their basements, garages and even closets to neighbors. Clean out your garage and you can start earning over $2,000 extra a year!',
        apppromo: 'Sign Up for Neighbor and Get $50!',
        resources: [
          {
            title: 'TrustPilot, Neighbor Review',
            link: 'https://www.trustpilot.com/review/neighbor.com',
          },
          {
            title: 'Neighbor Storage FAQs',
            link: 'https://www.neighbor.com/faqs',
          },
        ],
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        pay:
          'Rent out a closet for ~$400 a year, a garage for ~$1,800 a year, or a basement for ~$2,100 a year',
        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0009',
        gig: 'Lyft',
        app:
          'Lyft matches you with a nearby driver who will pick you up and take you where you want to go. Use the Lyft app to get a ride in minutes. Just tap request and a driver’s there. By taking Lyft, you can help your community reduce traffic and take cars off the road.',
        description:
          'Lyft drivers offer passengers a safe ride to their destination. Lyft is one of the largest rideshare apps and boasts a lower barrier of entry and higher tips on average than Uber.',
        apppromo: 'Sign Up for Lyft and Get $5!',
        resources: [
          {
            title: 'Indeed: Job Reviews from Lyft Drivers',
            link: 'https://www.indeed.com/cmp/Lyft/reviews',
          },
          {
            title: 'r/lyftdrivers: Subreddit for Lyft Drivers',
            link: 'https://www.reddit.com/r/lyftdrivers/',
          },
        ],
        gigsite: 'https://www.lyft.com/drive-with-lyft',
        appsite: 'https://www.lyft.com/i/FOSTER52621?utm_medium=p2pi_iacc',
        pay: 'On average Lyft drivers make about $17.50 an hour',
        services: [
          'S0001',
          'S0002',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0007',
        gig: 'Roadie',
        app:
          'Roadie was the first “on-the-way” delivery service. They put extra space in passenger vehicles to work by connecting people with items to send with drivers heading.',
        description:
          'Roadie drivers get paid to fill up their empty car space and complete deliveries while they roadtrip. Going on a roadtrip soon? Sign up for Roadie and make some extra money on the way.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Roadies',
            link: 'https://www.indeed.com/cmp/Roadie/reviews',
          },
        ],
        gigsite: 'https://my.roadie.com/drive/sign-up/basic-info',
        appsite: 'https://www.roadie.com/',
        pay:
          'Most local gigs pay between $8 and $50, with long distance trips paying up to $650',
        services: ['S0004', 'S0005'],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0014',
        gig: 'DoorDash',
        app:
          'Delivery & takeout from the best local restaurants. Breakfast, lunch, dinner and more, delivered safely to your door. Now offering pickup & no-contact delivery.',
        description:
          'DoorDash Dashers deliver food from restaurants to customers. They schedule shifts and fulfill delivery requests from the DoorDash app.',
        apppromo: 'Download DoorDash and Get $15!',
        resources: [
          {
            title: 'Indeed: Job Reviews for DoorDash Dashers',
            link: 'https://www.indeed.com/cmp/Doordash/reviews',
          },
          {
            title: 'r/doordash: Subreddit for DoorDash Customers and Drivers',
            link: 'https://www.reddit.com/r/doordash/',
          },
        ],
        gigsite: 'https://www.doordash.com/dasher/signup/',
        appsite: 'https://drd.sh/H12UIB',
        pay: 'Doordash pays Dashers between $2 and $10 per delivery',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0046',
        gig: 'Shipt',
        app:
          'Simplify your life with fast, simple delivery from your local stores! Shipt brings your groceries and household essentials right to your door.',
        description:
          'Shipt Shoppers get paid to buy groceries and deliver them to customers. Shipt is owned solely by Target, which is where you will be doing most of your shopping.',
        apppromo: 'Get $10 Off a Shipt Membership!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Shipt Shoppers',
            link: 'https://www.indeed.com/cmp/Shipt-Shopper/reviews',
          },
          {
            title: 'r/ShiptShoppers: Subreddit for Shipt Shoppers',
            link: 'https://www.reddit.com/r/ShiptShoppers/',
          },
        ],
        gigsite: 'https://www.shipt.com/be-a-shopper/',
        appsite: 'https://share.shipt.com/DQgBd',
        pay: 'The Average Shipt Shopper Makes Around $15 an hour',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'grocery'],
      },
      {
        id: 'G0067',
        gig: 'Boatsetter',
        app:
          'Boatsetter, the nation’s fastest-growing boat rental marketplace, gives the over 13 million registered boat owners a way to offset their ownership costs by renting their boat to pre-screened, qualified renters.',
        description:
          'Boatsetter renters rent out their boats — either with or without a captain. Peace of mind and insurance is included in every rental, and you choose who rents your boat!',
        jobpromo: 'Rent Out Your Boat and Get an Extra $100!',
        apppromo: 'Sign Up for Boatsetter and Get $25!',
        resources: [
          {
            title: 'Facebook: Boatsetter Reviews',
            link: 'https://www.facebook.com/pg/Boatsetter/reviews/',
          },
        ],
        gigsite: 'https://www.boatsetter.com/referral/o/sqxkrtk',
        appsite: 'https://www.boatsetter.com/referral/r/sqxkrtk',
        services: [],
        subtypes: ['rental', 'boat'],
      },
      {
        id: 'G0018',
        gig: 'Getaround',
        app:
          'Rent nearby cars, trucks, and vans, by the hour or day, on Getaround. No lines or key exchanges. Simply rent, unlock, and go in an instant with the Getaround',
        description:
          'Getaround renters rent out their cars when not in use. It is available in most major cities, and is a great way to make money with little effort.',
        apppromo: 'Sign Up for Getaround and Get $20!',
        resources: [
          {
            title: 'Yelp: Reviews for Getaround',
            link: 'https://www.yelp.com/biz/getaround-san-francisco',
          },
          {
            title: 'r/GetAround: Subreddit for GetAround Renters',
            link: 'https://www.reddit.com/r/GetAround/',
          },
        ],
        gigsite:
          'https://www.getaround.com/invite/2c776f91-e44f-5695-bae1-784dd3b6ae18',
        pay:
          'According to Getaround, the average car owner makes about $6,000 a year',
        services: [],
        subtypes: ['rental', 'car'],
      },
      {
        id: 'G0003',
        gig: 'Rover',
        app:
          "Rover connects pet parents with a nationwide network of dog lovers who can't wait to watch their dog. Search for nearby dog sitters, day care providers, and dog walkers who’ll help care for your pet—at their place or yours.",
        description:
          'Rover pays workers to walk dogs as a walker or watch dogs as a sitter. Love animals? Wanna earn some extra money? They offer flexibility and can help you earn up to $1,000 a month working with animals!',
        apppromo: 'Sign Up for Rover and Get $20!',
        resources: [
          {
            title: 'Indeed: Reviews for Rover Workers',
            link:
              'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
          },
          {
            title: 'r/RoverPetSitting: Subreddit for Rover Workers',
            link: 'https://www.reddit.com/r/RoverPetSitting/',
          },
        ],
        gigsite: 'http://share.rover.com/SWhzJ',
        pay:
          'Average part-time salary is said to be around $1,000 a month while those who treat it as a full time job can, according to some accounts, earn around $3,300 a month.',
        services: [],
        subtypes: ['labor', 'dog'],
      },
      {
        id: 'G0154',
        gig: 'UrbanSitter',
        app:
          'UrbanSitter lets you find and book babysitters and nannies of people you know and trust. Last-minute sitters, backup care, and part-time nannies available.',
        description:
          'UrbanSitter hires nannies and babysitters and connects them with new clients in their communities. If you are a nanny or babysitter, it is a great way to earn some extra money!',
        apppromo: 'Sign Up for UrbanSitter and Get $25!',
        resources: [
          {
            title: 'Indeed: Job Reviews for UrbanSitter Workers',
            link: 'https://www.indeed.com/cmp/Urbansitter/reviews',
          },
        ],
        gigsite: 'https://link.urbansitter.com/P2JqXJSHN5',
        pay: 'Nannys and Babysitters on average earn $15-$17/hr.',
        services: [],
        subtypes: ['labor', 'care'],
      },
      {
        id: 'G0001',
        gig: 'Uber',
        app:
          'Uber is a ride-hailing company that offers the Uber mobile app, which you can use to submit a trip request that is automatically sent to an Uber driver near to you, alerting the driver to your location. The accepting Uber driver will then come and pick you up and drive you to your requested destination.',
        description:
          'Uber drivers offer passengers a safe ride to their destination. Finding customers will not be an issue, as Uber is one of the largest ridesharing apps with tens of millions of users.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews from Uber Drivers',
            link: 'https://www.indeed.com/cmp/Uber/reviews',
          },
          {
            title: 'r/uberdrivers: Subreddit for Uber Drivers',
            link: 'https://www.reddit.com/r/uberdrivers/',
          },
        ],
        gigsite: 'https://www.uber.com/us/en/drive/',
        appsite: 'https://www.uber.com/us/en/ride/',
        pay:
          'Uber Drivers make between $12 and $22 an hour on average, depending on the city',
        services: [
          'S0001',
          'S0002',
          'S0003',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0188',
        gig: 'Grabr',
        app:
          'Grabr is a peer to peer delivery service focussed on international shipments',
        description:
          'Earn money while traveling! Grabr lets travelers subsidize their trips by delivering a handful of items. You can earn $200+ every time you travel abroad.',
        apppromo: 'Sign Up and Get $10!',
        resources: [
          {
            title: 'Grabr Reviews',
            link: 'https://www.producthunt.com/posts/grabr-2/reviews',
          },
        ],
        gigsite:
          'https://grabr.io/invitation/mark-foster?utm_campaign=web&utm_source=referral_program&utm_medium=copy_link',
        appsite:
          'https://grabr.io/invitation/mark-foster?utm_campaign=web&utm_source=referral_program&utm_medium=copy_link',
        pay: 'Earn $200+ Every Time You Travel Abroad',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0191',
        gig: 'Outdoorsy',
        app:
          'Outdoorsy is the largest and safest community-driven RV marketplace for renting RVs directly from local RV owners.',
        description:
          'Outdoorsy renters rent out their RVs on their marketplace. Outdoorsy performs DMV checks on all drivers, provide 24/7 roadside assistance and have a dedicated customer support team.',
        apppromo: 'Sign Up and Get $50!',
        resources: [
          {
            title: 'Trustpilot: Reviews for Outdoorsy',
            link: 'https://www.trustpilot.com/review/www.outdoorsy.com',
          },
          {
            title: 'r/outdoorsy: Subreddit for Outdoorsy Renters',
            link: 'https://www.reddit.com/r/outdoorsy/',
          },
        ],
        gigsite: 'https://www.outdoorsy.com/invite/g6o1lb',
        pay:
          'Depending on the RV, renters can earn anywhere between $100 and $300 per night.',
        services: [],
        subtypes: ['rental', 'RV'],
      },
      {
        id: 'G0194',
        gig: 'Riders Share',
        app:
          'Riders Share is the largest motorcycle renter community, offering best in class insurance and flexible refunds.',
        description:
          'Riders Share renters rent out motorcycles on their marketplace. List your motorcycle for free and make an average of $150 per booking! All listings are protected by an A rated insurance provider.',
        apppromo: 'Sign Up and Get $25!',
        resources: [
          {
            title: 'Facebook: Riders Share Reviews',
            link: 'https://www.facebook.com/pg/ridersshare/reviews/',
          },
        ],
        gigsite: 'www.riders-share.com/welcome/markf+QdETy',
        pay: 'Renters earn an average of $150 per booking.',
        services: [],
        subtypes: ['rental', 'car'],
      },
      {
        id: 'G0015',
        gig: 'Wag!',
        app:
          'Wag! is one of the largest dog walking apps. They offer flexibility, secure payment through Stripe, and donate money from 30 minute walks to feed shelter dogs.',
        description:
          'Wag Walkers get paid to pick up dogs in their communities, walk them, and return them. You choose how many walks you want to do and where you want to walk. It is extremely personalized and you get to play with dogs all day!',
        apppromo: 'Sign Up and Get a Free Walk!',
        resources: [
          {
            title: 'Indeed: Reviews for Wag Workers',
            link: 'https://www.indeed.com/cmp/Wag!-1/reviews',
          },
          {
            title: 'r/WagWalker: Subreddit for Wag Walkers',
            link: 'https://www.reddit.com/r/WagWalker/',
          },
        ],
        gigsite: 'https://wagwalking.com/dog-walker',
        pay: 'Walkers earn around $17.50 per walk',
        services: [],
        subtypes: ['labor', 'dog'],
      },
      {
        id: 'G0021',
        gig: 'Wonolo',
        app:
          'Wonolo is an on-demand staffing marketplace. It connects businesses which have temporary staffing needs (Requestors) with workers who can meet those needs (Wonoloers). Requestors post jobs into our marketplace, Wonoloers can then review those positions and decide if they want to do the work.',
        description:
          'Wonolo hires workers to perform certain jobs, like Warehouse Operations, General Labor, Food Production, Cleaning and Merchandising, for different Employers. They are quickly expanding across the US and are available in most major cities.',
        jobpromo: 'Accept a Job Through Wonolo and Earn a $100 Bonus!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Wonolo Workers',
            link: 'https://www.indeed.com/cmp/Wonolo/reviews',
          },
        ],
        gigsite: 'https://www.wonolo.com/find-work',
        pay:
          'Average pay ranges from around $13.79/hr for Warehouse Workers to $20.00/hr for Material Handlers.',
        services: [],
        subtypes: ['labor'],
      },
      {
        id: 'G0151',
        gig: 'GoShare',
        app:
          'GoShare connects truck and van owners with people and businesses who need help moving, hauling, and delivering large items on demand.',
        description:
          'GoShare hires movers and drivers for delivery, moving and hauling services. If you have a truck, cargo van or box truck this gig could be right for you. If you have no truck you can apply as a helper. Depending on your driving situation, this gig can prove very lucrative.',
        apppromo: 'Sign Up and Get $10!',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for GoShare Drivers',
            link:
              'https://www.glassdoor.com/Reviews/GoShare-Reviews-E1779925.htm',
          },
          {
            title: 'GoShare Worker Pay Estimates',
            link: 'https://www.goshare.co/drivers/',
          },
        ],
        gigsite: 'https://goshare.app.link/Mark_Foster_MF6447',
        pay:
          'Depending on your car, GoShare workers can earn between $33 and $66 per hour.',
        services: [],
        subtypes: ['labor', 'mover'],
      },
      {
        id: 'G0035',
        gig: 'HelloTech',
        app:
          'HelloTech offers diagnostic solutions, support, installations and hands-on training for just about any technology need, including computer and printers, smart home devices, home theater and audio, Wi-Fi, TV mounting and much more.',
        description:
          'HelloTech workers help individuals set up and fix their technology. Have a plethora of technical knowledge? Wanna get paid to help those less technically advanced? You set your own schedule, and get paid weekly',
        apppromo: 'Sign Up and Get $10!',
        resources: [
          {
            title: 'Indeed: Job Reviews for HelloTech Workers',
            link: 'https://www.indeed.com/cmp/Hellotech/reviews?fcountry=ALL',
          },
          {
            title: 'r/HelloTech: Subreddit for HelloTech Workers',
            link: 'https://www.reddit.com/r/HelloTech/',
          },
        ],
        gigsite: 'http://fbuy.me/v/markfoster314',
        pay: 'HelloTech workers earn an average of around $16/hr.',
        services: [],
        subtypes: ['other', 'tech'],
      },
      {
        id: 'G0055',
        gig: 'YourMechanic',
        app:
          "Skip the shops and dealers. YourMechanic's top-rated mobile mechanics will come to your home or office to service your car.",
        description:
          'YourMechanic hires mechanics to offer at home services to users, and is a great way for people with auto repair skills to leverage the gig economy. You can make extra money providing car repairs and maintenance at the homes of clients.',
        apppromo: 'Sign Up and Get $10!',
        resources: [
          {
            title: 'Trustpilot: Reviews for YourMechanic',
            link: 'https://www.trustpilot.com/review/yourmechanic.com',
          },
        ],
        gigsite: 'https://www.yourmechanic.com/rl/IyhJRw1860682',
        pay: 'YourMechanic claims their professionals earn between $40-$50/hr.',
        services: [],
        subtypes: ['labor'],
      },
      {
        id: 'G0056',
        gig: 'Zeel',
        app:
          'Zeel is not only the first mobile Massage On Demand company, with a network of more than 10,000 therapists throughout the U.S. Zeel connects you to the best licensed massage therapists available on-demand at your home, hotel, workplace, or event.',
        description:
          'Zeel employs massage therapists to provide at home massages to users. 18% gratuity is added to every in-home appointment and customers pay for late cancellations.',
        apppromo: 'Sign Up With Code PAUSE20 and get $20!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Zeel Workers',
            link: 'https://www.indeed.com/cmp/Zeel/reviews',
          },
          {
            title: 'Zeel or Soothe?',
            link:
              'https://www.reddit.com/r/massage/comments/adykig/zeel_or_soothe/',
          },
        ],
        gigsite: 'https://www.zeel.com/apply',
        pay: 'Zeel Massage Therapists earn an average of around $60/hr.',
        services: [],
        subtypes: ['other', 'beauty'],
      },
      {
        id: 'G0195',
        gig: 'CareLinx',
        app:
          'CareLinx is a professional caregiver marketplace, connecting trusted and licensed caregivers with family in need of in-home care services.',
        description:
          'CareLinx hires Caregivers to provide care to nearby elders. They have a network of over 300,000 caregivers and offer flexible hours, great pay and professional development.',
        jobpromo: 'Get a Free Background Check!',
        resources: [
          {
            title: 'Indeed: Job Reviews for CareLinx Workers',
            link: 'https://www.indeed.com/cmp/Carelinx/reviews',
          },
        ],
        gigsite: 'https://www.carelinx.com/p/nextwrs',
        pay: 'Caregivers/Housekeepers earn an average of around $11.40/hr.',
        services: [],
        subtypes: ['labor', 'care'],
      },
      {
        id: 'G0010',
        gig: 'Amazon Flex',
        description:
          'Amazon Flex hires drivers to perform the "last mile" of Amazon delivery, moving packages from regional centers to customers. Amazon Flex offers great compensation, and you can easily track your earnings in the Amazon Flex app.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Amazon Flex Drivers',
            link:
              'https://www.glassdoor.com/Reviews/Amazon-Flex-Driver-Reviews-EI_IE1324363.0,11_KO12,18.htm',
          },
          {
            title: 'r/AmazonFlexDrivers: Subreddit for Amazon Flex Drivers',
            link: 'https://www.reddit.com/r/AmazonFlexDrivers/',
          },
        ],
        gigsite: 'https://flex.amazon.com/',
        appsite: 'https://flex.amazon.com/',
        pay: 'Amazon Flex Drivers can make between $18 and $25 an hour',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0143',
        gig: 'Skipcart',
        app:
          'Skipcart is an on-demand platform providing last-mile delivery for all retailers and restaurants currently offering a Curbside or Pickup solution but lacking same-day delivery.',
        description:
          'Skipcart drivers deliver packages for local retailers and restaurants. Open the Skipcart app, choose your hours and start delivering.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Skipcart Drivers',
            link: 'https://www.indeed.com/cmp/Skipcart/reviews',
          },
        ],
        gigsite: 'https://skipcart.com/drivers/',
        appsite: 'https://skipcart.com/',
        pay: 'Skipcart Drivers Can Earn Up to $22/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0155',
        gig: 'PICKUP',
        app:
          'PICKUP is an on-demand same day delivery service. It allows users to hire drivers with pickup trucks to move furniture or other bulky items.',
        description:
          'PICKUP workers deliver big & heavy items for national and area businesses. If you own a truck or van, put it to good use and start hauling for money',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for PICKUP Drivers',
            link:
              'https://www.glassdoor.com/Overview/Working-at-PICKUP-EI_IE1641897.11,17.htm',
          },
        ],
        gigsite: 'https://pickupnow.com/requirements/',
        appsite: 'https://pickupnow.com/',
        pay: 'Make a minimum of $25 per run and up to $50/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0193',
        gig: 'Bungii',
        app:
          "Bungii is a mobile app that instantly helps move, haul and deliver your stuff across town by connecting you with a local driver and pickup truck. They've been compared to popular ride sharing apps but instead of moving people, they move people's stuff.",
        description:
          'Bungii workers get paid to move bulky items for users. Bungii asks for you to own a 2005 or newer truck, ratchet straps, bungee cords and moving blankets to secure your deliveries, as well as be able to do some heavy lifting.',
        apppromo: 'Sign Up With Promo Code 5XDKA and get $10!',
        resources: [
          {
            title: 'Bungii Reviews',
            link:
              'https://appgrooves.com/app/bungii-your-friend-w-a-truck-by-bungii-llc',
          },
        ],
        gigsite: 'https://bungii.com/',
        appsite: 'https://bungii.com/',
        pay: 'Bungii Workers Earn Up to $40/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0157',
        gig: 'TommyRun',
        app:
          'TommyRun is an app that allows you to order building materials and have them delivered within hours.',
        description:
          'TommyRunners deliver buliding materials to individuals in their communities. You need to own a truck or van and be willing to do some heavy lifting.',
        indeed: 'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
        apppromo: 'Sign Up and Get $25!',
        resources: [
          {
            title: 'TommyRun Reviews',
            link:
              'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
          },
        ],
        gigsite: 'https://tommyrun.app.link/vanKPpCzN5',
        appsite: 'https://tommyrun.app.link/vanKPpCzN5',
        pay: 'Average between $12 and $20/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0161',
        gig: 'uShip',
        app:
          'uShip makes shipping motorcycles, boats, and other large items fast and affordable by connecting you to their network of carriers who compete for your shipment.',
        description:
          'uShip carriers ship motorcycles, boats, and other large items. If you have the type of horsepower that can handles these deliveries, you can start making money as a uShip carrier.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for uShip Carriers',
            link: 'https://www.glassdoor.com/Reviews/uShip-Reviews-E200164.htm',
          },
        ],
        gigsite: 'https://www.uship.com/register/',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0182',
        gig: 'DispatchIt',
        app:
          'Dispatch is replacing the old courier industry by providing customers with real time tracking and accurate ETAs by leveraging technology and hard working drivers who get paid a fair wage.',
        description:
          'Dispatchit drivers provide reliable local deliveries to customers with real time ETAs and tracking. Dispatchit drivers must be at least 23 years old, have a reliable car and vehicle insurance.',
        promo: '',
        resources: [
          {
            title: 'Dispatchit Facebook Reviews',
            link: 'https://www.facebook.com/pg/dispatchitinc/reviews',
          },
        ],
        gigsite: 'https://www.dispatchit.com/drivers/',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0189',
        gig: 'DeliverThat',
        app:
          'DeliverThat is the industry leader for pre-scheduled catering delivery and setup.',
        description:
          'DeliverThat drivers deliver food from restaraunts like QDoba, Zoes Kitchen, Boston Market and Firehouse, to customers. Delivery commissions start with a base amount, then increase based on distance and size.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for DeliverThat Drivers',
            link: 'https://www.indeed.com/cmp/Deliver-That/reviews',
          },
        ],
        gigsite: 'https://www.ideliverthat.com/driver',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0013',
        gig: 'Postmates',
        app:
          'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery app to bring what you crave right to your door.',
        description:
          'Postmates drivers deliver for one of the fastest growing food-delivery apps. They get delivery requests from the Postmates app, navigate to the store or restaurant and deliver to the customer location.',
        jobpromo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for PostMates Drivers',
            link: 'https://www.indeed.com/cmp/Postmates/reviews',
          },
          {
            title: 'r/postmates: Subreddit for Postmates Customers and Drivers',
            link: 'https://www.reddit.com/r/postmates/',
          },
        ],
        gigsite: 'https://fleet.postmates.com/',
        appsite: 'https://postmates.com/',
        pay:
          'Postmates pay ranges from around $12/hr for Drivers to around $25/hr for Truck Drivers',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0016',
        gig: 'Uber Eats',
        app:
          "Uber Eats is Uber's food delivery platform that makes getting great food from your favorite local restaurants as easy as requesting a ride.",
        description:
          'UberEats drivers pick up food from local restaurants and deliver the orders to customers. Some cities offer bike and scooter delivery in addition to driving delivery.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Uber Eats Drivers',
            link:
              'https://www.indeed.com/cmp/Uber-Partner-Drivers/reviews?fjobtitle=Delivery+Driver',
          },
          {
            title: 'r/UBEREATS: Subreddit for Uber Eats',
            link: 'https://www.reddit.com/r/UberEATS/',
          },
        ],
        gigsite: 'https://www.uber.com/a/signup/drive/deliver/',
        appsite: 'https://www.ubereats.com/',
        pay:
          'Uber Eats drivers can expect to make around $8 – $12 per hour after factoring in vehicle expenses',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0034',
        gig: 'Grubhub',
        app:
          'Grubhub is a leading online and mobile food-ordering and delivery marketplace with the largest and most comprehensive network of restaurant partners.',
        description:
          'Grubhub drivers pick up food from local restaurants and deliver the orders to customers. They get guaranteed minimum earnings and additional perks for performance.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Grubhub Drivers',
            link: 'https://www.indeed.com/cmp/Grubhub/reviews',
          },
          {
            title: 'r/grubhub: Subreddit for Grubhub Drivers',
            link: 'https://www.reddit.com/r/grubhub/',
          },
        ],
        gigsite: 'https://driver.grubhub.com/',
        appsite: 'https://www.grubhub.com/mobile_home',
        pay: 'Grubhub Drivers typically make around $12 an hour',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0024',
        gig: 'Caviar',
        app:
          'Caviar is an all-in-one food ordering platform that connects diners with the best local and independent restaurants, via convenient delivery, pickup, or catering',
        description:
          'Caviar drivers pick up food from local restaurants and deliver the orders to customers. Caviar has no driver rating system, and compensates couriers on an "effort-based" algorithm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Caviar Drivers',
            link: 'https://www.indeed.com/cmp/Caviar/reviews?fjobtitle=Courier',
          },
        ],
        gigsite: 'https://www.trycaviar.com/apply',
        appsite: 'https://www.trycaviar.com/',
        pay:
          'Daily pay ranges from around $200 a day for Drivers and $400 a day for Couriers',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0030',
        gig: 'Favor',
        app:
          "Favor is the easiest way to get anything you want in your city delivered to your door in under an hour. Whether it's your favorite local restaurant or an errand you forgot to run.",
        description:
          'Favor Runners deliver just about anything to customers and get paid for it. Unlike other deliver gigs, Favor provides a $9 per hour base pay, though tips are deducted from this, and is available in 12 cities',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Favor Runners',
            link: 'https://www.indeed.com/cmp/Favor-Delivery/reviews',
          },
          {
            title: 'r/favordelivery: Subreddit for Favor Runners',
            link: 'https://www.reddit.com/r/favordelivery/',
          },
        ],
        gigsite: 'https://apply.favordelivery.com/',
        appsite: 'https://favordelivery.com/download',
        pay: 'Favor provides a $9 per hour base pay.',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0148',
        gig: 'Zifty',
        app:
          'Zifty is an online delivery company that partners with local restaurants and brands to bring their goods straight to clients doors.',
        description:
          'Zifty delivery drivers make deliveries of food, movies, and other items to customers. Requests are matched to drivers on the Zifty driver app who then complete them, simple and easy.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Zifty Drivers',
            link: 'https://www.indeed.com/cmp/Zifty.com/reviews',
          },
        ],
        gigsite: 'http://jobs.zifty.com/',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0185',
        gig: 'Peach',
        app:
          'Peach is a daily lunch service. No service fee, no tips, no commitment, conveniently delivered to your office.',
        description:
          'Peach drivers deliver carefully chosen dishes from the best lunch spots. They offer generous compensation and minimal time commitment to their delivery drivers. Peach is available in Seattle, San Diego and Boston.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Peach Drivers',
            link: 'https://www.indeed.com/cmp/Peach/reviews',
          },
        ],
        gigsite: 'https://www.peachd.com/jobs/',
        appsite: 'https://www.peachd.com/',
        pay:
          'Average Peach Delivery Driver hourly pay in the US is around $40/hr.',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0183',
        gig: 'Deliveroo',
        app:
          'The best local restaurants and takeaways are here to deliver. Order on Deliveroo today!',
        description:
          'Deliveroo is a UK based food-delivery service. Delivery Drivers get paid to move orders from restaurants to homes. Unfortunately it is not currently available in America.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Deliveroo Drivers',
            link: 'https://www.indeed.com/cmp/Deliveroo/reviews',
          },
          {
            title: 'r/deliveroos: Subreddit for Deliveroo Drivers',
            link: 'https://www.reddit.com/r/deliveroos/',
          },
        ],
        gigsite: 'https://deliveroo.co.uk/apply',
        appsite: 'https://deliveroo.co.uk/app?manual=1',
        pay: 'Deliveroo says couriers earn “over €10.20 per hour"',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'fooddelivery'],
      },
      {
        id: 'G0169',
        gig: 'GoPuff',
        app:
          'goPuff is the on-demand convenience store that delivers what you need, day or night. Use their app or site for fast delivery of snacks, drinks, ice cream & more!',
        description:
          'GoPuff drivers get paid to deliver snacks, drinks, alcohol, personal care items and more to customers. Deliveries are always ready for the drivers to pick up, and delivery distances are optimized for short travel.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for GoPuff Drivers',
            link: 'https://www.indeed.com/cmp/Gopuff/reviews',
          },
          {
            title: 'r/GoPuff: Subreddit for GoPuff Drivers',
            link: 'https://www.reddit.com/r/GoPuff/',
          },
        ],
        gigsite:
          'https://www.fountain.com/gopuff/apply/godrive-delivery-partner',
        appsite: 'https://gopuff.com/home',
        pay: 'Gopuff Drivers Average Approximately $17/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0181',
        gig: 'Drizly',
        app:
          'Drizly focuses on the delivery of the fun stuff, alcohol that is.',
        description:
          'Drizly partners with liquor stores to deliver their fine products to customers. The hiring process for their drivers is different than most gigs, you have to reach out to a local liquor store that partners with Drizly and get hired through them.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Drizly Drivers',
            link:
              'https://www.glassdoor.com/Reviews/Drizly-Delivery-Driver-Reviews-EI_IE1344937.0,6_KO7,22.htm',
          },
        ],
        gigsite: 'https://drizly.com/liquor-stores-near-me',
        pay: 'Average Drizly Driver pay is around $11-$13/hr',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', '21delivery'],
      },
      {
        id: 'G0184',
        gig: 'Saucey',
        app:
          'Alcohol delivery to your door. No order minimums + free delivery on 30-min orders in select cities. Fast & Free beer delivery, wine delivery and liquor delivery.',
        description:
          'Saucey drivers deliver alcohol to customers. It boasts a flexible schedule and solid pay for drivers. Sacuey also has a minimum pay for those who commit to working in "core blocks," which means you agree to work on the clock.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Saucey Drivers',
            link: 'https://www.indeed.com/cmp/Saucey/reviews?fcountry=ALL',
          },
        ],
        gigsite: 'https://www.saucey.com/apply',
        pay: 'Drivers earn $5 per delivery, plus $0.50 per item and tips.',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', '21delivery'],
      },
      {
        id: 'G0201',
        gig: 'Eaze',
        app:
          'Get the best THC and CBD products delivered same-day with Eaze. Shop flower, vapes, edibles, and joints from legal marijuana brands.',
        description:
          'As a delivery person for Eaze, you will deliver cannabis products from a licensed retailer directly to consumers. Eaze is currently only available in California.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Eaze Drivers',
            link:
              'https://www.glassdoor.com/Reviews/Eaze-Driver-Reviews-EI_IE977965.0,4_KO5,11.htm',
          },
          {
            title: 'r/eaze: Subreddit for Eaze Drivers',
            link: 'https://www.reddit.com/r/eaze/',
          },
        ],
        gigsite: 'https://www.drive.eaze.com/',
        pay:
          'Eaze drivers report a starting salary of $18/hr. They also reimburse $0.545 for every mile driven.',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['delivery', '21delivery'],
      },
      {
        id: 'G0202',
        gig: 'Minibar',
        app:
          'Shop Minibar Delivery for the best selection of wine, liquor, beer, and more - available in 30 to 60 minutes. Fast delivery and low prices!',
        description:
          'Minibar delivery provides on-demand delivery of wine, spirits, beer & mixers. If you live in a city you can start earning cash as a delivery driver.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Minibar Drivers',
            link:
              'https://www.glassdoor.com/Reviews/Minibar-Delivery-Reviews-E917096.htm',
          },
        ],
        gigsite: 'https://minibardelivery.com/',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['delivery', '21delivery'],
      },
      {
        id: 'G0008',
        gig: 'Instacart',
        app:
          'Instacart lets you shop from local grocery stores online, then sends a “personal shopper” to fulfill and deliver your order to you the same day.',
        description:
          'Instacart Shoppers use their platform to shop and deliver orders, like groceries, for their customers.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Instacart Shoppers',
            link: 'https://www.indeed.com/cmp/Instacart/reviews',
          },
          {
            title: 'r/InstacartShoppers: Subreddit for Instacart Shoppers',
            link: 'https://www.reddit.com/r/InstacartShoppers/',
          },
        ],
        gigsite: 'https://shoppers.instacart.com/',
        appsite: 'https://www.instacart.com/',
        pay:
          'During busy shifts, shoppers can earn $20 or more an hour. Several say the minimum base pay is $10 an hour',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'grocery'],
      },

      {
        id: 'G0186',
        gig: 'Burpy',
        app:
          'Same day grocery delivery services online in Houston, Dallas, Fort Worth, Austin & San Antonio.',
        description:
          'Burpy is another grocery service, offering delivery to customers within the hour. It hires shoppers to shop and deliver for customers, but is only available in the Texas area.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Burpy Drivers',
            link: 'https://www.indeed.com/cmp/Burpy/reviews',
          },
        ],
        gigsite: 'https://shoppers.burpy.com/join-as-shopper',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'grocery'],
      },
      {
        id: 'G0170',
        gig: 'DeLiv',
        description:
          'DeLiv is a Same day delivery service helping retailers deliver their items to customers. They have a schedule where you can book hours and deliver packages for up to $22/hr. No passengers or food. No mess or stress.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for DeLiv Drivers',
            link: 'https://www.indeed.com/cmp/Deliv/reviews',
          },
        ],
        gigsite: 'https://www.deliv.co/drivers/',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0187',
        gig: 'Burro',
        app: 'Burro is an all in one delivery app for the Austin area.',
        description:
          'Deliver Craigslist items, make store deliveries even help people move. You can set a flexible schedule and they advertise "Drive for Burro and earn $45/hr with your pickup truck."',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Burro Drivers',
            link: 'https://www.indeed.com/cmp/Burro/salaries/Delivery-Driver',
          },
        ],
        gigsite: 'https://getburro.com/drivers.html',

        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0037',
        ],
        subtypes: ['driving', 'packagedelivery'],
      },
      {
        id: 'G0002',
        gig: 'Rent Like a Champion',
        app:
          "Rent Like a Champion is an online business that lists apartments and houses available for rent near college campuses for big sporting events – football games is the company's bread and butter.",
        description:
          'AirBnb for sporting events! If you live near a college football stadium or major sporting event, you can earn money renting your home out to eager fans traveling for games in your hometown.',
        promo: '',
        resources: [
          {
            title: 'TrustPilot: Rent Like A Champion Review',
            link: 'https://www.trustpilot.com/review/rentlikeachampion.com',
          },
        ],
        gigsite: 'https://rentlikeachampion.com/',

        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0012',
        gig: 'AirBnB',
        app:
          'Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale. It currently covers more than 81,000 cities and 191 countries worldwide.',
        description:
          'The app connecting millions of homeowners looking to list with millions of renters looking to travel. As a host, AirBnB gives you full control of your availability, prices and house rules. Sign up as a host and AirBnB lets you earn money opneing up your home to travelers.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for AirBnB Hosts',
            link: 'https://www.indeed.com/cmp/Airbnb/reviews',
          },
          {
            title: 'r/airbnb_hosts: Subreddit for AirBnB Hosts',
            link: 'https://www.reddit.com/r/airbnb_hosts/',
          },
        ],
        gigsite: 'https://www.airbnb.com/host/homes',
        appsite: 'https://www.airbnb.com/mobile',
        pay: 'AirBnB Hosts make, on average, about $920 a month',
        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0036',
        gig: 'HomeAway',
        app:
          'HomeAway is a vacation rental marketplace with more than 2,000,000 vacation rentals in 190 countries listed on its website.',
        description:
          'HomeAway is a vacation rental marketplace with more than 2,000,000 vacation rentals in 190 countries listed on its website. Instead of leaving your vacation property vacant rent it out on HomeAway.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for Homeaway',
            link: 'https://www.trustpilot.com/review/www.homeaway.com',
          },
        ],
        gigsite: 'https://www.homeaway.com/lyp',

        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0041',
        gig: 'onefinestay',
        app:
          '10000+ high-end homes available to rent. The best homes. The best service. Stay in luxury serviced apartments in our favourite cities.',
        description:
          'onefinestay offers high-end home-stays across the world with currently 5,000 homes and villas in its portfolio divided between two collections, City and Villa. Put that high end vacation property to work for you.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Review for onefinestay',
            link: 'https://www.trustpilot.com/review/www.onefinestay.com',
          },
        ],
        gigsite: 'https://www.onefinestay.com/list-your-home/',

        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0053',
        gig: 'VRBO',
        app:
          'Vrbo is short for Vacation Rental By Owner, and as the name implies, it specializes in vacation rentals of all types: houses, apartments, condos, villas, etc.',
        description:
          'VRBO is a service for homeowners to list their properties for short term rental. If you have a vacation beach house, condo, cabin, or other property, list it on VRBO and start earning.',
        promo: '',
        resources: [
          {
            title: 'ConsumerAffairs: VRBO Review',
            link: 'https://www.consumeraffairs.com/online/vrbo.html',
          },
        ],
        gigsite: 'https://help.vrbo.com/category/List_Your_Property',

        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0200',
        gig: 'Love Home Swap',
        description:
          'Love Home Swap is a rental platform where you can lease out your home to someone and also get to rent out their home. Available in tons of places in the world! Great way to travel cheap and get a cultural experience',
        promo: '',
        resources: [
          {
            title: 'TrustPilot: Reviews for Love Home Swap',
            link: 'https://www.trustpilot.com/review/www.lovehomeswap.com',
          },
        ],
        gigsite: 'https://www.lovehomeswap.com/',

        services: [],
        subtypes: ['rental', 'home'],
      },
      {
        id: 'G0017',
        gig: 'Turo',
        app:
          'Turo is a peer-to-peer car sharing company. Formerly known as RelayRides, Turo allows car owners to make extra cash by renting out their vehicles, while providing a convenient and quick way to rent a car to those in need of transportation.',
        description:
          'Known as the AirBnB of cars, Turo renters list their cars on the Turo marketplace and rent them out to individuals in the area. Turo is available worldwide!',
        promo: '',
        resources: [
          {
            title: 'TrustPilot: Reviews for Turo',
            link: 'https://www.trustpilot.com/review/turo.com',
          },
          {
            title: 'r/turo: Subreddit for Turo Renters',
            link: 'https://www.reddit.com/r/turo/',
          },
        ],
        gigsite: 'https://turo.com/us/en/list-your-car',
        appsite: 'https://turo.com/',
        pay: 'Renters earn between 65% and 90% of the price they set.',
        services: [],
        subtypes: ['rental', 'car'],
      },
      {
        id: 'G0177',
        gig: 'Hyrecar',
        app:
          'Rent a car to drive for Uber, Lyft and Food Delivery. On-demand car rentals, protection included! Drive for any ridesharing, delivery or on-demand companies.',
        description:
          'HyreCar renters rent their cars to ridesharers without a ride. Because of this, your car is likely to rent quickly and for a long time.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for Hyrecar',
            link: 'https://www.trustpilot.com/review/hyrecar.com',
          },
        ],
        gigsite: 'https://app.hyrecar.com/login?type=owner&form=signup',

        services: [],
        subtypes: ['rental', 'car'],
      },
      {
        id: 'G0049',
        gig: 'SpotHero',
        app:
          'SpotHero is a parking reservation service that helps drivers reserve parking with garages and lots, often at a discount to the drive-up rate.',
        description:
          'Own a parking space? Is it empty a majority of the day? Turn it into extra income with SpotHero. They simplify the process of parking in the city by allowing owners to rent out their empty spots!',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for SpotHero',
            link: 'https://www.trustpilot.com/review/spothero.com',
          },
        ],
        gigsite: 'https://spothero.com/sell-parking/rent-my-parking-space/',

        services: [],
        subtypes: ['rental', 'parking'],
      },
      {
        id: 'G0058',
        gig: 'ParkingPanda',
        app:
          'Parking Panda is an online parking service that allows drivers to find and reserve parking in advance. In addition to providing drivers with mobile and web applications to find parking, they also help parking garage owners manage their inventory',
        description:
          'A parking space is a premium product in many major cities across the country. ParkingPanda is an app that brings owners and customers together seamlessly. You can post a free listing with the app to start earning cash whenever anyone books your space.',
        promo: '',
        resources: [
          {
            title: 'Yelp: Reviews for ParkingPanda',
            link: 'https://www.yelp.com/biz/parking-panda-baltimore-3',
          },
        ],
        gigsite: 'https://www.parkingpanda.com/',

        services: [],
        subtypes: ['rental', 'parking'],
      },
      {
        id: 'G0203',
        gig: 'Sailo',
        app:
          'Sailo is being called the “airbnb” of boat rentals, an online marketplace offering both, experienced and inexperienced boaters the opportunity to view and compare boats and captains, if you even want a captain, and create custom trips.',
        description:
          'Sailo is considered the “airbnb” of boat rentals, and makes it easy for boat owners to rent out their boats. As a host, Sailo gives you full control of your availability, prices and boat rules. Sign up as a host and Sailo lets you earn money opening up your boat to travelers.',
        promo: '',
        resources: [
          {
            title: 'Facebook: Sailo Reviews',
            link: 'https://www.facebook.com/pg/Sailoboats/reviews/',
          },
        ],
        gigsite: 'https://www.sailo.com/',

        services: [],
        subtypes: ['rental', 'boat'],
      },
      {
        id: 'G0066',
        gig: 'RVShare',
        app:
          "RVshare is the world's first and largest peer-to-peer RV rental marketplace, serving more than 60,000 RV owners across the US.",
        description:
          'Are you an outdoorsy person who owns an RV? RVshare will connect you with individuals looking to rent it out! Their platform reaches millions of users, they give you complete control of your rental and you could earn up to $40,000 in additional income per year!',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for RVShare',
            link: 'https://www.trustpilot.com/review/rvshare.com',
          },
        ],
        gigsite: 'https://rvshare.com/list-your-rv',

        services: [],
        subtypes: ['rental', 'RV'],
      },
      {
        id: 'G0153',
        gig: 'Bird',
        description:
          'If you noticed Bird Scooters littering the streets of you city, you can turn that clutter into cash! Bird Flyers are paid to collect scooters at the end of the night, charge them, then disperse them in the morning. All you need is some free time and something to transport them.',
        promo: '',
        resources: [
          {
            title: 'r/birdcharger: Subreddit for Bird Chargers',
            link: 'https://www.reddit.com/r/birdcharger/',
          },
        ],
        gigsite: 'https://flyers.bird.co/',

        services: ['S0036'],
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0165',
        gig: 'Lime',
        description:
          'Scooter charging is a popular, and lucrative, gig. If there are Lime Scooters in your area, Lime will pay you to become a juicer. Just collect them, charge them, and disperse them!',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Reviews for Lime Juicing',
            link:
              'https://www.glassdoor.com/Reviews/Lime-Juicer-Reviews-EI_IE1884794.0,4_KO5,11.htm',
          },
          {
            title: 'r/limejuicer: Subreddit for Lime Chargers',
            link: 'https://www.reddit.com/r/limejuicer/',
          },
        ],
        gigsite: 'https://lime.bike/juicer',

        services: ['S0036'],
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0175',
        gig: 'Spin',
        description:
          'Another player in the scooter game, Spin Chargers work like other charging gigs: collect, charge and disperse the scooters. You get paid for every scooter you charge.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Reviews for Spin Charging',
            link:
              'https://www.glassdoor.com/Overview/Working-at-Spin-EI_IE1838792.11,15.htm',
          },
          {
            title: 'r/SpinScooter: Subreddit for Spin Chargers',
            link: 'https://www.reddit.com/r/SpinScooter/',
          },
        ],
        gigsite: 'https://www.spin.app/charger',

        services: ['S0036'],
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0176',
        gig: 'Skip',
        description:
          'Skip Scooters are located mainly in Virginia and Washington D.C, but if you live in that area they are willing to pay you to collect, charge and disperse their scooters.',
        promo: '',
        resources: [
          {
            title: 'Yelp: Reviews for Skip Scooters',
            link:
              'https://www.yelp.com/biz/skip-scooter-rental-sf-san-francisco',
          },
          {
            title: 'r/skipscooters: Subreddit for Skip Chargers',
            link: 'https://www.reddit.com/r/skipscooters/',
          },
        ],
        gigsite:
          'https://www.fountain.com/skip-scooters/apply/general-location-ranger',

        services: ['S0036'],
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0005',
        gig: 'TaskRabbit',
        app:
          'TaskRabbit is a marketplace that matches freelance labor with local demand.',
        description:
          'TaskRabbit Taskers get paid to help with everyday tasks, like cleaning, moving, delivery and handyman work, for individuals in their community.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Reviews for TaskRabbit Workers',
            link: 'https://www.indeed.com/cmp/Taskrabbit/reviews',
          },
          {
            title: 'r/TaskRabbit: Subreddit for TaskRabbit Workers',
            link: 'https://www.reddit.com/r/TaskRabbit/',
          },
        ],
        gigsite:
          'https://support.taskrabbit.com/hc/en-us/articles/360031918292-How-Do-I-Become-a-Tasker-',

        services: [],
        subtypes: ['labor', 'handyman'],
      },
      {
        id: 'G0020',
        gig: 'Handy',
        app:
          'Handy is the leading platform for connecting individuals looking for household services with top-quality, pre-screened independent service professionals. From home cleaning to handyman services, Handy instantly matches thousands of customers every week with top-rated professionals in cities all around the world.',
        description:
          'Handy pays for being a home cleaner and handymen. It covers over 20 cities in North America, Canada, and the UK. They only accept applicants with professional experience in cleaning or handyman services.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Handy Workers',
            link: 'https://www.indeed.com/cmp/Handy/reviews',
          },
        ],
        gigsite: 'https://www.handy.com/apply',

        services: [],
        subtypes: ['labor', 'handyman'],
      },
      {
        id: 'G0022',
        gig: 'Bellhops',
        app: 'Bellhops Provides Simple, Easy, And Stress-free Moving Services.',
        description:
          'Bellhops is a moving service that eases the demands of moving by connecting capable workers with clients looking to pack up and move. As a mover, you will get paid to pack boxes and move people into their new digs.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Bellhops Workers',
            link: 'https://www.indeed.com/cmp/Bellhops/reviews',
          },
        ],
        gigsite: 'https://www.getbellhops.com/being-a-bellhop/',

        services: [],
        subtypes: ['labor', 'mover'],
      },
      {
        id: 'G0027',
        gig: 'Dolly',
        app:
          'Need moving help? Dolly helps you move on your schedule and at an affordable price.',
        description:
          'Dolly is a moving services that pays people that have vehicles for moving, and movers to do the heavy lifting if they do not have a vehicle, to help individuals in your community move in or out.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Dolly Workers',
            link: 'https://www.indeed.com/cmp/Dolly/reviews',
          },
        ],
        gigsite: 'https://dolly.com/helpers/',

        services: [],
        subtypes: ['labor', 'mover'],
      },
      {
        id: 'G0205',
        gig: 'Schlep',
        description:
          'The Uber for moving! Work a gig as a driver or a mover. Earn up to $1,000 a week, keep 100% of your tips and work on a flexible schedule',
        promo: '',
        resources: [
          {
            title: 'Yelp: Reviews for Schlep',
            link: 'https://www.yelp.com/biz/schlep-chicago',
          },
        ],
        gigsite: 'https://www.schlep.it/#/',

        services: [],
        subtypes: ['rental', 'labor', 'mover'],
      },
      {
        id: 'G0164',
        gig: 'EasyMove',
        app:
          "Easymove connects you with professional, reliable, local movers anytime you need it. It's the smartest alternative to traditional movers, renting a truck and doing it yourself- their app connects you with local independent strong easymovers to help with moving, hauling and junk removal.",
        description:
          'Easymove is a delivery service offering to help users move bulky items from point A to point B. If you have a big car and can do some heavy lifting, they advertise you can make $2,500 a week as an Easymove partner.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for Easymove',
            link: 'https://www.trustpilot.com/review/www.easymove.co.uk',
          },
        ],
        gigsite: 'https://geteasymove.com/',

        services: [],
        subtypes: ['labor', 'mover'],
      },
      {
        id: 'G0192',
        gig: 'Lugg',
        app:
          'Lugg connects you to a truck and two movers, ready to move your stuff within the hour or up to 30 days from now.',
        description:
          'Convenient Moving and Delivering is what Lugg offers. If you own a truck, you can sign up to become a Lugger and earn up to $2.5k a week! No truck? No problem! If you can do some heavy lifting you can still sign up.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Lugg Workers',
            link: 'https://www.indeed.com/cmp/Lugg/reviews',
          },
        ],
        gigsite: 'https://lugg.com/become-a-lugger',

        services: [],
        subtypes: ['labor', 'mover'],
      },
      {
        id: 'G0050',
        gig: 'Takl',
        app:
          'The Takl platform connects customers who need chores completed with background-checked, self-employed Providers who are able to earn money using their skills on their own schedule.',
        description:
          'At Takl, you get paid to help others in your community complete small jobs and household chores. You can perform chores in twelve categories on your own time, and get paid fast through direct deposit.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Takl Workers',
            link: 'https://www.indeed.com/cmp/Takl/reviews',
          },
        ],
        gigsite: 'https://app.takl.com/providers/register',

        services: [],
        subtypes: ['labor', 'handyman'],
      },
      {
        id: 'G0190',
        gig: 'NetWorx',
        app:
          'Since 2004, millions of homeowners have used Networx to help them connect with quality contractors in their local area. With years of experience and thousands of active contractors, you can depend on us to generate high quality leads and help you grow your business.',
        description:
          'NetWorx is looking for professionals offering contracting services like Carpentry, Pest Control, Fencing and Roofing. They connect you with local demand for these services, and help boost your bottom line.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for NetWorx Workers',
            link:
              'https://www.glassdoor.com/Reviews/Networx-Reviews-E368391.htm',
          },
        ],
        gigsite: 'https://www.networx.com/signup',

        services: [],
        subtypes: ['labor'],
      },
      {
        id: 'G0051',
        gig: 'TaskEasy',
        app:
          "TaskEasy provides lawn care and grounds maintenance services in all 50 U.S. states. TaskEasy works together with landscaping businesses nationwide supporting local industry with services to hundreds of thousands of properties. TaskEasy's network of more than 12,000 screened and insured vendors is the nation's largest.",
        description:
          'TaskEasy employs landscaping professionals to provide lawnmowing, gardening, and landscaping services for individuals in the community. If you know your way around a lawn, and are looking to gain more customers, TaskEasy will help out.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for TaskEasy Workers',
            link:
              'https://www.glassdoor.com/Overview/Working-at-TaskEasy-EI_IE1030594.11,19.htm',
          },
        ],
        gigsite: 'https://www.taskeasy.com/contractors',

        services: [],
        subtypes: ['labor', 'landscaping'],
      },
      {
        id: 'G0149',
        gig: 'LawnStarter',
        app:
          'LawnStarter saves you time, money, and energy by providing you with the top lawn care providers in your area, whenever you want them.',
        description:
          'LawnStarter can grow your lawn care business by over 30%. By connecting you with new customers in your area at no cost, you can put a stop to slow days and grow your revenue.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for LawnStarter Workers',
            link:
              'https://www.indeed.com/cmp/Lawnstarter/reviews?ftopic=paybenefits',
          },
        ],
        gigsite: 'https://www.lawnstarter.com/lawn-care-businesses',

        services: [],
        subtypes: ['labor', 'landscaping'],
      },
      {
        id: 'G0150',
        gig: 'Plowz & Mowz',
        app:
          'Order Lawn Mowing, Snow Plowing, Landscaping & other outdoor home services through Plowz & Mowz.',
        description:
          'Plowz & Mowz is another service offering more customers to lawncare professionals. They require $1M in General Liability Insurance and professional equipment, but if you have that they advertise they can grow your business by 30%',
        promo: '',
        resources: [
          {
            title: 'TrustPilot: Reviews for Plowz & Mowz',
            link: 'https://www.trustpilot.com/review/www.plowzandmowz.com',
          },
        ],
        gigsite: 'https://order.plowzandmowz.com/provider-onboard',

        services: [],
        subtypes: ['labor', 'landscaping'],
      },
      {
        id: 'G0152',
        gig: 'Lawn Love',
        app:
          'Lawn Love makes it easier to find, book and pay a landscaping or lawn care provider.',
        description:
          'If you have a truck and equipment, sign up to be a Lawn Pro and get connected with Lawn Care jobs in your community. You can choose which ones to work and get paid through the app within 72 hours.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Lawn Love Workers',
            link: 'https://www.indeed.com/cmp/Lawn-Love/reviews',
          },
        ],
        gigsite: 'https://lawnlove.com/apply',

        services: [],
        subtypes: ['labor', 'landscaping'],
      },
      {
        id: 'G0142',
        gig: 'Veryable',
        app:
          'Veryable is the on-demand marketplace for manufacturing, logistics and warehousing labor.',
        description:
          'Veryable is a great way for manufacturing workers the leverage the gig economy. When clients book a project through their service, the labor is filled from their pool of workers. Flexible work, daily pay',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Veryable Workers',
            link:
              'https://www.indeed.com/cmp/Veryable-3/reviews?ftopic=paybenefits',
          },
        ],
        gigsite: 'https://veryable.app.link/pqxf1qmEN5',

        services: [],
        subtypes: ['labor'],
      },
      {
        id: 'G0162',
        gig: 'Homeaglow',
        app:
          'Homeaglow is an online service that matches you with local, 5-star cleaning professionals.',
        description:
          'Homeaglow connects residential cleaners with clients in their community. You can set your own rates, make your own schedule, and get paid weekly.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Homeaglow Workers',
            link: 'https://www.indeed.com/cmp/Homeaglow/reviews',
          },
        ],
        gigsite: 'https://www.homeaglow.com/apply',

        services: [],
        subtypes: ['labor', 'cleaning'],
      },
      {
        id: 'G0023',
        gig: 'Care',
        app:
          "Care.com is the world's largest online destination for care. They connect families with caregivers and caring companies to help you be there for the ones you love.",
        description:
          'Primarily a place to find work in child or pet care, Care.com also offers gigs for housekeepers, gardeners, tutors, and those caring for the elderly.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Care.com Workers',
            link: 'https://www.indeed.com/cmp/Care.com/reviews',
          },
        ],
        gigsite: 'https://www.care.com/',

        services: [],
        subtypes: ['labor'],
      },
      {
        id: 'G0199',
        gig: 'Uzurv',
        app:
          'The adaptive transportation network company with drug & alcohol tested, credentialed drivers for paratransit and non-emergency medical transportation.',
        description:
          'Do you have a passion for helping the elderly? UZURV is a ride-share company that helps provide transportation to the elderly, disabled, and for NEMT needs',
        promo: '',
        resources: [
          {
            title: 'Appgrooves: Reviews for Uzurv',
            link:
              'https://appgrooves.com/app/uzurv360-driver-by-uzurv-llc/positive',
          },
        ],
        gigsite: 'https://uzurv.com/drivers/',

        services: [],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0167',
        gig: 'Sittercity',
        app:
          'Find local child, senior, & pet care providers that your family will love.',
        description:
          'If you are a babysitter, nanny or child care professional, Sittercity can connect you with individuals in your community looking for your services.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for SitterCity Workers',
            link: 'https://www.indeed.com/cmp/Sittercity/reviews',
          },
        ],
        gigsite: 'https://www.sittercity.com/sitter/account',

        services: [],
        subtypes: ['labor', 'care'],
      },
      {
        id: 'G0061',
        gig: 'Helpr',
        app:
          'Connect with screened babysitters anytime and anywhere, get in-home care rates for as low as $1 hour with support from your employer.',
        description:
          'Helpr is an app that connects parents with reliable childcare help (i.e., babysitting), It is is ideal for those with relevant experience looking for occasional part-time work.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Helpr Workers',
            link:
              'https://www.glassdoor.com/Reviews/Helpr-Reviews-E1305149.htm',
          },
        ],
        gigsite: 'https://www.helpr-app.com/become-a-helpr-now',

        services: [],
        subtypes: ['labor', 'care'],
      },
      {
        id: 'G0026',
        gig: 'Figure Eight',
        app:
          'Figure Eight uses human intelligence to do simple tasks such as transcribing text or annotating images to train machine learning algorithms.',
        description:
          'When someone need labels and annotations for a machine learning project, Figure Eight steps up. Users upload unlabeled data, with the rules they need for the project, and contributers get paid to mold the data for the model.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Figure Eight Contributors',
            link:
              'https://www.glassdoor.com/Reviews/Figure-Eight-Reviews-E553483.htm',
          },
        ],
        gigsite: 'https://www.figure-eight.com/contributor/',

        services: [],
        subtypes: ['other', 'tech'],
      },
      {
        id: 'G0028',
        gig: 'Etsy Seller',
        description:
          'Etsy provides a marketplace for people to sell their handmade, vintage, or creative goods online. If you have an artsy side, look into getting paid for it on Etsy!',
        promo: '',
        resources: [
          {
            title: 'ConsumerAffairs: Etsy Review',
            link: 'https://www.consumeraffairs.com/online/etsy.html',
          },
          {
            title: 'r/EtsySellers: Subreddit for Etsy Sellers',
            link: 'https://www.reddit.com/r/EtsySellers/',
          },
        ],
        gigsite: 'https://www.etsy.com/join',

        services: [],
        subtypes: ['other'],
      },
      {
        id: 'G0029',
        gig: 'Fancy Hands',
        app:
          'Fancy Hands is a team of US-based virtual assistants ready to start working with you today. Use any device, at any time of day, and their assistants will tackle anything on your to-do list!',
        description:
          'Want to become a virtual assistant, offering services to entrepenuers and businesses from wherever you want? Fancy Hands is a team of US-based virtual assistants, and a great place to start!',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Fancy Hands Workers',
            link: 'https://www.indeed.com/cmp/Fancy-Hands/reviews',
          },
        ],
        gigsite: 'https://www.fancyhands.com/jobs',

        services: [],
        subtypes: ['other'],
      },
      {
        id: 'G0033',
        gig: 'Gigwalk',
        description:
          'Work for Gigwalk usually involves gathering data for companies about their products and stores. For example, you might be checking what is on the shelves in a particular shop, and whether it is correctly priced and labeled.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for GigWalk Workers',
            link: 'https://www.indeed.com/cmp/Gigwalk/reviews',
          },
        ],
        gigsite: 'http://www.gigwalk.com/gigwalkers/',

        services: [],
        subtypes: ['other', 'mysteryshop'],
      },
      {
        id: 'G0070',
        gig: 'Market Force',
        description:
          'At Market Force, you will complete mystery shops for banks, restaurants, and stores. You get paid to provide feedback on your visits, which those companies then use to improve.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Market Force Workers',
            link: 'https://www.indeed.com/cmp/Market-Force/reviews',
          },
        ],
        gigsite: 'https://www.marketforce.com/become-a-mystery-shopper',

        services: [],
        subtypes: ['other', 'mysteryshop'],
      },
      {
        id: 'G0071',
        gig: 'GBW',
        description:
          'GBW pays individuals to shop at globally recognized brands and provide feedback on the experience. They have organized over 14 million mystery shops for some of the largest brands.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for GBW Workers',
            link: 'https://www.trustpilot.com/review/www.gapbuster.com',
          },
        ],
        gigsite: 'https://gbw.solutions/becomeanevaluator',

        services: [],
        subtypes: ['other', 'mysteryshop'],
      },
      {
        id: 'G0048',
        gig: 'Spare5',
        description:
          'Spare5 is an app which pays you small amounts of money for completing micro-tasks on your phone. Most tasks only take a few seconds, and the app pays on average $0.02 – $0.05 per task.',
        promo: '',
        resources: [
          {
            title: 'Spare5 Online Review',
            link: 'https://onlinezerotohero.com/spare5-review',
          },
        ],
        gigsite: 'https://app.spare5.com/fives/sign_in',

        services: [],
        subtypes: ['other'],
      },
      {
        id: 'G0147',
        gig: 'Census Taker',
        description:
          'The United States Government needs a lot of help taking the census every year. Sign up to be a census taker and you can earn between $12 and $30 an hour, depending on your location.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Census Workers',
            link:
              'https://www.indeed.com/cmp/U.S.-Census-Bureau/reviews?fcountry=ALL&fjobtitle=Census+Taker',
          },
        ],
        gigsite: 'https://2020census.gov/en/jobs.html',

        services: [],
        subtypes: ['other'],
      },
      {
        id: 'G0064',
        gig: 'Soothe',
        app:
          'Soothe helps you book a five-star massage to your home, hotel, office, or event in as little as an hour.',
        description:
          'Gig work for massage therapists, including deep tissue, sports, and couples massage work. Soothe advertises 2-3x industry standard pay and schedule flexibility.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Soothe Workers',
            link: 'https://www.indeed.com/cmp/Soothe-Inc/reviews',
          },
          {
            title: 'Zeel or Soothe?',
            link:
              'https://www.reddit.com/r/massage/comments/adykig/zeel_or_soothe/',
          },
        ],
        gigsite: 'https://www.soothe.com/apply',

        services: [],
        subtypes: ['other', 'beauty'],
      },
      {
        id: 'G0160',
        gig: 'Priv',
        app:
          'Priv delivers on-demand salon and spa services by top-rated professionals to your home (or office) anytime, anywhere - manicures, blowouts, makeup, anything you want.',
        description:
          'Beauty. Priv connects customers on-demand with freelance beauty and wellness professionals, taking a 20% commission. Priv services include makeup, blowout, haircut, nails/manicure, massage, personal training, grooming, spray tan and facials. “Priv Pros” select shifts and kinds of jobs they choose.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Priv Workers',
            link: 'https://www.indeed.com/cmp/Priv/reviews?fcountry=ALL',
          },
        ],
        gigsite: 'https://gopriv.com/pro',

        services: [],
        subtypes: ['other', 'beauty'],
      },
      {
        id: 'G0179',
        gig: 'Heal',
        app:
          'Talk to a doctor on-demand and on your schedule, 8am-8pm, every day.',
        description:
          'Gig work for healthcare professionals. Heal.com lets healthcare professionals spend quality time with patients in the privacy, comfort and convenience of their environment with the full capabilities of the doctors office',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Heal Workers',
            link: 'https://www.indeed.com/cmp/Heal/reviews',
          },
        ],
        gigsite: 'https://heal.com/medical-team/',

        services: [],
        subtypes: ['other', 'healthcare'],
      },
      {
        id: 'G0178',
        gig: 'Slingshot Health',
        app:
          'Slingshot Health is a health tech startup that brings top healthcare providers and patients together. Patients bid on the cost of services and healthcare providers accept bids based on availability.',
        description:
          'Slingshot Health helps healthcare profesionals find new patients and fill open gaps in their schedules, growing their practice. It is free to sign up.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Slingshot Health Workers',
            link:
              'https://www.glassdoor.com/Reviews/Slingshot-Health-Reviews-E2439803.htm',
          },
        ],
        gigsite: 'https://www.slingshothealth.com/providers/',

        services: [],
        subtypes: ['other', 'healthcare'],
      },
      {
        id: 'G0204',
        gig: 'Wardrobe',
        app:
          'Join celebs, influencers & friends in the most -friendly rental marketplace for luxury designer fashion. Your Wardrobe goals just became reality.',
        description:
          'Do you have a big or fashionable wardrobe? Monetize your closet with peer-to-peer fashion rentals. Lend designer pieces from your closet to fellow fashion lovers and get easy cash with this app!',
        promo: '',
        resources: [
          {
            title: 'Wardrobe Reviews',
            link:
              'https://apps.apple.com/us/app/wardrobe-rent-luxury-fashion/id1275844584',
          },
        ],
        gigsite: 'https://wearwardrobe.co/',

        services: [],
        subtypes: ['rental'],
      },
      {
        id: 'G0206',
        gig: 'EatWith',
        app:
          'Explore culinary experiences with locals in 130+ countries. Enjoy dinner parties, cooking classes and more in beautiful homes and exclusive venues.',
        description:
          'Do you have a passion for food or cooking? Host dining experiences, cooking classes, food tours, and much more at EatWith. Set menus, set prices, and set your own schedule. Do what you enjoy and make money from it.',
        promo: '',
        resources: [
          {
            title: 'Yelp: EatWith Reviews',
            link: 'https://www.yelp.com/biz/eatwith-san-francisco-3',
          },
        ],
        gigsite: 'https://www.eatwith.com/landings/become-a-host',

        services: [],
        subtypes: ['labor', 'cuisine'],
      },
      {
        id: 'G0207',
        gig: 'Feastly',
        app:
          "Feastly is a global marketplace for chefs to showcase and host dinners, pop-ups, and culinary experiences. It is a p2p marketplace that connects hungry eaters with passionate cooks, offering authentic meals prepared and served in a cook's home.",
        description:
          'Showcase and host your own dinners, pop-ups, cooking lessons, and culinary experiences. Make easy money with what you love doing and meet new people while doing it.',
        promo: '',
        resources: [
          {
            title: 'Yelp: Feastly Reviews',
            link: 'https://www.yelp.com/biz/feastly-san-francisco-2',
          },
        ],
        gigsite: 'https://experiences.chefsfeed.com/browse/',

        services: [],
        subtypes: ['labor', 'cuisine'],
      },
      {
        id: 'G0208',
        gig: 'Fiverr',
        description:
          'Fiverr is one of the easiest ways to make money in the gig economy. No matter what skills you have, with a little creativity you sell your services to a platform of motivated buyers.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Fiverr Freelancers',
            link: 'https://www.indeed.com/cmp/Fiverr/reviews',
          },
        ],
        gigsite: 'https://www.fiverr.com/start_selling',

        services: [],
        subtypes: [''],
      },
      {
        id: 'G0209',
        gig: 'LinkedIn ProFinder',
        description:
          'LinkedIn ProFinder connects top freelance professionals like you with high quality leads.',
        indeed: '',
        promo: '',
        resources: [],
        gigsite: 'https://www.linkedin.com/profinder/pros',

        services: [],
        subtypes: [''],
      },
      {
        id: 'G0210',
        gig: 'Freelancer',
        description:
          'Freelancer has posted almost 11 million jobs for tens of thousands of its members. ',
        indeed: '',
        promo: '',
        resources: [],
        gigsite: 'https://www.freelancer.com/jobs/',

        services: [],
        subtypes: [''],
      },
      {
        id: 'G0037',
        gig: 'HopSkipDrive',
        app:
          "HopSkipDrive is a ride service to get kids (age 6+) where they need to go when their parents can't. It was created by three moms who understand the stress of driving kids to all of their activities, and the safety concerns parents have putting their children in someone else's car.",
        description:
          'HopSkipDrive drivers offer carpooling services for children ages 6+. There is a more stringent application process because of this, but it also pays incredibly well and gives you the opportunty to make a positive impact in the community.',
        resources: [
          {
            title: 'Indeed: Job Reviews from HopSkipDrive Drivers',
            link:
              'https://www.indeed.com/cmp/Hopskipdrive/reviews?fjobtitle=Driver',
          },
        ],
        promo: '',
        gigsite: 'https://www.hopskipdrive.com/driver-sign-up',
        appsite: 'https://www.hopskipdrive.com/hopskipdrive-app-download',
        pay: 'CareDrivers earn an average of $32 an hour',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0168',
        gig: 'Zum',
        app:
          "Zūm is a reliable, technology platform that connects busy families with providers (Zūmers,) of kids' transportation and childcare services",
        description:
          'Zum is another carpooling rideshare app similar to HopSkipDrive. Zum drivers provide kids with transportation and care. It is available in California, Arizona, Texas, Illinois, Florida, Washington and Washington DC.',
        jobpromo: 'Receive up to $500 sign up bonus!',
        resources: [
          {
            title: 'Indeed: Job Reviews from Zum Drivers',
            link: 'https://www.indeed.com/cmp/Ridezum/reviews',
          },
        ],
        gigsite: 'https://www.ridezum.com/drive.html',
        appsite: 'https://www.ridezum.com/',
        pay: 'Zumers make anywhere between $16 and $35 an hour, on average',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0054',
        gig: 'Wingz',
        app:
          'Wingz is a rideshare app that specializes in airport pick up and drop off. You can schedule a ride up to two months in advance, know the rate up front, and book your favorite drivers.',
        description:
          'Wingz drivers specialize in airport pickup and drop off. Wingz also allows customers to select their favorite drivers for repeat rides, so drivers need to live near an airport and have a keen sense for customer service.',
        promo: '',
        resources: [
          {
            title: 'Yelp reviews for Wingz',
            link: 'https://www.yelp.com/biz/wingz-san-francisco-4',
          },
        ],
        gigsite: 'https://www.wingz.me/drivers-2/',
        appsite: 'https://www.wingz.me/',
        pay: 'You can expect to make $25+ per ride with Wingz',
        services: [
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0197',
        gig: 'Via Transportation',
        app:
          'Via is an on-demand transit system that takes multiple passengers heading in the same direction and books them into a shared vehicle. Think of Via as a bus smart enough to come when you want it and where you want it',
        description:
          'Via is another ride sharing company. They are reshaping public transit - they send you the rate for the upcoming day so you can plan your schedule in advance! You also do not need a car, you can rent one from Via to drive!',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Via Drivers',
            link: 'https://www.indeed.com/cmp/Via-Transportation/reviews',
          },
        ],
        gigsite: 'https://my.drivewithvia.com/',
        appsite: 'https://ridewithvia.com/',
        pay: 'Expect to earn between $15 and $20 an hour',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0030',
          'S0031',

          'S0039',
          'S0040',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0163',
        gig: 'GroundLink',
        app: 'Groundlink provides professional black car and limo services.',
        description:
          'GroundLink chauffeurs are professional black car drivers that provide transportation to riders. They only accept experienced limo and car service drivers.',
        promo: '',
        resources: [
          {
            title: 'Yelp reviews for GroundLink',
            link: 'https://www.yelp.com/biz/groundlink-new-york',
          },
          {
            title:
              'Groundlink: difference between Groundlink and Rideshare Driving',
            link:
              'https://www.groundlink.com/blog/differences-groundlink-driver-rideshare-driver/',
          },
        ],
        gigsite: 'https://driver.groundlink.com/',
        appsite: 'https://www.groundlink.com/app',
        services: ['S0004', 'S0005', 'S0006', 'S0031', 'S0037'],
        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'G0198',
        gig: 'Curb',
        app:
          'Curb is the #1 taxi app in the US. They have over 50,000 taxis over 65+ US cities.',
        description:
          'Curb drivers are licensed and insured cab drivers. Available in NYC, Boston, Philadelphia, Miami and Las Vegas, Curb aims to help impacted cab drivers adapt to Uber and Lyft.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://gocurb.com/',
        appsite: 'https://mobileapp.gocurb.com/',
        pay: 'Average Curb Driver Pay is around $17/hr',
        services: [
          'S0001',
          'S0004',
          'S0005',
          'S0006',
          'S0031',
          'S0033',
          'S0037',
        ],
        subtypes: ['driving', 'rideshare'],
      },
    ],
    services: [
      {
        id: 'S0001',
        gig: 'Gridwise',
        description:
          "Gridwise increases rideshare drivers' earnings by 39% by letting them know how and where to drive and save thousands a year on taxes.",
        indeed:
          'https://appgrooves.com/app/gridwise-earn-more-by-driving-smarter-by-swerv-technologies-llc/negative',
        promo: 'Free Download on IOS and Android!',
        gigsite: 'https://gridwise.io/',
      },
      {
        id: 'S0002',
        gig: 'Mystro',
        description:
          'Mystro combines the Uber and Lyft drivers apps allowing you to easily drive both at the same time. They also evaluate trip requests so you only accept ideal trips.',
        indeed:
          'https://play.google.com/store/apps/details?id=partners.driver.mystro&hl=en_US',
        promo: 'Try Mystro Free for 14 Days!',
        gigsite: 'https://mystrodriver.com/registration-page-half-photo',
      },
      {
        id: 'S0003',
        gig: 'Surge 2x',
        description:
          'Surge lets you monitor Uber surges, notifying you when a surge starts, increases/decreases and ends, so you know when to drive to make the most money.',
        indeed: 'https://apps.apple.com/us/app/surge-2x/id986581500',
        promo: '',
        gigsite:
          'https://apps.apple.com/us/app/surge-surge-tracking-for-uber/id986581500',
      },
      {
        id: 'S0004',
        gig: 'SherpaShare',
        description:
          'SherpaShare helps rideshare drivers reduce taxes, manage expenses, and boost earnings. Their financial management tool also allows drivers to track mileage, analyze expenses and consolidate earnings.',
        indeed:
          'https://apps.apple.com/us/app/sherpashare-driver-assistant/id975868991',
        promo: '',
        gigsite: 'https://www.sherpashare.com/',
      },
      {
        id: 'S0005',
        gig: 'TripLog',
        description:
          'Triplog helps users save an average of $7,200 annually. As a gig worker, the miles you drive for work are tax deductable. Triplog helps you track those miles so you can maximize your returns. They are also fully IRS compliant, protecting you in case of audit.',
        indeed: 'https://reviews.financesonline.com/p/triplog/',
        promo: 'Sign Up Below for a Free 30 Day Trial and 20% Off!',
        gigsite: 'http://trplg.co/389373',
      },
      {
        id: 'S0006',
        gig: 'Everlance',
        description:
          'Everlance automatically logs tax-deductible business mileage, expenses and receipts, making it easy to fill out your taxes.',
        indeed:
          'https://appgrooves.com/app/everlance-mileage-log-expense-and-receipt-tracker-by-everlance-inc',
        promo: '',
        gigsite: 'https://www.everlance.com/',
      },
      {
        id: 'S0030',
        gig: 'Grabb-it',
        description:
          "Grabb-it will pay you around $5/hr to turn your cars' side rear window into a full color display playing location aware ads.",
        indeed: 'https://www.trustpilot.com/review/www.thesocialdelivery.com',
        promo: '',
        gigsite: 'https://grabb.io/',
      },
      {
        id: 'S0031',
        gig: 'Hurdlr',
        description:
          'Hurdlr is an automatic business expenses and mileage tracker. They have cumulatively saved over $300M in taxes.',
        indeed: 'https://investorjunkie.com/reviews/hurdlr/',
        promo: '',
        gigsite: 'https://www.hurdlr.com/',
      },
      {
        id: 'S0039',
        gig: 'Nickelytics',
        description:
          'Nickelytics will wrap an ad on your vehicle and pay you as you drive through city streets. Depending on routes, wrap type and distance covered you could make up to $500/month.',
        indeed: '',
        promo: '',
        gigsite: 'https://www.nickelytics.com/',
      },
      {
        id: 'S0040',
        gig: 'Wrapify',
        description:
          'Wrapify wraps cars with advertisements and pays drivers as they drive. For rideshare drivers with a full wrap they estimate you can earn an extra $264-$452 per month.',
        indeed: 'https://appgrooves.com/app/wrapify-by-wrapify-inc/',
        promo: '',
        gigsite: 'https://wrapify.com/',
      },
      {
        id: 'S0033',
        gig: 'Play Octopus',
        description:
          'Octopus provides rideshare drivers with interactive tablets and accessories for their passengers to use as they ride. Riders enjoy games and cash prizes, and they run short ads so drivers can earn up to $100 extra a month!',
        indeed: 'https://www.playoctopus.com/driver-reviews/',
        promo: '',
        gigsite: 'https://www.playoctopus.com/drivers/',
      },
      {
        id: 'S0037',
        gig: 'Sticker Ride',
        description:
          'Sticker Ride pays rideshare drivers to wrap their cars in advertisements they can choose. They also help neat drivers save on their car insurance.',
        indeed: 'https://apps.apple.com/us/app/stickerride/id870548113',
        promo: '',
        gigsite: 'https://stickerride.com/',
      },
      {
        id: 'S0036',
        gig: 'ScooterMap',
        description:
          'ScooterMap puts all the scooters from all the brands into one convenient app, making it easier for chargers to locate new scooters and earn more money.',
        indeed:
          'https://apps.apple.com/us/app/scooter-map-all-the-scooters/id1437698355',
        promo: '',
        gigsite: 'https://scootermap.com/?sc_referral=62591ccf',
      },
    ],
    deals: [
      {
        id: 'D0001',
        gig: 'Acorns',
        description:
          'Acorns automatically invests your spare change into a portfolio built by experts.',
        promo: 'Sign Up and Get $5!',
        gigsite: 'https://acorns.com/invite/SGU9A3',
      },
      {
        id: 'D0002',
        gig: 'Robinhood',
        description:
          'Robinhood is a mobile app for trading stocks and options comission free.',
        promo: 'Get a Free Stock When You Sign Up!',
        gigsite: 'https://join.robinhood.com/markf1248',
      },
      {
        id: 'D0003',
        gig: 'Rakuten',
        description:
          'Formerly Ebates, Rakuten gives you cashback for shopping at over 2,500 stores.',
        promo: 'Sign Up and Get $30!',
        gigsite: 'https://go.rakuten.com/MARKFO238',
      },
      {
        id: 'D0004',
        gig: 'Cash App',
        description:
          'Cash App is an app for sending and receiving money fast and easy.',
        promo: 'Sign Up and Get $5!',
        gigsite: 'https://cash.app/app/QXGKDDH',
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
        draft.componentData.gigs = false;
        break;

      case LOAD_GIGS_SUCCESS:
        draft.componentData.gigs = action.gigs;
        draft.loading = false;
        break;

      case LOAD_GIGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_SERVICES:
        draft.loading = true;
        draft.error = false;
        draft.componentData.services = false;
        break;

      case LOAD_SERVICES_SUCCESS:
        draft.componentData.services = action.services;
        draft.loading = false;
        break;

      case LOAD_SERVICES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_DEALS:
        draft.loading = true;
        draft.error = false;
        draft.componentData.deals = false;
        break;

      case LOAD_DEALS_SUCCESS:
        draft.componentData.deals = action.deals;
        draft.loading = false;
        break;

      case LOAD_DEALS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case SELECTED_GIG:
        draft.selectedGig = action.id;
        break;
    }
  });

export default appReducer;
