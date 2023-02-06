import React, { useContext, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import Filter from "./Filter";
import { useTheme } from "@mui/material/styles";
import { createTextChangeRange } from "typescript";
import { AppContext } from "../../../store/AppContext";
import { BaseFilters } from "../../../types/filter-interfaces";

const RatingFilter: React.FC = () => {
  const theme = useTheme();
  const ctx = useContext(AppContext);
  const { palette, typography } = theme;

  const [ratingVal, setRatingVal] = useState<number | null>(0);
  const ratingChangeHandler = (
    e: React.SyntheticEvent<Element, Event>,
    ratingValue: number | null
  ) => {
    const newFilters: BaseFilters = {
      ratingFrom: ratingValue,
    };

    setRatingVal(ratingValue);

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
  };

  return (
    <Filter name="Minimum Rating" mt="1.5rem">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Rating
          onChange={ratingChangeHandler}
          name="read-only"
          defaultValue={0}
          value={ratingVal}
          size="medium"
        ></Rating>
        <Typography
          color={palette.secondary.contrastText}
          fontFamily={typography.h2.fontFamily}
          fontSize="14px"
          fontWeight="300"
          textAlign={"center"}
          pl="0.5rem"
          display="inline"
        >
          {ratingVal} &#38; Up
        </Typography>
      </Box>
    </Filter>
  );
};

export default RatingFilter;
