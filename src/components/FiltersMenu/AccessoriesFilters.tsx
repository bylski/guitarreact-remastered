import React, { Fragment, useContext } from "react";
import PriceFilter from "./FilterTypes/PriceFilter";
import RatingFilter from "./FilterTypes/RatingFilter";
import RadioFilter from "./FilterTypes/RadioFilter";
import AccordionFilter from "./FilterTypes/AccordionFilter";
import { AppContext } from "../../store/AppContext";
import { WattageOptions } from "../../types/filter-interfaces";
import { AccessoriesFiltersInterface } from "../../types/filter-interfaces";
import useApplyFilters from "../../utils/hooks/useApplyFilters";


const AccessoriesFilters: React.FC = (props) => {
  const ctx = useContext(AppContext);
  
  const applyFilters = useApplyFilters();

  const filterChangeHandler = (filtersToUpdate: AccessoriesFiltersInterface) => {
    applyFilters({
      filterGroup: "accessories",
      newFilter: filtersToUpdate,
    });
  };

  const category = [
    "Strings",
    "Guitar Picks",
    "Audio Interfaces",
    "Guitar Cases",
    "Cables",
    "Tools",
  ];


  return (
    <Fragment>
      <RadioFilter
        onChange={(state) => {
          filterChangeHandler({
            categories: state,
          } as AccessoriesFiltersInterface);
        }}
        options={category}
        name="Categories"
        mt="0.5rem"
      />
      <PriceFilter />
      <RatingFilter />
    </Fragment>
  );
};

export default AccessoriesFilters;
