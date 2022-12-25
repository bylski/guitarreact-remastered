import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

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
          backgroundColor: palette.primary.dark,
          paddingInline: "1.5rem",
          borderRadius: "0",
          transition: "0.2s background-color ease-in",
        },
        {
          "&:hover": {
            backgroundColor: palette.primary.onHoverLight,
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
        fontSize="21px"
        fontWeight="600"
        marginRight="0.5rem"
        sx={{ flexGrow: 1, [breakpoints.down("md")]: { fontSize: "16px" } }}
      >
        Cart
      </Typography>
      {/* <Badge
        badgeContent={5}
        overlap="rectangular"
        max={99}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={[
          { color: palette.secondary.contrastText },
          {
            "& span": {
              backgroundColor: "white",
              border: "2px solid red",
              color: "red",
              right: "-2px",
              top: "-2px"
            },
          },
        ]}
      > */}
        <ShoppingCartIcon
          // fontSize={"medium"}
          sx={{
            fontSize: "24px",
            fill: "white",
            transition: "0.2s ease-in-out",
            [breakpoints.down("md")]: { fontSize: "18px" },
          }}
        />
      {/* </Badge> */}
    </IconButton>
  );
};

export default Cart;
