import { Box, Stack } from "@mui/system";
import React, { useState, useContext } from "react";
import { Button, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fade, Slide } from "@mui/material";
import { ProductType } from "../../types/product-interfaces";
import { AppContext } from "../../store/AppContext";
import Fab from "@mui/material/Fab";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ComparisonWindowExpander: React.FC = (props) => {
  const ctx = useContext(AppContext);
  const { palette, typography } = useTheme();

  const expandHandler = () => {
    ctx?.onSetCompareWindowState("expand");
  };

  return (
    <Slide
      direction="up"
      in={
        ctx?.isCompareWindowCollapsed &&
        (ctx.comparedProducts.product1 !== null || ctx.comparedProducts.product2 !== null)
      }
    >
      <Tooltip title="Expand Product Comparison">
        <Fab
          onClick={expandHandler}
          variant="extended"
          sx={{
            position: "fixed",
            bottom: "-5px",
            right: "5%",
            paddingInline: "2rem",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            backgroundColor: "rgba(0,102,128,0.96)",
            transition: "0.2s ease",
            "&:hover": {
              backgroundColor: palette.primary.onHoverLight,
            },
          }}
        >
          <ExpandLessIcon sx={{ fill: palette.primary.contrastText }} />
        </Fab>
      </Tooltip>
    </Slide>
  );
};

export default ComparisonWindowExpander;
