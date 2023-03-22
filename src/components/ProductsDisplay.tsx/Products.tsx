import React from "react";
import Product from "./Product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductType } from "../../types/product-interfaces";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShrugSvgIcon from "../UI/SvgIcons.tsx/ShrugSvgIcon";

const Products: React.FC<{
  products: ProductType[];
  productType: "guitars" | "amplifiers" | "accessories";
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const ProductsToRender = props.products.map((product, i) => {
    return (
      <Product
        key={`product${i}`}
        product={product}
        productType={props.productType}
      />
    );
  });

  const noProductsFallback: JSX.Element = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <ShrugSvgIcon
        sx={{ fontSize: "100px" }}
        fill={palette.secondary.grayedOutText!}
      />
<Typography
        sx={{ flexGrow: 1, marginTop: "1rem" }}
        color={palette.secondary.grayedOutText}
        fontFamily={typography.h1.fontFamily}
        fontSize="20px"
        fontWeight="600"
        textAlign={"center"}
      >
        {`It's empty here...`}
      </Typography>
      <Typography
        sx={{ flexGrow: 1, marginTop: "0.5rem" }}
        color={palette.secondary.grayedOutText}
        fontFamily={typography.h1.fontFamily}
        fontSize="45px"
        fontWeight="600"
        textAlign={"center"}
      >
        {`No Products Found!`}
      </Typography>
    </Box>
  );

  return (
    <Grid2
      sx={{ width: "100%" }}
      container
      columns={60}
      columnSpacing={{xxs: 1, xs: 3}}
      rowSpacing={{xxs: 2, xs: 3}}
      alignContent={"flex-start"}
    >
      {ProductsToRender.length !== 0 && ProductsToRender !== null
        ? ProductsToRender
        : noProductsFallback}
    </Grid2>
  );
};

export default Products;
