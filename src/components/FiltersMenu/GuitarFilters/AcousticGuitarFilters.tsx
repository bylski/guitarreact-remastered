import { TextField, Box, Typography } from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import Filter from "../FilterTypes/Filter";
import AccordionFilter from "../FilterTypes/AccordionFilter";
import SwitchButton from "../../UI/SwitchButton";
import Rating from "@mui/material/Rating";
import RatingFilter from "../FilterTypes/RatingFilter";
import PriceFilter from "../FilterTypes/PriceFilter";
import { AppContext } from "../../../store/AppContext";
import RadioFilter from "../FilterTypes/RadioFilter";
import { AcousticGuitarFiltersInterface } from "../../../types/filter-interfaces";
import useApplyFilters from "../../../utils/hooks/useApplyFilters";

const AcousticGuitarFilters: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const ctx = useContext(AppContext);

  const producerBrands = [
    "Takamine",
    "Yamaha",
    "Guild",
    "Epiphone",
    "Savannah",
    "Lag",
  ];
  const numberOfStrings = ["6 String", "12 String"];
  const electroAcoustic = ["Yes", "No"];

  const applyFilters = useApplyFilters();

  const filterChangeHandler = (
    filtersToUpdate: AcousticGuitarFiltersInterface
  ) => {
    applyFilters({
      filterGroup: "acousticGuitar",
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
            brand: state,
          } as AcousticGuitarFiltersInterface);
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
          } as AcousticGuitarFiltersInterface);
        }}
        filterOptions={numberOfStrings}
        name="Number of Strings"
        isRevealed
        mt={"0.5rem"}
      ></AccordionFilter>
      <RadioFilter
        onChange={(state) => {
          filterChangeHandler({
            electroAcoustic: state,
          } as AcousticGuitarFiltersInterface);
        }}
        options={electroAcoustic}
        name="Electro-acoustic"
        mt="2rem"
      ></RadioFilter>
    </Fragment>
  );
};

export default AcousticGuitarFilters;
