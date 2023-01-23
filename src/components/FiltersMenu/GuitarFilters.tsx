import { TextField, Box, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import Filter from "./Filter";
import AccordionFilter from "./AccordionFilter";
import SwitchButton from "../UI/SwitchButton";
import Rating from "@mui/material/Rating";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";

const GuitarFilters: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const producerBrands = [
    "Ibanez",
    "Jackson",
    "Charvel",
    "Gibson",
    "Epiphone",
    "Chapman",
  ];
  const numberOfStrings = ["6 String", "7 String", "8 String", "9 String"];
  const pickupConfigurations = ["HH", "HSH", "HSS", "SS", "SSS"];
  const bridgeTypes = ["Fixed", "Tremolo", "Floyd Rose"];
  const bodyTypes = ["Stratocaster", "Telecaster", "Superstrat", "Les Paul"];
  const numberOfFrets = ["21 Frets", "22 Frets", "24 Frets"];

  return (
    <Fragment>
      <SwitchButton
        buttons={[{ text: "Acoustic Guitars" }, { text: "Electric Guitars" }]}
        preActivate={{ buttonText: "Electric Guitars" }}
      />
      <PriceFilter />
      <RatingFilter />

      <AccordionFilter
        filterOptions={producerBrands}
        maxOptionsShown={5}
        isRevealed
        name="Brand"
        mt={"1.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        filterOptions={numberOfStrings}
        name="Number of Strings"
        isRevealed
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        filterOptions={pickupConfigurations}
        name="Pickup Configuration"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        filterOptions={bridgeTypes}
        name="Bridge Type"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        filterOptions={bodyTypes}
        name="Body Type"
        mt={"0.5rem"}
      ></AccordionFilter>
      <AccordionFilter
        filterOptions={numberOfFrets}
        name="Number of Frets"
        mt={"0.5rem"}
      ></AccordionFilter>
    </Fragment>
  );
};

export default GuitarFilters;
