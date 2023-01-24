import React, { Fragment, useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwitchButton from "../../UI/SwitchButton";
import { AppContext } from "../../../store/AppContext";
import ElectricGuitarFilters from "./ElectricGuitarFilters";
import AcousticGuitarFilters from "./AcousticGuitarFilters";

const GuitarFilters: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;
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

  const [guitarType, setGuitarType] = useState("Electric");
  const switchGuitarTypeHandler = (selectedType: string) => {
    const prevFilters = ctx?.appliedFilters;
    if (selectedType === "ACOUSTIC GUITARS") {
      setGuitarType("Acoustic");
    } else {
      setGuitarType("Electric");
    }
  };

  console.log(ctx?.appliedFilters)

  return (
    <Fragment>
      <SwitchButton
        getSelectedButton={switchGuitarTypeHandler}
        buttons={[{ text: "Acoustic Guitars" }, { text: "Electric Guitars" }]}
        preActivate={{ buttonText: "Electric Guitars" }}
      />
      {guitarType === "Electric" ? <ElectricGuitarFilters /> : <AcousticGuitarFilters />}
    </Fragment>
  );
};

export default GuitarFilters;
