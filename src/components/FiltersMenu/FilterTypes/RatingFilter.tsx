import React, { useContext, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import Filter from "./Filter";
import { useTheme } from "@mui/material/styles";
import { createTextChangeRange } from "typescript";
import { AppContext } from "../../../store/AppContext";
import { BaseFilters } from "../../../types/filter-interfaces";
import { Button, Fade } from "@mui/material";

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

  const resetRatingHandler = () => {
    setRatingVal(0);
    const newFilters: BaseFilters = {
      ratingFrom: 0,
    };
    if (ctx?.appliedFilters !== undefined) {
      const prevFilters = ctx?.appliedFilters;
      ctx?.onApplyFilters({
        ...prevFilters,
        baseFilters: { ...prevFilters.baseFilters, ...newFilters },
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
      <Fade in={ratingVal !== null && ratingVal !== 0} unmountOnExit>
        <Button
          sx={{
            fontSize: "12px",
            alignSelf: "flex-start",
            padding: "0.1rem",
            marginTop: "0.5rem",
          }}
          onClick={resetRatingHandler}
          type="button"
          variant="outlined"
        >
          Clear
        </Button>
      </Fade>
    </Filter>
  );
};

export default RatingFilter;
