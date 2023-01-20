import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import Filter from "./Filter";
import { useTheme } from "@mui/material/styles";

const RatingFilter: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const [ratingVal, setRatingVal] = useState(0);
  const ratingChangeHandler = (e: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    if (newValue !== null) {
        setRatingVal(newValue);
    }
  }

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
