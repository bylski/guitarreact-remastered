import { Stack, Box, Typography, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { createTextChangeRange } from "typescript";
import { AppContext } from "../../store/AppContext";
import { limitStr } from "../../utils/helper-functions/helper-functions";

const CartWindowItem: React.FC<{
  name: string;
  price: number;
  quantity: number;
  imgSrc: string;
}> = (props) => {
  const { palette, typography } = useTheme();

  const ctx = useContext(AppContext)
  const removeFromCartHandler = () => {
    ctx?.onRemoveFromCart(props.name);
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
          src={`/products/electric-guitars/${props.name}.png`}
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
            sx={{ paddingBottom: "0.3rem" }}
            color={palette.secondary.contrastText}
            fontFamily={typography.h1.fontFamily}
            fontSize="16px"
            fontWeight="300"
            textAlign={"left"}
          >
            { limitStr(props.name, 20) }
          </Typography>
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
          <Typography
            sx={{}}
            color={palette.primary.main}
            fontFamily={typography.h1.fontFamily}
            fontSize="20px"
            fontWeight="600"
            textAlign={"left"}
          >
            { `$${props.price}` }
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={removeFromCartHandler}
            title={"Delete from Cart"}
            sx={{ border: `3px solid ${palette.complementary.alert}` }}
            size="medium"
          >
            <DeleteSharpIcon
              sx={{ fill: palette.complementary.alert, fontSize: "20px" }}
              fontSize="medium"
            />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default CartWindowItem;
