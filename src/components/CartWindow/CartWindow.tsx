import { IconButton, Typography, Fade, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import React, { useContext, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../../store/AppContext";
import CartWindowItems from "./CartWindowItems";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { BackdropTypeMap } from "@mui/material";
import { ProductType } from "../../types/product-interfaces";

const CartWindow: React.FC = () => {
  const { palette, typography } = useTheme();
  const ctx = useContext(AppContext);

  // Compare the ref of the backdrop with the element clicked
  // This will ensure that CartWindow won't close when it is clicked on
  // But it will close when user clicks on backdrop
  const backdropRef =
    useRef<OverridableComponent<BackdropTypeMap<{}, "div">>>();

  const closeCartWindowByBackdropHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target;
    if ((target as object) === (backdropRef.current as object)) {
      ctx?.onCloseCartWindow();
    }
  };

  const closeCartWindowByButtonHandler = () => {
    ctx?.onCloseCartWindow();
  };

  let isCartWindowOpen = false;
  if (ctx?.isCartWindowOpen) {
    isCartWindowOpen = true;
  }

  let cartItems: { product: ProductType; quantity: number }[] | null = null;

  if (ctx?.cartItems !== undefined) {
    cartItems = ctx?.cartItems;
  }

  const countCartTotal = () => {
    let total = 0;

    if (cartItems) {
      cartItems.forEach((cartItem) => {
        total += cartItem.product.price * cartItem.quantity;
      });
    }

    return total;
  };

  return (
    <Backdrop
      ref={backdropRef}
      onClick={closeCartWindowByBackdropHandler}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isCartWindowOpen}
      transitionDuration={{ enter: 200, exit: 200 }}
    >
      <Fade in={isCartWindowOpen} unmountOnExit>
        <Box
          sx={{
            opacity: "1 !important",
            maxWidth: "650px",
            minWidth: "500px",
            width: "30%",
            height: "100%",
            position: "fixed",
            right: "0px",
            top: "0px",
            backgroundColor: palette.secondary.dark,
            borderLeft: `2px solid ${palette.primary.dark}`,
            zIndex: 1000000,
          }}
        >
          <Stack>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                backgroundColor: palette.primary.dark,
                paddingBlock: "1rem",
              }}
            >
              <Typography
                sx={{ flexGrow: 1 }}
                color={palette.secondary.contrastText}
                fontFamily={typography.h1.fontFamily}
                fontSize="25px"
                fontWeight="600"
                textAlign={"center"}
              >
                My Cart
              </Typography>
              <IconButton
                onClick={closeCartWindowByButtonHandler}
                size={"large"}
                sx={{ position: "absolute", right: "20px" }}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
            </Box>
            {cartItems !== null && cartItems.length !== 0 ? (
              <Typography
                sx={{
                  flexGrow: 1,
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                color={palette.secondary.contrastText}
                fontFamily={typography.h1.fontFamily}
                fontSize="18px"
                fontWeight="300"
                textAlign={"left"}
              >
                Recently Added Items:
              </Typography>
            ) : null}

            <CartWindowItems items={cartItems} />
            {cartItems !== null && cartItems.length !== 0 ? (
              <Typography
                sx={{
                  flexGrow: 1,
                  marginLeft: "1rem",
                  marginTop: "2rem",
                  alignSelf: "center",
                }}
                color={palette.primary.main}
                fontFamily={typography.h1.fontFamily}
                fontSize="23px"
                fontWeight="700"
                textAlign={"left"}
              >
                {`Total: ${countCartTotal().toFixed(2)}$`}
              </Typography>
            ) : null}
            {cartItems !== null && cartItems.length !== 0 ? (
              <Button
                variant="contained"
                sx={{
                  height: "4rem",
                  width: "300px",
                  alignSelf: "center",
                  marginTop: "2rem",
                  backgroundColor: palette.primary.onHoverDark,
                  borderRadius: "10px",
                  fontSize: 16,
                  "&:hover": {
                    backgroundColor: palette.primary.dark,
                  },
                }}
              >
                Proceed to checkout
              </Button>
            ) : null}
          </Stack>
        </Box>
      </Fade>
    </Backdrop>
  );
};

export default CartWindow;
