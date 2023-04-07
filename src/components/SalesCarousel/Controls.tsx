import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import Fade from '@mui/material/Fade';
import { useMediaQuery } from "@mui/material";

const Controls: React.FC<{
  imgWidth: number;
  areControlsShown: boolean;
  backwardBtnAction: () => void;
  forwardBtnAction: () => void;
}> = React.forwardRef((props, ref) => {
  const { imgWidth } = props;
  const { palette, breakpoints } = useTheme();

  const forwardBtnHandler = () => {
    props.forwardBtnAction();
  };

  const backwardBtnHandler = () => {
    props.backwardBtnAction();
  };

  
  
  const [controlsWidth, setControlsWidth] = useState(imgWidth)
  useEffect(() => {
    setControlsWidth(imgWidth);
  }, [imgWidth])

  return (
    <Fade in={props.areControlsShown}>
      <Box
      id="carousel-controls"
        ref={ref}
        sx={{
          height: "100%",
          width: `${controlsWidth}px`,
          minWidth: `${controlsWidth}px`,
          position: "absolute",
          paddingRight: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "0px",
          zIndex: "5",
          pointerEvents: "none",
        }}
      >
        <IconButton
          onClick={backwardBtnHandler}
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: palette.complementary.background,
            pointerEvents: "all",
            "&:hover": {
              backgroundColor: palette.primary.main,
            },
          }}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: "26px",
              fill: palette.secondary.contrastText,
              display: "flex",
              position: "relative",
              right: "-3px",
              [breakpoints.down("sm")]: {
                fontSize: "20px",
              }
            }}
          />
        </IconButton>
        <IconButton
          onClick={forwardBtnHandler}
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: palette.complementary.background,
            pointerEvents: "all",
            "&:hover": {
              backgroundColor: palette.primary.main,
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: "26px",
              fill: palette.secondary.contrastText,
              display: "flex",
              position: "relative",
              left: "3px",
              [breakpoints.down("sm")]: {
                fontSize: "20px",
              }
            }}
          />
        </IconButton>
      </Box>
    </Fade> 
  );
});

export default Controls;
