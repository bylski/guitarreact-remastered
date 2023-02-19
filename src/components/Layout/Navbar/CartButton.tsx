import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { AppContext } from "../../../store/AppContext";

const Cart: React.FC = (props) => {
  const { palette, breakpoints } = useTheme();
  const ctx = useContext(AppContext);

  const openCartHandler = () => {
    ctx?.onOpenCartWindow();
  };

  console.log(ctx?.cartItemsQuantity)

  return (
    <IconButton
      onClick={openCartHandler}
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
        fontSize="19px"
        fontWeight="600"
        marginRight="0.5rem"
        sx={{ flexGrow: 1, [breakpoints.down("md")]: { fontSize: "16px" } }}
      >
        Cart
      </Typography>
      <Badge color="error" overlap={"rectangular"} max={99} sx={{ color: palette.primary.contrastText}} badgeContent={ctx?.cartItemsQuantity}>
        <ShoppingCartIcon
          sx={{
            position: "relative",
            top: "-1px",
            fontSize: "21px",
            fill: "white",
            transition: "0.2s ease-in-out",
            [breakpoints.down("md")]: { fontSize: "18px" },
          }}
        />
      </Badge>
    </IconButton>
  );
};

export default Cart;
