import { Box, Stack } from "@mui/system";
import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Button, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ComparisonWindow: React.FC = (props) => {
  const { palette, typography } = useTheme();

  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "150px",
        maxHeight: "300px",
        backgroundColor: palette.secondary.dark,
        borderTop: `3px solid ${palette.primary.dark}`,
        paddingBlock: "1.5rem",
        zIndex: "1000",
        background:
          "linear-gradient(180deg, rgba(0,102,128,0.96) 0%, rgba(5, 181, 225,0.92) 100%)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Tooltip title={"Collapse"}>
          <IconButton sx={{ position: "absolute", top: "-10px", right: "5%" }}>
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            height: "100%",
            maxHeight: "100%",
            display: "flex",
            // border: `1px solid ${palette.primary.main}`,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Tooltip title={"Collapse"}>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "0",
                  paddingLeft: "0",
                }}
              >
                <RemoveCircleOutlineIcon
                  sx={{ fill: palette.complementary.alert }}
                  fontSize="medium"
                />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{ marginTop: "2rem" }}
              color={palette.secondary.contrastText}
              fontFamily={typography.h1.fontFamily}
              fontSize="14px"
              fontWeight="500"
              textAlign={"center"}
              width="150px"
            >
              Gibson SG Standard Electric Guitar Ebony
            </Typography>
          </Box>
          <img
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            src="products/electric-guitars/Gibson SG Standard Electric Guitar Ebony.png"
          ></img>
        </Box>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            paddingInline: "1.5rem",
          }}
        >
          <Button
            sx={{
              fontSize: "16px",
              display: "flex",
              flexDirection: "column",
              paddingInline: "2rem",
              color: palette.primary.contrastText,
              borderWidth: "1px",
              borderColor: palette.primary.main,
              // borderRadius: "50px",
              "&:hover": {
                borderWidth: "1px",
              },
            }}
            variant="outlined"
          >
            Compare{" "}
            <CompareArrowsIcon
              sx={{
                // marginBottom: "1rem",
                // margin: "0",
                fontSize: "30px",
                fill: palette.primary.contrastText,
              }}
            />
          </Button>
        </Stack>
        <Box
          sx={{
            height: "100%",
            maxHeight: "100%",
            display: "flex",
            position: "relative",
          }}
        >
          <Tooltip title={"Collapse"}>
            <IconButton
              sx={{
                position: "absolute",
                top: "-10px",
                right: "0",
                paddingLeft: "0",
              }}
            >
              <RemoveCircleOutlineIcon
                sx={{ fill: palette.complementary.alert }}
                fontSize="medium"
              />
            </IconButton>
          </Tooltip>
          <img
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            src="products/electric-guitars/Ibanez GRGR120EX.png"
          ></img>
          <Box>
            <Typography
              sx={{ marginTop: "2rem" }}
              color={palette.secondary.contrastText}
              fontFamily={typography.h1.fontFamily}
              fontSize="14px"
              fontWeight="500"
              textAlign={"center"}
              width="150px"
            >
              Ibanez RG350DXZ
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default ComparisonWindow;
