import React, { useState, useEffect } from "react";
import { SxProps, Box } from "@mui/system";
import { imgStyles } from "./styles/carouselStyles";
import { useTheme } from "@mui/material/styles";

const Sale: React.FC<{ sxStyles: SxProps; imgSrc: string }> = (props) => {
  const theme = useTheme();
  const [appliedStyles, setAppliedStyles] = useState<SxProps>(props.sxStyles);
  // box-shadow: 0px 9px 24px -14px rgba(32, 206, 249, 1);
  useEffect(() => {
    setAppliedStyles(props.sxStyles)
  }, [props.sxStyles]);

  const onMouseEnter = (e: React.MouseEvent) => {
    setAppliedStyles((prev: SxProps) => ({
      ...prev,
      transform: "scale(1.01)",
    }));
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    setAppliedStyles(props.sxStyles);
  };

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{ ...appliedStyles, "&:hover": { cursor: "pointer" } }}
    >
      <img style={imgStyles} src={props.imgSrc}></img>
    </Box>
  );
};

export default Sale;
