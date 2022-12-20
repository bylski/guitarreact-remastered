import React from "react";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import Fade from '@mui/material/Fade';

const Controls: React.FC<{
  imgWidth: number;
  areControlsShown: boolean;
  backwardBtnAction: () => void;
  forwardBtnAction: () => void;
}> = React.forwardRef((props, ref) => {
  const { imgWidth } = props;
  const { palette } = useTheme();

  const forwardBtnHandler = () => {
    props.forwardBtnAction();
  };

  const backwardBtnHandler = () => {
    props.backwardBtnAction();
  };

  return (
    <Fade in={props.areControlsShown}>
      <Box
        ref={ref}
        sx={{
          height: "100%",
          width: `${imgWidth}px`,
          minWidth: `${imgWidth}px`,
          position: "absolute",
          paddingRight: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "0px",
          zIndex: "5",
        }}
      >
        <IconButton
          onClick={backwardBtnHandler}
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "#000000",
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
            }}
          />
        </IconButton>
        <IconButton
          onClick={forwardBtnHandler}
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "#000000",
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
            }}
          />
        </IconButton>
      </Box>
    </Fade> 
  );
});

export default Controls;
