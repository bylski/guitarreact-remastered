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


const AcousticGuitarFilters: React.FC = () => {
    const theme = useTheme();
    const { palette, typography } = theme;
    const ctx = useContext(AppContext);
  
    const producerBrands = [
      "Fender",
      "Yamaha",
      "Lag",
      "Ibanez",
      "Harley Benton",
    ];
    const numberOfStrings = ["6 String", "12 String"];
    const electroAcoustic = ["Yes", "No"];
  
  
    return (
      <Fragment>
       
        <PriceFilter />
        <RatingFilter />
  
        <AccordionFilter
          onChange={(state) => {
            if (ctx?.onApplyFilters !== undefined) {
                const prevAcousticGuitarFilters = ctx.appliedFilters.acousticGuitarFilters;
                ctx?.onApplyFilters({ ...ctx.appliedFilters, acousticGuitarFilters: {...prevAcousticGuitarFilters, brand: state} });
            }
          }}
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
      </Fragment>
    );
  };
  
  export default AcousticGuitarFilters;