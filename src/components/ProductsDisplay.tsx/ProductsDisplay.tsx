import React, { useState, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FiltersMenu from "./FiltersMenu";
import Products from "./Products";
import { ProductType } from "../../types/app-interfaces";
import { useDeprecatedAnimatedState } from "framer-motion";

const ProductsDisplay: React.FC<{
  productType: "guitars" | "amplifiers" | "accessories";
}> = (props) => {
  const theme = useTheme();
  const { palette } = theme;

  const guitarProducts: ProductType[] = [
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
  ];

  const amplifierProducts: ProductType[] = [
    {
      name: "Boss Katana-50 MkII 50W 1x12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Marshall DSL20CR 20W 1x12",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Boss Katana-50 MkII 50W 1x12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Marshall DSL20CR 20W 1x12",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Boss Katana-50 MkII 50W 1x12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Marshall DSL20CR 20W 1x12",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Boss Katana-50 MkII 50W 1x12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Marshall DSL20CR 20W 1x12",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
  ];

  const [productsToDisplay, setProductsToDisplay] = useState<
    ProductType[] | null
  >(null);

  useEffect(() => {
    if (props.productType === "guitars") {
      setProductsToDisplay(guitarProducts);
    } else if (props.productType === "amplifiers") {
      setProductsToDisplay(amplifierProducts);
    }
  }, [props.productType]);

  return (
    <Grid2
      minHeight="fit-content"
      container
      sx={{ marginTop: "1rem" }}
      columnSpacing={4}
    >
      <Grid2 display="flex" justifyContent="flex-start" xs={3}>
        <FiltersMenu />
      </Grid2>
      <Grid2
        display="flex"
        justifyContent="flex-start"
        xs={9}
        bgcolor={palette.secondary.dark}
        borderRadius={"15px"}
        p="1rem"
      >
        {productsToDisplay && (
          <Products
            productType={props.productType}
            products={productsToDisplay}
          />
        )}
      </Grid2>
    </Grid2>
  );
};

export default ProductsDisplay;
