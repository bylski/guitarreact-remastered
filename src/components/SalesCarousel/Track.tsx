import React, { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import { SxProps, Box } from "@mui/system";
import { imgStyles } from "./styles/carouselStyles";

const Track: React.FC<{
  carouselImgs: string[];
  carouselPos: number;
  carouselElementStyles: SxProps;
  imgWidth: number;
  onCarouselReset: () => void;
}> = (props) => {
  const { carouselImgs, carouselElementStyles } = props;

  const images: JSX.Element[] = carouselImgs.map((imgSrc, i) => {
    const sxStyles: SxProps = {
      ...carouselElementStyles,
      paddingRight: "20px",
    };

    return (
      <Box key={`carouselElement${i}`} sx={{ ...sxStyles }}>
        <img style={imgStyles} src={imgSrc}></img>
      </Box>
    );
  });

  const imagesCpy1: JSX.Element[] = carouselImgs.map((imgSrc, i) => {
    const sxStyles: SxProps = {
      ...carouselElementStyles,
      paddingRight: "20px",
    };

    return (
      <Box key={`carouselElement${5 + i}`} sx={{ ...sxStyles }}>
        <img style={imgStyles} src={imgSrc}></img>
      </Box>
    );
  });

  const imagesCpy2: JSX.Element[] = carouselImgs.map((imgSrc, i) => {
    const sxStyles: SxProps = {
      ...carouselElementStyles,
      paddingRight: "20px",
    };

    return (
      <Box key={`carouselElement${10 + i}`} sx={{ ...sxStyles }}>
        <img style={imgStyles} src={imgSrc}></img>
      </Box>
    );
  });

  const [transitionStyle, setTransitionStyle] = useState("0.3s transform ease");

  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // if (trackRef.current) {
    //   trackRef.current.style.transition = "0.3s transform ease";
    // }
    if (Math.abs(props.carouselPos) === props.imgWidth * 5) {
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none";
        props.onCarouselReset();
      }, 300);
    } else {
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 300);
    }

  }, [props.carouselPos]);

  return (
    <Container
      ref={trackRef}
      maxWidth={false}
      disableGutters={true}
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "0px",
        willChange: "transform",
        transition: transitionStyle,
        transform: `translateX(${props.carouselPos}px)`,
      }}
    >
      {imagesCpy1}
      {images}
      {imagesCpy2}
    </Container>
  );
};

export default Track;
