import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Box, SxProps } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Controls from "./Controls";
import Track from "./Track";
import {
  getCarouselElementStyles,
  getCarouselTrackStyles,
} from "./styles/carouselStyles";

const SalesCarousel: React.FC = () => {
  const { palette } = useTheme();
  const imgWidth = 730;

  // STYLES
  const carouselElementStyles = getCarouselElementStyles(imgWidth);
  const trackStyles = getCarouselTrackStyles(imgWidth);

  // STATES
  const [carouselPos, setCarouselPos] = useState(0);
  const [inMotion, setInMotion] = useState(false);
  const [areControlsShown, setAreControlsShown] = useState(false);
  const [salesImgs, setSalesImgs] = useState([
    "/sale1.png",
    "/sale2.png",
    "/sale3.png",
    "/sale4.png",
    "/sale5.png",
  ]);

  useEffect(() => {
    setInMotion(true);
    setTimeout(() => {
      setInMotion(false);
    }, 300);
  }, [carouselPos]);

  // EVENT HANDLERS
  const onForwardBtn = () => {
    if (!inMotion) {
      setCarouselPos((prev) => prev - imgWidth);
    }
  };

  const onBackwardBtn = () => {
    if (!inMotion) {
      setCarouselPos((prev) => prev + imgWidth);
    }
  };

  const controlsShowHandler = () => {
    setAreControlsShown(true);
  };

  const controlsHideHandler = () => {
    setAreControlsShown(false);
  };

  const carousetResetHandler = () => {
    setCarouselPos(0);
  };


  return (
    <Box
      onMouseEnter={controlsShowHandler}
      onMouseLeave={controlsHideHandler}
      id={"carousel"}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: "290px",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          ...trackStyles,
        }}
      >
        <Controls
          imgWidth={imgWidth}
          areControlsShown={areControlsShown}
          backwardBtnAction={onBackwardBtn}
          forwardBtnAction={onForwardBtn}
        />
        <Track
          carouselImgs={salesImgs}
          carouselPos={carouselPos}
          carouselElementStyles={carouselElementStyles}
          imgWidth={imgWidth}
          onCarouselReset={carousetResetHandler}
        />
      </Container>
    </Box>
  );
};

export default SalesCarousel;
