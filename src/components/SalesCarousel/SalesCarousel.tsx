import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import CSS from "csstype";

const SalesCarousel: React.FC = () => {
  const { palette } = useTheme();

  const imgStyles: CSS.Properties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  };


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
        <Grid2
          sx={{
            height: "325px",
            width: "840px",
            minWidth: "840px",
          }}
          xs={4}
        >
          <img style={imgStyles} src="/sale1.png"></img>
        </Grid2>
        {/* The middle child is the main one. That's where the controls are located*/}
        <Grid2
          sx={{
            height: "325px",
            width: "840px",
            minWidth: "840px",
            position: "relative",
          }}
          xs={4}
        >
          <img style={imgStyles} src="/sale2.png"></img>
          <IconButton
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
        <Grid2
          sx={{ height: "325px", width: "840px", minWidth: "840px" }}
          xs={4}
        >
          <img
            style={imgStyles}
            src="/sale3.png"
          ></img>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SalesCarousel;
