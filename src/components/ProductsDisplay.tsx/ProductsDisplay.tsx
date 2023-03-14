import React, { useState, useEffect, useContext, Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FiltersMenu from "../FiltersMenu/FiltersMenu";
import Products from "./Products";
import {
  ElectricGuitarProduct,
  ProductType,
} from "../../types/product-interfaces";
import { useDeprecatedAnimatedState } from "framer-motion";
import { AppContext } from "../../store/AppContext";
import useFilterProducts from "../../utils/hooks/useFilterProducts";
import { electricGuitarProducts } from "../../data/electric-guitars";
import { amplifierProducts } from "../../data/amplifiers";
import { accessoriesProducts } from "../../data/accessories";
import { acousticGuitarProducts } from "../../data/acoustic-guitars";

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
  };

  return (
    <Fragment>
      <Grid2
        minHeight="fit-content"
        container
        sx={{ marginTop: "1rem" }}
        columns={100}
        columnSpacing={4}
        width="101%"
      >
        <Grid2 display="flex" justifyContent="flex-start" lg={21}  md={30}>
          <FiltersMenu onSubmitFilters={submitFiltersHandler} />
        </Grid2>
        <Grid2
          display="flex"
          justifyContent="flex-start"
          lg={79}
          md={70}
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
    </Fragment>
  );
};

export default ProductsDisplay;
