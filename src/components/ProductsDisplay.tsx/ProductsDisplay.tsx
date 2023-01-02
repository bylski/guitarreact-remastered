import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FiltersMenu from "./FiltersMenu";
import Products from "./Products";

const ProductsDisplay: React.FC = (props) => {
  const theme = useTheme();
  const { palette } = theme;

  return (
      <Grid2 container sx={{marginTop: "1rem"}} columnSpacing={4}>
        <Grid2 display="flex" justifyContent="flex-start" xs={3}>
          <FiltersMenu/>
        </Grid2>
        <Grid2 display="flex" justifyContent="flex-start" xs={9} bgcolor={palette.secondary.dark} borderRadius={"15px"}>
          <Products/>
        </Grid2>
      </Grid2>
  );
};

export default ProductsDisplay;
