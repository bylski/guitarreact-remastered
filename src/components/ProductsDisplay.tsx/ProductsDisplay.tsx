import React, { useState, useEffect, useContext } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FiltersMenu from "../FiltersMenu/FiltersMenu";
import Products from "./Products";
import { ProductType } from "../../types/app-interfaces";
import { useDeprecatedAnimatedState } from "framer-motion";
import { AppContext } from "../../store/AppContext";

const ProductsDisplay: React.FC<{
  productType: "guitars" | "amplifiers" | "accessories";
}> = (props) => {
  const ctx = useContext(AppContext);
  const theme = useTheme();
  const { palette } = theme;

  const guitarProducts: ProductType[] = [
    { name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96 },
    {
      name: "Ibanez RGA42HPTQM Blue Iceberg Gradation",
      price: 999.99,
      rating: 4,
      ratingsNum: 5,
    },
    {
      name: "Jackson Dinky JS11 Electric Guitar Black",
      price: 159.99,
      rating: 5.0,
      ratingsNum: 7,
    },
    {
      name: "Jackson X Series Signature Scott Ian King V KVXT Electric Guitar Ivory",
      price: 799.99,
      rating: 0.0,
      ratingsNum: 0,
    },
    {
      name: "Charvel Pro-Mod DK24 HSS FR M Poplar Electric Guitar Purple Sunset",
      price: 1249.99,
      rating: 3.5,
      ratingsNum: 15,
    },
    {
      name: "Gibson Les Paul Traditional Pro V Flame Top Electric Guitar Washed Cherry Burst",
      price: 2599.00,
      rating: 4.5,
      ratingsNum: 22,
    },
    { name: "Gibson SG Standard Electric Guitar Ebony", price: 1799.00, rating: 5, ratingsNum: 28 },
    {
      name: "Gibson Les Paul Studio Limited-Edition Electric Guitar Black Cherry Burst",
      price: 1699.00,
      rating: 5,
      ratingsNum: 11,
    },
    { name: "Chapman ML1 Modern V2 Electric Guitar Abyss", price: 599.99, rating: 4.5, ratingsNum: 11 },
    {
      name: "Epiphone Riviera Semi-Hollow Electric Guitar Royal Tan",
      price: 699.00,
      rating: 5,
      ratingsNum: 13,
    },
    { name: "Epiphone SG Special (P-90) Electric Guitar", price: 449.99, rating: 4.5, ratingsNum: 11 },
    {
      name: "Fender American Ultra Stratocaster Maple Fingerboard",
      price: 2149.99,
      rating: 5,
      ratingsNum: 25,
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
      name: "Fender Mustang LT25 25W 1x8 Guitar Comb",
      price: 3399.99,
      rating: 0,
      ratingsNum: 0,
    },
    {
      name: "Orange Amplifiers Rockerverb 100 MKIII 100W",
      price: 2349.99,
      rating: 5,
      ratingsNum: 5,
    },
    {
      name: "MESA/Boogie Mark V 1x12 90W Tube Guitar Combo Amp Black",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Marshall Origin50H 50W Tube Guitar Amp Head",
      price: 749.99,
      rating: 4.5,
      ratingsNum: 22,
    },
    {
      name: "BOSS Katana-Head MkII 100W Guitar Amplifier Head",
      price: 369.99,
      rating: 5,
      ratingsNum: 18,
    },
    {
      name: "VOX Custom AC15C1 15W 1x12 Tube Guitar Combo Amp Vintage",
      price: 799.99,
      rating: 5,
      ratingsNum: 114,
    },
    {
      name: "Fender Limited-Edition '65 Princeton Reverb 12W 1x12",
      price: 1499.99,
      rating: 5,
      ratingsNum: 23,
    },
    {
      name: "Yamaha THR30II Wireless 30W 2x3",
      price: 549.99,
      rating: 5,
      ratingsNum: 2,
    },
    {
      name: "Blackstar HT Venue Series Club 40 40W 1x12",
      price: 899.99,
      rating: 4.5,
      ratingsNum: 35,
    },
    {
      name: "VOX Valvetronix VT20X 20W 1x8",
      price: 279.99,
      rating: 4.5,
      ratingsNum: 35,
    },
  ];

  const accessoriesProducts: ProductType[] = [
    {
      name: "Dunlop Tortex Flow Guitar Picks STD-12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Mogami Gold Series Instrument Cable 6 ft",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Dunlop Tortex Flow Guitar Picks STD-12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Mogami Gold Series Instrument Cable 6 ft",
      price: 999.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Dunlop Tortex Flow Guitar Picks STD-12",
      price: 229.99,
      rating: 4.5,
      ratingsNum: 96,
    },
    {
      name: "Mogami Gold Series Instrument Cable 6 ft",
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
    } else if (props.productType === "accessories") {
      setProductsToDisplay(accessoriesProducts);
    }
  }, [props.productType]);

  return (
    <Grid2
      minHeight="fit-content"
      container
      sx={{ marginTop: "1rem" }}
      columns={20}
      columnSpacing={4}
      width="101%"
    >
      <Grid2 display="flex" justifyContent="flex-start" xs={4}>
        <FiltersMenu />
      </Grid2>
      <Grid2
        display="flex"
        justifyContent="flex-start"
        xs={16}
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
