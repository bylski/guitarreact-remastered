import {
  Stack,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { createTextChangeRange } from "typescript";
import { AppContext } from "../../store/AppContext";
import { limitStr } from "../../utils/helper-functions/helper-functions";
import { CartProduct } from "../../types/cart-interfaces";
import { ProductType } from "../../types/product-interfaces";

const CartWindowItem: React.FC<{
  name: string;
  price: number;
  quantity: number;
  imgSrc: string;
  productType:
    | "electric guitar"
    | "acoustic guitar"
    | "amplifier"
    | "accessory"
    | undefined;
}> = (props) => {
  const { palette, typography } = useTheme();

  const ctx = useContext(AppContext);
  const removeFromCartHandler = () => {
    ctx?.onRemoveFromCart(props.name);
  };

  let imagePath = "";
  switch (props.productType) {
    case "electric guitar":
      imagePath = "products/electric-guitars";
      break;
    case "acoustic guitar":
      imagePath = "products/acoustic-guitars";
      break;
    case "accessory":
      imagePath = "products/accessories";
      break;
    case "amplifier":
      imagePath = "products/amplifiers";
      break;
  }


  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "200px",
        display: "flex",
        borderTop: `2px solid ${palette.secondary.light}`,
        paddingInline: "1.5rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "150px",
          maxHeight: "150px",
          paddingInline: "0.5rem",
          paddingBlock: "0.5rem",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={`/${imagePath}/${props.name}.png`}
        ></img>
      </Box>
      <Stack
        sx={{
          paddingBlock: "1rem",
          paddingLeft: "1rem",
          paddingRight: "2.5rem",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{ paddingBottom: "0.1rem" }}
            color={palette.secondary.contrastText}
            fontFamily={typography.h1.fontFamily}
            fontSize="16px"
            fontWeight="300"
            textAlign={"left"}
          >
            {limitStr(props.name, 20)}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              paddingBottom: "0.2rem",
            }}
          >
            <Typography
              sx={{}}
              color={palette.secondary.contrastText}
              fontFamily={typography.h1.fontFamily}
              fontSize="13px"
              fontWeight="400"
              textAlign={"left"}
            >
              {`Quantity: ${props.quantity}`}
            </Typography>
            <Box sx={{ marginLeft: "0.5rem" }}>
              <Button
                onClick={() => ctx?.onIncrementItem(props.name)}
                variant="outlined"
                sx={{
                  width: "20px",
                  maxWidth: "25px",
                  minWidth: "0px",
                  minHeight: "0px",
                  height: "20px",
                  padding: "0",
                  paddingInline: "0.1rem",
                  marginRight: "0.5rem",
                  fontSize: "12px",
                }}
              >
                +
              </Button>
              <Button
                onClick={() => ctx?.onDecrementItem(props.name)}
                variant="outlined"
                sx={{
                  width: "20px",
                  minWidth: "0px",
                  minHeight: "0px",
                  height: "20px",
                  padding: "0",
                  paddingInline: "0.1rem",
                  fontSize: "12px",
                }}
              >
                -
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{}}
            color={palette.primary.main}
            fontFamily={typography.h1.fontFamily}
            fontSize="20px"
            fontWeight="600"
            textAlign={"left"}
          >
            {`$${props.price}`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title={"Delete from Cart"}>
            <IconButton
              onClick={removeFromCartHandler}
              sx={{ border: `3px solid ${palette.complementary.alert}` }}
              size="medium"
            >
              <DeleteSharpIcon
                sx={{ fill: palette.complementary.alert, fontSize: "20px" }}
                fontSize="medium"
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </Box>
  );
};

export default CartWindowItem;
