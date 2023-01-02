import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Rating from "@mui/material/Rating";
import { ProductType } from "../../types/app-interfaces";

const Product: React.FC<{
  product: ProductType;
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const { product } = props;
  const productSrcName = product.name.replace(/\s/g, "")


  return (
    <Grid2 xs={2.4}>
      <Stack minWidth="200px" minHeight="200px" height="100%" px="1rem" py="1rem">
        <Box sx={{ width: "100%", height: "100%", marginBottom: "1rem" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={product.imgSrc || `/products/electric-guitars/${productSrcName}.png`}
          ></img>
        </Box>
        <Typography
          sx={{ flexGrow: 1, marginBottom: "0.5rem" }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h2.fontFamily}
          fontSize="14px"
          fontWeight="400"
          textAlign={"left"}
        >
          { product.name }
        </Typography>
        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.primary.main}
          fontFamily={typography.h2.fontFamily}
          fontSize="22px"
          fontWeight="600"
          textAlign={"left"}
        >
          {`$${product.price}`}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="product-rating"
            precision={0.5}
            readOnly
            value={ product.rating || 0 }
            
          ></Rating>
          <Typography
            sx={{ flexGrow: 1 }}
            color={palette.secondary.light}
            fontFamily={typography.h2.fontFamily}
            fontSize="14px"
            fontWeight="200"
            ml="0.3rem"
          >
            { product.ratingsNum || 0 }
          </Typography>
        </Box>
      </Stack>
    </Grid2>
  );
};

export default Product;
