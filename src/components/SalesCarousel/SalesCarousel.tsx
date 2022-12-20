import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, SxProps } from "@mui/system";
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
  const imgWidth = 800;

  const imgStyles: CSS.Properties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    filter: "brightness(90%)",
    WebkitFilter: "brightness(90%)",
    borderRadius: "15px",
    overflow: "hidden",
  };

  const carouselElementStyles: SxProps = {
    boxSizing: "border-box",
    height: "100%",
    width: `${imgWidth}px`,
    minWidth: `${imgWidth}px`,
    position: "relative",
    // border: "1px solid transparent",
  };

  const [salesImgs, setSalesImgs] = useState([
    "/sale1.png",
    "/sale2.png",
    "/sale3.png",
    "/sale4.png",
    "/sale5.png",
  ]);

  const [carouselPos, setCarouselPos] = useState(0);

  const forwardBtnHandler = () => {
    setCarouselPos((prev) => prev - imgWidth);
  };

  const backwardBtnHandler = () => {
    setCarouselPos((prev) => prev + imgWidth);
  };

  const images: JSX.Element[] = salesImgs.map((imgSrc, i) => {
    const sxStyles: SxProps =
      i !== salesImgs.length
        ? { ...carouselElementStyles, paddingRight: "20px" }
        : carouselElementStyles;

    return (
      <Box key={`carouselElement${i}`} sx={{ ...sxStyles }}>
        <img style={imgStyles} src={imgSrc}></img>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: "325px",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          height: "100%",
          maxWidth: `calc(${imgWidth}px * 3)`,
          width: `calc(${imgWidth}px * 3)`,
          overflow: "hidden",
          position: "relative",
          top: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
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
        {/* CAROUSEL'S TRACK */}
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "0px",
            willChange: "transform",
            transition: "0.3s transform ease",
            transform: `translateX(${carouselPos}px)`,
          }}
        >
          {images}
        </Container>
      </Container>
    </Box>
  );
};

export default SalesCarousel;
