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
import useMediaQuery from "@mui/material/useMediaQuery";

const SalesCarousel: React.FC = () => {
  const { palette } = useTheme();
  const matchesDesktop = useMediaQuery("@media (hover: hover)");
  const matchesSemiSm = useMediaQuery("(max-width: 1000px)");
  const matchesSm = useMediaQuery("(max-width: 750px)");
  const matchesXs = useMediaQuery("(max-width: 500px)");
  const [currentMediaQuery, setCurrentMediaQuery] = useState<
    "semiSm" | "lg" | "sm" | "xs"
  >((): "semiSm" | "lg" | "sm" | "xs" => {
    if (matchesSemiSm) {
      return "semiSm";
    }
    if (matchesSm) {
      return "sm";
    }
    if (matchesXs) {
      return "sm";
    } else {
      return "lg";
    }
  });
  let imgWidth = 730;
  let imgHeight = 290;
  if (matchesSemiSm) {
    imgWidth = 530;
    imgHeight = 200;
  }
  if (matchesSm) {
    imgWidth = 450;
    imgHeight = 180;
  }
  if (matchesXs) {
    imgWidth = 330;
    imgHeight = 130;
  }

  useEffect(() => {
    if (matchesSemiSm) {
      setCurrentMediaQuery("semiSm");
    }
    if (matchesSm) {
      setCurrentMediaQuery("sm");
    }
    if (matchesXs) {
      setCurrentMediaQuery("sm");
    } else {
      setCurrentMediaQuery("lg");
    }
  }, [matchesSemiSm]);

  // STYLES
  let carouselElementStyles = getCarouselElementStyles(imgWidth);
  let trackStyles = getCarouselTrackStyles(imgWidth);
  // STATES
  const [carouselPos, setCarouselPos] = useState(0);
  const [inMotion, setInMotion] = useState(false);
  const [areControlsShown, setAreControlsShown] = useState(
    matchesDesktop ? false : true
  );
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
    if (matchesDesktop) {
      setAreControlsShown(false);
    }
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
        height: `${imgHeight}px`,
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
