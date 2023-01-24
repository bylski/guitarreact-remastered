import React, { Fragment, useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, TextField, Box } from "@mui/material";
import Filter from "./Filter";
import { AppContext } from "../../../store/AppContext";
import {
  AcousticGuitarFilters,
  BaseFilters,
  ElectricGuitarFilters,
  ProductFilters,
} from "../../../types/app-interfaces";

const PriceFilter: React.FC = () => {
  const ctx = useContext(AppContext);
  const theme = useTheme();
  const { palette, typography } = theme;

  const [priceFromValue, setPriceFromValue] = useState<string>("");
  const [priceToValue, setPriceToValue] = useState<string>("");

  const [isKeyValid, setIsKeyValid] = useState(true);

  // Allow only numeric values and backspace
  const keyValidationHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputVal = e.key;
    if (isNaN(parseInt(inputVal)) && inputVal !== "Backspace") {
      setIsKeyValid(false);
    } else {
      setIsKeyValid(true);
    }
  };

  // Check if overall input is valid
  const isInputValid = (input: string, key?: string): boolean => {
    if (input.length <= 5 && isKeyValid === true) return true;
    else return false;
  };

  // If input is valid, update the state
  const priceFromHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    if (isInputValid(fieldValue) === true) {
      setPriceFromValue(fieldValue);
    }
  };
  const priceToHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    if (isInputValid(fieldValue) === true) {
      setPriceToValue(fieldValue);
    }
  };

  // Pass the state of the text fields to the context to use in other components
  useEffect(() => {
    const newFilters: BaseFilters = {
      price: { from: parseInt(priceFromValue), to: parseInt(priceToValue) },
    };

    if (ctx?.appliedFilters !== undefined) {
      const prevFilters = ctx?.appliedFilters;
      ctx?.onApplyFilters({
        ...prevFilters,
        baseFilters: { ...prevFilters.baseFilters, ...newFilters },
      });
    } else {
      ctx?.onApplyFilters({
        baseFilters: { ...newFilters },
      });
    }
  }, [priceFromValue, priceToValue]);

  return (
    <Filter name="Price ($)" mt={"1.5rem"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          sx={{ flexGrow: "1" }}
          value={priceFromValue}
          onChange={priceFromHandler}
          onKeyDown={keyValidationHandler}
          variant="outlined"
          label="From"
          type={"text"}
          inputProps={{ max: "10", min: "0" }}
        />
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
        <TextField
          sx={{ flexGrow: "1" }}
          value={priceToValue}
          onChange={priceToHandler}
          onKeyDown={keyValidationHandler}
          variant="outlined"
          label="To"
          type={"text"}
          inputProps={{ max: "10", min: "0" }}
        />
      </Box>
    </Filter>
  );
};

export default PriceFilter;
