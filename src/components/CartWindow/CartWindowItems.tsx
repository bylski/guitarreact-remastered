import { Stack, Box, Typography, IconButton } from "@mui/material";
import React, { Fragment } from "react";
import { useTheme } from "@mui/material/styles";
import CartWindowItem from "./CartWindowItem";
import { CartProducts } from "../../types/cart-interfaces";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

const CartWindowItems: React.FC<{ items: CartProducts | null }> = (props) => {
  const { palette, typography } = useTheme();

  let cartItems: JSX.Element[] | null = null;
  if (props.items !== null) {
    cartItems = props.items.map((item, i) => {
      const { name, price, imgSrc, productType } = item.product;
      const { quantity } = item;
      return (
        <Collapse key={name}>
          <CartWindowItem
            name={name}
            price={price}
            quantity={quantity}
            imgSrc={imgSrc || "noimg"}
            key={name}
            productType={productType}
          />
        </Collapse>
      );
    });
  }

  const noItemsFallback = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={true}>
        <Typography
          sx={{ marginTop: "2rem" }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h1.fontFamily}
          fontSize="32px"
          fontWeight="400"
          textAlign={"center"}
        >
          Your cart is empty!
        </Typography>
      </Fade>
      <ProductionQuantityLimitsOutlinedIcon sx={{marginTop: "1rem", fontSize: "80px"}} />
    </Box>
  );

  return (
    <Stack
      sx={{
        maxHeight: "50vh",
        paddingTop: "1rem",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "5px",
          height: "10px",
          backgroundColor: palette.secondary.dark,
        },
        "&::-webkit-scrollbar-thumb": {
          width: "5px",
          height: "10px",
          backgroundColor: palette.secondary.light,
        },
        "&::-webkit-scrollbar-track": { color: "green" },
      }}
    >
      <TransitionGroup>
        {cartItems !== null && cartItems.length !== 0
          ? cartItems
          : noItemsFallback}
      </TransitionGroup>
    </Stack>
  );
};

export default CartWindowItems;
