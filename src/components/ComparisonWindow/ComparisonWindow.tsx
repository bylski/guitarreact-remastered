import { Box, Stack } from "@mui/system";
import React, { useState, useContext } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ComparedProduct from "./ComparedProduct";
import { ElectricGuitarProduct } from "../../types/product-interfaces";
import Slide from "@mui/material/Slide";
import { ProductType } from "../../types/product-interfaces";
import { AppContext } from "../../store/AppContext";

const ComparisonWindow: React.FC = (props) => {
  const ctx = useContext(AppContext);
  const { palette, typography } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseHandler = () => {
    ctx?.onSetCompareWindowState("collapse");
  };

  const { product1, product2 } = ctx?.comparedProducts || {
    product1: null,
    product2: null,
  };

  
  let isButtonDisabled = false;
  if (
    ctx?.comparedProducts.product1 === null ||
    ctx?.comparedProducts.product2 === null
  ) {
    isButtonDisabled = true;
  } else {
    isButtonDisabled = false;
  }

  return (
    <Slide in={!ctx?.isCompareWindowCollapsed} direction="up" unmountOnExit>
      <Stack
        sx={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          height: "150px",
          maxHeight: "300px",
          backgroundColor: palette.secondary.dark,
          borderTop: `3px solid ${palette.primary.dark}`,
          paddingBlock: "1.5rem",
          zIndex: "1000",
          background:
            "linear-gradient(180deg, rgba(0,102,128,0.96) 0%, rgba(5, 181, 225,0.92) 100%)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Tooltip title={"Collapse"}>
            <IconButton
              onClick={collapseHandler}
              sx={{ position: "absolute", top: "-10px", right: "6%", backgroundColor: palette.primary.dark, padding: "5px" }}
            >
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <ComparedProduct order="first" product={product1} />
          <Stack
            sx={{
              width: "fit-content",
              alignItems: "center",
              justifyContent: "center",
              paddingInline: "1.5rem",
            }}
          >
            <Button
              disabled={isButtonDisabled}
              sx={{
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
                paddingInline: "2rem",
                marginInline: "1rem",
                color: palette.primary.contrastText,
                borderWidth: "2px",
                borderColor: palette.primary.onHoverLight,
                "&:hover": {
                  borderWidth: "2px",
                  color: palette.primary.main,
                  svg: { fill: palette.primary.main },
                },
                "&:disabled": {
                  borderWidth: "2px",
                  color: palette.secondary.grayedOutText,
                  svg: { fill: palette.secondary.grayedOutText },
                },
              }}
              variant="outlined"
            >
              Compare{" "}
              <CompareArrowsIcon
                sx={{
                  fontSize: "30px",
                  fill: palette.primary.contrastText,
                }}
              />
            </Button>
          </Stack>
          <ComparedProduct order="second" product={product2} />
        </Box>
      </Stack>
    </Slide>
  );
};

export default ComparisonWindow;
