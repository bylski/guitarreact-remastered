import React, { useState } from "react";
import { Box, SxProps } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useTheme } from "@mui/material/styles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Variants, motion } from "framer-motion";
import path from "node:path/win32";
import GuitarsCategory from "./GuitarsCategory";
import AmplifiersCategory from "./AmplifiersCategory";
import AccessoriesCategory from "./AccessoriesCategory";

const CategorySelector: React.FC = (props) => {
  const { palette, typography } = useTheme();
  const gridElementAttributes = {
    display: "flex",
    justifyContent: "center",
    xs: 4,
  };

  const iconButtonSx: SxProps = {
    width: "100%",
    height: "100%",
    borderRadius: "0",
    // display: "flex",
    // flexDirection: "column",
    // border: `1px solid ${palette.primary.main}`,

    backgroundColor: palette.secondary.dark,
    "&:hover": {
      backgroundColor: palette.primary.onHoverDark,
    },
  };

  const typographyAttributes = {
    fontSize: "20px",
    fontFamily: typography.h1.fontFamily,

    // color: palette.primary.main,
  };

  const iconVariants: Variants = {
    hidden: {
      transition: { duration: 0.7 },
      pathLength: [1, 0],
      opacity: 0,
    },
    draw: {
      opacity: 1,
      transition: { duration: 0.7 },
      pathLength: [0, 1],
    },
  };

  return (
    <Grid2 container sx={{ width: "100%", height: "100px", marginTop: "50px" }}>
      <GuitarsCategory
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}
      />
    <AmplifiersCategory
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}
      />
      <AccessoriesCategory 
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}/>
    </Grid2>
  );
};

export default CategorySelector;
