import { Box, Fade, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Rating from "@mui/material/Rating";
import { ProductType } from "../../types/app-interfaces";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { rgbToHex } from "@mui/system";
import { type } from "os";

const Product: React.FC<{
  product: ProductType;
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;
  const { product } = props;
  const productSrcName = product.name.replace(/\s/g, "");

  const [hideQuickShow, setHideQuickShow] = useState(true);
  const quickShowHandler = (e: React.MouseEvent) => {
    // Choose if quickshow should be hidden or shown based on event type (hover detection)
    e.type === "mouseenter" ? setHideQuickShow(false) : setHideQuickShow(true);
  };

  return (
    <Grid2 xs={3} height="fit-content">
      <Stack
        onMouseEnter={quickShowHandler}
        onMouseLeave={quickShowHandler}
        minWidth="200px"
        minHeight="fit-content"
        height="100%"
        px="1rem"
        py="1rem"
        border="2px solid"
        borderRadius="15px"
        borderColor={palette.secondary.light}
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
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={
              product.imgSrc ||
              `/products/electric-guitars/${productSrcName}.png`
            }
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

        <Typography
          height="40px"
          width="fit-content"
          sx={{
            flexGrow: 1,
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
              to="guitarId"
            >
              {
                <motion.span whileHover={{ textDecoration: "underline" }}>
                  {product.name}
                </motion.span>
              }
            </Link>
          }
        </Typography>

        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.primary.main}
          fontFamily={typography.h2.fontFamily}
          fontSize="23px"
          fontWeight="600"
          textAlign={"left"}
        >
          {`$${product.price}`}
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
            ml="0.3rem"
          >
            {`(${product.ratingsNum})` || "(0)"}
          </Typography>
        </Box>
      </Stack>
    </Grid2>
  );
};

export default Product;
