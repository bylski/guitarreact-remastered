import React, { useState, useEffect, useContext, Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FiltersMenu from "../FiltersMenu/FiltersMenu";
import Products from "./Products";
import { ProductType } from "../../types/product-interfaces";
import { AppContext } from "../../store/AppContext";
import useFilterProducts from "../../utils/hooks/useFilterProducts";
import { electricGuitarProducts } from "../../data/electric-guitars";
import { amplifierProducts } from "../../data/amplifiers";
import { accessoriesProducts } from "../../data/accessories";
import { acousticGuitarProducts } from "../../data/acoustic-guitars";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, IconButton, Slide, Stack } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { Tooltip, Collapse } from "@mui/material";

const ProductsDisplay: React.FC<{
  productType: "guitars" | "amplifiers" | "accessories";
}> = (props) => {
  const ctx = useContext(AppContext);
  const theme = useTheme();
  const { palette } = theme;

  const [productsToDisplay, setProductsToDisplay] = useState<
    ProductType[] | null
  >(null);
  const [filteredProductsToDisplay, setFilteredProductsToDisplay] = useState<
    ProductType[] | null
  >(null);

  useEffect(() => {
    if (props.productType === "guitars") {
      if (ctx?.selectedGuitarType === "electric") {
        setProductsToDisplay(electricGuitarProducts);
        setFilteredProductsToDisplay(electricGuitarProducts);
      } else if (ctx?.selectedGuitarType === "acoustic") {
        setProductsToDisplay(acousticGuitarProducts);
        setFilteredProductsToDisplay(acousticGuitarProducts);
      }
    } else if (props.productType === "amplifiers") {
      setProductsToDisplay(amplifierProducts);
      setFilteredProductsToDisplay(amplifierProducts);
    } else if (props.productType === "accessories") {
      setProductsToDisplay(accessoriesProducts);
      setFilteredProductsToDisplay(accessoriesProducts);
    }
  }, [props.productType, ctx?.selectedGuitarType]);

  const filteredProducts = useFilterProducts(productsToDisplay);
  const submitFiltersHandler = () => {
    setFilteredProductsToDisplay(filteredProducts);
    ctx?.onSetMobileFilterWindowVisibility(false);
  };

  const staticFilterMenu = useMediaQuery("(min-width:1200px)");

  return (
    <Stack sx={{ marginTop: "1rem" }}>
      {!staticFilterMenu && (
        <Box>
          <Tooltip title={ctx?.mobileFilterWindowVisibility ? "Close Filters Window" : "Open Filters Window"} sx={{ zIndex: "1500" }}>
            <IconButton
              onClick={() =>
                ctx?.onSetMobileFilterWindowVisibility(
                  !ctx.mobileFilterWindowVisibility
                )
              }
              sx={{
                paddingInline: "2rem",
                borderRadius: "50vw",
                zIndex: ctx?.mobileFilterWindowVisibility ? 1501: 1,
                backgroundColor: palette.primary.dark,
                "&:hover": { backgroundColor: palette.primary.onHoverLight },
              }}
            >
              <TuneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <Grid2
        minHeight="fit-content"
        container
        sx={{ marginTop: "0.5rem" }}
        columns={100}
        columnSpacing={{ md: 4, sm: 0 }}
        // width="100%"
        marginRight={"0 !important"}
        position={"relative"}
      >
        <Grid2
          display="flex"
          justifyContent="flex-start"
          lg={21}
          md={30}
          sm={0}
        >
          <FiltersMenu
            onSubmitFilters={submitFiltersHandler}
            mobileView={!staticFilterMenu}
          />
        </Grid2>
        <Grid2
          display="flex"
          justifyContent="center"
          lg={79}
          md={70}
          sm={100}
          bgcolor={palette.secondary.dark}
          borderRadius={"15px"}
          p="1rem"
        >
          {filteredProductsToDisplay && (
            <Products
              productType={props.productType}
              products={filteredProductsToDisplay}
            />
          )}
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default ProductsDisplay;
