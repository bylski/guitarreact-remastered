import React from "react";
import { Fab, Typography, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
const SubmitFiltersButton: React.FC<{
  onResetFilterChange: () => void;
  onSubmitFilters: () => void;
  isVisible: boolean;
}> = (props) => {
  const { palette, typography } = useTheme();

  const submitFiltersHandler = () => {
    props.onResetFilterChange();
    props.onSubmitFilters();
    // Scroll to the top of the products display
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <Fade in={props.isVisible} unmountOnExit>
      <Fab
        onClick={submitFiltersHandler}
        variant="extended"
        sx={{
          position: "sticky",
          width: "100%",
          height: "fit-content",
          top: "0",
          bottom: "20px",
          paddingBottom: "1rem",
          paddingTop: "1rem",
          marginTop: "1rem",
          backgroundColor: palette.primary.dark,
          "&:hover": {
            backgroundColor: palette.primary.onHoverLight,
          },
        }}
      >
        <Typography
          color={palette.secondary.contrastText}
          fontSize="14px"
          fontWeight="600"
          textAlign={"center"}
        >
          Submit Filters
        </Typography>
        <FilterListRoundedIcon
          sx={{ fill: palette.primary.contrastText, marginLeft: "0.3rem" }}
        />
      </Fab>
    </Fade>
  );
};

export default SubmitFiltersButton;
