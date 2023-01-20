import React, { useState } from "react";
import { SxProps, Box } from "@mui/system";
import { imgStyles } from "./styles/carouselStyles";

const Sale: React.FC<{ sxStyles: SxProps; imgSrc: string }> = (props) => {
  const [appliedStyles, setAppliedStyles] = useState<SxProps>(props.sxStyles);
  // box-shadow: 0px 9px 24px -14px rgba(32, 206, 249, 1);

  const onMouseEnter = (e: React.MouseEvent) => {
    console.log("Enter: ");
    console.log(e);
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
