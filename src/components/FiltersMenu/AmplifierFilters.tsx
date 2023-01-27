import React, { Fragment } from "react";
import PriceFilter from "./FilterTypes/PriceFilter";
import RatingFilter from "./FilterTypes/RatingFilter";
import RadioFilter from "./FilterTypes/RadioFilter";

const AmplifierFilters: React.FC = (props) => {
  return (
    <Fragment>
      <RadioFilter name="Amplifier Type" mt="0.5rem" />
      <PriceFilter />
      <RatingFilter />
    </Fragment>
  );
};

export default AmplifierFilters;
