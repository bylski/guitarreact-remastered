import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import CSS from "csstype";
import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";

const SalesCarousel: React.FC = () => {
  const { palette } = useTheme();

  const imgStyles: CSS.Properties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "15px",
    filter: "brightness(90%)",
    WebkitFilter: "brightness(90%)",
  };

  const [salesImgs, setSalesImgs] = useState([
    "/sale1.png",
    "/sale2.png",
    "/sale3.png",
  ]);

  const forwardBtnHandler = () => {
  };

  const backwardBtnHandler = () => {
  };

  const images: JSX.Element[] = salesImgs.map((imgSrc, i) => {
    if (i == 1) {
      return (
        <Grid2
          key={`carouselElement${i}`}
          sx={{
            height: "325px",
            width: "840px",
            minWidth: "840px",
            position: "relative",
          }}
          xs={4}
        >
          <img style={imgStyles} src={imgSrc}></img>
          <IconButton
            onClick={backwardBtnHandler}
            sx={{
              position: "absolute",
              width: "fit-content",
              height: "fit-content",
              left: "-10px",
              top: "145px",
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
              position: "absolute",
              width: "fit-content",
              height: "fit-content",
              right: "-10px",
              top: "145px",
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
        </Grid2>
      );
    } else {
      return (
        <Grid2
          key={`carouselElement${i}`}
          sx={{
            height: "325px",
            width: "840px",
            minWidth: "840px",
          }}
          xs={4}
        >
          <Fade mountOnEnter in={true}>
            <img style={imgStyles} src={imgSrc}></img>
          </Fade>
        </Grid2>
      );
    }
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        spacing={2}
        flexWrap="nowrap"
        sx={{
          height: "fit-content",
          maxWidth: "2520px",
          paddingInline: 0,
          position: "absolute",
          overflow: "hidden",
          top: "0px",
        }}
      >
        {images}
        {/* <Grid2
          sx={{
            height: "325px",
            width: "840px",
            minWidth: "840px",
          }}
          xs={4}
        >
          <img style={imgStyles} src="/sale1.png"></img>
        </Grid2>
  
        <Grid2
          sx={{ height: "325px", width: "840px", minWidth: "840px" }}
          xs={4}
        >
          <img
            style={imgStyles}
            src="/sale3.png"
          ></img>
        </Grid2> */}
      </Grid2>
    </Box>
  );
};

export default SalesCarousel;
