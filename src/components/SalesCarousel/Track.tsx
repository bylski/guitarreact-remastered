import React, { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import { SxProps, Box } from "@mui/system";
import { imgStyles } from "./styles/carouselStyles";
import { motion } from "framer-motion";
import Sale from "./Sale";

const Track: React.FC<{
  carouselImgs: string[];
  carouselPos: number;
  carouselElementStyles: SxProps;
  imgWidth: number;
  onCarouselReset: () => void;
}> = (props) => {
  const { carouselImgs, carouselElementStyles } = props;

  const [trackImgWidth, setTrackImgWidth] = useState(props.imgWidth);
  useEffect(() => {
    setTrackImgWidth(props.imgWidth)
  }, [props.imgWidth])

  const sxStyles: SxProps = {
    ...carouselElementStyles,
    paddingRight: "20px",
    transition: "0.2s ease",
    top: "0px",
  };

  const images: JSX.Element[] = carouselImgs.map((imgSrc, i) => {

    return (
      <Sale key={`carouselSale${i}`} sxStyles={sxStyles} imgSrc={imgSrc} />
    );
  });

  const imagesCpy1: JSX.Element[] = carouselImgs.map((imgSrc, i) => {


    return (
      <Sale
        key={`carouselElement${5 + i}`}
        sxStyles={sxStyles}
        imgSrc={imgSrc}
      />
    );
  });

  const imagesCpy2: JSX.Element[] = carouselImgs.map((imgSrc, i) => {


    return (
      <Sale
      key={`carouselElement${10 + i}`}
      sxStyles={sxStyles}
      imgSrc={imgSrc}
    />
    );
  });

  const [transitionStyle, setTransitionStyle] = useState("0.3s transform ease");

  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // if (trackRef.current) {
    //   trackRef.current.style.transition = "0.3s transform ease";
    // }
    if (Math.abs(props.carouselPos) === trackImgWidth * 5) {
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none";
        props.onCarouselReset();
      }, 300);
    } else {
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 300);
    }
  }, [props.carouselPos, trackImgWidth]);

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
