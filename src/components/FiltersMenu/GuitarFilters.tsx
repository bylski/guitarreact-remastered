import { TextField, Box, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import Filter from "./Filter";
import AccordionFilter from "./AccordionFilter";

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

  const bridgeTypes = ["Fixed", "Tremolo", "Floyd Rose"]

  return (
    <Fragment>
      <Filter name="Price ($)" mt={"1.5rem"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TextField variant="outlined" label="From" />
          <Typography
            color={palette.secondary.contrastText}
            fontFamily={typography.h2.fontFamily}
            fontSize="22px"
            fontWeight="300"
            textAlign={"center"}
            px="0.5rem"
          >
            -
          </Typography>
          <TextField variant="outlined" label="To" />
        </Box>
      </Filter>
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
    </Fragment>
  );
};

export default GuitarFilters;
