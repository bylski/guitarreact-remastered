import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "./SearchBar";
import NavbarLogo from "./NavbarLogo";
import Cart from "./Cart";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material/styles";
import NavLinks from "./NavLinks";

const Navbar: React.FC = (props) => {
  const { palette } = useTheme();
  const trigger = useScrollTrigger({threshold: 400});
  return (
    <Box sx={{ flexGrow: 1}}>
      <Slide direction="down" in={!trigger} mountOnEnter unmountOnExit>
        <AppBar position="fixed" color={"secondary"}>
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
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <NavbarLogo />
              <SearchBar />
              <NavLinks/>
            </Box>
            <Cart />
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  );
};

export default Navbar;
