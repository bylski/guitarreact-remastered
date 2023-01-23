import React, { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, TextField, Box } from "@mui/material";
import Filter from "./Filter";

const PriceFilter: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const [priceFromValue, setPriceFromValue] = useState<string | null>("");
  const [priceToValue, setPriceToValue] = useState<string | null>("");

  const [isKeyValid, setIsKeyValid] = useState(true);
  const keyValidationHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputVal = e.key;
    if (isNaN(parseInt(inputVal)) && inputVal !== "Backspace") {
      setIsKeyValid(false);
    } else {
      setIsKeyValid(true);
    }
  };

  const isInputValid = (input: string, key?: string): boolean => {
    if (input.length <= 5 && isKeyValid === true) return true;
    else return false;
  };

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
