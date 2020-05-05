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
// import nw from './img/nw.png';
import acorns from './img/acorns.png';
import rlac from './img/rlac.png';
import rover from './img/rover.png';
import hsnd from './img/hsnd.png';
import wingz from './img/wingz.png';
import uber from './img/uber.png';
import neighbor from './img/neighbor.png';
import taskrabbit from './img/taskrabbit.png';
import roadie from './img/roadie.png';
import instacart from './img/instacart.png';
import lyft from './img/lyft.png';
import amazon from './img/amazon.png';
import airbnb from './img/airbnb.png';
import postmates from './img/postmates.png';
import doordash from './img/doordash.png';
import wag from './img/wag.png';
import ubereats from './img/ubereats.png';
import turo from './img/turo.png';
import getaround from './img/getaround.png';
import handy from './img/handy.png';
import groundlink from './img/groundlink.png';
import skipcart from './img/skipcart.png';
import PICKUP from './img/PICKUP.png';
import tommyrun from './img/tommyrun.png';
import vrbo from './img/vrbo.png';
import upship from './img/upship.png';
import grubhub from './img/grubhub.png';
import caviar from './img/caviar.png';
import favor from './img/favor.png';
import zifty from './img/zifty.png';
import shipt from './img/shipt.png';
import homeaway from './img/homeaway.png';
import ofs from './img/ofs.png';
import dolly from './img/dolly.png';
import care from './img/care.png';
import bellhops from './img/bellhops.png';
import wonolo from './img/wonolo.png';
import etsy from './img/etsy.png';
import goshare from './img/goshare.png';
import figureeight from './img/figureeight.png';
import gigwalk from './img/gigwalk.jpg';
import hellotech from './img/hellotech.png';
import bird from './img/bird.png';
import burro from './img/burro.png';
import carelinx from './img/carelinx.png';
import census from './img/census.png';
import drizly from './img/drizly.png';
import easymove from './img/easymove.png';
import gbw from './img/gbw1.png';
import grabbit from './img/grabbit.png';
import grabr from './img/grabr.png';
import helpr from './img/helpr1.png';
import homeaglow from './img/homeaglow.png';
import hyrecar from './img/hyrecar.png';
import lawnlove from './img/lawnlove.png';
import networx from './img/networx.png';
import octopus from './img/octopus.png';
import peach from './img/peach.png';
import priv from './img/priv.png';
import ridersshare from './img/ridersshare.png';
import saucey from './img/saucey.png';
import scootermap from './img/scootermap.png';
import sherpashare from './img/sherpashare.png';
import sittercity from './img/sittercity.png';
import spare5 from './img/spare51.png';
import spin from './img/spin.png';
import taskeasy from './img/taskeasy1.png';
import urbansitter from './img/urbansitter.png';
import yourmechanic from './img/yourmechanic1.png';
import zeel from './img/zeel1.png';
import zum from './img/zum.png';
import plowzandmowz from './img/plowzandmowz.png';
import stickerride from './img/stickerride.png';
import dispatchit from './img/dispatchit.png';
import boatsetter from './img/boatsetter1.png';
import deliv from './img/deliv.png';
import skip from './img/skip.png';
import fancyhands from './img/fancyhands.png';
import wrapify from './img/wrapify.png';
import marketforce from './img/marketforce1.png';
import lugg from './img/lugg.png';
import heal from './img/heal.png';
import veryable from './img/veryable.png';
import spothero from './img/spothero1.png';
import adway from './img/adway.png';
import burpy from './img/burpy.png';
import takl from './img/takl1.png';
import everlance from './img/everlance.png';
import triplog from './img/triplog.png';
import rvshare from './img/rvshare1.png';
import parkingpanda from './img/parkingpanda1.png';
import lawnstarter from './img/lawnstarter.png';
import nickelytics from './img/nickelytics.png';
import deliveroo from './img/deliveroo.png';
import outdoorsy from './img/outdoorsy.png';
import gopuff from './img/gopuff.png';
import soothe from './img/soothe1.png';
import slingshot from './img/slingshot.png';
import bungii from './img/bungii.png';
import lime from './img/lime.png';
import hurdlr from './img/hurdlr.png';
import gridwise from './img/gridwise.png';
import mystro from './img/mystro.png';
import surge from './img/surge.png';
import deliverthat from './img/deliverthat.png';
import via from './img/Via.png';
import curb from './img/Curb.png';
import uzurv from './img/Uzurv.png';
import lovehomeswap from './img/Love Home Swap.png';
import eaze from './img/Eaze.png';
import minibar from './img/Minibar.png';
import sailo from './img/Sailo.png';
import wardrobe from './img/Wardrobe.png';
import schlep from './img/Schlep.png';
import eatwith from './img/EatWith.png';
import feastly from './img/Feastly.png';
import robinhood from './img/robinhood.png';
import rakuten from './img/rakuten.png';
import cashapp from './img/cashapp.png';
import fiverr from './img/fiverr.png';
import linkedin from './img/linkedin.png';
import freelancer from './img/freelancer.png';

// The initial state of the App
export const initialState = {
  selectedGig: 'G0001',
  loading: false,
  error: false,
  componentData: {
    gigs: [
      // Gigs
      //
      //
      //    Driving Gigs
      {
        id: 'G0001', // Rideshare
        logo: uber,
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
        subtypes: ['driving'],
      },
      {
        id: 'G0009',
        logo: lyft,
        gig: 'Lyft',
        app:
          'Lyft matches you with a nearby driver who will pick you up and take you where you want to go. Use the Lyft app to get a ride in minutes. Just tap request and a driver’s there. By taking Lyft, you can help your community reduce traffic and take cars off the road.',
        description:
          'Lyft is another gigantic ride sharing app. Similar to Uber, Lyft drivers offer passengers a safe ride to their destination. Lyft boasts a lower barrier of entry and higher tips on average than Uber.',
        promo: '',
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
        appsite: 'https://www.lyft.com/rider/signup',
        pay: 'On average Lyft drivers make about $17.50 an hour',
        subtypes: ['driving'],
      },
      {
        id: 'G0037',
        logo: hsnd,
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
        subtypes: ['driving'],
      },
      {
        id: 'G0168',
        logo: zum,
        gig: 'Zum',
        app:
          "Zūm is a reliable, technology platform that connects busy families with providers (Zūmers,) of kids' transportation and childcare services",
        description:
          'Zum is another carpooling rideshare app similar to HopSkipDrive. Zum drivers provide kids with transportation and care. It is available in California, Arizona, Texas, Illinois, Florida, Washington and Washington DC.',
        promo: 'Receive up to $500 sign up bonus!',
        resources: [
          {
            title: 'Indeed: Job Reviews from Zum Drivers',
            link: 'https://www.indeed.com/cmp/Ridezum/reviews',
          },
        ],
        gigsite: 'https://www.ridezum.com/drive.html',
        appsite: 'https://www.ridezum.com/',
        pay: 'Zumers make anywhere between $16 and $35 an hour, on average',
        subtypes: ['driving'],
      },
      {
        id: 'G0054',
        logo: wingz,
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
        subtypes: ['driving'],
      },
      {
        id: 'G0197',
        logo: via,
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
        subtypes: ['driving'],
      },
      {
        id: 'G0163',
        logo: groundlink,
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
        subtypes: ['driving'],
      },
      {
        id: 'G0198',
        logo: curb,
        gig: 'Curb',
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

        subtypes: ['driving'],
      },
      // /////////////////////////////////////////////////////////THis is where you started with the fkn resources
      {
        id: 'G0007', // Delivery
        logo: roadie,
        gig: 'Roadie', // Last mile
        description:
          'Going on a roadtrip soon? Roadie will pay you to fill your empty space and complete deliveries on the way. Roadie is a same day delivery service that connects drivers already headed in the right direction with shipments',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Roadies',
            link: 'https://www.indeed.com/cmp/Roadie/reviews',
          },
        ],
        gigsite: 'https://my.roadie.com/drive/sign-up/basic-info',

        subtypes: ['driving'],
      },
      {
        id: 'G0188',
        logo: grabr,
        gig: 'Grabr',
        description:
          'Earn money while traveling! Grabr lets travelers subsidize their trips by delivering a handful of items. You can earn $200+ every time you travel abroad.',
        promo: 'Sign Up Below and Get $10!',
        resources: [
          {
            title: 'Grabr Reviews',
            link: 'https://www.producthunt.com/posts/grabr-2/reviews',
          },
        ],
        gigsite:
          'https://grabr.io/invitation/mark-foster?utm_campaign=web&utm_source=referral_program&utm_medium=copy_link',

        subtypes: ['driving'],
      },
      {
        id: 'G0010',
        logo: amazon,
        gig: 'Amazon Flex',
        description:
          'Perform the "last mile" of Amazon delivery, moving packages from regional centers to customers. Amazon Flex offers great compensation, and you can easily track your earnings in the Amazon Flex app.',
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
        pay: 'Amazon Flex Drivers can make between $18 and $25 an hour',
        subtypes: ['driving'],
      },
      {
        id: 'G0143',
        logo: skipcart,
        gig: 'Skipcart',
        description:
          'Skipcart is a service that offers last-mile delivery for retailers and restaurants. Skipcart lets you choose your own schedule and make deliveries in the community you already live in. Open the Skipcart app. Choose your hours and start delivering.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Skipcart Drivers',
            link: 'https://www.indeed.com/cmp/Skipcart/reviews',
          },
        ],
        gigsite: 'https://skipcart.com/drivers/',

        subtypes: ['driving'],
      },
      {
        id: 'G0155',
        logo: PICKUP,
        gig: 'PICKUP',
        description:
          'PICKUP is an on-demand and same day delivery service of big & heavy items for national and area businesses. If you own a truck or van, put it to good use and start hauling for money',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for PICKUP Drivers',
            link:
              'https://www.glassdoor.com/Overview/Working-at-PICKUP-EI_IE1641897.11,17.htm',
          },
        ],
        gigsite: 'https://pickupnow.com/requirements/',

        subtypes: ['driving'],
      },
      {
        id: 'G0193',
        logo: bungii,
        gig: 'Bungii',
        description:
          'If you own a truck and can do some heavy lifting, Bungii will help you earn up to $40/hour doing deliveries for people in your community. They ask for you to own a 2005 or newer and rachet straps, bungee cords and moving blankets to secure your deliveries.',

        promo: 'Sign Up With Promo Code 5XDKA and get $10!',
        resources: [
          {
            title: 'Bungii Reviews',
            link:
              'https://appgrooves.com/app/bungii-your-friend-w-a-truck-by-bungii-llc',
          },
        ],
        gigsite: 'https://bungii.com/',

        subtypes: ['driving'],
      },
      {
        id: 'G0157',
        logo: tommyrun,
        gig: 'TommyRun',
        description:
          'TommyRunners deliver buliding materials to individuals in their communities. You need to own a truck or van and be willing to do some heavy lifting.',
        indeed: 'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
        promo: 'Sign Up and Get a $25 Credit!',
        resources: [
          {
            title: 'TommyRun Reviews',
            link:
              'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
          },
        ],
        gigsite: 'https://tommyrun.app.link/vanKPpCzN5',

        subtypes: ['driving'],
      },
      {
        id: 'G0161',
        logo: upship,
        gig: 'uShip',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0182',
        logo: dispatchit,
        gig: 'DispatchIt',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0189',
        logo: deliverthat,
        gig: 'DeliverThat',
        description:
          'DeliverThat is a food delivery app that has partnered with well known restaraunts like QDoba, Zoes Kitchen, Boston Market and Firehouse, and drivers deliver orders to homes. Delivery comissions start with a base amount, then increase based on distance and size.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for DeliverThat Drivers',
            link: 'https://www.indeed.com/cmp/Deliver-That/reviews',
          },
        ],
        gigsite: 'https://www.ideliverthat.com/driver',

        subtypes: ['driving'],
      },
      {
        id: 'G0013',
        logo: postmates, // Food
        gig: 'Postmates',
        description:
          'Postmates drivers deliver for one of the fastest growing food-delivery apps. They get delivery requests from the Postmates app, navigate to the store or restaurant and deliver to the customer location.',
        promo:
          'Complete a certain number of deliveries within 14 days and earn a guaranteed minimum payout.',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0014',
        logo: doordash,
        gig: 'DoorDash',
        description:
          'Doordash is another gigantic food-delivery app hiring delivery drivers. Doordash Dashers schedule shifts and fulfill delivery requests from the DoorDash app',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for DoorDash Dashers',
            link: 'https://www.indeed.com/cmp/Doordash/reviews',
          },
          {
            title: 'r/doordash: Subreddit for Doordash Customers and Drivers',
            link: 'https://www.reddit.com/r/doordash/',
          },
        ],
        gigsite: 'https://www.doordash.com/dasher/signup/',

        subtypes: ['driving'],
      },
      {
        id: 'G0016',
        logo: ubereats,
        gig: 'Uber Eats',
        description:
          'Another big player in the food-delivery scene, UberEats drivers pick up food from local restaurants and deliver the orders to customers. Some cities offer bike and scooter delivery in addition to driving delivery.',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0034',
        logo: grubhub,
        gig: 'Grubhub',
        description:
          'Grubhub is another food-delivery service, similar to DoorDash and other options. Grubhub drivers get guaranteed minimum earnings and additional perks for performance.',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0024',
        logo: caviar,
        gig: 'Caviar',
        description:
          'Caviar is a food-delivery service operating in over a dozen markets with a focus on higher end restaurants that they can develop seamless partnerships with, allowing them to fulfill orders faster. Caviar has no driver rating system, and compensates couriers on an "effort-based" algorithm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Caviar Drivers',
            link: 'https://www.indeed.com/cmp/Caviar/reviews?fjobtitle=Courier',
          },
        ],
        gigsite: 'https://www.trycaviar.com/apply',

        subtypes: ['driving'],
      },
      {
        id: 'G0030',
        logo: favor,
        gig: 'Favor',
        description:
          'With Favor, you can deliver just about anything to customers and get paid for it. Unlike other deliver gigs, Favor provides a $9 per hour base pay, though tips are deducted from this, and is available in 12 cities',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0148',
        logo: zifty,
        gig: 'Zifty',
        description:
          'Zifty is an online delivery company that partners with local restaurants and brands to bring their goods straight to clients doors. Zifty is looking for enthusiastic delivery providers to make deliveries of food, movies, and other items to customers.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Zifty Drivers',
            link: 'https://www.indeed.com/cmp/Zifty.com/reviews',
          },
        ],
        gigsite: 'http://jobs.zifty.com/',

        subtypes: ['driving'],
      },
      {
        id: 'G0185',
        logo: peach,
        gig: 'Peach',
        description:
          'Peach focuses on carefully chosen dishes from the best lunch spots. They offer generous compensation and minimal time commitment to their delivery drivers. Peach is available in Seattle, San Diego and Boston.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Peach Drivers',
            link: 'https://www.indeed.com/cmp/Peach/reviews',
          },
        ],
        gigsite: 'https://www.peachd.com/jobs/',

        subtypes: ['driving'],
      },
      {
        id: 'G0183',
        logo: deliveroo,
        gig: 'Deliveroo',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0169',
        logo: gopuff,
        gig: 'GoPuff',
        description:
          'GoPuff is the largest and fastest convenience delivery app available. Drivers get paid to deliver snacks, drinks, alcohol, personal care items and more to customers. Deliveries are always ready for the drivers to pick up, and delivery distances are optimized for short travel.',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0181', // Alcohol
        logo: drizly,
        gig: 'Drizly',
        description:
          'Drizly focuses on the delivery of the fun stuff, alcohol that is. Drizly partners with liquor stores to deliver their fine products to customers. The hiring process for their drivers is different than most gigs, you have to reach out to a local liquor store that partners with Drizly and get hired through them.',
        promo: '',
        resources: [
          {
            title: 'Glassdoor: Job Reviews for Drizly Drivers',
            link:
              'https://www.glassdoor.com/Reviews/Drizly-Delivery-Driver-Reviews-EI_IE1344937.0,6_KO7,22.htm',
          },
        ],
        gigsite: 'https://drizly.com/liquor-stores-near-me',

        subtypes: ['driving'],
      },
      {
        id: 'G0184',
        logo: saucey,
        gig: 'Saucey',
        description:
          'Saucey is another Alcohol delivery company. It boasts a flexible schedule and solid pay for drivers. Sacuey also has a minimum pay for those who commit to working in "core blocks," which means you agree to work on the clock.',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Saucey Drivers',
            link: 'https://www.indeed.com/cmp/Saucey/reviews?fcountry=ALL',
          },
        ],
        gigsite: 'https://www.saucey.com/apply',

        subtypes: ['driving'],
      },
      {
        id: 'G0201',
        logo: eaze,
        gig: 'Eaze',
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

        subtypes: ['delivery'],
      },
      {
        id: 'G0202',
        logo: minibar,
        gig: 'Minibar',
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

        subtypes: ['delivery'],
      },
      {
        id: 'G0008', // Shopping
        logo: instacart,
        gig: 'Instacart',
        description:
          'Instacart is one of the largest grocery delivery services out there. Shoppers use their platform to shop and deliver orders for their customers.',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0046',
        logo: shipt,
        gig: 'Shipt',
        description:
          'Shipt is another key player in the grocery delivery game hiring Shoppers. Unlike Instacart, Shipt is owned solely by Target, which is where you will be doing most of your shopping.',
        promo: '',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0186',
        logo: burpy,
        gig: 'Burpy',
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

        subtypes: ['driving'],
      },
      {
        id: 'G0170',
        logo: deliv,
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

        subtypes: ['driving'],
      },
      {
        id: 'G0187',
        logo: burro,
        gig: 'Burro',
        description:
          'Burro is an all in one delivery app for the Austin area. Deliver Craigslist items, make store deliveries even help people move. You can set a flexible schedule and they advertise "Drive for Burro and earn $45/hr with your pickup truck."',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Burro Drivers',
            link: 'https://www.indeed.com/cmp/Burro/salaries/Delivery-Driver',
          },
        ],
        gigsite: 'https://getburro.com/drivers.html',

        subtypes: ['driving'],
      },
      //
      //
      //    Property (Rental) Gigs
      {
        id: 'G0002', // Home rentals
        logo: rlac,
        gig: 'Rent Like a Champion',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0004',
        logo: neighbor,
        gig: 'Neighbor',
        description:
          'Neighbor lets you earn money renting out your basement, garage and even closets to neighbors. Clean out your garage and you can start earning over $2,000 extra a year.',
        promo: 'Sign Up and Get $50 from NextWrk!',
        resources: [
          {
            title: 'TrustPilot, Neighbor Review',
            link: 'https://www.trustpilot.com/review/neighbor.com',
          },
        ],
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',

        subtypes: ['rental'],
      },
      {
        id: 'G0012',
        logo: airbnb,
        gig: 'AirBnB',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0036',
        logo: homeaway,
        gig: 'HomeAway',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0041',
        logo: ofs,
        gig: 'onefinestay',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0053',
        logo: vrbo,
        gig: 'VRBO',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0200',
        logo: lovehomeswap,
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

        subtypes: ['rental'],
      },
      {
        id: 'G0017', // Car rentals
        logo: turo,
        gig: 'Turo',
        description:
          'Turo is a car rental service that connects renters with car owners, and is available worldwide!',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0018',
        logo: getaround,
        gig: 'Getaround',
        description:
          'Getaround is a car rental service that connects renters with car owners. It is available in most major cities, and is a great way to make money with little effort.',
        promo: 'Sign Up and Get $20 Rental Credit!',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0177',
        logo: hyrecar,
        gig: 'Hyrecar',
        description:
          'HyreCar is a service that allows ridesharers without a ride to rent cars. Because of this, your car is likely to rent quickly and for a long time. Check out HyreCar if you have a car collecting space in your driveway, or want to start ridesharing.',
        promo: '',
        resources: [
          {
            title: 'Trustpilot: Reviews for Hyrecar',
            link: 'https://www.trustpilot.com/review/hyrecar.com',
          },
        ],
        gigsite: 'https://app.hyrecar.com/login?type=owner&form=signup',

        subtypes: ['rental'],
      },
      {
        id: 'G0049', // Parking Rental
        logo: spothero,
        gig: 'SpotHero',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0058',
        logo: parkingpanda,
        gig: 'ParkingPanda',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0067',
        logo: boatsetter,
        gig: 'Boatsetter',
        description:
          'If you own a boat, then Boatsetter lets you rent it out — either with or without a captain. Peace of mind and insurance is included in every rental, and you choose who rents your boat!',
        promo: 'Rent Out Your Boat and Get $100 from NextWrk!',
        resources: [
          {
            title: 'Facebook: Boatsetter Reviews',
            link: 'https://www.facebook.com/pg/Boatsetter/reviews/',
          },
        ],
        gigsite: 'https://www.boatsetter.com/referral/o/sqxkrtk',

        subtypes: ['rental'],
      },
      {
        id: 'G0203',
        logo: sailo,
        gig: 'Sailo',
        description:
          'Sailo is considered the “airbnb” of boat rentals. The app connecting millions of boat owners looking to list with millions of renters looking to go on a boat. As a host, Sailo gives you full control of your availability, prices and boat rules. Sign up as a host and Sailo lets you earn money opening up your boat to travelers.',
        promo: '',
        resources: [
          {
            title: 'Facebook: Sailo Reviews',
            link: 'https://www.facebook.com/pg/Sailoboats/reviews/',
          },
        ],
        gigsite: 'https://www.sailo.com/',

        subtypes: ['rental'],
      },
      {
        id: 'G0066',
        logo: rvshare,
        gig: 'RVShare',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0191',
        logo: outdoorsy,
        gig: 'Outdoorsy',
        description:
          'Outdoorsy is another RV rental marketplace. They perform DMV checks on all drivers, provide 24/7 roadside assistance and have a dedicated customer support team.',
        promo: 'Sign Up and Get $50 from NextWrk!',
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

        subtypes: ['rental'],
      },
      {
        id: 'G0194',
        logo: ridersshare,
        gig: 'Riders Share',
        description:
          'If you own a motercycle, and and it spends most of its time in your garage, Riders Share will connect you with drivers looking to rent it out. List your motorcycle for free and make an average of $150 per booking! All listings are protected by an A rated insurance provider.',
        promo: 'Sign Up and Get $25 From NextWrk!',
        resources: [
          {
            title: 'Facebook: Riders Share Reviews',
            link: 'https://www.facebook.com/pg/ridersshare/reviews/',
          },
        ],
        gigsite: 'www.riders-share.com/welcome/markf+QdETy',

        subtypes: ['rental'],
      },
      //
      //
      // Scooter Chargers
      {
        id: 'G0153',
        logo: bird,
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

        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0165',
        logo: lime,
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

        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0175',
        logo: spin,
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

        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0176',
        logo: skip,
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

        subtypes: ['other', 'scooter'],
      },
      //
      //
      //    Dog Walking Gigs
      {
        id: 'G0003',
        logo: rover,
        gig: 'Rover',
        description:
          'Love animals? Wanna earn some extra money? Rover will pay you to watch dogs as a Sitter or walk dogs as a Walker. They offer flexibility and can help you earn up to $1,000 a month working with animals!',
        indeed:
          'https://www.indeed.com/cmp/Rover.com/reviews?fcountry=ALL&fjobtitle=Dog+Walker',
        promo: 'Sign Up Through the Link Below and Get $20!',
        resources: [
          {
            title: 'r/RoverPetSitting: Subreddit for Rover Workers',
            link: 'https://www.reddit.com/r/RoverPetSitting/',
          },
        ],
        gigsite: 'http://share.rover.com/SWhzJ',

        subtypes: ['labor', 'dog'],
      },
      {
        id: 'G0015',
        logo: wag,
        gig: 'Wag!',
        description:
          'Wag! is one of the largest dog walking apps. They offer flexibility, secure payment through Stripe, and donates money from 30 minute walks to feed shelter dogs.',
        indeed: 'https://www.indeed.com/cmp/Wag!-1/reviews',
        promo: 'Sign Up and Get a Free Walk!',
        resources: [
          {
            title: 'r/WagWalker: Subreddit for Wag Walkers',
            link: 'https://www.reddit.com/r/WagWalker/',
          },
        ],
        gigsite: 'https://wagwalking.com/dog-walker',

        subtypes: ['labor', 'dog'],
      },
      //
      //
      //    Anybody can do it labor
      {
        id: 'G0005', // Manual labor
        logo: taskrabbit,
        gig: 'TaskRabbit',
        description:
          'TaskRabbit is a marketplace that matches freelance labor with local demand. You can get paid to help with everyday tasks, like cleaning, moving, delivery and handyman work, for individuals in your community.',
        indeed: 'https://www.indeed.com/cmp/Taskrabbit/reviews',
        promo: '',
        resources: [
          {
            title: 'r/TaskRabbit: Subreddit for TaskRabbit Workers',
            link: 'https://www.reddit.com/r/TaskRabbit/',
          },
        ],
        gigsite:
          'https://support.taskrabbit.com/hc/en-us/articles/360031918292-How-Do-I-Become-a-Tasker-',

        subtypes: ['labor'],
      },
      {
        id: 'G0020',
        logo: handy,
        gig: 'Handy',
        description:
          'Handy pays for being a home cleaner and handymen. It covers over 20 cities in North America, Canada, and the UK. However, unlike TaskRabbit, they only accept applicants with professional experience in cleaning or handyman services.',
        indeed: 'https://www.indeed.com/cmp/Handy/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.handy.com/apply',

        subtypes: ['labor'],
      },
      {
        id: 'G0021',
        logo: wonolo,
        gig: 'Wonolo',
        description:
          'Wonolo hires workers to perform certain jobs, like Warehouse Operations, General Labor, Food Production, Cleaning and Merchandising, for different Employers. They are quickly expanding across the US and are available in most major cities.',
        indeed: 'https://www.indeed.com/cmp/Wonolo/reviews',
        promo: 'Earn a $100 Bonus When You Accept a Job Through Wonolo!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.wonolo.com/find-work',

        subtypes: ['labor'],
      },
      {
        id: 'G0022',
        logo: bellhops,
        gig: 'Bellhops',
        description:
          'Bellhops is a moving service that eases the demands of moving by connecting capable workers with clients looking to pack up and move. As a mover, you will get paid to pack boxes and move people into their new digs.',
        indeed: 'https://www.indeed.com/cmp/Bellhops/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.getbellhops.com/being-a-bellhop/',

        subtypes: ['labor'],
      },
      {
        id: 'G0027',
        logo: dolly,
        gig: 'Dolly',
        description:
          'The Dolly service is another moving service that pays people that have vehicles for moving, and movers to do the heavy lifting if they do not have a vehicle, to help individuals in your community move in or out.',
        indeed: 'https://www.indeed.com/cmp/Dolly/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://dolly.com/helpers/',

        subtypes: ['labor'],
      },
      {
        id: 'G0205',
        logo: schlep,
        gig: 'Schlep',
        description:
          'The Uber for moving! Work a gig as a driver or a mover. Earn up to $1,000 a week, keep 100% of your tips and work on a flexible schedule',
        indeed: 'https://www.yelp.com/biz/schlep-chicago',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.schlep.it/#/',

        subtypes: ['rental', 'labor'],
      },
      {
        id: 'G0164',
        logo: easymove,
        gig: 'EasyMove',
        description:
          'Easymove is a delivery service offering to help users move bulky items from point A to point B. If you have a big car and can do some heavy lifting, they advertise you can make $2,500 a week as an Easymove partner.',
        indeed: 'https://www.trustpilot.com/review/www.easymove.co.uk',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://geteasymove.com/',

        subtypes: ['labor'],
      },
      {
        id: 'G0192',
        logo: lugg,
        gig: 'Lugg',
        description:
          'Convenient Moving and Delivering is what Lugg offers. If you own a truck, you can sign up to become a Lugger and earn up to $2.5k a week! No truck? No problem! If you can do some heavy lifting you can still sign up.',
        indeed: 'https://www.indeed.com/cmp/Lugg/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://lugg.com/become-a-lugger',

        subtypes: ['labor'],
      },
      {
        id: 'G0151',
        logo: goshare,
        gig: 'GoShare',
        description:
          'GoShare specializes in delivery, moving and hauling services. If you have a truck, cargo van or box truck this gig could be right for you. If you have no truck you can apply as a helper. Depending on your driving situation, this gig can prove very lucrative.',
        indeed:
          'https://www.glassdoor.com/Reviews/GoShare-Reviews-E1779925.htm',
        promo: 'Sign Up Below and Receieve $10!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://goshare.app.link/Mark_Foster_MF6447',

        subtypes: ['labor'],
      },
      {
        id: 'G0050',
        logo: takl,
        gig: 'Takl',
        description:
          'At Takl, you get paid to help others in your community complete small jobs and household chores. You can perform chores in twelve categories on your own time, and get paid fast through direct deposit.',
        indeed: 'https://www.indeed.com/cmp/Takl/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://app.takl.com/providers/register',

        subtypes: ['labor'],
      },
      {
        id: 'G0190',
        logo: networx,
        gig: 'NetWorx',
        description:
          'NetWorx is looking for professionals offering contracting services like Carpentry, Pest Control, Fencing and Roofing. They connect you with local demand for these services, and help boost your bottom line.',
        indeed: 'https://www.glassdoor.com/Reviews/Networx-Reviews-E368391.htm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.networx.com/signup',

        subtypes: ['labor'],
      },
      {
        id: 'G0051', // Lawn Care
        logo: taskeasy,
        gig: 'TaskEasy',
        description:
          'TaskEasy employs landscaping professionals to provide lawnmowing, gardening, and landscaping services for individuals in the community. If you know your way around a lawn, and are looking to gain more customers, TaskEasy will help out.',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-TaskEasy-EI_IE1030594.11,19.htm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.taskeasy.com/contractors',

        subtypes: ['labor'],
      },
      {
        id: 'G0149',
        logo: lawnstarter,
        gig: 'LawnStarter',
        description:
          'LawnStarter can grow your lawn care business by over 30%. By connecting you with new customers in your area at no cost, you can put a stop to slow days and grow your revenue.',
        indeed:
          'https://www.indeed.com/cmp/Lawnstarter/reviews?ftopic=paybenefits',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.lawnstarter.com/lawn-care-businesses',

        subtypes: ['labor'],
      },
      {
        id: 'G0150',
        logo: plowzandmowz,
        gig: 'Plowz & Mowz',
        description:
          'Plowz & Mowz is another service offering more customers to lawncare professionals. They require $1M in General Liability Insurance and professional equipment, but if you have that they advertise they can grow your business by 30%',
        indeed: 'https://www.trustpilot.com/review/www.plowzandmowz.com',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://order.plowzandmowz.com/provider-onboard',

        subtypes: ['labor'],
      },
      {
        id: 'G0152',
        logo: lawnlove,
        gig: 'Lawn Love',
        description:
          'If you have a truck and equipment, sign up to be a Lawn Pro and get connected with Lawn Care jobs in your community. You can choose which ones to work and get paid through the app within 72 hours.',
        indeed: 'https://www.indeed.com/cmp/Lawn-Love/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://lawnlove.com/apply',

        subtypes: ['labor'],
      },
      {
        id: 'G0142', // Manufacturing
        logo: veryable,
        gig: 'Veryable',
        description:
          'Veryable is a great way for manufacturing workers the leverage the gig economy. When clients book a project through their service, the labor is filled from their pool of workers. Flexible work, daily pay',
        indeed:
          'https://www.indeed.com/cmp/Veryable-3/reviews?ftopic=paybenefits',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://veryable.app.link/pqxf1qmEN5',

        subtypes: ['labor'],
      },
      {
        id: 'G0162', // Cleaning
        logo: homeaglow,
        gig: 'Homeaglow',
        description:
          'Homeaglow connects residential cleaners with clients in their community. You can set your own rates, make your own schedule, and get paid weekly.',
        indeed: 'https://www.indeed.com/cmp/Homeaglow/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.homeaglow.com/apply',

        subtypes: ['labor'],
      },
      {
        id: 'G0023', // Less intensive labor
        logo: care,
        gig: 'Care', // Childcare
        description:
          'Primarily a place to find work in child or pet care, Care.com also offers gigs for housekeepers, gardeners, tutors, and those caring for the elderly.',
        indeed: 'https://www.indeed.com/cmp/Care.com/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.care.com/',

        subtypes: ['labor'],
      },
      {
        id: 'G0199',
        logo: uzurv,
        gig: 'Uzurv',
        description:
          'Do you have a passion for helping the elderly? UZURV is a ride-share company that helps provide transportation to the elderly, disabled, and for NEMT needs',
        indeed:
          'https://appgrooves.com/app/uzurv360-driver-by-uzurv-llc/positive',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://uzurv.com/drivers/',

        subtypes: ['driving'],
      },
      {
        id: 'G0167',
        logo: sittercity,
        gig: 'Sittercity',
        description:
          'If you are a babysitter, nanny or child care professional, Sittercity can connect you with individuals in your community looking for your services.',
        indeed: 'https://www.indeed.com/cmp/Sittercity/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.sittercity.com/sitter/account',

        subtypes: ['labor'],
      },
      {
        id: 'G0195',
        logo: carelinx,
        gig: 'CareLinx',
        description:
          'CareLinx connects Caregivers with elders seeking care nearby. They have a network of over 300,000 caregivers and offer flexible hours, great pay and professional development.',
        indeed: 'https://www.indeed.com/cmp/Carelinx/reviews',
        promo: 'Sign Up Below and Get a Free Background Check!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.carelinx.com/p/nextwrs',

        subtypes: ['labor'],
      },
      {
        id: 'G0061',
        logo: helpr,
        gig: 'Helpr',
        description:
          'Helpr is an app that connects parents with reliable childcare help (i.e., babysitting), It is is ideal for those with relevant experience looking for occasional part-time work.',
        indeed: 'https://www.glassdoor.com/Reviews/Helpr-Reviews-E1305149.htm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.helpr-app.com/become-a-helpr-now',

        subtypes: ['labor'],
      },
      {
        id: 'G0154',
        logo: urbansitter,
        gig: 'UrbanSitter',
        description:
          'UrbanSitter lets users find and book babysitters and nannies in their communities. If you are a nanny or babysitter, it is a great way to pick up new clients!',
        indeed: 'https://www.indeed.com/cmp/Urbansitter/reviews',
        promo: 'Sign Up and Get $25 Credit!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://link.urbansitter.com/P2JqXJSHN5',

        subtypes: ['labor'],
      },
      //
      //
      // Technical gigs
      {
        id: 'G0026',
        logo: figureeight,
        gig: 'Figure Eight',
        description:
          'When someone need labels and annotations for a machine learning project, Figure Eight steps up. Users upload unlabeled data, with the rules they need for the project, and contributers get paid to mold the data for the model.',
        indeed:
          'https://www.glassdoor.com/Reviews/Figure-Eight-Reviews-E553483.htm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.figure-eight.com/contributor/',

        subtypes: ['other'],
      },
      {
        id: 'G0035',
        logo: hellotech,
        gig: 'HelloTech',
        description:
          'Have a plethora of technical knowledge? Wanna get paid to help those less technically advanced? HelloTech connects you with users in your area looking for tech help. You set your own schedule, and get paid weekly',
        indeed: 'https://www.indeed.com/cmp/Hellotech/reviews?fcountry=ALL',
        promo: 'Sign Up and Get $10!',
        resources: [
          {
            title: 'r/HelloTech: Subreddit for HelloTech Workers',
            link: 'https://www.reddit.com/r/HelloTech/',
          },
        ],
        gigsite: 'http://fbuy.me/v/markfoster314',

        subtypes: ['other'],
      },
      //
      //
      // Artsy Gigs
      {
        id: 'G0028',
        logo: etsy,
        gig: 'Etsy Seller',
        description:
          'Etsy provides a marketplace for people to sell their handmade, vintage, or creative goods online. If you have an artsy side, look into getting paid for it on Etsy!',
        indeed: 'https://www.consumeraffairs.com/online/etsy.html',
        promo: '',
        resources: [
          {
            title: 'r/EtsySellers: Subreddit for Etsy Sellers',
            link: 'https://www.reddit.com/r/EtsySellers/',
          },
        ],
        gigsite: 'https://www.etsy.com/join',

        subtypes: ['other'],
      },
      //
      //
      // Virtual Assistant Gigs
      {
        id: 'G0029',
        logo: fancyhands,
        gig: 'Fancy Hands',
        description:
          'Want to become a virtual assistant, offering services to entrepenuers and businesses from wherever you want? Fancy Hands is a team of US-based virtual assistants, and a great place to start!',
        indeed: 'https://www.indeed.com/cmp/Fancy-Hands/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.fancyhands.com/jobs',

        subtypes: ['other'],
      },
      //
      //
      // Cooking Gigs
      //
      //
      // Mystery Shoppers
      {
        id: 'G0033',
        logo: gigwalk,
        gig: 'Gigwalk',
        description:
          'Work for Gigwalk usually involves gathering data for companies about their products and stores. For example, you might be checking what is on the shelves in a particular shop, and whether it is correctly priced and labeled.',
        indeed: 'https://www.indeed.com/cmp/Gigwalk/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'http://www.gigwalk.com/gigwalkers/',

        subtypes: ['other'],
      },
      {
        id: 'G0070',
        logo: marketforce,
        gig: 'Market Force',
        description:
          'At Market Force, you will complete mystery shops for banks, restaurants, and stores. You get paid to provide feedback on your visits, which those companies then use to improve.',
        indeed: 'https://www.indeed.com/cmp/Market-Force/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.marketforce.com/become-a-mystery-shopper',

        subtypes: ['other'],
      },
      {
        id: 'G0071',
        logo: gbw,
        gig: 'GBW',
        description:
          'GBW pays individuals to shop at globally recognized brands and provide feedback on the experience. They have organized over 14 million mystery shops for some of the largest brands.',
        indeed: 'https://www.trustpilot.com/review/www.gapbuster.com',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://gbw.solutions/becomeanevaluator',

        subtypes: ['other'],
      },
      // Bullshit work
      {
        id: 'G0048',
        logo: spare5,
        gig: 'Spare5',
        description:
          'Spare5 is an app which pays you small amounts of money for completing micro-tasks on your phone. Most tasks only take a few seconds, and the app pays on average $0.02 – $0.05 per task.',
        indeed: 'https://onlinezerotohero.com/spare5-review',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://app.spare5.com/fives/sign_in',

        subtypes: ['other'],
      },
      {
        id: 'G0147',
        logo: census,
        gig: 'Census Taker',
        description:
          'The United States Government needs a lot of help taking the census every year. Sign up to be a census taker and you can earn between $12 and $30 an hour, depending on your location.',
        indeed:
          'https://www.indeed.com/cmp/U.S.-Census-Bureau/reviews?fcountry=ALL&fjobtitle=Census+Taker',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://2020census.gov/en/jobs.html',

        subtypes: ['other'],
      },
      // Mechanics
      {
        id: 'G0055',
        logo: yourmechanic,
        gig: 'YourMechanic',
        description:
          'YourMechanic offers at home mechanic services to users, and is a great way for people with auto repair skills to leverage the gig economy. You can make extra money providing car repairs and maitenance at the homes of clients.',
        indeed: 'https://www.trustpilot.com/review/yourmechanic.com',
        promo: 'Sign Up Below and Get a $10 Credit!',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.yourmechanic.com/rl/IyhJRw1860682',

        subtypes: ['labor'],
      },
      // Massages
      {
        id: 'G0056',
        logo: zeel,
        gig: 'Zeel',
        description:
          'Zeel is a service offering at home massages to users, and is a phenomenal way for massage therapists to leverage the gig economy. 18% gratuity is added to every in-home appointment and customers pay for late cancelations.',
        indeed: 'https://www.indeed.com/cmp/Zeel/reviews',
        promo: 'Sign Up With Code PAUSE20 and get $20',
        resources: [
          {
            title: 'Zeel or Soothe?',
            link:
              'https://www.reddit.com/r/massage/comments/adykig/zeel_or_soothe/',
          },
        ],
        gigsite: 'https://www.zeel.com/apply',

        subtypes: ['other'],
      },
      {
        id: 'G0064',
        logo: soothe,
        gig: 'Soothe',
        description:
          'Gig work for massage therapists, including deep tissue, sports, and couples massage work. Soothe advertises 2-3x industry standard pay and schedule flexibility.',
        indeed: 'https://www.indeed.com/cmp/Soothe-Inc/reviews',
        promo: '',
        resources: [
          {
            title: 'Zeel or Soothe?',
            link:
              'https://www.reddit.com/r/massage/comments/adykig/zeel_or_soothe/',
          },
        ],
        gigsite: 'https://www.soothe.com/apply',

        subtypes: ['other'],
      },
      // Beauty
      {
        id: 'G0160',
        logo: priv,
        gig: 'Priv',
        description:
          'Beauty. Priv connects customers on-demand with freelance beauty and wellness professionals, taking a 20% commission. Priv services include makeup, blowout, haircut, nails/manicure, massage, personal training, grooming, spray tan and facials. “Priv Pros” select shifts and kinds of jobs they choose.',
        indeed: 'https://www.indeed.com/cmp/Priv/reviews?fcountry=ALL',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://gopriv.com/pro',

        subtypes: ['other'],
      },
      // Nurses
      {
        id: 'G0179',
        logo: heal,
        gig: 'Heal',
        description:
          'Gig work for healthcare professionals. Heal.com lets healthcare professionals spend quality time with patients in the privacy, comfort and convenience of their environment with the full capabilities of the doctors office',
        indeed: 'https://www.indeed.com/cmp/Heal/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://heal.com/medical-team/',

        subtypes: ['other'],
      },
      {
        id: 'G0178',
        logo: slingshot,
        gig: 'Slingshot Health',
        description:
          'Slingshot Health helps healthcare profesionals find new patients and fill open gaps in their schedules, growing their practice. It is free to sign up.',
        indeed:
          'https://www.glassdoor.com/Reviews/Slingshot-Health-Reviews-E2439803.htm',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.slingshothealth.com/providers/',

        subtypes: ['other'],
      },
      {
        id: 'G0204',
        logo: wardrobe,
        gig: 'Wardrobe',
        description:
          'Do you have a big or fashionable wardrobe? Monetize your closet with peer-to-peer fashion rentals. Lend designer pieces from your closet to fellow fashion lovers and get easy cash with this app!',
        indeed:
          'https://apps.apple.com/us/app/wardrobe-rent-luxury-fashion/id1275844584',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://wearwardrobe.co/',

        subtypes: ['rental'],
      },
      {
        id: 'G0206',
        logo: eatwith,
        gig: 'EatWith',
        description:
          'Do you have a passion for food or cooking? Host dining experiences, cooking classes, food tours, and much more at EatWith. Set menus, set prices, and set your own schedule. Do what you enjoy and make money from it.',
        indeed: 'https://www.yelp.com/biz/eatwith-san-francisco-3',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.eatwith.com/landings/become-a-host',

        subtypes: ['rental', 'labor'],
      },
      {
        id: 'G0207',
        logo: feastly,
        gig: 'Feastly',
        description:
          'A similar gig to EatWith. Showcase and host your own dinners, pop-ups, cooking lessons, and culinary experiences. Make easy money with what you love doing and meet new people while doing it.',
        indeed: 'https://www.yelp.com/biz/feastly-san-francisco-2',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://experiences.chefsfeed.com/browse/',

        subtypes: ['rental', 'labor'],
      },
      {
        id: 'G0208',
        logo: fiverr,
        gig: 'Fiverr',
        description:
          'Fiverr is one of the easiest ways to make money in the gig economy. No matter what skills you have, with a little creativity you sell your services to a platform of motivated buyers.',
        indeed: 'https://www.indeed.com/cmp/Fiverr/reviews',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.fiverr.com/start_selling',

        subtypes: [''],
      },
      {
        id: 'G0209',
        logo: linkedin,
        gig: 'LinkedIn ProFinder',
        description:
          'LinkedIn ProFinder connects top freelance professionals like you with high quality leads.',
        indeed: '',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.linkedin.com/profinder/pros',

        subtypes: [''],
      },
      {
        id: 'G0210',
        logo: freelancer,
        gig: 'Freelancer',
        description:
          'Freelancer has posted almost 11 million jobs for tens of thousands of its members. ',
        indeed: '',
        promo: '',
        resources: [
          {
            title: 'Indeed: Job Reviews for Curb Drivers',
            link: 'https://www.indeed.com/cmp/Curb/reviews',
          },
        ],
        gigsite: 'https://www.freelancer.com/jobs/',

        subtypes: [''],
      },
      // Unfinished
      //
      //
      // Template
      // {
      //   id: 'G0208',
      //   logo: ,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   resources: '',
      //   gigsite: '',
      //
      //   subtypes: [''],
      // },
    ],
    services: [
      //
      //
      //
      //
      // Services
      //
      //
      // Driving Services
      {
        id: 'S0001',
        logo: gridwise,
        gig: 'Gridwise',
        description:
          'Gridwise is an intelligence platform which provides information on ridesharing insights to users, helping drivers improve efficiency and profits on the road.',
        indeed:
          'https://appgrooves.com/app/gridwise-earn-more-by-driving-smarter-by-swerv-technologies-llc/negative',
        promo: 'Free Download on IOS and Android!',
        resources: '',
        gigsite: 'https://gridwise.io/',

        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'S0002',
        logo: mystro,
        gig: 'Mystro',
        description:
          'Mystro is an app that orchestrates incoming passenger requests between the Uber and Lyft rideshare apps, so you can stop clicking back and forth between the apps.',
        indeed:
          'https://play.google.com/store/apps/details?id=partners.driver.mystro&hl=en_US',
        promo: 'Try Mystro Free for 14 Days!',
        resources: '',
        gigsite: 'https://mystrodriver.com/registration-page-half-photo',

        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'S0003',
        logo: surge,
        gig: 'Surge 2x',
        description:
          'Surge tracks Uber surges in your area. By using Surge you are able to only drive during surges, drastically increasing your profit.',
        indeed: 'https://apps.apple.com/us/app/surge-2x/id986581500',
        promo: '',
        resources: '',
        gigsite:
          'https://apps.apple.com/us/app/surge-surge-tracking-for-uber/id986581500',

        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'S0004',
        logo: sherpashare,
        gig: 'SherpaShare',
        description:
          'SherpaShare is a rideshare driver assistant that helps drivers reduce taxes, manage expenses, and boost earnings.',
        indeed:
          'https://apps.apple.com/us/app/sherpashare-driver-assistant/id975868991',
        promo: '',
        resources: '',
        gigsite: 'https://www.sherpashare.com/',

        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'S0005',
        logo: triplog,
        gig: 'TripLog',
        description:
          'As a gig worker, the miles you drive for work are tax deductable. Triplog helps you track those miles so you can maximize your returns!',
        indeed: 'https://reviews.financesonline.com/p/triplog/',
        promo: 'Sign Up Below for a Free 30 Day Trial and 20% Off!',
        resources: '',
        gigsite: 'http://trplg.co/389373',

        subtypes: ['business'],
      },
      {
        id: 'S0006',
        logo: everlance,
        gig: 'Everlance',
        description:
          'Everlance is another automatic mileage tracker and expense log for taxes or reimbursements for gig workers.',
        indeed:
          'https://appgrooves.com/app/everlance-mileage-log-expense-and-receipt-tracker-by-everlance-inc',
        promo: '',
        resources: '',
        gigsite: 'https://www.everlance.com/',

        subtypes: ['driving', 'business'],
      },
      {
        id: 'S0030',
        logo: grabbit,
        gig: 'Grabb-it',
        description:
          'Grabb-it helps rideshare drivers make more. Sign up and they give you a free screen to display advertisements outside your window, then pay you for your driving time.',
        indeed: 'https://www.trustpilot.com/review/www.thesocialdelivery.com',
        promo: '',
        resources: '',
        gigsite: 'https://grabb.io/',

        subtypes: ['driving', 'rideshare'],
      },
      {
        id: 'S0031',
        logo: hurdlr,
        gig: 'Hurdlr',
        description:
          'Hurdlr is an automatic business expenses and mileage tracker. They have cumulatively saved over $300M in taxes.',
        indeed: 'https://investorjunkie.com/reviews/hurdlr/',
        promo: '',
        resources: '',
        gigsite: 'https://www.hurdlr.com/',

        subtypes: ['driving', 'business'],
      },
      {
        id: 'S0038',
        logo: adway,
        gig: 'ADWAY',
        description:
          'If you are a Lyft, Instacart, Postmates, Doordash or any other driving/delivery company driver, you can make extra money by wrapping up your car in ads.',
        indeed: '',
        promo: '',
        resources: '',
        gigsite: 'https://www.adwayusa.com/',

        subtypes: ['driving'],
      },
      {
        id: 'S0039',
        logo: nickelytics,
        gig: 'Nickelytics',
        description:
          'Nickelytics process is simple, they put ads on vehicles that drive through busy city streets. If you are working as a rideshare or delivery driver, you spend a lot of time on the road, Nickelytics helps you earn even more for your time.',
        indeed: '',
        promo: '',
        resources: '',
        gigsite: 'https://www.nickelytics.com/',

        subtypes: ['driving'],
      },
      {
        id: 'S0040',
        logo: wrapify,
        gig: 'Wrapify',
        description:
          'Wrapify will help you earn extra income if you are frequently driving by wrapping your vehicle in eye-catching advertising.',
        indeed: 'https://appgrooves.com/app/wrapify-by-wrapify-inc/',
        promo: '',
        resources: '',
        gigsite: 'https://wrapify.com/',

        subtypes: ['driving'],
      },
      {
        id: 'S0033',
        logo: octopus,
        gig: 'Play Octopus',
        description:
          'Octopus provides rideshare drivers with interactive tablets and accessories. Riders enjoy games and cash prizes, and they run short ads so drivers can earn up to $100 extra a month!',
        indeed: 'https://www.playoctopus.com/driver-reviews/',
        promo: '',
        resources: '',
        gigsite: 'https://www.playoctopus.com/drivers/',

        subtypes: ['driving'],
      },
      {
        id: 'S0037',
        logo: stickerride,
        gig: 'Sticker Ride',
        description:
          'StickerRide helps you make money as you drive! Drive around town and get compensated for your vehicle expenses such as gas, car washes, and parking.',
        indeed: 'https://apps.apple.com/us/app/stickerride/id870548113',
        promo: '',
        resources: '',
        gigsite: 'https://stickerride.com/',

        subtypes: ['driving'],
      },
      // Scooter apps
      {
        id: 'S0036',
        logo: scootermap,
        gig: 'ScooterMap',
        description:
          'Jump Scooters, Limes, Birds, Bolts, Skip... there are so many scooter companies you want to charge for! ScooterMap has a simple solution: all scooters on one app.',
        indeed:
          'https://apps.apple.com/us/app/scooter-map-all-the-scooters/id1437698355',
        promo: '',
        resources: '',
        gigsite: 'https://scootermap.com/?sc_referral=62591ccf',

        subtypes: ['scooter', 'other'],
      },
      // Products and classes
      //
      //
      // Template
      // {
      //   id: 'S0041',
      //   logo: ,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   resources: '',
      //   gigsite: '',
      //
      //   subtypes: [''],
      // },
    ],
    deals: [
      //
      //
      // Freelance
      // Template
      // {
      //   id: 'F0000',
      //   logo: ,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   resources: '',
      //   gigsite: '',
      //
      //   subtypes: [''],
      // },
      //
      // Deals
      {
        id: 'D0001',
        logo: acorns,
        gig: 'Acorns',
        description:
          'Acorns automatically invests your spare change into a portfolio built by experts.',
        indeed: '',
        promo: 'Sign up today and get a free $5 for your account!',
        resources: '',
        gigsite: 'https://acorns.com/invite/SGU9A3',

        subtypes: [''],
      },
      {
        id: 'D0002',
        logo: robinhood,
        gig: 'Robinhood',
        description:
          'Robinhood is a mobile app for trading stocks and options comission free.',
        indeed: '',
        promo: 'Sign up today and get a free stock for your account!',
        resources: '',
        gigsite: 'https://join.robinhood.com/markf1248',

        subtypes: [''],
      },
      {
        id: 'D0003',
        logo: rakuten,
        gig: 'Rakuten',
        description:
          'Rakuten is the worlds most popular cashback site and mobile app. Their services help people save money with cash back and coupons at over 2,000 online stores. Their goal is turn everyday spenders into smart shoppers by getting the most out of their money.',
        indeed: '',
        promo: 'Spend $30 on Rakuten and get $30!',
        resources: '',
        gigsite: 'https://go.rakuten.com/MARKFO238',

        subtypes: [''],
      },
      {
        id: 'D0004',
        logo: cashapp,
        gig: 'Cash App',
        description:
          'Cash App is, quite simply, an app for sending and receiving money. Users can create a free account that will then let them instantly send or receive money from other users within the same country.',
        indeed: '',
        promo: 'Sign Up for Cash App and get $5!',
        resources: '',
        gigsite: 'https://cash.app/app/QXGKDDH',

        subtypes: [''],
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
