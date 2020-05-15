import React from 'react';

import H1 from 'components/H1';

import FormWrapper from './FormWrapper';
import FilterSelect from './FilterSelect';
import FilterTitle from './FilterTitle';
import Ul from './Ul';

export function FilterForm() {
  return (
    <FormWrapper>
      <H1>Filters</H1>
      <hr />
      <FilterTitle title="Driving" />
      <Ul>
        <FilterSelect filter="rideshare" name="Rideshare" />
        <FilterSelect filter="packagedelivery" name="Item Delivery" />
        <FilterSelect filter="fooddelivery" name="Food Delivery" />
        {/* <FilterSelect filter="21delivery" name="21+ Delivery" /> */}
        <FilterSelect filter="grocery" name="Grocery Shopping" />
      </Ul>
      <FilterTitle title="Freelancing" />
      <Ul>
        <FilterSelect filter="software" name="Software Freelancing" />
        <FilterSelect filter="design" name="Design Freelancing" />
        <FilterSelect filter="photo" name="Photography Freelancing" />
      </Ul>
      <FilterTitle title="Sell Your Stuff" />
      <Ul>
        <FilterSelect filter="clothes" name="Sell Clothes" />
        <FilterSelect filter="textbook" name="Sell Textbooks" />
      </Ul>
      <FilterTitle title="Rental" />
      <Ul>
        <FilterSelect filter="home" name="Home Rental" />
        <FilterSelect filter="car" name="Car Rental" />
        <FilterSelect filter="boat" name="Boat Rental" />
        <FilterSelect filter="parking" name="Parking Spot Rental" />
        <FilterSelect filter="RV" name="RV Rental" />
      </Ul>
      <FilterTitle title="Labor" />
      <Ul>
        <FilterSelect filter="dog" name="Dog Walking & Care" />
        <FilterSelect filter="handyman" name="Handy Man" />
        <FilterSelect filter="mover" name="Mover" />
        <FilterSelect filter="landscaping" name="Landscaping & Lawn Care" />
        <FilterSelect filter="cleaning" name="Cleaning" />
        <FilterSelect filter="care" name="Child & Elder Care" />
        <FilterSelect filter="tech" name="Technical" />
        {/* <FilterSelect filter="mysteryshop" name="Mystery Shopping" /> */}
        <FilterSelect filter="beauty" name="Beauty & Massage" />
        <FilterSelect filter="healthcare" name="Healthcare" />
        <FilterSelect filter="cuisine" name="Cuisine" />
      </Ul>
      <FilterTitle title="Other" />
      <Ul>
        <FilterSelect filter="scooter" name="Scooter Charging" />
        <FilterSelect filter="quickbucks" name="Quick Bucks" />
        <FilterSelect filter="gaming" name="Gaming" />
      </Ul>
    </FormWrapper>
  );
}

export default FilterForm;
