import CSS from "csstype";
import { SxProps } from "@mui/system";

const imgStyles: CSS.Properties = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
  filter: "brightness(90%)",
  WebkitFilter: "brightness(90%)",
  borderRadius: "15px",
  overflow: "hidden",
};

function getCarouselTrackStyles(imgWidth: number): SxProps {
    return {
    height: "100%",
    maxWidth: `calc(${imgWidth}px * 3)`,
    width: `calc(${imgWidth}px * 3)`,
    overflow: "hidden",
    position: "relative",
    top: "0px",
    display: "flex",
    justifyContent: "center",
    };
}

function getCarouselElementStyles(imgWidth: number): SxProps {
  return {
    boxSizing: "border-box",
    height: "100%",
    width: `${imgWidth}px`,
    minWidth: `${imgWidth}px`,
    position: "relative",
  };
}

export { imgStyles, getCarouselElementStyles, getCarouselTrackStyles }
