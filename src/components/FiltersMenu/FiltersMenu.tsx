import React, { useContext, Fragment } from "react";
import { Stack, Box } from "@mui/system";
import { Backdrop, Typography, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../../store/AppContext";
import GuitarFilters from "./GuitarFilters/GuitarFilters";
import AmplifierFilters from "./AmplifierFilters";
import AccessoriesFilters from "./AccessoriesFilters";
import SubmitFiltersButton from "./SubmitFiltersButton";

const FiltersMenu: React.FC<{
  onSubmitFilters: () => void;
  mobileView: boolean;
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const ctx = useContext(AppContext);

  return (
    <Fragment>
      <Backdrop
        open={(props.mobileView && ctx?.mobileFilterWindowVisibility) || false}
        sx={{ color: "#fff", zIndex: (theme) => 1500 }}
        transitionDuration={{ enter: 200, exit: 200 }}
      ></Backdrop>
      <Slide in={ctx?.mobileFilterWindowVisibility || !props.mobileView} direction="right" appear={false}>
        <Box
          width="100%"
          minHeight={"800px"}
          py={"1.5rem"}
          px={"2rem"}
          bgcolor={palette.secondary.dark}
          borderRadius={"15px"}
          position={props.mobileView ? "absolute" : "relative"}
          top={props.mobileView ? "0px" : "0px"}
          left={props.mobileView ? "0px" : "none"}
          maxWidth="400px"
          zIndex={props.mobileView ? "1500" : "1"}
        >
          <Stack position={"relative"}>
            <Box mb="1rem">
              <Typography
                sx={{ flexGrow: 1 }}
                color={palette.secondary.contrastText}
                fontFamily={typography.h2.fontFamily}
                fontSize="25px"
                fontWeight="300"
                textAlign={"center"}
                borderBottom={"1px solid"}
                borderColor={palette.secondary.light}
              >
                Filter Products
              </Typography>
            </Box>
            {ctx?.selectedCategory === "guitars" ? <GuitarFilters /> : null}
            {ctx?.selectedCategory === "amplifiers" ? (
              <AmplifierFilters />
            ) : null}
            {ctx?.selectedCategory === "accessories" ? (
              <AccessoriesFilters />
            ) : null}
            <SubmitFiltersButton
              isVisible={ctx?.hasFiltersChanged!}
              onResetFilterChange={ctx?.resetFilterChange!}
              onSubmitFilters={props.onSubmitFilters}
            />
          </Stack>
        </Box>
      </Slide>
    </Fragment>
  );
};

export default FiltersMenu;
