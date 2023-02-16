import { Box, Stack } from "@mui/system";
import React, { useContext } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ProductType } from "../../types/product-interfaces";
import { AppContext } from "../../store/AppContext";

const ComparedProduct: React.FC<{
  order: "first" | "second";
  product: ProductType;
}> = (props) => {
  const { palette, typography } = useTheme();
  const ctx = useContext(AppContext)

  const removeComapredHandler = () => {
    ctx?.onRemoveProductToCompare(props.product)
  }

  return (
    <Box
      sx={{
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <Tooltip title={"Remove"}>
        <IconButton
        onClick={removeComapredHandler}
          sx={
            props.order === "first"
              ? {
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                }
              : {
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                }
          }
        >
          <RemoveCircleOutlineIcon
            sx={{ fill: palette.complementary.alert }}
            fontSize="medium"
          />
        </IconButton>
      </Tooltip>
      {props.order === "second" ? (
        <img
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          src={`products/electric-guitars/${props.product.name}.png`}
        ></img>
      ) : null}
      <Box>
        <Typography
          sx={{ marginTop: "2rem" }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h1.fontFamily}
          fontSize="14px"
          fontWeight="500"
          textAlign={"center"}
          width="150px"
        >
          {props.product.name}
        </Typography>
      </Box>
      {props.order === "first" ? (
        <img
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          src={`products/electric-guitars/${props.product.name}.png`}
        ></img>
      ) : null}
    </Box>
  );
};

export default ComparedProduct;
