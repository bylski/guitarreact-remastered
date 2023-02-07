import { Stack, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CartWindowItem from "./CartWindowItem";
import { CartProducts } from "../../types/cart-interfaces";
import ProductsDisplay from "../ProductsDisplay.tsx/ProductsDisplay";

const CartWindowItems: React.FC<{ items: CartProducts | null }> = (props) => {
  const { palette, typography } = useTheme();

  let cartItems: JSX.Element[] | null = null;
  if (props.items !== null) {
    cartItems = props.items.map((item) => {
      const { name, price, imgSrc } = item.product;
      const { quantity } = item;
      return <CartWindowItem name={name} price={price} quantity={quantity} imgSrc={imgSrc || "noimg"}/>;
    });
  }

  return (
    <Stack
      sx={{
        maxHeight: "65vh",
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
      {cartItems !== null ? cartItems : null}
    </Stack>
  );
};

export default CartWindowItems;
