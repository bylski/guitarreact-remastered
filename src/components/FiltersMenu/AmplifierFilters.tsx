import React, { Fragment, useContext } from "react";
import PriceFilter from "./FilterTypes/PriceFilter";
import RatingFilter from "./FilterTypes/RatingFilter";
import RadioFilter from "./FilterTypes/RadioFilter";
import AccordionFilter from "./FilterTypes/AccordionFilter";
import { AppContext } from "../../store/AppContext";
import { WattageOptions } from "../../types/app-interfaces";

const AmplifierFilters: React.FC = (props) => {

  const ctx = useContext(AppContext);


  const ampTypes = ["Combo", "Head", "MiniAmps"];
  const ampTechnology = ["Tube", "Solid State", "Hybrid"];
  const speakerConfigurations = ["1x12", "1x8", "2x3"];
  const wattageOptions = ["20-45 Watts", "50-100 Watts"];

  console.log(ctx?.appliedFilters);

  return (
    <Fragment>
      <RadioFilter options={ampTypes} name="Amplifier Type" mt="0.5rem" />
      <PriceFilter />
      <RatingFilter />
      <RadioFilter
        options={ampTechnology}
        name="Tube or Solid State"
        mt="2rem"
      ></RadioFilter>
      <RadioFilter
       onChange={(state) => {
        if (ctx?.onApplyFilters !== undefined) {
          const prevAmplifierFilters =
            ctx.appliedFilters.amplifierFilters;
          ctx?.onApplyFilters({
            ...ctx.appliedFilters,
            amplifierFilters: {
              ...prevAmplifierFilters,
              speakerConfiguration: state as WattageOptions,
            },
          });
        }
      }}
        options={speakerConfigurations}
        name="Speaker Configuration"
        mt="2rem"
      ></RadioFilter>
      <AccordionFilter
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
