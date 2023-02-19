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
import AmplifierSvgIcon from "../UI/SvgIcons.tsx/AmplifierSvgIcon";

const AmplifiersCategory: React.FC<{
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

  const { palette } = useTheme();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const mouseClickHandler = () => {
    navigate("/amplifiers");
    props.onSelectCategory("amplifiers");
  };

  const animationAttributes = {
    variants: iconVariants,
    initial: "hidden",
    animate: isHovered || isSelected ? "draw" : "",
  };

  return (
    <Grid2 {...gridElementAttributes} sx={{}}>
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
        <AmplifierSvgIcon
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
          sx={{ position: "relative", left: "-20px", paddingInline: "25px" }}
        >
          Amplifiers
        </Typography>
      </IconButton>
    </Grid2>
  );
};

export default AmplifiersCategory;
