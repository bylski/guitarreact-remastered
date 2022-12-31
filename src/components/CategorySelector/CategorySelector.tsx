import React, { useContext } from "react";
import {  SxProps } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useTheme } from "@mui/material/styles";
import { Variants } from "framer-motion";
import GuitarsCategory from "./GuitarsCategory";
import AmplifiersCategory from "./AmplifiersCategory";
import AccessoriesCategory from "./AccessoriesCategory";
import { AppContext, AppContextType } from "../../store/AppContext";

const CategorySelector: React.FC = (props) => {
  const ctx = useContext(AppContext);
  const isContext = (ctx: AppContextType | null): ctx is AppContextType => {
    return (ctx as AppContextType).selectedCategory !== undefined
  }

  if (!isContext(ctx)) {
    throw new Error("No React Context was provided");
  }

  const { palette, typography } = useTheme();
  const gridElementAttributes = {
    display: "flex",
    justifyContent: "center",
    xs: 4,
  };

  const iconButtonSx: SxProps = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    transition: "background-color 0.2s ease",
    backgroundColor: palette.secondary.dark,
    border: `3px solid ${palette.secondary.light}`,
    "&:hover": {
      backgroundColor: palette.primary.onHoverDark,
      borderColor: palette.primary.onHoverLight
    },
  };

  const typographyAttributes = {
    fontSize: "20px",
    fontFamily: typography.h1.fontFamily,
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
    <Grid2 container columnSpacing={2} sx={{ height: "100px", marginTop: "50px", backgroundColor: palette.secondary.main }}>
      <GuitarsCategory
        onSelectCategory={ctx.onSelectCategory}
        isSelected={ctx.selectedCategory === "guitars"}
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}
      />
      <AmplifiersCategory
        onSelectCategory={ctx.onSelectCategory}
        isSelected={ctx.selectedCategory === "amplifiers"}
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}
      />
      <AccessoriesCategory
        onSelectCategory={ctx.onSelectCategory}
        isSelected={ctx.selectedCategory === "accessories"}
        animationVariant={iconVariants}
        iconButtonSx={iconButtonSx}
        typographyAttributes={typographyAttributes}
        gridElementAttributes={gridElementAttributes}
      />
    </Grid2>
  );
};

export default CategorySelector;
