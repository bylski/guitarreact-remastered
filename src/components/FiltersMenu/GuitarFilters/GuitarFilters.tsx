import React, { Fragment, useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwitchButton from "../../UI/SwitchButton";
import { AppContext } from "../../../store/AppContext";
import ElectricGuitarFilters from "./ElectricGuitarFilters";
import AcousticGuitarFilters from "./AcousticGuitarFilters";

const GuitarFilters: React.FC = () => {

  const [guitarType, setGuitarType] = useState("Electric");
  const switchGuitarTypeHandler = (selectedType: string) => {
    if (selectedType === "ACOUSTIC GUITARS") {
      setGuitarType("Acoustic");
    } else {
      setGuitarType("Electric");
    }
  };

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
