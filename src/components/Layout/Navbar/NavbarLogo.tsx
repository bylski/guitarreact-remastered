import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SvgIcon } from "@mui/material";

const NavbarLogo: React.FC = (props) => {
  const { palette } = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ flexGrow: 1, maxWidth: "fit-content" }}
        color={palette.primary.contrastText}
        variant="h1"
        fontSize="30px"
        fontWeight="600"
        component="div"
      >
        Guitar
        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.primary.main}
          variant="h1"
          fontSize="30px"
          fontWeight="600"
          component="div"
          display={"inline"}
          //   component={"span"}
        >
          React
        </Typography>
      </Typography>
      <SvgIcon
        sx={{
          fontSize: "35px",
          width: "fit-content",
          fill: palette.primary.main,
          marginLeft: "2px",
          position: "relative",
          top: "7px",
        }}
      >
        <svg viewBox="-2 2 20 16">
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
          <path d="M12 3v10h-1V3h1z" />
          <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
          <path d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </SvgIcon>
    </Box>
  );
};

export default NavbarLogo;
