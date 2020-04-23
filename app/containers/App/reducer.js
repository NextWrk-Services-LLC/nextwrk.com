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
  TOGGLE_MOBNAV,
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
import rentah from './img/rentah.png';
import hurdlr from './img/hurdlr.png';
import gridwise from './img/gridwise.png';
import mystro from './img/mystro.png';
import surge from './img/surge.png';
import deliverthat from './img/deliverthat.png';

// The initial state of the App
export const initialState = {
  showMobNav: false,
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
        gig: 'Uber',
        description:
          'The grandaddy of all gig jobs. The taxi of the 21st century. As one of the largest ridesharing apps, Uber can turn your daily commute into a money maker, or help you score some extra cash while you cruise around town.',
        indeed: 'https://www.indeed.com/cmp/Uber/reviews',
        promo: '',
        gigsite: 'https://www.uber.com/us/en/drive/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0009',
        logo: lyft,
        gig: 'Lyft',
        description:
          'Another behemoth ridesharing app. Lyft boasts a lower barrier of entry and higher tips on average than Uber (although Uber can offer more through higher surges). They also have Lyft Express Drive, a car rental service meaning you can be a Lyft driver even if you have no car!',
        indeed: 'https://www.indeed.com/cmp/Lyft/reviews',
        promo: '',
        gigsite: 'https://www.lyft.com/drive-with-lyft',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0037',
        logo: hsnd,
        gig: 'HopSkipDrive',
        description:
          'HopSkipDrive drivers offer carpooling services for youth in your community. There is a more stringent application process because of this, but if you want to make a positive impact in the community while at the same time earning some money, this app is for you!',
        indeed:
          'https://www.indeed.com/cmp/Hopskipdrive/reviews?fjobtitle=Driver',
        promo: '',
        gigsite: 'https://www.hopskipdrive.com/driver-sign-up',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0168',
        logo: zum,
        gig: 'Zum',
        description:
          'Zum is another ridesharing app offering a platform for kids transportation and care. Available in California, Arizona, Texas, Illinois, Florida, Washington and Washington DC, if you want to brighten kids days and make extra money, Zum is for you!',
        indeed: 'https://www.indeed.com/cmp/Ridezum/reviews',
        promo: 'Receive up to $500 sign up bonus!',
        gigsite: 'https://www.ridezum.com/drive.html',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0054',
        logo: wingz,
        gig: 'Wingz',
        description:
          'A rideshare app with a twist. Wingz specializes in airport pickup and drop off and allows customers to select their favorite drivers for repeat rides. If you live near an airport and have a keen sense for customer service, Wingz is the rideshare app for you.',
        indeed: 'https://www.yelp.com/biz/wingz-san-francisco-4',
        promo: '',
        gigsite: 'https://www.wingz.me/drivers-2/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0163',
        logo: groundlink,
        gig: 'GroundLink',
        description:
          'GroundLink is a black-car vehicle service that uses a network of professional drivers to provide transportation to riders. If you want to be a rideshare driver with class, sign up as a driver!',
        indeed: 'https://www.yelp.com/biz/groundlink-new-york',
        promo: '',
        gigsite: 'https://driver.groundlink.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0007', // Delivery
        logo: roadie,
        gig: 'Roadie', // Last mile
        description:
          'Going on a roadtrip soon? Roadie will pay you to fill your empty space and complete deliveries on the way. Roadie is a same day delivery service that connects drivers already headed in the right direction with shipments',
        indeed: 'https://www.indeed.com/cmp/Roadie/reviews',
        promo: '',
        gigsite: 'https://my.roadie.com/drive/sign-up/basic-info',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0188',
        logo: grabr,
        gig: 'Grabr',
        description:
          'Earn money while traveling! Grabr lets travelers subsidize their trips by delivering a handful of items. You can earn $200+ every time you travel abroad. If you are taking a trip soon, check out Grabr to see if you can earn some extra cash',
        indeed: 'https://www.producthunt.com/posts/grabr-2/reviews',
        promo: 'Sign Up Below and Get $10!',
        gigsite:
          'https://grabr.io/invitation/mark-foster?utm_campaign=web&utm_source=referral_program&utm_medium=copy_link',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0010',
        logo: amazon,
        gig: 'Amazon Flex',
        description:
          'Perform the "last mile" of Amazon delivery, moving packages from regional centers to customers. Amazon Flex offers great compensation, and you can easily track your earnings in the Amazon Flex app.',
        indeed: 'https://www.indeed.com/cmp/Amazon.com/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://flex.amazon.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0143',
        logo: skipcart,
        gig: 'Skipcart',
        description:
          'Skipcart is a service that offers last-mile delivery for retailers and restaurants. Skipcart lets you choose your own schedule and make deliveries in the community you already live in. Open the Skipcart app. Choose your hours and start delivering.',
        indeed: 'https://www.indeed.com/cmp/Skipcart/reviews',
        promo: '',
        gigsite: 'https://skipcart.com/drivers/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0155',
        logo: PICKUP,
        gig: 'PICKUP',
        description:
          'PICKUP is an on-demand and same day delivery service of big & heavy items for national and area businesses. If you own a truck or van, put it to good use and start hauling for money',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-PICKUP-EI_IE1641897.11,17.htm',
        promo: '',
        gigsite: 'https://pickupnow.com/requirements/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0193',
        logo: bungii,
        gig: 'Bungii',
        description:
          'If you own a truck and can do some heavy lifting, Bungii will help you earn up to $40/hour doing deliveries for people in your community. They ask for you to own a 2005 or newer and rachet straps, bungee cords and moving blankets to secure your deliveries.',
        indeed:
          'https://appgrooves.com/app/bungii-your-friend-w-a-truck-by-bungii-llc',
        promo: 'Sign Up With Promo Code 5XDKA and get $10!',
        gigsite: 'https://bungii.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0157',
        logo: tommyrun,
        gig: 'TommyRun',
        description:
          'TommyRun is an app that allows users to order building materials and have them delivered within hours. If you own a truck or van you can start earning money today as a TommyRunner',
        indeed: 'https://appgrooves.com/app/tommyrun-driver-by-tommy-run-llc-1',
        promo: 'Sign Up and Get a $25 Credit!',
        gigsite: 'https://tommyrun.app.link/vanKPpCzN5',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0161',
        logo: upship,
        gig: 'uShip',
        description:
          'uShip is a service that makes shipping motorcycles, boats, and other large items both fast and affordable. If you have the type of horsepower that can handles these deliveries, you can start making money as a uShip carrier.',
        indeed: 'https://www.glassdoor.com/Reviews/uShip-Reviews-E200164.htm',
        promo: '',
        gigsite: 'https://www.uship.com/register/',
        featured: false,
        subtypes: ['driving'],
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
        subtypes: ['driving'],
      },
      {
        id: 'G0189',
        logo: deliverthat,
        gig: 'DeliverThat',
        description:
          'DeliverThat is a food delivery app that has partnered with well known restaraunts like QDoba, Zoes Kitchen, Boston Market and Firehouse. Delivery comissions start with a base amount, then increase based on distance and size.',
        indeed: 'https://www.indeed.com/cmp/Deliver-That/reviews',
        promo: '',
        gigsite: 'https://www.ideliverthat.com/driver',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0013',
        logo: postmates, // Food
        gig: 'Postmates',
        description:
          'Postmates is one of the fastest growing food-delivery apps, and is hiring delivery drivers! Get delivery requests from the Postmates app, navigate to the store or restaurant and deliver to the customer location.',
        indeed: 'https://www.indeed.com/cmp/Postmates/reviews',
        promo:
          'Complete a certain number of deliveries within 14 days and earn a guaranteed minimum payout (varies by location).',
        gigsite: 'https://fleet.postmates.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0014',
        logo: doordash,
        gig: 'DoorDash',
        description:
          'Doordash is another gigantic food-delivery app hiring delivery drivers. Doordash Dashers schedule shifts and fulfill delivery requests from the DoorDash app',
        indeed: 'https://www.indeed.com/cmp/Doordash/reviews',
        promo: '',
        gigsite: 'https://www.doordash.com/dasher/signup/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0016',
        logo: ubereats,
        gig: 'Uber Eats',
        description:
          'Another big player in the food-delivery scene, UberEats drivers pick up food from local restaurants and deliver the orders to customers. Some cities offer bike and scooter delivery in addition to driving delivery.',
        indeed:
          'https://www.indeed.com/cmp/Uber-Partner-Drivers/reviews?fjobtitle=Delivery+Driver',
        promo: '',
        gigsite: 'https://www.uber.com/a/signup/drive/deliver/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0034',
        logo: grubhub,
        gig: 'Grubhub',
        description:
          'Grubhub is another food-delivery service, similar to DoorDash and other options. Grubhub drivers get guaranteed minimum earnings and additional perks for performance.',
        indeed: 'https://www.indeed.com/cmp/Grubhub/reviews',
        promo: '',
        gigsite: 'https://driver.grubhub.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0024',
        logo: caviar,
        gig: 'Caviar',
        description:
          'Caviar is a food-delivery service operating in over a dozen markets with a focus on higher end restaurants that they can develop seamless partnerships with, allowing them to fulfill orders faster. Caviar has no driver rating system, and compensates couriers on an "effort-based" algorithm',
        indeed: 'https://www.indeed.com/cmp/Caviar/reviews?fjobtitle=Courier',
        promo: '',
        gigsite: 'https://www.trycaviar.com/apply',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0030',
        logo: favor,
        gig: 'Favor',
        description:
          'With Favor, you can deliver just about anything to customers and get paid for it. Unlike other deliver gigs, Favor provides a $9 per hour base pay, though tips are deducted from this, and is available in 12 cities',
        indeed: 'https://www.indeed.com/cmp/Favor-Delivery/reviews',
        promo: '',
        gigsite: 'https://apply.favordelivery.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0148',
        logo: zifty,
        gig: 'Zifty',
        description:
          'Zifty is an online delivery company that partners with local restaurants and brands to bring their goods straight to clients’ doors. Zifty is looking for enthusiastic delivery providers to make deliveries of food, movies, and other items to customers.',
        indeed: 'https://www.indeed.com/cmp/Zifty.com/reviews',
        promo: '',
        gigsite: 'http://jobs.zifty.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0185',
        logo: peach,
        gig: 'Peach',
        description:
          'Peach focuses on carefully chosen dishes from the best lunch spots. They offer generous compensation and minimal time commitment. Peach is available in Seattle, San Diego and Boston.',
        indeed: 'https://www.indeed.com/cmp/Peach/reviews',
        promo: '',
        gigsite: 'https://www.peachd.com/jobs/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0183',
        logo: deliveroo,
        gig: 'Deliveroo',
        description:
          'Deliveroo is a UK based food-delivery service.  Unfortunately it is not available in America, but if you live abroad Deliveroo might be right for you',
        indeed: 'https://www.indeed.com/cmp/Deliveroo/reviews',
        promo: '',
        gigsite: 'https://deliveroo.co.uk/apply',
        featured: false,
        subtypes: ['driving'],
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
        subtypes: ['driving'],
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
        subtypes: ['driving'],
      },
      {
        id: 'G0184',
        logo: saucey,
        gig: 'Saucey',
        description:
          'Saucey is another Alcohol delivery company. It boasts a flexible schedule and solid pay for drivers. Sacuey also has a minimum pay for those who commit to working in "core blocks," which means you agree to work on the clock.',
        indeed: 'https://www.indeed.com/cmp/Saucey/reviews?fcountry=ALL',
        promo: '',
        gigsite: 'https://www.saucey.com/apply',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0008', // Shopping
        logo: instacart,
        gig: 'Instacart',
        description:
          'Instacart is one of the largest grocery delivery services out there. Shoppers use their platform to shop and deliver orders for their customers. If you have a car and extra time during the week, why not put both to work?',
        indeed: 'https://www.indeed.com/cmp/Instacart/reviews',
        promo: '',
        gigsite: 'https://shoppers.instacart.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0046',
        logo: shipt,
        gig: 'Shipt',
        description:
          'Shipt is another key player in the grocery delivery game. Unlike Instacart, Shipt is owned solely by Target, which is where you will be doing most of your shopping, but the jobs are similar. Shipt is a great way to get paid to shop.',
        indeed: 'https://www.indeed.com/cmp/Shipt-Shopper/reviews',
        promo: '',
        gigsite: 'https://www.shipt.com/be-a-shopper/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0186',
        logo: burpy,
        gig: 'Burpy',
        description:
          'Burpy is another grocery service, offering delivery to customers within the hour. It hires shoppers to shop and deliver for customers, but is only available in the Texas area. If you live in Texas and have some spare time, Burpy will gladly compensate you for it.',
        indeed: 'https://www.indeed.com/cmp/Burpy/reviews',
        promo: '',
        gigsite: 'https://shoppers.burpy.com/join-as-shopper',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0170',
        logo: deliv,
        gig: 'DeLiv',
        description:
          'DeLiv is a Same day delivery service helping retailers deliver their items to customers. They have a schedule where you can book hours and deliver packages for up to $22/hr. No passengers or food. No mess or stress.',
        indeed: 'https://www.indeed.com/cmp/Deliv/reviews',
        promo: '',
        gigsite: 'https://www.deliv.co/drivers/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'G0187',
        logo: burro,
        gig: 'Burro',
        description:
          'Burro is an all in one delivery app for the Austin area. Deliver Craigslist items, make store deliveries even help people move. You can set a flexible schedule and they advertise "Drive for Burro and earn $45/hr with your pickup truck."',
        indeed: 'https://www.indeed.com/cmp/Burro/salaries/Delivery-Driver',
        promo: '',
        gigsite: 'https://getburro.com/drivers.html',
        featured: false,
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
          'AirBnb for sporting events! Live near a college football stadium or major sporting event? Make some extra money renting your home out to eager fans traveling for games in your hometown.',
        indeed: 'https://www.trustpilot.com/review/rentlikeachampion.com',
        promo: '',
        gigsite: 'https://rentlikeachampion.com/',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0004',
        logo: neighbor,
        gig: 'Neighbor',
        description:
          'Got empty storage space? Earn money by giving that empty storage space a job. Start renting out your basement, garage and even closets to your neighbors today!',
        indeed: 'https://www.trustpilot.com/review/neighbor.com',
        promo: 'Sign Up for Neighbor Today and Get $50!',
        gigsite: 'https://www.neighbor.com/invited/nextwrk-39640',
        featured: true,
        subtypes: ['rental'],
      },
      {
        id: 'G0012',
        logo: airbnb,
        gig: 'AirBnB',
        description:
          'The app connecting millions of homeowners looking to list with millions of renters looking to travel. As a host, AirBnB gives you full control of your availability, prices and house rules. Sign up as a host and AirBnB lets you earn money opneing up your home to travelers.',
        indeed: 'https://www.indeed.com/cmp/Airbnb/reviews',
        promo: '',
        gigsite: 'https://www.airbnb.com/host/homes',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0036',
        logo: homeaway,
        gig: 'HomeAway',
        description:
          'HomeAway is a vacation rental marketplace with more than 2,000,000 vacation rentals in 190 countries listed on its website. Instead of leaving your vacation property vacant rent it out on HomeAway.',
        indeed: 'https://www.trustpilot.com/review/www.homeaway.com',
        promo: '',
        gigsite: 'https://www.homeaway.com/lyp',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0041',
        logo: ofs,
        gig: 'onefinestay',
        description:
          'onefinestay offers high-end home-stays across the world with currently 5,000 homes and villas in its portfolio divided between two collections, City and Villa. Put that high end vacation property to work for you.',
        indeed: 'https://www.trustpilot.com/review/www.onefinestay.com',
        promo: '',
        gigsite: 'https://www.onefinestay.com/list-your-home/',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0053',
        logo: vrbo,
        gig: 'VRBO',
        description:
          'VRBO is a service for homeowners to list their properties for short term rental. If you have a vacation beach house, condo, cabin, or other property, quit wasting money while not in use. List is on VRBO and start earning.',
        indeed: 'https://www.consumeraffairs.com/online/vrbo.html',
        promo: '',
        gigsite: 'https://help.vrbo.com/category/List_Your_Property',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0017', // Car rentals
        logo: turo,
        gig: 'Turo',
        description:
          'Instead of leaving your car in the garage all day, rent it out! Turo is a car rental service that connects renters with car owners, and is available worldwide!',
        indeed: 'https://www.trustpilot.com/review/turo.com',
        promo: '',
        gigsite: 'https://turo.com/us/en/list-your-car',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0018',
        logo: getaround,
        gig: 'Getaround',
        description:
          'Getaround is a car rental service that connects renters with car owners. It is available in most major cities, and is a great way to make money with little effort.',
        indeed: 'https://www.yelp.com/biz/getaround-san-francisco',
        promo: 'Sign Up and Get $20 Rental Credit!',
        gigsite:
          'https://www.getaround.com/invite/2c776f91-e44f-5695-bae1-784dd3b6ae18',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0177',
        logo: hyrecar,
        gig: 'Hyrecar',
        description:
          'HyreCar is a service that allows ridesharers without a ride to rent cars. Because of this, your car is likely to rent quickly and for a long time. Check out HyreCar if you have a car collecting space in your driveway, or want to start ridesharing.',
        indeed: 'https://www.trustpilot.com/review/hyrecar.com',
        promo: '',
        gigsite: 'https://app.hyrecar.com/login?type=owner&form=signup',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0049', // Parking Rental
        logo: spothero,
        gig: 'SpotHero',
        description:
          'Own a parking space? Is it empty a majority of the day? Turn it into extra income with SpotHero. They simplify the process of parking in the city by allowing owners to rent out their empty spots!',
        indeed: 'https://www.trustpilot.com/review/spothero.com',
        promo: '',
        gigsite: 'https://spothero.com/sell-parking/rent-my-parking-space/',
        featured: false,
        subtypes: ['rental'],
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
        subtypes: ['rental'],
      },
      {
        id: 'G0045', // Other rental
        logo: rentah,
        gig: 'Rentah',
        description:
          'Rentah facilitates renting to and from your neighbors! If you have some high price items, you can turn them into income by posting on Rentah. They mainly deal in the New York area, but offer services nationwide.',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-Rentah-EI_IE1432411.11,17.htm',
        promo: '',
        gigsite: 'https://www.rentah.com/',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0067',
        logo: boatsetter,
        gig: 'Boatsetter',
        description:
          'If you own a boat, then Boatsetter lets you rent it out — either with or without a captain. Peace of mind and insurance is included in every rental, and you choose who rents your boat!',
        indeed: 'https://www.facebook.com/pg/Boatsetter/reviews/',
        promo: 'List Your Boat and Get $100 Added to Your First Rental!',
        gigsite: 'https://www.boatsetter.com/referral/o/sqxkrtk',
        featured: true,
        subtypes: ['rental'],
      },
      {
        id: 'G0066',
        logo: rvshare,
        gig: 'RVShare',
        description:
          'Are you an outdoorsy person who owns an RV? RVshare will connect you with individuals looking to rent it out! Their platform reaches millions of users, they give you complete control of your rental and you could earn up to $40,000 in additional income per year!',
        indeed: 'https://www.trustpilot.com/review/rvshare.com',
        promo: '',
        gigsite: 'https://rvshare.com/list-your-rv',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0191',
        logo: outdoorsy,
        gig: 'Outdoorsy',
        description:
          'Outdoorsy is another RV rental marketplace. They perform DMV checks on all driver, provide 24/7 roadside assistance and have a dedicated customer support team.',
        indeed: 'https://www.trustpilot.com/review/www.outdoorsy.com',
        promo: 'Sign Up and Get $50 Off Your First Trip!',
        gigsite: 'https://www.outdoorsy.com/invite/g6o1lb',
        featured: false,
        subtypes: ['rental'],
      },
      {
        id: 'G0194',
        logo: ridersshare,
        gig: 'Riders Share',
        description:
          'If you own a motercycle, and and it spends most of its time in your garage, Riders Share will connect you with drivers looking to rent it out. List your motorcycle for free and make an average of $150 per booking! All listings are protected by an A rated insurance provider.',
        indeed: 'https://www.facebook.com/pg/ridersshare/reviews/',
        promo: 'Sign Up and Get $25 Off Your First Trip!',
        gigsite: 'www.riders-share.com/welcome/markf+QdETy',
        featured: false,
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
        indeed: 'https://www.reddit.com/r/birdcharger/',
        promo: '',
        gigsite: 'https://flyers.bird.co/',
        featured: false,
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0165',
        logo: lime,
        gig: 'Lime',
        description:
          'Scooter charging is a popular, and lucrative, gig. If there are Lime Scooters in your area, Lime will pay you to become a juicer. Just collect them, charge them, and disperse them!',
        indeed:
          'https://www.glassdoor.com/Reviews/Lime-Juicer-Reviews-EI_IE1884794.0,4_KO5,11.htm',
        promo: '',
        gigsite: 'https://lime.bike/juicer',
        featured: false,
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0175',
        logo: spin,
        gig: 'Spin',
        description:
          'Another player in the scooter game, Spin Chargers work like other charging gigs: collect, charge and disperse the scooters. You get paid for every scooter you charge.',
        indeed:
          'https://www.glassdoor.com/Overview/Working-at-Spin-EI_IE1838792.11,15.htm',
        promo: '',
        gigsite: 'https://www.spin.app/charger',
        featured: false,
        subtypes: ['other', 'scooter'],
      },
      {
        id: 'G0176',
        logo: skip,
        gig: 'Skip',
        description:
          'Skip Scooters are located mainly in Virginia and Washington D.C, but if you live in that area they are willing to pay you to collect, charge and disperse their scooters.',
        indeed: 'https://www.yelp.com/biz/skip-scooter-rental-sf-san-francisco',
        promo: '',
        gigsite:
          'https://www.fountain.com/skip-scooters/apply/general-location-ranger',
        featured: false,
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
        gigsite: 'http://share.rover.com/SWhzJ',
        featured: true,
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
        gigsite: 'https://wagwalking.com/dog-walker',
        featured: false,
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
        gigsite:
          'https://support.taskrabbit.com/hc/en-us/articles/360031918292-How-Do-I-Become-a-Tasker-',
        featured: false,
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
        gigsite: 'https://www.handy.com/apply',
        featured: false,
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
        gigsite: 'https://www.wonolo.com/find-work',
        featured: false,
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
        gigsite: 'https://www.getbellhops.com/being-a-bellhop/',
        featured: false,
        subtypes: ['labor'],
      },
      {
        id: 'G0027',
        logo: dolly,
        gig: 'Dolly',
        description:
          'The Dolly service is another moving service that pays people that have vehicles for moving, and movers to do the heavy lifting if they don’t have a vehicle, to help individuals in your community move in or out.',
        indeed: 'https://www.indeed.com/cmp/Dolly/reviews',
        promo: '',
        gigsite: 'https://dolly.com/helpers/',
        featured: false,
        subtypes: ['labor'],
      },
      {
        id: 'G0164',
        logo: easymove,
        gig: 'EasyMove',
        description:
          'Easymove is a delivery service offering to help users move bulky items from point A to point B. If you have a big car and can do some heavy lifting, they advertise you can make $2,500 a week as an Easymove partner.',
        indeed: 'https://www.trustpilot.com/review/www.easymove.co.uk',
        promo: '',
        gigsite: 'https://geteasymove.com/',
        featured: false,
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
        gigsite: 'https://lugg.com/become-a-lugger',
        featured: false,
        subtypes: ['labor'],
      },
      {
        id: 'G0151',
        logo: goshare,
        gig: 'GoShare',
        description:
          'GoShare specializes in delivery, moving and hauling services. If you have a truck, cargo van or box truck this gig could be right for you. If you don’t have a truck you can apply as a helper. Depender on your driving situation, this gig can prove very lucrative.',
        indeed:
          'https://www.glassdoor.com/Reviews/GoShare-Reviews-E1779925.htm',
        promo: 'Sign Up Below and Receieve $10!',
        gigsite: 'https://goshare.app.link/Mark_Foster_MF6447',
        featured: false,
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
        gigsite: 'https://app.takl.com/providers/register',
        featured: false,
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
        gigsite: 'https://www.networx.com/signup',
        featured: false,
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
        gigsite: 'https://www.taskeasy.com/contractors',
        featured: false,
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
        gigsite: 'https://www.lawnstarter.com/lawn-care-businesses',
        featured: false,
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
        gigsite: 'https://order.plowzandmowz.com/provider-onboard',
        featured: false,
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
        gigsite: 'https://lawnlove.com/apply',
        featured: false,
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
        gigsite: 'https://veryable.app.link/pqxf1qmEN5',
        featured: false,
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
        gigsite: 'https://www.homeaglow.com/apply',
        featured: false,
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
        gigsite: 'https://www.care.com/',
        featured: false,
        subtypes: ['labor'],
      },
      {
        id: 'G0167',
        logo: sittercity,
        gig: 'Sittercity',
        description:
          'If you are a babysitter, nanny or child care professional, Sittercity can connect you with individuals in your community looking for your services.',
        indeed: 'https://www.indeed.com/cmp/Sittercity/reviews',
        promo: '',
        gigsite: 'https://www.sittercity.com/sitter/account',
        featured: false,
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
        gigsite: 'https://www.carelinx.com/p/nextwrs',
        featured: false,
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
        gigsite: 'https://www.helpr-app.com/become-a-helpr-now',
        featured: false,
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
        gigsite: 'https://link.urbansitter.com/P2JqXJSHN5',
        featured: false,
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
        gigsite: 'https://www.figure-eight.com/contributor/',
        featured: false,
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
        gigsite: 'http://fbuy.me/v/markfoster314',
        featured: false,
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
        gigsite: 'https://www.etsy.com/join',
        featured: false,
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
        gigsite: 'https://www.fancyhands.com/jobs',
        featured: false,
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
          'Work for Gigwalk usually involves gathering data for companies about their products and stores. For example, you might be checking what’s on the shelves in a particular shop, and whether it’s correctly priced and labeled.',
        indeed: 'https://www.indeed.com/cmp/Gigwalk/reviews',
        promo: '',
        gigsite: 'http://www.gigwalk.com/gigwalkers/',
        featured: false,
        subtypes: ['other'],
      },
      {
        id: 'G0070',
        logo: marketforce,
        gig: 'Market Force',
        description:
          'At Market Force, you’ll complete mystery shops for banks, restaurants, and stores. You get paid to provide feedback on your visits, which those companies then use to improve.',
        indeed: 'https://www.indeed.com/cmp/Market-Force/reviews',
        promo: '',
        gigsite: 'https://www.marketforce.com/become-a-mystery-shopper',
        featured: false,
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
        gigsite: 'https://gbw.solutions/becomeanevaluator',
        featured: false,
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
        gigsite: 'https://app.spare5.com/fives/sign_in',
        featured: false,
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
        gigsite: 'https://2020census.gov/en/jobs.html',
        featured: false,
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
        gigsite: 'https://www.yourmechanic.com/rl/IyhJRw1860682',
        featured: false,
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
        gigsite: 'https://www.zeel.com/apply',
        featured: false,
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
        gigsite: 'https://www.soothe.com/apply',
        featured: false,
        subtypes: ['other'],
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
        subtypes: ['other'],
      },
      // Nurses
      {
        id: 'G0179',
        logo: heal,
        gig: 'Heal',
        description:
          'Gig work for healthcare professionals. Heal.com lets healthcare professionals spend quality time with patients in the privacy, comfort and convenience of their environment with the full capabilities of the doctor’s office',
        indeed: 'https://www.indeed.com/cmp/Heal/reviews',
        promo: '',
        gigsite: 'https://heal.com/medical-team/',
        featured: false,
        subtypes: ['other'],
      },
      {
        id: 'G0178',
        logo: slingshot,
        gig: 'Slingshot Health',
        description:
          'Slingshot Health helps healthcare profesionals find new patients and fill open gaps in their schedules, growing their practice. It’s free to sign up.',
        indeed:
          'https://www.glassdoor.com/Reviews/Slingshot-Health-Reviews-E2439803.htm',
        promo: '',
        gigsite: 'https://www.slingshothealth.com/providers/',
        featured: false,
        subtypes: ['other'],
      },
      // Unfinished
      //
      //
      // Template
      // {
      //   id: 'G0197',
      //   logo: ,
      //   gig: '',
      //   description: '',
      //   indeed: '',
      //   promo: '',
      //   gigsite: '',
      //   featured: false,
      //
      //   subtypes: [''],
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
          'Gridwise is an intelligence platform which provides information on ridesharing insights to users, helping drivers improve efficiency and profits on the road.',
        indeed:
          'https://appgrooves.com/app/gridwise-earn-more-by-driving-smarter-by-swerv-technologies-llc/negative',
        promo: 'Free Download on IOS and Android!',
        gigsite: 'https://gridwise.io/',
        featured: true,
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
        gigsite: 'https://mystrodriver.com/registration-page-half-photo',
        featured: false,
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
        gigsite:
          'https://apps.apple.com/us/app/surge-surge-tracking-for-uber/id986581500',
        featured: false,
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
        gigsite: 'https://www.sherpashare.com/',
        featured: false,
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
        gigsite: 'http://trplg.co/389373',
        featured: true,
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
        gigsite: 'https://www.everlance.com/',
        featured: false,
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
        gigsite: 'https://grabb.io/',
        featured: false,
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
        gigsite: 'https://www.hurdlr.com/',
        featured: false,
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
        gigsite: 'https://www.adwayusa.com/',
        featured: false,
        subtypes: ['driving'],
      },
      {
        id: 'S0039',
        logo: nickelytics,
        gig: 'Nickelytics',
        description:
          'Nickelytics’ process is simple, they put ads on vehicles that drive through busy city streets. If you are working as a rideshare or delivery driver, you spend a lot of time on the road, Nickelytics helps you earn even more for your time.',
        indeed: '',
        promo: '',
        gigsite: 'https://www.nickelytics.com/',
        featured: false,
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
        gigsite: 'https://wrapify.com/',
        featured: false,
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
        gigsite: 'https://www.playoctopus.com/drivers/',
        featured: false,
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
        gigsite: 'https://stickerride.com/',
        featured: false,
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
        gigsite: 'https://scootermap.com/?sc_referral=62591ccf',
        featured: true,
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
      //   gigsite: '',
      //   featured: false,
      //      subtypes: [''],
      // },
      {
        id: 'D0001',
        logo: acorns,
        gig: 'Acorns',
        description: '',
        indeed: '',
        promo:
          'Acorns automatically invests your spare change into a portfolio built by experts. Sign up today and get a free $5 for your account!',
        gigsite: 'https://acorns.com/invite/SGU9A3',
        featured: false,
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

      case TOGGLE_MOBNAV:
        draft.showMobNav = !draft.showMobNav;
    }
  });

export default appReducer;
