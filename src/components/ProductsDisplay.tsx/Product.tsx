import { Box, Fade, IconButton, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Rating from "@mui/material/Rating";
import { ProductType } from "../../types/product-interfaces";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { rgbToHex } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import useBreakpoints from "../../utils/hooks/useBreakpoints";
import { createTextChangeRange } from "typescript";
import { AppContext } from "../../store/AppContext";

const Product: React.FC<{
  product: ProductType;
  productType: "guitars" | "amplifiers" | "accessories";
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const { product } = props;
  // const productSrcName = product.name.replace(/\s/g, "");
  const productSrcName = product.name;
  const ctx = useContext(AppContext);

  // const [variablesByBreakpoints, setVariablesByBreakpoints] = useState({itemsInGridRow: 12});
  const breakpoints = useBreakpoints({
    breakpointName: "lgScreen",
    breakpointVal: 1700,
  });

  const [hideQuickShow, setHideQuickShow] = useState(true);
  const quickShowHandler = (e: React.MouseEvent) => {
    // Choose if quickshow should be hidden or shown based on event type (hover detection)
    e.type === "mouseenter" ? setHideQuickShow(false) : setHideQuickShow(true);
  };

  let imagePath = "";
  if (props.productType === "guitars") {
    imagePath = "/products/electric-guitars";
  } else if (props.productType === "amplifiers") {
    imagePath = "/products/amplifiers";
  } else if (props.productType === "accessories") {
    imagePath = "/products/accessories";
  }

  const addToCartHandler = () => {
    ctx?.onAddToCart({ product: props.product, quantity: 1 });
  };

  const addToCompareHandler = () => {
    ctx?.onAddProductToCompare(props.product);
  };

  console.log(ctx?.comparedProducts);

  return (
    <Grid2 xl={12} lg={15} height="fit-content" minHeight="460px">
      <Stack
        onMouseEnter={quickShowHandler}
        onMouseLeave={quickShowHandler}
        minWidth="200px"
        minHeight="400px"
        height="100%"
        px="1rem"
        py="1rem"
        border="2px solid"
        borderRadius="15px"
        borderColor={palette.secondary.light}
        justifyContent={"space-between"}
        sx={{
          transition: "border-color 0.2s ease",
          "&:hover": { borderColor: palette.primary.dark },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            marginBottom: "1rem",
            "&:hover": { cursor: "pointer" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            alt="Image of the product"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={product.imgSrc || `${imagePath}/${productSrcName}.png`}
          ></img>
          <Fade in={!hideQuickShow}>
            <Box
              py={"0.3rem"}
              sx={{
                height: "fit-content",
                width: "100%",
                position: "absolute",
                top: "80%",
                // Change RGB value returned by palette to HEX. With that you can add 2 digits
                // which will determine the opacity of the color
                backgroundColor: `${rgbToHex(palette.secondary.light)}CC`,
              }}
            >
              <Typography
                color={palette.secondary.contrastText}
                fontFamily={typography.h2.fontFamily}
                fontSize="14px"
                fontWeight="400"
                textAlign={"center"}
              >
                QuickView
              </Typography>
            </Box>
          </Fade>
        </Box>
        <Stack>
          <Typography
            width="fit-content"
            sx={{
              marginBottom: "0.5rem",
            }}
            color={palette.secondary.contrastText}
            fontFamily={typography.h2.fontFamily}
            fontSize="14px"
            fontWeight="400"
            textAlign={"left"}
          >
            {
              <Link
                style={{
                  textDecoration: "none",
                  color: palette.secondary.contrastText,
                }}
                to="/"
              >
                {
                  <motion.span whileHover={{ textDecoration: "underline" }}>
                    {product.name}
                  </motion.span>
                }
              </Link>
            }
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Stack justifyContent="flex-end">
              <Typography
                sx={{ height: "fit-content" }}
                color={palette.primary.main}
                fontFamily={typography.h2.fontFamily}
                fontSize="23px"
                fontWeight="600"
                textAlign={"left"}
              >
                {`$${product.price.toFixed(2)}`}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating
                  size="small"
                  name="product-rating"
                  precision={0.5}
                  readOnly
                  value={product.rating || 0}
                  sx={{ position: "relative", top: "1px" }}
                ></Rating>
                <Typography
                  sx={{ flexGrow: 1 }}
                  color={palette.secondary.light}
                  fontFamily={typography.h2.fontFamily}
                  fontSize="14px"
                  fontWeight="200"
                  position={"relative"}
                  top="2px"
                  ml="0.3rem"
                >
                  {`(${product.ratingsNum})` || "(0)"}
                </Typography>
              </Box>
            </Stack>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onClick={addToCompareHandler}
                size="large"
                title="Compare Products"
                sx={{ borderRadius: "0px", paddingInline: "12px" }}
              >
                <CompareArrowsIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                onClick={addToCartHandler}
                size="large"
                title="Add to Cart"
                sx={{ borderRadius: "0px", paddingInline: "12px" }}
              >
                <AddShoppingCartIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Grid2>
  );
};

export default Product;
