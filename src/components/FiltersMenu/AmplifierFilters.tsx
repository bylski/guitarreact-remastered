import React, { Fragment, useContext } from "react";
import PriceFilter from "./FilterTypes/PriceFilter";
import RatingFilter from "./FilterTypes/RatingFilter";
import RadioFilter from "./FilterTypes/RadioFilter";
import AccordionFilter from "./FilterTypes/AccordionFilter";
import { AppContext } from "../../store/AppContext";
import {
  AmplifierFiltersInterface,
  WattageOptions,
} from "../../types/app-interfaces";
import useApplyFilters from "../../utils/hooks/useApplyFilters";

const AmplifierFilters: React.FC = (props) => {
  const ctx = useContext(AppContext);

  const ampTypes = ["Combo", "Head", "MiniAmps"];
  const ampTechnology = ["Tube", "Solid State", "Hybrid"];
  const speakerConfigurations = ["1x12", "1x8", "2x3"];
  const wattageOptions = ["20-45 Watts", "50-100 Watts"];



  const applyFilters = useApplyFilters();

  const filterChangeHandler = (filtersToUpdate: AmplifierFiltersInterface) => {
    applyFilters({
      filterGroup: "amplifier",
      newFilter: filtersToUpdate,
    });
  };


  return (
    <Fragment>
      <RadioFilter
        onChange={(state) => {
          filterChangeHandler({
            amplifierType: state,
          } as AmplifierFiltersInterface);
        }}
        options={ampTypes}
        name="Amplifier Type"
        mt="0.5rem"
      />
      <PriceFilter />
      <RatingFilter />
      <RadioFilter
        onChange={(state) => {
          filterChangeHandler({
            technology: state,
          } as AmplifierFiltersInterface);
        }}
        options={ampTechnology}
        name="Tube or Solid State"
        mt="2rem"
      ></RadioFilter>
      <RadioFilter
        onChange={(state) => {
          filterChangeHandler({
            speakerConfiguration: state,
          } as AmplifierFiltersInterface);
        }}
        options={speakerConfigurations}
        name="Speaker Configuration"
        mt="2rem"
      ></RadioFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            wattage: state,
          } as AmplifierFiltersInterface);
        }}
        filterOptions={wattageOptions}
        maxOptionsShown={5}
        isRevealed
        name="Wattage"
        mt="1.5rem"
      />
    </Fragment>
  );
};

export default AmplifierFilters;
