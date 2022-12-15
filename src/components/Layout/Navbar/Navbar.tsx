import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SvgIcon } from "@mui/material";

const Navbar: React.FC = (props) => {
  const theme = useTheme();
  const { palette } = theme;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <Toolbar variant={"regular"} sx={{ justifyContent: "space-between" }}>
          {/* <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton> */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                color={palette.primary.contrastText}
                variant="h1"
                fontSize="30px"
                fontWeight="600"
                component="div"
                sx={{ flexGrow: 1, maxWidth: "fit-content" }}
              >
                Guitar
                <Typography
                  color={palette.primary.main}
                  variant="h1"
                  fontSize="30px"
                  fontWeight="600"
                  component="div"
                  sx={{ flexGrow: 1 }}
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
                <svg viewBox="-2 2 20 16" >
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path d="M12 3v10h-1V3h1z" />
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </SvgIcon>
            </Box>
            <SearchBar />
          </Box>
          <IconButton
            sx={[
              {
                height: "100%",
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: palette.primary.dark,
                paddingInline: "1.5rem",
                borderRadius: "0",
              },
              {
                "&:hover": {
                  backgroundColor: palette.primary.main,
                },
              },
              {
                "&:hover svg": {
                  transform: "rotate(-30deg)",
                },
              },
            ]}
            color="primary"
          >
            <Typography
              color={palette.primary.contrastText}
              variant="h1"
              fontSize="20px"
              fontWeight="600"
              marginRight="0.5rem"
              sx={{ flexGrow: 1 }}
            >
              Cart{" "}
            </Typography>
            <ShoppingCartIcon
              // fontSize={"medium"}
              sx={{
                fontSize: "22px",
                fill: palette.primary.contrastText,
                transition: "0.2s ease-in-out",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
