import { SxProps } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Categories } from "../../store/AppContext";
import { useNavigate } from "react-router";
import GuitarSvgIcon from "../UI/SvgIcons.tsx/GuitarSvgIcon";

const GuitarsCategory: React.FC<{
  animationVariant: Variants;
  iconButtonSx: SxProps;
  gridElementAttributes: Object;
  typographyAttributes: Object;
  isSelected: boolean;
  onSelectCategory: (selectedCategory: Categories) => void;
}> = (props) => {
  const {
    isSelected,
    animationVariant: iconVariants,
    gridElementAttributes,
    typographyAttributes,
    iconButtonSx,
  } = props;

  const navigate = useNavigate();
  const { palette } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const mouseClickHandler = () => {
    navigate("/guitars");
    props.onSelectCategory("guitars");
  };

  const animationAttributes = {
    variants: iconVariants,
    initial: "hidden",
    animate: isHovered || isSelected ? "draw" : "",
  };

  return (
    <Grid2 {...gridElementAttributes}>
      <IconButton
        sx={
          isSelected
            ? {
                ...iconButtonSx,
                backgroundColor: `${palette.primary.dark} !important`,
                borderColor: `${palette.primary.main} !important`,
              }
            : { ...iconButtonSx }
        }
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={mouseClickHandler}
      >
        <GuitarSvgIcon
          sx={{
            fontSize: "32px",
            fill: "white",
            position: "relative",
            left: "-5px",
            top: "-8px",
          }}
          fill={palette.secondary.contrastText}
          additionalAttributes={animationAttributes}
        />
        <Typography
          {...typographyAttributes}
          sx={{ position: "relative", left: "-20px", paddingInline: "20px" }}
        >
          Guitars
        </Typography>
      </IconButton>
    </Grid2>
  );
};

export default GuitarsCategory;
