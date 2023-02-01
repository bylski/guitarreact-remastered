import React, { Fragment, useContext } from "react";
import PriceFilter from "./FilterTypes/PriceFilter";
import RatingFilter from "./FilterTypes/RatingFilter";
import RadioFilter from "./FilterTypes/RadioFilter";
import AccordionFilter from "./FilterTypes/AccordionFilter";
import { AppContext } from "../../store/AppContext";
import { WattageOptions } from "../../types/app-interfaces";

const AccessoriesFilters: React.FC = (props) => {

  const ctx = useContext(AppContext);


  const category = ["String", "Guitar Picks", "Audio Interfaces", "Guitar Cases", "Cables", "Tools"];


  return (
    <Fragment>
      <RadioFilter options={category} name="Categories" mt="0.5rem" />
      <PriceFilter />
      <RatingFilter />
    </Fragment>
  );
};

export default AccessoriesFilters;
