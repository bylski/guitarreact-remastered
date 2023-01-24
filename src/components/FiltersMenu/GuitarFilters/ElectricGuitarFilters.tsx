import React, { Fragment, useContext  } from "react";
import { useTheme } from "@mui/material/styles";
import AccordionFilter from "../FilterTypes/AccordionFilter";
import RatingFilter from "../FilterTypes/RatingFilter";
import PriceFilter from "../FilterTypes/PriceFilter";
import { AppContext } from "../../../store/AppContext";


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
    ];
    const numberOfStrings = ["6 String", "7 String", "8 String", "9 String"];
    const pickupConfigurations = ["HH", "HSH", "HSS", "SS", "SSS"];
    const bridgeTypes = ["Fixed", "Tremolo", "Floyd Rose"];
    const bodyTypes = ["Stratocaster", "Telecaster", "Superstrat", "Les Paul"];
    const numberOfFrets = ["21 Frets", "22 Frets", "24 Frets"];
  
  
    return (
      <Fragment>
       
        <PriceFilter />
        <RatingFilter />
  
        <AccordionFilter
          onChange={(state) => {
            if (ctx?.onApplyFilters !== undefined) {
                const prevElectricGuitarFilters = ctx.appliedFilters.electricGuitarFilters;
                ctx?.onApplyFilters({ ...ctx.appliedFilters, electricGuitarFilters: {...prevElectricGuitarFilters, brand: state} });
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
  
  export default ElectricGuitarFilters;