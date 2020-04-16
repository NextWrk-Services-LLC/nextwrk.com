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
import booking from './img/booking.png';
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
// import feastly from './img/feastly.png';
import goshare from './img/goshare.png';
import figureeight from './img/figureeight.png';
// import freelancer from './img/freelancer.png';
import gigwalk from './img/gigwalk.png';
import hellotech from './img/hellotech.png';
import bird from './img/bird.png';
import burro from './img/burro.png';
// import careguide from './img/careguide.png';
import carelinx from './img/carelinx.png';
import census from './img/census.png';
// import closerlook from './img/closerlook.jpeg';
import drizly from './img/drizly.png';
import easymove from './img/easymove.png';
// import everlance from './img/everlance.jpeg';
import fetchmd from './img/fetchmd.png';
import gbw from './img/gbw1.png';
import grabbit from './img/grabbit.png';
import grabr from './img/grabr.png';
import helpr from './img/helpr1.png';
import homeaglow from './img/homeaglow.png';
import hyrecar from './img/hyrecar.png';
import icracked from './img/icracked.png';
// import jump from './img/jump.png';
import lawnlove from './img/lawnlove.png';
import networx from './img/networx.png';
import octopus from './img/octopus.png';
import peach from './img/peach.png';
import pinacle from './img/pinacle.png';
import priv from './img/priv.png';
// import RIDE from './img/RIDE.png';
import ridersshare from './img/ridersshare.png';
import saucey from './img/saucey.png';
import scootermap from './img/scootermap.png';
import sherpashare from './img/sherpashare.png';
// import sitter from './img/sitter.png';
import sittercity from './img/sittercity.png';
// import snapcare from './img/snapcare.png';
import spare5 from './img/spare51.png';
import spin from './img/spin.png';
import taskeasy from './img/taskeasy1.png';
import urbansitter from './img/urbansitter.png';
// import wind from './img/wind.png';
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
// import secretshopper from './img/secretshopper.png';
import lugg from './img/lugg.png';
import heal from './img/heal.png';
import veryable from './img/veryable.png';
// import migo from './img/migo.png';
import spothero from './img/spothero1.png';
import adway from './img/adway.png';
import burpy from './img/burpy.png';
import takl from './img/takl1.png';
import everlance from './img/everlance.png';
import triplog from './img/triplog.png';
import rvshare from './img/rvshare1.png';
import intellishop from './img/intellishop1.png';
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
import rentah from './img/rentah.png';
// import doorman from './img/doorman.png';
import hurdlr from './img/hurdlr.png';
// import bdb from './img/bdb.png';
// import bdb from './img/bdb.png';
// Services
import gridwise from './img/gridwise.png';
import mystro from './img/mystro.png';
import surge from './img/surge.png';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {
    gigs: [
      // Gigs
      //
      //
      //    Driving Gigs
      {
        id: 'G0001', // Rideshare
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
        id: 'G0037',
        logo: hsnd,
        gig: 'HopSkipDrive',
        description:
          'HopSkipDrive is the safe, dependable transportation solution schools and families can count on to get kids where they need to go.',
        indeed:
          'https://www.indeed.com/cmp/Hopskipdrive/reviews?fjobtitle=Driver',
        promo: '',
        gigsite: 'https://www.hopskipdrive.com/driver-sign-up',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0168',
        logo: zum,
        gig: 'Zum',
        description:
          'Zum Mission: Build the world’s largest and most-trusted platform for kids transportation and care.',
        indeed: 'https://www.indeed.com/cmp/Ridezum/reviews',
        promo: 'Receive up to $500 sign up bonus!',
        gigsite: 'https://www.ridezum.com/drive.html',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0054',
        logo: wingz,
        gig: 'Wingz',
        description:
          'Rideshare app, as a peer-to-peer marketplace Wingz allows passengers to rebook their favorite driver when using the Wingz mobile app, website or toll-free number.',
        indeed: 'https://www.yelp.com/biz/wingz-san-francisco-4',
        promo: '',
        gigsite: 'https://www.wingz.me/drivers-2/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0163',
        logo: groundlink,
        gig: 'GroundLink Chauffeur',
        description:
          'GroundLink is a black-car vehicle service that uses a network of professional drivers to provide transportation to riders.',
        indeed: 'https://www.yelp.com/biz/groundlink-new-york',
        promo: '',
        gigsite: 'https://driver.groundlink.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0007', // Delivery
        logo: roadie,
        gig: 'Roadie Driver', // Last mile
        description:
          'Going on a roadtrip soon? Roadie will pay you to fill your empty space and complete deliveries on the way',
        indeed: 'https://www.indeed.com/cmp/Roadie/reviews',
        promo: '',
        gigsite: 'https://my.roadie.com/drive/sign-up/basic-info',
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
        id: 'G0143',
        logo: skipcart,
        gig: 'Skipcart',
        description:
          'Skipcart is an on-demand platform providing last-mile delivery for all retailers and restaurants currently offering a Curbside or Pickup solution but lacking same-day delivery.',
        indeed: 'https://www.indeed.com/cmp/Skipcart/reviews',
        promo: '',
        gigsite: 'https://skipcart.com/drivers/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0155',
        logo: PICKUP,
        gig: 'PICKUP',
        description:
          'PICKUP is an on-demand and same day delivery service of big & heavy items for national and area businesses.',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-PICKUP-EI_IE1641897.11,17.htm',
        promo: '',
        gigsite: 'https://pickupnow.com/requirements/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0157',
        logo: tommyrun,
        gig: 'TommyRun',
        description:
          'TommyRun is an app that allows you to order building materials and have them delivered within hours .',
        indeed: 'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
        promo: '',
        gigsite: 'https://tommyrun.com/become-a-driver/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0161',
        logo: upship,
        gig: 'uShip',
        description:
          'uShip makes shipping motorcycles, boats, and other large items fast and affordable by connecting you to our network of carriers who compete for your shipment.',
        indeed: 'https://www.glassdoor.com/Reviews/uShip-Reviews-E200164.htm',
        promo: '',
        gigsite: 'https://www.uship.com/register/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0182',
        logo: dispatchit,
        gig: 'DispatchIt',
        description:
          'Dispatchit provides reliable local deliveries to customers with real time ETA’s and tracking. Dispatch drivers must be at least 23 years old, have a reliable car and vehicle insurance.',
        indeed: 'https://www.facebook.com/pg/dispatchitinc/reviews',
        promo: '',
        gigsite: 'https://www.dispatchit.com/drivers/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0013',
        logo: postmates, // Food
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
        id: 'G0034',
        logo: grubhub,
        gig: 'Grubhub',
        description:
          'A food delivery service, similar to DoorDash and other options on this website.',
        indeed: 'https://www.indeed.com/cmp/Grubhub/reviews',
        promo: '',
        gigsite: 'https://driver.grubhub.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0024',
        logo: caviar,
        gig: 'Caviar',
        description:
          'Deliver food in your city and earn some extra cash. Experience the freedom of working whenever you want.',
        indeed: 'https://www.indeed.com/cmp/Caviar/reviews?fjobtitle=Courier',
        promo: '',
        gigsite: 'https://www.trycaviar.com/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0030',
        logo: favor,
        gig: 'Favor',
        description:
          'With Favor, you can deliver just about anything to customers and get paid for it.',
        indeed: 'https://www.indeed.com/cmp/Favor-Delivery/reviews',
        promo: '',
        gigsite: 'https://apply.favordelivery.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0148',
        logo: zifty,
        gig: 'Zifty Driver',
        description:
          'Delivery drivers. Zifty is an online delivery company that partners with local restaurants and brands to bring their goods straight to clients’ doors. Zifty is looking for enthusiastic delivery providers to make deliveries of food, movies, and other items to customers. ',
        indeed: 'https://www.indeed.com/cmp/Zifty.com/reviews',
        promo: '',
        gigsite: 'http://jobs.zifty.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0185',
        logo: peach,
        gig: 'Peach',
        description:
          'Peach focuses on carefully chosen dishes from the best lunch spots',
        indeed: 'https://www.indeed.com/cmp/Peach/reviews',
        promo: '',
        gigsite: 'https://www.peachd.com/jobs/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0183',
        logo: deliveroo,
        gig: 'Deliveroo',
        description: '',
        indeed: 'https://www.indeed.com/cmp/Deliveroo/reviews',
        promo: '',
        gigsite: 'https://deliveroo.co.uk/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0181', // Alcohol
        logo: drizly,
        gig: 'Drizly',
        description:
          'Drizly focuses on the delivery of the fun stuff, alcohol that is. Drizly partners with liquor stores to deliver their fine products to customers. The hiring process is different than most gigs, you have to reach out to a local liquor store that partners with Drizly and get hired through them.',
        indeed:
          'https://www.glassdoor.com/Reviews/Drizly-Delivery-Driver-Reviews-EI_IE1344937.0,6_KO7,22.htm',
        promo: '',
        gigsite: 'https://drizly.com/liquor-stores-near-me',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0184',
        logo: saucey,
        gig: 'Saucey',
        description:
          'Saucey is another Alcohol delivery company. It boasts a flexible schedule and solid pay for drivers.',
        indeed: 'https://www.indeed.com/cmp/Saucey/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://www.saucey.com/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0008', // Shopping
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
        id: 'G0046',
        logo: shipt,
        gig: 'Shipt',
        description:
          'Delivering groceries, home products, and some electronics for a company owned by Target.',
        indeed: 'https://www.indeed.com/cmp/Shipt-Shopper/reviews',
        promo: '',
        gigsite: 'https://www.shipt.com/be-a-shopper/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0186',
        logo: burpy,
        gig: 'Burpy',
        description:
          'Burpy offers same day grocery delivery to customers within the hour.',
        indeed: 'https://www.indeed.com/cmp/Burpy/reviews',
        promo: '',
        gigsite: 'https://shoppers.burpy.com/join-as-shopper',
        featured: false,
        type: 'gig',
      },
      // Driving unsorted
      {
        id: 'G0187',
        logo: burro,
        gig: 'Burro',
        description:
          'There are so many ways to deliver on the Burro app. Deliver Craigslist items, make store deliveries even help people move. Set a flexible schedule and make up to $1,400 a week.',
        indeed: 'https://www.indeed.com/cmp/Burro/salaries/Delivery-Driver',
        promo: '',
        gigsite: 'https://getburro.com/drivers.html',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0188',
        logo: grabr,
        gig: 'Grabr',
        description:
          'Earn money while traveling. Travelers subsidize their trips by delivering a handful of items. They make up to $300 a trip and meet interesting locals along the way.',
        indeed: 'https://www.producthunt.com/posts/grabr-2/reviews',
        promo: '',
        gigsite: 'https://grabr.io/en/travel',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0189',
        logo: uber,
        gig: 'DeliverThat',
        description:
          'DeliverThat is a food delivery app that has partnered with many well known restaraunts. Drivers earn competitive pay based on distance with tips included.',
        indeed: 'https://www.indeed.com/cmp/Deliver-That/reviews',
        promo: '',
        gigsite: 'https://www.ideliverthat.com/driver',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0169',
        logo: gopuff,
        gig: 'GoPuff',
        description:
          'GoPuff is the largest and fastest convenience delivery app available. Customers order snacks, drinks, alcohol, personal care items and more. Deliveries are always ready for the drivers to pick up, and delivery distances are optimized for short travel',
        indeed: 'https://www.indeed.com/cmp/Gopuff/reviews',
        promo: '',
        gigsite:
          'https://www.fountain.com/gopuff/apply/godrive-delivery-partner',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0170',
        logo: deliv,
        gig: 'DeLiv',
        description:
          'Same day delivery service helping retailers deliver their items to customers. Must be 18 Years old, have a car (1998 or newer) and have 1+ years of driving experience.',
        indeed: 'https://www.indeed.com/cmp/Deliv/reviews',
        promo: '',
        gigsite: 'https://www.deliv.co/drivers/',
        featured: false,
        type: 'gig',
      },
      //
      //
      //    Property (Rental) Gigs
      {
        id: 'G0002', // Home rentals
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
        id: 'G0036',
        logo: homeaway,
        gig: 'HomeAway',
        description:
          'HomeAway is a vacation rental marketplace with more than 2,000,000 vacation rentals in 190 countries listed on its website.',
        indeed: 'https://www.trustpilot.com/review/www.homeaway.com',
        promo: '',
        gigsite: 'https://www.homeaway.com/lyp',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0041',
        logo: ofs,
        gig: 'onefinestay',
        description:
          'onefinestay offers high-end home-stays across the world with currently 5,000 homes and villas in its portfolio divided between two collections, City and Villa.',
        indeed: 'https://www.trustpilot.com/review/www.onefinestay.com',
        promo: '',
        gigsite: 'https://www.onefinestay.com/list-your-home/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0053',
        logo: vrbo,
        gig: 'VRBO',
        description:
          'VRBO is a service for homeowners to list their properties for short term rental',
        indeed: 'https://www.consumeraffairs.com/online/vrbo.html',
        promo: '',
        gigsite: 'https://help.vrbo.com/category/List_Your_Property',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0172',
        logo: booking,
        gig: 'Booking.com',
        description:
          'Booking.com is a travel metasearch engine for lodging reservations.',
        indeed: 'https://www.sitejabber.com/reviews/booking.com',
        promo: '',
        gigsite: 'https://join.booking.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0017', // Car rentals
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
        id: 'G0177',
        logo: hyrecar,
        gig: 'Hyrecar',
        description: 'Rent out your car for others to drive with Uber or Lyft',
        indeed: 'https://www.trustpilot.com/review/hyrecar.com',
        promo: '',
        gigsite: 'https://app.hyrecar.com/login?type=owner&form=signup',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0049', // Parking Rental
        logo: spothero,
        gig: 'SpotHero',
        description:
          'Own a parking space? Turn it into extra income while not in use',
        indeed: 'https://www.trustpilot.com/review/spothero.com',
        promo: '',
        gigsite: 'https://spothero.com/sell-parking/rent-my-parking-space/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0058',
        logo: parkingpanda,
        gig: 'ParkingPanda',
        description:
          'A parking space is a premium product in many major cities across the country. ParkingPanda is an app that brings owners and customers together seamlessly. You can post a free listing with the app to start earning cash whenever anyone books your space.',
        indeed: 'https://www.yelp.com/biz/parking-panda-baltimore-3',
        promo: '',
        gigsite: 'https://www.parkingpanda.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0045', // Other rental
        logo: rentah,
        gig: 'Rentah',
        description: 'Rentah facilitates renting to and from your neighbors',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-Rentah-EI_IE1432411.11,17.htm',
        promo: '',
        gigsite: 'https://www.rentah.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0067',
        logo: boatsetter,
        gig: 'Boatsetter',
        description:
          'If you own a boat, then Boatsetter lets you rent it out — either with or without a captain.',
        indeed: 'https://www.facebook.com/pg/Boatsetter/reviews/',
        promo: '',
        gigsite: 'https://www.boatsetter.com/boats/new',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0066',
        logo: rvshare,
        gig: 'RVShare',
        description: 'A site that lets you rent out your RV',
        indeed: 'https://www.trustpilot.com/review/rvshare.com',
        promo: '',
        gigsite: 'https://rvshare.com/list-your-rv',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0191',
        logo: outdoorsy,
        gig: 'Outdoorsy',
        description: 'RV rental',
        indeed: 'https://www.trustpilot.com/review/www.outdoorsy.com',
        promo: '',
        gigsite: 'https://www.outdoorsy.com/list-your-rv',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0193',
        logo: bungii,
        gig: 'Bungii',
        description: 'On demand truck rental app',
        indeed:
          'https://appgrooves.com/app/bungii-your-friend-w-a-truck-by-bungii-llc',
        promo: '',
        gigsite: 'https://bungii.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0194',
        logo: ridersshare,
        gig: 'Riders Share',
        description:
          'List your motorcycle for free and make an average of $150 per booking. All listings are protected by an A rated insurance provider. We strive to turn only the safest riders into renters by using technology.',
        indeed: 'https://www.facebook.com/pg/ridersshare/reviews/',
        promo: '',
        gigsite: 'https://www.riders-share.com/',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Scooter Chargers
      {
        id: 'G0153',
        logo: bird,
        gig: 'Bird Scooter Charger',
        description: 'Become a Bird Flyer, charge scooters',
        indeed: 'https://www.reddit.com/r/birdcharger/',
        promo: '',
        gigsite: 'https://flyers.bird.co/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0165',
        logo: lime,
        gig: 'Lime Juicer',
        description: 'charge lime scooter',
        indeed:
          'https://www.glassdoor.com/Reviews/Lime-Juicer-Reviews-EI_IE1884794.0,4_KO5,11.htm',
        promo: '',
        gigsite: 'https://lime.bike/juicer',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0175',
        logo: spin,
        gig: 'Spin Scooter Charger',
        description: 'Charge Spin Scooters',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-Spin-EI_IE1838792.11,15.htm',
        promo: '',
        gigsite: 'https://www.spin.app/charger',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0176',
        logo: skip,
        gig: 'Skip Scooter Charger',
        description: 'Charge Skip Scooters',
        indeed: 'https://www.yelp.com/biz/skip-scooter-rental-sf-san-francisco',
        promo: '',
        gigsite:
          'https://www.fountain.com/skip-scooters/apply/general-location-ranger',
        featured: false,
        type: 'gig',
      },
      //
      //
      //    Dog Walking Gigs
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
      //
      //
      //    Anybody can do it labor
      {
        id: 'G0005', // Manual labor
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
      {
        id: 'G0021',
        logo: wonolo,
        gig: 'Wonolo',
        description:
          'Let Wonolo help fill your next shift from an on-demand pool of high-quality, local workers. Pricing is always transparent.',
        indeed: 'https://www.indeed.com/cmp/Wonolo/reviews',
        promo: '',
        gigsite: 'https://www.wonolo.com/find-work',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0022',
        logo: bellhops,
        gig: 'Bellhops',
        description:
          'Get paid to pack boxes and move people into their new digs.',
        indeed: 'https://www.indeed.com/cmp/Bellhops/reviews',
        promo: '',
        gigsite: 'https://www.getbellhops.com/being-a-bellhop/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0027',
        logo: dolly,
        gig: 'Dolly',
        description:
          'The Dolly service uses people that have vehicles for moving, or movers to do the heavy lifting if they don’t have a vehicle. ',
        indeed: 'https://www.indeed.com/cmp/Dolly/reviews',
        promo: '',
        gigsite: 'https://dolly.com/helpers/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0164',
        logo: easymove,
        gig: 'EasyMove',
        description: 'Earn at least $2500 weekly Join Easymove partner program',
        indeed: 'https://www.trustpilot.com/review/www.easymove.co.uk',
        promo: '',
        gigsite: 'https://geteasymove.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0192',
        logo: lugg,
        gig: 'Lugg',
        description: 'On demand moving and furniture delivery',
        indeed: 'https://www.indeed.com/cmp/Lugg/reviews',
        promo: '',
        gigsite: 'https://lugg.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0151',
        logo: goshare,
        gig: 'GoShare Delivery',
        description:
          'GoShare specializes in delivery, moving and hauling services. If you have a truck, cargo van or box truck this gig could be right for you. If you don’t have a truck you can apply as a helper.',
        indeed:
          'https://www.glassdoor.com/Reviews/GoShare-Reviews-E1779925.htm',
        promo: '',
        gigsite: 'https://www.goshare.co/trucks/drivers/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0050',
        logo: takl,
        gig: 'Takl',
        description: 'Work chores and get paid',
        indeed: 'https://www.indeed.com/cmp/Takl/reviews',
        promo: '',
        gigsite: 'https://app.takl.com/providers/register',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0190',
        logo: networx,
        gig: 'NetWorx',
        description: 'Find local contractors and home improvement',
        indeed: 'https://www.glassdoor.com/Reviews/Networx-Reviews-E368391.htm',
        promo: '',
        gigsite: 'https://www.networx.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0051', // Lawn Care
        logo: taskeasy,
        gig: 'TaskEasy',
        description:
          'TaskEasy freelancers offer lawnmowing, gardening, and landscaping services.',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-TaskEasy-EI_IE1030594.11,19.htm',
        promo: '',
        gigsite: 'https://www.taskeasy.com/contractors',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0149',
        logo: lawnstarter,
        gig: 'LawnStarter',
        description: 'Yard work for proessionals in the lawn care industry',
        indeed:
          'https://www.indeed.com/cmp/Lawnstarter/reviews?ftopic=paybenefits',
        promo: '',
        gigsite: 'https://www.lawnstarter.com/lawn-care-businesses',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0150',
        logo: plowzandmowz,
        gig: 'Plowz and Mowz',
        description: 'Gig Site for lawncare professionals',
        indeed: 'https://www.trustpilot.com/review/www.plowzandmowz.com',
        promo: '',
        gigsite: 'https://order.plowzandmowz.com/provider-onboard',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0152',
        logo: lawnlove,
        gig: 'Lawn Love',
        description: 'Lawn care gig website',
        indeed: 'https://www.indeed.com/cmp/Lawn-Love/reviews',
        promo: '',
        gigsite: 'https://lawnlove.com/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0162', // Cleaning
        logo: homeaglow,
        gig: 'Homeaglow',
        description: 'Clean houses',
        indeed: 'https://www.indeed.com/cmp/Homeaglow/reviews',
        promo: '',
        gigsite: 'https://www.homeaglow.com/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0023', // Less intensive labor
        logo: care,
        gig: 'Care.com', // Childcare
        description:
          'Primarily a place to find work in child or pet care, Care.com also offers gigs for housekeepers, gardeners, tutors, and those caring for the elderly.',
        indeed: 'https://www.indeed.com/cmp/Care.com/reviews',
        promo: '',
        gigsite: 'https://www.care.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0167',
        logo: sittercity,
        gig: 'SitterCity',
        description: 'Babysitters',
        indeed: 'https://www.indeed.com/cmp/Sittercity/reviews',
        promo: '',
        gigsite: 'https://www.sittercity.com/sitter/account',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0195',
        logo: carelinx,
        gig: 'CareLinx',
        description: 'Elder Care',
        indeed: 'https://www.indeed.com/cmp/Carelinx/reviews',
        promo: '',
        gigsite: 'https://www.carelinx.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0061',
        logo: helpr,
        gig: 'Helpr',
        description:
          'An app that connects parents with reliable childcare help (i.e., babysitting), Helpr is ideal for those with relevant experience looking for occasional part-time work.',
        indeed: 'https://www.glassdoor.com/Reviews/Helpr-Reviews-E1305149.htm',
        promo: '',
        gigsite: 'https://www.helpr-app.com/become-a-helpr-now',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0154',
        logo: urbansitter,
        gig: 'UrbanSitter',
        description:
          'UrbanSitter lets you find and book babysitters and nannies of people you know and trust.',
        indeed: 'https://www.indeed.com/cmp/Urbansitter/reviews',
        promo: '',
        gigsite: 'https://www.urbansitter.com/signup/sitter',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Technical gigs
      {
        id: 'G0026',
        logo: figureeight,
        gig: 'Figure Eight',
        description:
          'If you need labels and annotations for your machine learning project, we can help. You upload your unlabeled data, with the rules you need for your machine learning project, and launch.',
        indeed:
          'https://www.glassdoor.com/Reviews/Figure-Eight-Reviews-E553483.htm',
        promo: '',
        gigsite: 'https://www.figure-eight.com/contributor/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0035',
        logo: hellotech,
        gig: 'HelloTech',
        description:
          'HelloTech gives experts in the tech industry a platform to provide services for individuals in their homes and businesses. ',
        indeed: 'https://www.indeed.com/cmp/Hellotech/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://us.hellotech.com/techs',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0159',
        logo: icracked,
        gig: 'iCracked',
        description:
          'Phone repair. iCracked provides local on-demand iPhone, iPad, and Galaxy repair services. iCracked specializes in on-site screen replacements.',
        indeed: 'https://www.indeed.com/cmp/Icracked/reviews',
        promo: '',
        gigsite: '',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Artsy Gigs
      {
        id: 'G0028',
        logo: etsy,
        gig: 'Etsy',
        description:
          'Etsy provides a marketplace for people to sell their handmade, vintage, or creative goods online.',
        indeed: 'https://www.consumeraffairs.com/online/etsy.html',
        promo: '',
        gigsite: 'https://www.etsy.com/join',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Virtual Assistant Gigs
      {
        id: 'G0029',
        logo: fancyhands,
        gig: 'Fancy Hands',
        description:
          'Fancy Hands is a team of US-based assistants at your fingertips. Use any device, at any time of day, and our assistants will tackle anything on your to-do list!',
        indeed: 'https://www.indeed.com/cmp/Fancy-Hands/reviews',
        promo: '',
        gigsite: 'https://www.fancyhands.com/jobs',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Cooking Gigs
      {
        id: 'G0031',
        logo: uber,
        gig: 'ChefsFeed',
        description:
          'If you are a chef and want to host meals and you are a foodie looking for great chef, Feastly is a platform that brings them both together. ',
        indeed: 'https://www.indeed.com/cmp/Feastly/reviews',
        promo: '',
        gigsite: '',
        featured: false,
        type: 'gig',
      },
      //
      //
      // Mystery Shoppers
      {
        id: 'G0033',
        logo: gigwalk,
        gig: 'Gigwalk',
        description:
          'Work for Gigwalk usually involves gathering data for companies about their products and stores. For example, you might be checking what’s on the shelves in a particular shop, and whether it’s correctly priced and labeled.',
        indeed: 'https://www.indeed.com/cmp/Gigwalk/reviews',
        promo: '',
        gigsite: 'http://www.gigwalk.com/gigwalkers/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0070',
        logo: marketforce,
        gig: 'Market Force',
        description:
          'At Market Force, you’ll complete mystery shops for banks, restaurants, and stores in order to help those businesses thrive.',
        indeed: 'https://www.indeed.com/cmp/Market-Force/reviews',
        promo: '',
        gigsite: 'https://www.marketforce.com/become-a-mystery-shopper',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0071',
        logo: gbw,
        gig: 'GBW',
        description: 'GBW Mystery Shopping',
        indeed: 'https://www.trustpilot.com/review/www.gapbuster.com',
        promo: '',
        gigsite: 'https://gbw.solutions/becomeanevaluator',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0072',
        logo: pinacle,
        gig: 'Pinnacle',
        description: 'Pinnacle Mystery Shopping',
        indeed: 'https://www.facebook.com/pg/PinnacleMysteryShopping/reviews/',
        promo: '',
        gigsite:
          'https://www.sassieshop.com/sassie/SassieShopperSignup/Signup.php?EmsID=WlA%2BdrA%2Fwt4%3D',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0075',
        logo: intellishop,
        gig: 'Intellishop',
        description: 'Intellishop Mystery Shopping',
        indeed:
          'https://www.glassdoor.com/Reviews/IntelliShop-Reviews-E676994.htm',
        promo: '',
        gigsite: 'https://www.intelli-shop.com/shoppers/get-started',
        featured: false,
        type: 'gig',
      },
      // Bullshit work
      {
        id: 'G0048',
        logo: spare5,
        gig: 'Spare5',
        description:
          'Spare5 is an app which pays you small amounts of money by completing micro-tasks on your phone. Most tasks only take a few seconds, and the app pays on average $0.02 – $0.05 per task.',
        indeed: 'https://onlinezerotohero.com/spare5-review',
        promo: '',
        gigsite: 'https://app.spare5.com/fives/sign_in',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0147',
        logo: census,
        gig: 'Census Taker',
        description: 'Sign up to be a census taker',
        indeed:
          'https://www.indeed.com/cmp/U.S.-Census-Bureau/reviews?fcountry=ALL&fjobtitle=Census+Taker',
        promo: '',
        gigsite:
          'https://recruitment.2020census.gov/ats/careersite/createprofilelite.aspx?c=census&site=1',
        featured: false,
        type: 'gig',
      },
      // Mechanics
      {
        id: 'G0055',
        logo: yourmechanic,
        gig: 'YourMechanic',
        description:
          'Providing car repairs and maintenance carried out at customers’ homes, YourMechanic is a way for people with auto repair skills to leverage the gig economy.',
        indeed: 'https://www.trustpilot.com/review/yourmechanic.com',
        promo: '',
        gigsite: 'https://www.yourmechanic.com/automotive-technician-jobs',
        featured: false,
        type: 'gig',
      },
      // Massages
      {
        id: 'G0056',
        logo: zeel,
        gig: 'Zeel',
        description: 'Give massages',
        indeed: 'https://www.indeed.com/cmp/Zeel/reviews',
        promo: '',
        gigsite: 'https://www.zeel.com/apply',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0064',
        logo: soothe,
        gig: 'Soothe',
        description:
          'Gig work for massage therapists, including deep tissue, sports, and couples massage work. ',
        indeed: 'https://www.indeed.com/cmp/Soothe-Inc/reviews',
        promo: '',
        gigsite: 'https://www.soothe.com/apply',
        featured: false,
        type: 'gig',
      },
      // Beauty
      {
        id: 'G0160',
        logo: priv,
        gig: 'Priv',
        description:
          'Beauty. Priv connects customers on-demand with freelance beauty and wellness professionals, taking a 20% commission. Priv services include makeup, blowout, haircut, nails/manicure, massage, personal training, men’s grooming, spray tan and facials. “Priv Pros” select shifts and kinds of jobs they choose.',
        indeed: 'https://www.indeed.com/cmp/Priv/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://gopriv.com/pro',
        featured: false,
        type: 'gig',
      },
      // Manufacturing
      {
        id: 'G0142',
        logo: veryable,
        gig: 'Veryable',
        description: 'Flexible work, daily pay',
        indeed:
          'https://www.indeed.com/cmp/Veryable-3/reviews?ftopic=paybenefits',
        promo: '',
        gigsite: 'https://veryableops.com/',
        featured: false,
        type: 'gig',
      },
      // Nurses
      {
        id: 'G0179',
        logo: heal,
        gig: 'Heal.com',
        description: 'Healthcare professionals',
        indeed: 'https://www.indeed.com/cmp/Heal/reviews',
        promo: '',
        gigsite: 'https://heal.com/medical-team/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0180',
        logo: fetchmd,
        gig: 'Fetch MD',
        description: 'An Uber app for healthcare',
        indeed:
          'https://www.facebook.com/pg/RangerHealth/reviews/?referrer=page_recommendations_see_all',
        promo: '',
        gigsite: 'https://www.fetchmd.com/',
        featured: false,
        type: 'gig',
      },
      {
        id: 'G0178',
        logo: slingshot,
        gig: 'Slingshot Health',
        description:
          'Slingshot Health helps you find new patients and fill open gaps in your schedule, growing your practice. It’s FREE to sign up.',
        indeed:
          'https://www.glassdoor.com/Reviews/Slingshot-Health-Reviews-E2439803.htm',
        promo: '',
        gigsite: 'https://www.slingshothealth.com/providers/',
        featured: false,
        type: 'gig',
      },
      //
      //
      //
      //
      //
      // Unsorted (need to be sorted)
      // Templates
      // {
      //   id: 'G0197',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0198',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0199',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0200',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0201',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0202',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0203',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0204',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0205',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0206',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0207',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0208',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0209',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0210',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0211',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0212',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0213',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0214',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0215',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0216',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0217',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0218',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0219',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0220',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0221',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0222',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
      // {
      //   id: 'G0223',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'gig',
      // },
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
      {
        id: 'S0004',
        logo: sherpashare,
        gig: 'SherpaShare',
        description:
          'SherpaShare is the ultimate rideshare driver assistant that helps drivers reduce taxes, manage expenses, and boost earnings.',
        indeed:
          'https://apps.apple.com/us/app/sherpashare-driver-assistant/id975868991',
        promo: '',
        gigsite: 'https://www.sherpashare.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0005',
        logo: triplog,
        gig: 'TripLog',
        description:
          'As a gig worker, the miles you drive for work are tax deductable. Triplog helps you track those miles so you can maximize your returns!',
        indeed: 'https://reviews.financesonline.com/p/triplog/',
        promo: '',
        gigsite: 'https://triplogmileage.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0006',
        logo: everlance,
        gig: 'Everlance',
        description:
          'Automatic mileage tracker and expense log for taxes or reimbursements',
        indeed:
          'https://appgrooves.com/app/everlance-mileage-log-expense-and-receipt-tracker-by-everlance-inc',
        promo: '',
        gigsite: 'https://www.everlance.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0030',
        logo: grabbit,
        gig: 'Grabb-it',
        description: 'Advertising for rideshare drivers to make more',
        indeed: 'https://www.trustpilot.com/review/www.thesocialdelivery.com',
        promo: '',
        gigsite: 'https://grabb.io/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0031',
        logo: hurdlr,
        gig: 'Hurdlr',
        description: 'Mileage and expense tracker',
        indeed: 'https://investorjunkie.com/reviews/hurdlr/',
        promo: '',
        gigsite: 'https://www.hurdlr.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0038',
        logo: adway,
        gig: 'ADWAY',
        description:
          'If you are a Lyft, Instacart, Postmates, Doordash or any other driving/delivery company driver, you can make extra money by wrapping up your car in ads.',
        indeed: '',
        promo: '',
        gigsite: 'https://www.adwayusa.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0039',
        logo: nickelytics,
        gig: 'Nickelytics',
        description:
          'Nickelytics’ process is simple, we put ads on vehicles that drive through busy city streets. Additionally, we screen these drivers and ensure they hit at least 30 miles a day so your brand is broadcasted everywhere.',
        indeed: '',
        promo: '',
        gigsite: 'https://www.nickelytics.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0040',
        logo: wrapify,
        gig: 'Wrapify',
        description:
          'Earn extra income by wrapping your vehicle in eye-catching advertising.',
        indeed: 'https://appgrooves.com/app/wrapify-by-wrapify-inc/',
        promo: '',
        gigsite: 'https://wrapify.com/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0033',
        logo: octopus,
        gig: 'Play Octopus',
        description: 'rideshare advertising and entertainment',
        indeed: 'https://www.playoctopus.com/driver-reviews/',
        promo: '',
        gigsite: 'https://www.playoctopus.com/drivers/',
        featured: false,
        type: 'service',
      },
      {
        id: 'S0037',
        logo: stickerride,
        gig: 'Sticker Ride',
        description:
          'StickerRide helps you make money as you drive! You can compensate for your vehicle expenses such as gas, car washes, and parking by driving around town.',
        indeed: 'https://apps.apple.com/us/app/stickerride/id870548113',
        promo: '',
        gigsite: 'https://stickerride.com/',
        featured: false,
        type: 'service',
      },
      // Scooter apps
      {
        id: 'S0036',
        logo: scootermap,
        gig: 'ScooterMap',
        description:
          'All scooters on one app. Make more money as a scooter charger',
        indeed:
          'https://apps.apple.com/us/app/scooter-map-all-the-scooters/id1437698355',
        promo: '',
        gigsite: 'https://scootermap.com/',
        featured: false,
        type: 'service',
      },
      // Products and classes
      //
      // {
      //   id: 'S0041',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0042',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0043',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0044',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0045',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0046',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0047',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0048',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0049',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0050',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0051',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0052',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0053',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0054',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0055',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0056',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0057',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0058',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0059',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0060',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0061',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0062',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0063',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0064',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0065',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0066',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0067',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0068',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0069',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0070',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0071',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0072',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0073',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0074',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0075',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0076',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0077',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0078',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0079',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0080',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0081',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0082',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0083',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0084',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0085',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0086',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0087',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0088',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0089',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0090',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0091',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0092',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0093',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0094',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0095',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0096',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0097',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0098',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0099',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0100',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0101',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0102',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0103',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0104',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0105',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0106',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0107',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0108',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0109',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0110',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0111',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0112',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0113',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0114',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0115',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0116',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0117',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0118',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0119',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0120',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0121',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0122',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0123',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0124',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0125',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0126',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0127',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0128',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0129',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0130',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0131',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0132',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
      // {
      //   id: 'S0133',
      //   logo: uber,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //   type: 'service',
      // },
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
