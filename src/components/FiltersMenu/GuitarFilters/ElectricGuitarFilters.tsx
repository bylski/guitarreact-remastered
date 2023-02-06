import React, { Fragment, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import AccordionFilter from "../FilterTypes/AccordionFilter";
import RatingFilter from "../FilterTypes/RatingFilter";
import PriceFilter from "../FilterTypes/PriceFilter";
import { AppContext } from "../../../store/AppContext";
import useApplyFilters from "../../../utils/hooks/useApplyFilters";
import { ElectricGuitarFiltersInterface } from "../../../types/filter-interfaces";

const ElectricGuitarFilters: React.FC = () => {
  const theme = useTheme();
  const ctx = useContext(AppContext);

  const producerBrands = [
    "Ibanez",
    "Jackson",
    "Charvel",
    "Gibson",
    "Epiphone",
    "Chapman",
    "Fender",
  ];
  const numberOfStrings = ["6 String", "7 String", "8 String", "9 String"];
  const pickupConfigurations = ["HH", "HSH", "HSS", "SS", "SSS"];
  const bridgeTypes = ["Fixed", "Tremolo", "Floyd Rose"];
  const bodyTypes = ["Stratocaster", "Telecaster", "Superstrat", "Les Paul"];
  const numberOfFrets = ["21 Frets", "22 Frets", "24 Frets"];

  // Get apply filters function from the hook
  const applyFilters = useApplyFilters();

  const filterChangeHandler = (
    filtersToUpdate: ElectricGuitarFiltersInterface
  ) => {
    applyFilters({
      filterGroup: "electricGuitar",
      newFilter: filtersToUpdate,
    });
  };


  return (
    <Fragment>
      <PriceFilter />
      <RatingFilter />

      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            producerBrands: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={producerBrands}
        maxOptionsShown={5}
        isRevealed
        name="Brand"
        mt={"1.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            stringsNum: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={numberOfStrings}
        name="Number of Strings"
        isRevealed
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            pickupConfig: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={pickupConfigurations}
        name="Pickup Configuration"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            bridgeType: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={bridgeTypes}
        name="Bridge Type"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            bodyType: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={bodyTypes}
        name="Body Type"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        onChange={(state) => {
          filterChangeHandler({
            fretsNum: state,
          } as ElectricGuitarFiltersInterface);
        }}
        filterOptions={numberOfFrets}
        name="Number of Frets"
        mt={"0.5rem"}
      ></AccordionFilter>
    </Fragment>
  );
};

export default ElectricGuitarFilters;
