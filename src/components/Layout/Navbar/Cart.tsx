import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart: React.FC = (props) => {
  const { palette, breakpoints } = useTheme();
  return (
    <IconButton
      sx={[
        {
          height: "100%",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: palette.primary.main,
          paddingInline: "1.5rem",
          borderRadius: "0",
          transition: "0.2s background-color ease-in"
        },
        {
          "&:hover": {
            backgroundColor: palette.primary.onHover,
          },
        },
        {
          "&:hover svg": {
            transform: "rotate(-30deg)",
          },
        },
      ]}
      color="primary"
    >
      <Typography
        color={"white"}
        variant="h1"
        fontSize="20px"
        fontWeight="600"
        marginRight="0.5rem"
        sx={{ flexGrow: 1, [breakpoints.down("md")]: {fontSize: "16px"} }}
      >
        Cart
      </Typography>
      <ShoppingCartIcon
        // fontSize={"medium"}
        sx={{
          fontSize: "22px",
          fill: "white",
          transition: "0.2s ease-in-out",
          [breakpoints.down("md")]: {fontSize: "18px"}
        }}
      />
    </IconButton>
  );
};

export default Cart;
