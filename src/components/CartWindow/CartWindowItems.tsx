import { Stack, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CartWindowItem from "./CartWindowItem";

const CartWindowItems: React.FC = () => {
  const { palette, typography } = useTheme();

  return (
    <Stack
      sx={{
        maxHeight: "65vh",
        paddingTop: "1rem",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": { width: "5px", height: "10px" , backgroundColor: palette.secondary.dark},
        "&::-webkit-scrollbar-thumb": { width: "5px", height: "10px" , backgroundColor: palette.secondary.light},
        "&::-webkit-scrollbar-track": { color: "green" },
      }}
    >
      <CartWindowItem />
      <CartWindowItem />
      {/* <CartWindowItem />
      <CartWindowItem />
      <CartWindowItem />
      <CartWindowItem />
      <CartWindowItem /> */}
    </Stack>
  );
};

export default CartWindowItems;
