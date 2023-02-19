import { Box, Stack } from "@mui/system";
import React, { Fragment, useContext } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import {
  Button,
  Typography,
  IconButton,
  Tooltip,
  SvgIcon,
  Fade,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ProductType } from "../../types/product-interfaces";
import { AppContext } from "../../store/AppContext";
import GuitarSvgIcon from "../UI/SvgIcons.tsx/GuitarSvgIcon";
import AmplifierSvgIcon from "../UI/SvgIcons.tsx/AmplifierSvgIcon";
import AccessoriesSvgIcon from "../UI/SvgIcons.tsx/AccessoriesSvgIcon";

const ComparedProduct: React.FC<{
  order: "first" | "second";
  product: ProductType | null;
}> = (props) => {
  const { palette, typography } = useTheme();
  const ctx = useContext(AppContext);

  const removeComapredHandler = () => {
    if (props.product !== null) {
      ctx?.onRemoveProductToCompare(props.product);
    }
  };

  const noProductFallback: JSX.Element = (
    <Fade in={true}>
      <Box
        sx={{
          width: "fit-content",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "2rem",
        }}
      >
        {ctx?.selectedCategory === "guitars" ? (
          <GuitarSvgIcon
            sx={{
              fontSize: "64px",
              position: "relative",
              top: "-4px",
              paddingRight: "1rem",
            }}
            fill={palette.secondary.grayedOutText as string}
          />
        ) : null}
        {ctx?.selectedCategory === "amplifiers" ? (
          <AmplifierSvgIcon
            sx={{
              fontSize: "64px",
              position: "relative",
              top: "-4px",
              paddingRight: "1rem",
            }}
            fill={palette.secondary.grayedOutText as string}
          />
        ) : null}
        {ctx?.selectedCategory === "accessories" ? (
          <AccessoriesSvgIcon
            sx={{
              fontSize: "64px",
              position: "relative",
              top: "-4px",
              paddingRight: "1rem",
            }}
            fill={palette.secondary.grayedOutText as string}
          />
        ) : null}

        <Typography
          color={palette.secondary.grayedOutText}
          fontFamily={typography.h1.fontFamily}
          fontSize="12spx"
          fontWeight="400"
          textAlign={"center"}
          width="150px"
        >
          {ctx?.selectedCategory === "guitars"
            ? "Add another Guitar to compare"
            : ""}
          {ctx?.selectedCategory === "amplifiers"
            ? "Add another Amplifier to compare"
            : ""}
          {ctx?.selectedCategory === "accessories"
            ? "Add another Accessory to compare"
            : ""}
        </Typography>
      </Box>
    </Fade>
  );

  return (
    <Box
      sx={
        props.order === "first"
          ? {
              height: "100%",
              maxHeight: "100%",
              display: "flex",
              flexBasis: "100%",
              justifyContent: "right",
            }
          : {
              height: "100%",
              maxHeight: "100%",
              display: "flex",
              flexBasis: "100%",
              justifyContent: "left",
            }
      }
    >
      {props.product !== null ? (
        <Box
          sx={{ display: "flex", width: "fit-content", position: "relative" }}
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
              src={`products/electric-guitars/${props.product?.name}.png`}
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
              {props.product?.name}
            </Typography>
          </Box>
          {props.order === "first" ? (
            <img
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
              src={`products/electric-guitars/${props.product?.name}.png`}
            ></img>
          ) : null}
        </Box>
      ) : (
        noProductFallback
      )}
    </Box>
  );
};

export default ComparedProduct;
