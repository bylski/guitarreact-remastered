import React, { Fragment, useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwitchButton from "../../UI/SwitchButton";
import { AppContext } from "../../../store/AppContext";
import ElectricGuitarFilters from "./ElectricGuitarFilters";
import AcousticGuitarFilters from "./AcousticGuitarFilters";

const GuitarFilters: React.FC = () => {
  const ctx = useContext(AppContext);
  const switchGuitarTypeHandler = (selectedType: string) => {
    if (
      selectedType === "ACOUSTIC GUITARS" ||
      ctx?.selectedGuitarType === "acoustic"
    ) {
      ctx?.onSelectGuitarType("acoustic");
    } else {
      ctx?.onSelectGuitarType("electric");
    }
  };

  useEffect(() => {
    if (ctx?.selectedGuitarType) {
    }
  }, [ctx?.selectedGuitarType]);

  const preActivateButton =
    ctx?.currentPath === "/guitars/acoustic"
      ? "Acoustic Guitars"
      : "Electric Guitars";

  return (
    <Fragment>
      <SwitchButton
        getSelectedButton={switchGuitarTypeHandler}
        buttons={[
          { text: "Acoustic Guitars", buttonLink: "/guitars/acoustic" },
          { text: "Electric Guitars", buttonLink: "/guitars/electric" },
        ]}
        preActivate={{ buttonText: preActivateButton }}
      />
      {ctx?.selectedGuitarType === "electric" ? (
        <ElectricGuitarFilters />
      ) : (
        <AcousticGuitarFilters />
      )}
    </Fragment>
  );
};

export default GuitarFilters;
