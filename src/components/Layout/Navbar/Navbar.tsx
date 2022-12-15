import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import NavbarLogo from "./NavbarLogo";
import Cart from "./Cart";

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
            <NavbarLogo />
            <SearchBar />
          </Box>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
