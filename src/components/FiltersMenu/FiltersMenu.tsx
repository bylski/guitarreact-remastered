import React, { useContext } from "react";
import { Stack, Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../../store/AppContext";
import GuitarFilters from "./GuitarFilters/GuitarFilters";
import AmplifierFilters from "./AmplifierFilters";
import AccessoriesFilters from "./AccessoriesFilters";
import SubmitFiltersButton from "./SubmitFiltersButton";

const FiltersMenu: React.FC = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const ctx = useContext(AppContext);

  return (
    <Stack
      width="100%"
      minHeight={"800px"}
      py={"1.5rem"}
      px={"2rem"}
      bgcolor={palette.secondary.dark}
      borderRadius={"15px"}
      position={"relative"}
    >
      <Box mb="1rem">
        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h2.fontFamily}
          fontSize="28px"
          fontWeight="300"
          textAlign={"center"}
          borderBottom={"1px solid"}
          borderColor={palette.secondary.light}
        >
          Filter Products
        </Typography>
      </Box>
      {ctx?.selectedCategory === "guitars" ? <GuitarFilters /> : null}
      {ctx?.selectedCategory === "amplifiers" ? <AmplifierFilters /> : null}
      {ctx?.selectedCategory === "accessories" ? <AccessoriesFilters /> : null}
      <SubmitFiltersButton />
    </Stack>
  );
};

export default FiltersMenu;
